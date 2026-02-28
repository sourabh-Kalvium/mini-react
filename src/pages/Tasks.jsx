import React, { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'

export default function Tasks(){
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(() => setTasks([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Tasks</h2>
      {loading ? (
        <p className="text-sm text-gray-600 dark:text-gray-300">Loading tasks...</p>
      ) : (
        <div className="grid gap-4">
          {tasks.map(t => (
            <TaskCard key={t.id} task={t} />
          ))}
        </div>
      )}
    </section>
  )
}
