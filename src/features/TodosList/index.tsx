import React from 'react'

import { useGetTodosListQuery } from '@/services/todos'

import Spinner from '../../components/Spinner'

const TodosList: React.FC = () => {
  const { data, error, isLoading } = useGetTodosListQuery()

  if (error)
    return (
      <main className="">
        <p className="">{JSON.stringify(error)}</p>
      </main>
    )

  return (
    <main className="flex h-screen flex-col items-center gap-10 bg-sky-900">
      <header className="h-5 text-gray-50">
        <h1 className="font-sans text-5xl">Todos List</h1>
      </header>
      {isLoading && <Spinner size="xl" />}
      <section className="">
        <ul>
          {data &&
            data.map((todo) => (
              <li key={todo.name}>
                {todo.name}: <input type="checkbox" checked={todo.complete} />
              </li>
            ))}
        </ul>
      </section>
    </main>
  )
}

export default TodosList
