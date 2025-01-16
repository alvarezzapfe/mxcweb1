import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = express();
const PORT = process.env.PORT || 5002; // Usa el puerto de .env o el predeterminado 5002

// Verifica la configuración de SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.error("ERROR: La clave API de SendGrid no está configurada.");
  process.exit(1); // Termina el proceso si falta la clave
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middlewares
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://mxcweb1.vercel.app", // URL de tu frontend en producción
    methods: ["GET", "POST"], // Métodos permitidos
    allowedHeaders: ["Content-Type"], // Headers permitidos
  })
);

// Ruta para manejar el envío del formulario
app.post("/send-email", async (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, empresa, rfc, busco } =
    req.body;

  // Verifica que todos los campos estén presentes
  if (
    !nombre ||
    !apellidoPaterno ||
    !apellidoMaterno ||
    !empresa ||
    !rfc ||
    !busco
  ) {
    console.error("Faltan datos requeridos:", req.body);
    return res.status(400).send("Por favor, completa todos los campos.");
  }

  // Configuración del correo
  const msg = {
    to: process.env.RECIPIENT_EMAIL || "luis@crowdlink.mx", // Destinatario
    from: process.env.SENDER_EMAIL || "lalvarezzapfe@gmail.com", // Correo verificado
    subject: "Nueva Solicitud de Contacto",
    text: `
      Se ha recibido una nueva solicitud de contacto:

      Nombre: ${nombre}
      Apellido Paterno: ${apellidoPaterno}
      Apellido Materno: ${apellidoMaterno}
      Empresa: ${empresa}
      RFC: ${rfc}
      Busco: ${busco}
    `,
  };

  try {
    console.log("Enviando correo con datos:", msg);
    await sgMail.send(msg);
    res.status(200).send("Correo enviado correctamente.");
  } catch (error) {
    console.error(
      "Error al enviar correo:",
      error.response?.body || error.message
    );
    res.status(500).send("Hubo un error al enviar el correo.");
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
