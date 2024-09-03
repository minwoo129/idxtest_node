import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/test', (req, res) => {
  console.log('테스트')
  res.status(200).json({
    message: "send test"
  })
})