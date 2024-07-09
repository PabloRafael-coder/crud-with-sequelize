import { Router } from "express";
import User from "../app/models/User";
import { v4 } from 'uuid'

const routes = Router();

routes.get('/', async (req, res) => {

    const dbuser = await User.findAll({ raw: true })

    return res.status(200).json({ dbuser })
});

routes.post('/', (req, res) => {

    const { name, age, email, skill } = req.body

    const user = User.create({
        id: v4(), name, age, email, skill
    })

    res.status(201).json(user)
})

export default routes;