import express from 'express';
import 'source-map-support/register';
import cors from 'cors'
import router from './routes';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port);