const express = require('express');

const app = express();


app.use(express.json({extended:false}));

app.get('/', (req,res) => {
  res.send('Holiwi bebe')
})

app.get('/test',(req,res) => {
  res.json({
    mensaje : 'Hola guapo',
    mensaje2: 'aver tu senos bebe'
  })
})

app.post('/sumita', (req,res) => {
  const body = req.body;
  console.log(body);
  const {numero1,numero2} = body;
  if(!numero1) {
    return res.status(400).json({error: "numero1 es requerido"});
  }
  if(!numero2) {
    return res.status(400).json({error: "numero2 es requerido"});
  }
  if(typeof numero1 !== 'number') {
    return res.status(400).json({error: "numero1 debe de ser un numero"});
  }
  if(typeof numero2 !== 'number') {
    return res.status(400).json({error: "numero2 debe de ser un numero"});
  }
  const sumita = numero1 + numero2;
  return res.status(200).json({sumita: sumita})
});

app.listen(3000, () => console.log(`app listening at http://localhost:${3000}`));
