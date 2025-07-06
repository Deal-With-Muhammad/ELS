"use client"

import { useState, useEffect } from "react"

interface Project {
  id: string
  name: string
  raised: number
  goal: number
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects")
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()

    // Poll for updates every 30 seconds
    const interval = setInterval(fetchProjects, 30000)
    return () => clearInterval(interval)
  }, [])

  return {
    projects,
    loading,
    refetch: () => {
      setLoading(true)
      fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data)
          setLoading(false)
        })
    },
  }
}
