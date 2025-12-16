const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const router = express.Router();

// Configuration multer pour l'upload de fichiers
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1024 * 1024 // 3 Mo max
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Type de fichier non autorisé. Seuls PDF, DOC et DOCX sont acceptés.'));
    }
  }
});

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Remplacez par votre serveur SMTP
  port: 587,
  secure: false,
  auth: {
    user: 'votre-email@example.com', // Remplacez par votre email
    pass: 'votre-mot-de-passe' // Remplacez par votre mot de passe
  }
});

// Route POST pour candidature spontanée
router.post('/candidature-spontanee', upload.single('cv'), async (req, res) => {
  try {
    const {
      civilite,
      nom,
      prenom,
      email,
      telephone,
      wilaya,
      metier,
      motivation
    } = req.body;

    const cv = req.file;

    // Validation des données
    if (!civilite || !nom || !prenom || !email || !telephone || 
        !wilaya || !metier || !motivation || !cv) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs sont obligatoires'
      });
    }

    // Préparation de l'email
    const mailOptions = {
      from: 'noreply@sntp.dz',
      to: 'contact@sntp.dz',
      subject: `Candidature Spontanée - ${prenom} ${nom}`,
      html: `
        <h2>Nouvelle candidature spontanée reçue</h2>
        <hr>
        <h3>Informations du candidat</h3>
        <ul>
          <li><strong>Civilité:</strong> ${civilite}</li>
          <li><strong>Nom:</strong> ${nom}</li>
          <li><strong>Prénom:</strong> ${prenom}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Téléphone:</strong> ${telephone}</li>
          <li><strong>Wilaya:</strong> ${wilaya}</li>
          <li><strong>Métier:</strong> ${metier}</li>
        </ul>
        <h3>Motivation</h3>
        <p>${motivation.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>CV en pièce jointe</em></p>
      `,
      attachments: [
        {
          filename: cv.originalname,
          content: cv.buffer,
          contentType: cv.mimetype
        }
      ]
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Enregistrement en base de données (optionnel)
    // await saveCandidatureToDatabase(req.body, cv);

    res.status(200).json({
      success: true,
      message: 'Candidature envoyée avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la candidature:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi de la candidature'
    });
  }
});

module.exports = router;
