import React, { useEffect, useState } from 'react'

export default function Home(){
  const [advice, setAdvice] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
      .catch(() => setAdvice(null))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Welcome</h2>
      <div className="p-4 rounded bg-white dark:bg-gray-800 border dark:border-gray-700">
        <h3 className="text-lg font-medium">Daily Advice</h3>
        {loading ? (
          <p className="text-sm text-gray-600 dark:text-gray-300">Loading advice...</p>
        ) : advice ? (
          <blockquote className="mt-2 italic text-gray-700 dark:text-gray-200">“{advice.advice}”</blockquote>
        ) : (
          <p className="text-sm text-red-500">Could not load advice.</p>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">Navigate to Tasks to view and explore sample tasks fetched from an external API.</p>
    </section>
  )
}
