import fs from 'fs'
import path from 'path'

export default async function getProjectById(id) {
  const filePath = path.join(process.cwd(), `data/projects/${id}.json`)
  const content = fs.readFileSync(filePath, 'utf8')
  const projectJson = JSON.parse(content)
  return projectJson
}
