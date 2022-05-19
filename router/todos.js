const router = require('express').Router()

const todosDB = [
    {
        id: 1,
        title: "Primer todo",
        description: "ndslkfjanskdbf",
        isCompleted: false
    }
]

router.get('/',(req, res) => {
    res.json(todosDB)
})

router.get('/:id',(req, res) => {

    const id = Number(req.params.id)

    const data = todosDB.filter(item => item.id === id )

    if(data.length){
        res.json(data)
    } else {
        res.status(418).json({
            message: "Try with another id, this todo is undefined"
        })
    }

})

router.post('/',(req, res) => {

    const data = req.body

    const newObj = {
        id: todosDB[todosDB.length - 1].id + 1,
        title: data.title,
        description: data.description,
        isCompleted: false
    }

    todosDB.push(newObj)

    res.status(201).json(todosDB)
})

router.delete('/:id',(req, res) => {
    res.send('<h1>Eliminiando un todo</h1>')
})

router.put('/:id',(req, res) => {
    res.send('<h1>Editando un todo</h1>')
})


exports.router = router
