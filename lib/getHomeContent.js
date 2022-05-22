import fs from 'fs'
import path from 'path'
import getAllProjects from './getAllProjects'

export default async function getHomeContent() {
  const filePath = path.join(process.cwd(), 'data/pages/home.json')
  const content = fs.readFileSync(filePath, 'utf8')

  const projects = await getAllProjects()
  const homeContentJson = JSON.parse(content)
  
  return {
    ...homeContentJson,
    projects
  }
}
