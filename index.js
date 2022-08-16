const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db', //nome do serviço
    user: 'root',
    password: 'root',
    database: 'mydb'
});

connection.connect();

app.get('/', (req, res) => {
    res.send('Hello World com Node.jsaaaaa!');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta 3000');
})