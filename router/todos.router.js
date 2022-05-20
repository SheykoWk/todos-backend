const router = require('express').Router()
const todosController = require('../controllers/todos.controllers')


router.get('/',(req, res) => {
    res.json(todosController.getAllTodos())
})

router.get('/:id',(req, res) => {
    const id = Number(req.params.id)
    const data = todosController.getTodoById(id)
    if(data.id){
        res.json(data)
    } else {
        res.status(400).json({
            message: "Try with another id, this todo is undefined"
        })
    }
})

router.post('/',(req, res) => {
    const data = req.body
    const response = todosController.createTodo(data)
    res.status(201).json(response)
})

router.delete('/:id',(req, res) => {

    const id = Number(req.params.id)

    todosController.deleteTodo(id)

    res.status(204).json({message: `Todo with the id ${id} deleted succesfully`})

})

router.put('/:id',(req, res) => {
    res.send('<h1>Editando un todo</h1>')
})


exports.router = router
