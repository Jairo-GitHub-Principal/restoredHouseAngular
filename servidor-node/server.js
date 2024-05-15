const express = require('express');
const cors = require('cors'); // Importe o módulo cors
const connection = require('./database');
const app = express();
const port = 3000;

// configuração  do cabeçalho "Permissions-Polyce"
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'accelerometer=(), camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), payment=(), usb=()');
  next();
});


app.use(cors());
app.use(express.json());



// Rota para inserir novo feedback
app.post('/feedback', (req, res) => {
  console.log("informações de cadastro chegando no servidor com sucesso");

  const { titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo } = req.body;

  if (!titulo || !textodocard || !imagemcard || !titulomodal || !textcardmodal || !imagemcardmodalurl || !urlvideo) {
    res.status(400).json({ error: 'Todos os campos devem ser fornecidos.' });
    return;
  }

  const sql = 'INSERT INTO feedback (titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo], (err, results) => {
    if (err) {
      console.error('Erro ao inserir feedback:', err);
      res.status(500).json({ error: 'Erro ao inserir feedback.' });
      return;
    }
    res.status(201).json({ message: 'Feedback inserido com sucesso!' });
  });
});




  // Rota para obter todos os feedbacks
    app.get('/feedback', (req, res) => {
    const sql = 'SELECT * FROM `feedback`';
  
    connection.query(sql, (err, results) => {
      console.log(sql);
      if (err) {
        console.error('Erro ao recuperar feedback:', err);
        res.status(500).json({ error: 'Erro ao recuperar feedback.' });
        return;
      }



      res.status(200).json(results);
    });
  });


 // Rota para deletar um feedback
app.delete('/feedback/:id', (req, res) => {
  const feedbackId = req.params.id;

  const sql = 'DELETE FROM `feedback` WHERE id = ?';
  connection.query(sql, [feedbackId], (err, results) => {
    if (err) {
      console.error('Erro ao excluir feedback:', err);
      res.status(500).json({ error: 'Erro ao excluir feedback.' });
      return;
    }
    res.status(200).json({ message: 'Feedback excluído com sucesso!' });
  });
});

  


// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Servidor Node.js rodando com sucesso!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
