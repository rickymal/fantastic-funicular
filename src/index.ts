import express from 'express';
import 'source-map-support/register';
import cors from 'cors'

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(express.json())
app.use(cors())


app.listen(port);

