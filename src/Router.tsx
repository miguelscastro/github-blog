import { Route, Routes } from 'react-router-dom'
import { Profile } from './pages/Profile'
import { Issue } from './pages/Issue'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="issues/:id" element={<Issue />} />
    </Routes>
  )
}
