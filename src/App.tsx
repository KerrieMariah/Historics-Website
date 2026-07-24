import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Java } from './pages/Java'
import { SoFong } from './pages/SoFong'
import { TaiMoShan } from './pages/TaiMoShan'
import { Typhoon } from './pages/Typhoon'
import { WayFoong } from './pages/WayFoong'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wayfoong" element={<WayFoong />} />
        <Route path="/way-foong" element={<Navigate to="/wayfoong" replace />} />
        <Route path="/sofong" element={<SoFong />} />
        <Route path="/so-fong" element={<Navigate to="/sofong" replace />} />
        <Route path="/java" element={<Java />} />
        <Route path="/tai-mo-shan" element={<TaiMoShan />} />
        <Route path="/taimoshan" element={<Navigate to="/tai-mo-shan" replace />} />
        <Route path="/typhoon" element={<Typhoon />} />
        <Route path="/mairi-bhan" element={<Navigate to="/typhoon" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
