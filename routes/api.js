const axios = require("axios");
const express = require("express");
const vision = require("@google-cloud/vision");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  )
    cb(null, true);
  else cb(null, false);
};

const upload = multer({ storage });

router.post("/", upload.single("Image"), async (req, res) => {
  const file = req.file;
  try {
    const client = new vision.ImageAnnotatorClient({
      keyFilename: "./APIKey.json",
    });
    const [result] = await client.textDetection(file.path);
    const annonations = result.textAnnotations;
    res.status(200).json({ code: annonations[0].description });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error!" });
  }
});

router.post("/output", async (req, res, next) => {
  const { code, language } = req.body;
  //We can input language and code from frontend
  const x = await axios.post("https://api.jdoodle.com/v1/execute", {
    clientId: "ab42481cb8b420578f54ce9c4f7e87ab",
    clientSecret:
      "80d1afaa4977ef4cee4d8de40b83294a851b51f0250ad15dd8f555ff4d86e1f8",
    script: String(code),
    versionIndex: "0",
    language,
  });
  res.status(200).json({
    output: x.data.output,
    memory: x.data.memory,
    cputime: x.data.cpuTime,
  });
});

module.exports = router;
