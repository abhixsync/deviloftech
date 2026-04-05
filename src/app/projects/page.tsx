export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { Project } from '@/lib/models/Project'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import type { IProject } from '@/types'

async function getProjects(): Promise<IProject[]> {
  await connectDB()
  const docs = await Project.find({}).sort({ sortOrder: 1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Projects',
  description: 'Open-source projects and production systems built by DevilOfTech.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Projects</div>
          <div className="section-title" style={{ marginBottom: 0 }}>Forged Under Pressure</div>
        </div>
      </div>

      <section>
        <div className="container">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </>
  )
}
