import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = [];
let todosWork = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index.ejs", { todos: todos });
});

app.get('/today', (req, res) => {
    res.redirect('/');
});


app.post('/', (req, res) => {
    const newTodoTask = req.body.newTodo;
    const newTodoId = todos.length + 1; 
    const newTodo = { id: newTodoId, task: newTodoTask };
    
    todos.push(newTodo);
    res.redirect('/');
});

app.get('/work', (req, res) => {
    res.render("index2.ejs", { todosWork: todosWork });
});

app.post('/work', (req, res) => {
    const newTodoTaskWork = req.body.newTodoWork;
    const newTodoIdWork = todosWork.length + 1; 
    const newTodoWork = { id: newTodoIdWork, task: newTodoTaskWork };
    
    todosWork.push(newTodoWork);
    res.redirect('/work');
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
