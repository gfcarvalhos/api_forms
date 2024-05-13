import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rotas
app.get('/', (req, res) => {
  res.sendFile('formulario.html', { root: 'src/views' });
});

app.post('/receber', (req, res) => {
  res.write('O nome digitado foi: ' + req.body.nome);
  res.end();
});

//Servidor
app.listen(8080, () => {
  console.log('server started');
});
