import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.json('Rota configurada corretamente!');
});

export default routes;