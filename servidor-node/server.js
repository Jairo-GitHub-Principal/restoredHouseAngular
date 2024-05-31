const express = require('express'); //Framework para construir a aplicação web.
const cors = require('cors'); // Importe o módulo cors Middleware para permitir requisições de diferentes origens. O CORS (Cross-origin Resource Sharing) é um mecanismo usado para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente.
const bcrypt = require('bcryptjs'); // Biblioteca para hashing de senhas.
const jwt = require('jsonwebtoken'); // Biblioteca para gerar tokens JWT.
const path = require('path'); // Módulo para lidar com caminhos de arquivos e diretórios.
//const connection = require('./database'); //Configuração da conexão com o banco de dados MySQL.
const https = require('https');
const app = express();
const port =3000;

const { connectToDatabase, disconnectFromDatabase } = require('./database'); // importa a conexão e desconexão com o DB


const SECRET_KEY = '1234'; // Coloque uma chave secreta segura aqui

//criar instanciar da conexão e desconexão com o DB 

// para encerrar a conexão é so chamar o metodo  disconnectFromDatabase(); e passar a instancia da conexão como parametro pra ele, que o mesmo encerrara a conexão


// configuração  do cabeçalho "Permissions-Polyce"
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'accelerometer=(), camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), payment=(), usb=()');
  next();
});

 // configure CORS
//  const corsOptions = {
//    origin: ['https://jairocesar.pessoal.ws/'],
//   optionsSuccessStatus: 200
//  };

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

  const dbconnection = connectToDatabase();
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const hashedPassword = await bcrypt.hash(senha, 10);

  const sqlInsert = 'INSERT INTO `user` (nome, senha) VALUES (?, ?)';
  dbconnection.query(sqlInsert, [nome, hashedPassword], (error, result) => {
    if (error) {
      console.error('Erro ao registrar usuário:', error);
      return res.status(500).json({ message: 'Erro ao registrar usuário.' });
    }else{
      res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    }
    disconnectFromDatabase(dbconnection);
  });
});
//***************************************************************************************************** */
// Rota para login de usuário
app.post('/login', (req, res) => {

  const dbconnection = connectToDatabase();
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const sqlSelect = 'SELECT * FROM `user` WHERE nome = ?';
  dbconnection.query(sqlSelect, [nome], async (error, results) => {
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

  disconnectFromDatabase(dbconnection);
});





// Rota para inserir novo feedback
app.post('/feedback', (req, res) => {
  console.log("informações de cadastro chegando no servidor com sucesso");
  const dbconnection = connectToDatabase();

  const { titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo } = req.body;

  if (!titulo || !textodocard || !imagemcard || !titulomodal || !textcardmodal || !imagemcardmodalurl || !urlvideo) {
    res.status(400).json({ error: 'Todos os campos devem ser fornecidos.' });
    return;
  }

  const sql = 'INSERT INTO feedback (titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo) VALUES (?, ?, ?, ?, ?, ?, ?)';
  dbconnection.query(sql, [titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo], (err, results) => {
    if (err) {
      console.error('Erro ao inserir feedback:', err);
      res.status(500).json({ error: 'Erro ao inserir feedback.' });
      return;
    }else{
    res.status(201).json({ message: 'Feedback inserido com sucesso!' });
    }
    disconnectFromDatabase(dbconnection);
  });

      
});




  // Rota para obter todos os feedbacks
    app.get('/feedback', (req, res) => {
      const dbconnection = connectToDatabase(); // abre a conexão com o DB
    const sql = 'SELECT * FROM `feedback`';
   
    dbconnection.query(sql, (err, results) => {
      console.log(sql);
      if (err) {
        console.error('Erro ao recuperar feedback:', err);
        res.status(500).json({ error: 'Erro ao recuperar feedback.' });
        return;
      }else{
        console.log("requisição Get feedback entregue ao destino");
      }

     
      res.status(200).json(results);
      disconnectFromDatabase(dbconnection); // fecha a conexão com o dB
    });
    
  });


 // Rota para deletar um feedback
app.delete('/feedback/:id', (req, res) => {
  const dbconnection = connectToDatabase();
  const feedbackId = req.params.id;

  const sql = 'DELETE FROM `feedback` WHERE id = ?';
  dbconnection.query(sql, [feedbackId], (err, results) => {
    if (err) {
      console.error('Erro ao excluir feedback:', err);
      res.status(500).json({ error: 'Erro ao excluir feedback.' });
      return;
    }else{
    res.status(200).json({ message: 'Feedback excluído com sucesso!' });
    }
    disconnectFromDatabase(dbconnection);
  });
});

  


// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Servidor Node.js rodando com sucesso! no localhost por ip');
});


// Middleware para servir arquivos estáticos da aplicação Angular
app.use(express.static(path.join(__dirname,'angular')));

// Rota padrão que redireciona para o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'angular', 'index.html'));
});


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http:localhost:${port}`);
});
