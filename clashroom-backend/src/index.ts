import express, { Request, Response } from "express";
import subjectRouter from "./routes/subjects";
import cors from "cors";

const app = express();
const port = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/subjects", subjectRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Halo dari Express dengan TypeScript!" });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
