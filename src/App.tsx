import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'
import { News } from './pages/News'
import { VisionMission } from './pages/VisionMission'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vizyon-misyon" element={<VisionMission />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/haberler" element={<News />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
