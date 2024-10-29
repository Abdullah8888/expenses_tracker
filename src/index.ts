import express, { Request, Response } from "express";
const app = express();

app.listen("3002", (): void => {
    console.log('Server running');
});

app.get("/", (req: Request, res: Response): void => {
    const greetings = "Asalam alaykum"
    res.json({ "message": greetings })
});