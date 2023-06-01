const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const PDF_FOLDER = path.join(__dirname, 'pdfs');
const PORT = process.env.PORT || 3000;

app.use(cors()); // Configuração do CORS

app.get('/pdfs/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(PDF_FOLDER, filename);

  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
