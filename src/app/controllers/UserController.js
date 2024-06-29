
class UserController {

    index(req, res) {
        res.json({ message: 'Você conseguiu acessar a rota!' })
    }
}

export default new UserController();