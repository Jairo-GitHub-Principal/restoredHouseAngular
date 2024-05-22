const express = require('express'); //Framework para construir a aplicação web.
const cors = require('cors'); // Importe o módulo cors Middleware para permitir requisições de diferentes origens. O CORS (Cross-origin Resource Sharing) é um mecanismo usado para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente.
const bcrypt = require('bcryptjs'); // Biblioteca para hashing de senhas.
const jwt = require('jsonwebtoken'); // Biblioteca para gerar tokens JWT.
const connection = require('./database'); //Configuração da conexão com o banco de dados MySQL.
const app = express();
const port = 3000;

const SECRET_KEY = '1234'; // Coloque uma chave secreta segura aqui


// configuração  do cabeçalho "Permissions-Polyce"
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'accelerometer=(), camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), payment=(), usb=()');
  next();
});




app.use(cors());
app.use(express.json());


// Middleware para verificar o token JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ message: 'Acesso negado!' });
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({ message: 'Token inválido!' });
  }
};


// Rota para registrar um novo usuário
//*****************************************************************************************************
app.post('/register', async (req, res) => {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const hashedPassword = await bcrypt.hash(senha, 10);

  const sqlInsert = 'INSERT INTO `user` (nome, senha) VALUES (?, ?)';
  connection.query(sqlInsert, [nome, hashedPassword], (error, result) => {
    if (error) {
      console.error('Erro ao registrar usuário:', error);
      return res.status(500).json({ message: 'Erro ao registrar usuário.' });
    }
    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  });
});
//***************************************************************************************************** */
// Rota para login de usuário
app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const sqlSelect = 'SELECT * FROM `user` WHERE nome = ?';
  connection.query(sqlSelect, [nome], async (error, results) => {
    if (error) {
      console.error('Erro ao buscar usuário:', error);
      return res.status(500).json({ message: 'Erro ao buscar usuário.' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Usuário não encontrado.' });
    }

    const user = results[0];
    const validPassword = await bcrypt.compare(senha, user.senha);

    if (!validPassword) {
      return res.status(400).json({ message: 'Senha incorreta.' });
    }

    const token = jwt.sign({ id: user.id, nome: user.nome }, SECRET_KEY, { expiresIn: '1h' });
    console.log("retorno do login com o token vindo pelo servidor",token);
    res.json({ token });
  });
});





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
