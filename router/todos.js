const router = require('express').Router()

router.get('/',(req, res) => {
    res.send('<h1>Obteniendo todos los todos</h1>')
})
router.get('/:id',(req, res) => {
    res.send('<h1>Obteniendo un todo en especifico</h1>')
})
router.post('/',(req, res) => {
    res.send('<h1>Creando un todo</h1>')
})
router.delete('/:id',(req, res) => {
    res.send('<h1>Eliminiando un todo</h1>')
})
router.put('/:id',(req, res) => {
    res.send('<h1>Editando un todo</h1>')
})


exports.router = router
