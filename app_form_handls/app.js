import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

const pessoas = [
  { nome: 'Gabriel', idade: 28 },
  { nome: 'Amanda', idade: 32 },
  { nome: 'Otavio', idade: 18 },
];

app.engine('handlebars', exphbs.engine({ defaultLayout: 'principal' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('inicio', { gostandoDeNode: false, dados: pessoas });
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

app.listen(8080, () => {
  console.log('server started');
});
