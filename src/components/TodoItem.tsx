import React from 'react'
import { Todo } from '../utils/dummyTodo'

type Props = {
  todo: Todo
  toggleTodo: (id: number) => void
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? 'gray' : 'black',
      }}
    >
      {todo.text}
    </div>
  )
}

export default TodoItem
