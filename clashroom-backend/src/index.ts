import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Halo dari Express dengan TypeScript!' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
