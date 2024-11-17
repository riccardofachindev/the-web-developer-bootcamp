import { useState } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const removeTodo = (id) => {
        setTodos(oldTodo => oldTodo.filter(todo => todo.id !== id))
    }

    function toggleTodo(id) {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        }))
    }

    const addTodo = (text) => {
        setTodos(prevTodos => [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }])
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center', m: 3 }}>
            <Typography variant='h2' component='h2' sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
                ))}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    )
}