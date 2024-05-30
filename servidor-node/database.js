const mysql = require('mysql');

// conexão para uso no local de desenvolvimento
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'',
//   database:'restoredhome'
// });

// conexão para publicação
const connection = mysql.createConnection({
  host: 'restoredhome.mysql.dbaas.com.br',
  user: 'restoredhome',
  password:'Loca102030@#',
  database:'restoredhome',
   connectTimeout: 10000 // Tempo limite para a conexão em milissegundos (opcional)
});

//Manter a conexão viva
function keepAlive() {
  connection.ping((err) => {
    if (err) {
      console.error('Erro ao enviar ping para manter a conexão viva:', err.stack);
    } else {
      console.log('Ping enviado para manter a conexão viva.');
    }
  });
}

// Enviar um ping a cada 15 minutos (900000 milissegundos)
//setInterval(keepAlive, 9000);

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida com o banco de dados MySQL.');
});

module.exports = connection;
