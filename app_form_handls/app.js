import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'principal' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('inicio');
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

app.listen(8080, () => {
  console.log('server started');
});
