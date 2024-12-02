const express = require('express'); 
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));




app.get('/', (req, res) => {
  res.render('home'); 
});

app.get('/alguma', (req, res) => {
    res.render('alguma'); 
  });

  app.get('/teladecadastro', (req, res) => {
    res.render('teladecadastro'); 
  });

  app.get('/forms', (req, res) => {
    res.render('forms');
  });

  app.get('/chefia', (req, res) => {
    res.render('chefia'); 
  });

  app.get('/plus', (req, res) => {
    res.render('plus'); 
  });

  app.get('/login', (req, res) => {
    res.render('login'); 
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


