import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function TaskDetail(){
  const { id } = useParams()
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.json()
      })
      .then(data => setTask(data))
      .catch(() => setTask(null))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Task Detail</h2>
        <Link to="/tasks" className="text-blue-600">Back to Tasks</Link>
      </div>

      {loading ? (
        <p className="text-sm text-gray-600 dark:text-gray-300">Loading task...</p>
      ) : task ? (
        <div className="p-4 rounded bg-white dark:bg-gray-800 border dark:border-gray-700">
          <h3 className="text-lg font-medium mb-2">{task.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">ID: {task.id}</p>
          <p className="text-sm mt-2">Status: <strong>{task.completed ? 'Completed' : 'Pending'}</strong></p>
          <p className="text-sm mt-4 text-gray-600">User ID: {task.userId}</p>
        </div>
      ) : (
        <p className="text-sm text-red-500">Task not found.</p>
      )}
    </section>
  )
}
