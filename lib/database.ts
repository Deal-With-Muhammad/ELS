// Simple in-memory storage for demo - replace with your actual database
const donations: Array<{
    id: string
    amount: number
    allocation: string
    donor_name: string
    donor_email: string
    stripe_session_id: string
    created_at: string
  }> = []
  
  const projects = [
    { id: "chairs", name: "Arm Rest Chairs for All Campuses", raised: 0, goal: 40000 },
    { id: "partitions", name: "Partitions for Two Campuses", raised: 0, goal: 20000 },
    { id: "books", name: "Textbooks Printing for AY 2025", raised: 0, goal: 40000 },
    { id: "aircon", name: "Air Conditioning for 2 Campuses", raised: 0, goal: 10000 },
    { id: "general", name: "Where Most Needed", raised: 0, goal: 50000 },
    { id: "sponsor", name: "Student Sponsorship", raised: 0, goal: 30000 },
  ]
  
  export function addDonation(donation: {
    amount: number
    allocation: string
    donor_name: string
    donor_email: string
    stripe_session_id: string
  }) {
    const newDonation = {
      id: Math.random().toString(36).substr(2, 9),
      ...donation,
      created_at: new Date().toISOString(),
    }
  
    donations.push(newDonation)
  
    // Update project raised amount
    const project = projects.find((p) => p.id === donation.allocation)
    if (project) {
      project.raised += donation.amount
    } else {
      // If allocation doesn't match, add to general fund
      const generalProject = projects.find((p) => p.id === "general")
      if (generalProject) {
        generalProject.raised += donation.amount
      }
    }
  
    return newDonation
  }
  
  export function getProjects() {
    return projects
  }
  
  export function getDonations() {
    return donations
  }
  
  export function getProjectByAllocation(allocation: string) {
    return projects.find((p) => p.id === allocation)
  }
  