import User from "../models/User";
import { v4 } from 'uuid';

class UserController {

    async index(req, res) {

        const users = await User.findAll()

        return res.status(200).json(users)
    }

    async store(req, res) {

        const { name, age, email, skill } = req.body

        try {
            await User.create({
                id: v4(), name, age, email, skill
            })
        } catch (error) {
            return res.status(404).json({ message: `Erro ao criar o usuário ${error}` })
        }

        return res.status(201).json({ message: 'User created successfully' })
    }

    async update(req, res) {

        const { id } = req.params

        const { name, age, email, skill } = req.body

        const userUpdated = await User.update({
            name, age, email, skill
        },
            {
                where: {
                    id: id
                }
            }
        )

        return res.status(200).json(userUpdated)
    }

    async delete(req, res) {
        const { id } = req.params

        await User.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).json({ message: 'User deleted successfully' })
    }

}

export default new UserController();