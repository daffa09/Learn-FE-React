export interface Todo {
  id: number
  text: string
  completed: boolean
}

export const dummyTodos: Todo[] = [
  { id: 1, text: 'Belajar JSX', completed: false },
  { id: 2, text: 'Pahami useState', completed: true },
  { id: 3, text: 'Buat komponen reusable', completed: false },
]
