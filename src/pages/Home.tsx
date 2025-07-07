import React, { useState } from 'react'
import TodoItem from '../components/TodoItem'
import { dummyTodos, Todo } from '../utils/dummyTodo'

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(dummyTodos)

  const handleToggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div>
      {todos.length === 0 ? (
        <p>Yay! Semua to-do selesai 🎉</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={handleToggleTodo} />
        ))
      )}
    </div>
  )
}

export default Home
