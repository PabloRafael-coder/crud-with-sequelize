import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Rota configurada corretamente!')
})

export default routes;