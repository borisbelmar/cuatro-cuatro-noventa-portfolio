import fs from 'fs'
import path from 'path'

export default async function getHomeContent() {
  const filePath = path.join(process.cwd(), 'data/pages/about.json')
  const content = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(content)
}
