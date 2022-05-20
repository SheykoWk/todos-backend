const todosDB = [
    {
        id: 1,
        title: "Primer todo",
        description: "ndslkfjanskdbf",
        isCompleted: false
    }
]

const getAllTodos = () => {
    return todosDB
}

const getTodoById = (id) => {

    const data = todosDB.filter(item => item.id === id )
    return data[0]

}

const createTodo = (data) => {
    const newObj = {
        id: todosDB[todosDB.length - 1].id + 1,
        title: data.title,
        description: data.description,
        isCompleted: false
    }

    todosDB.push(newObj)

    return todosDB
}

exports.getAllTodos = getAllTodos
exports.getTodoById = getTodoById
exports.createTodo = createTodo