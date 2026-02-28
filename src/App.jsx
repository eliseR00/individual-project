import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NameForm from './pages/NameForm.jsx'
import GeneratedPage from './pages/GeneratedPage.jsx'
import './App.css'


function App() {
  return (
    <BrowserRouter basename="/individual-project">
      <Routes>
        <Route path="/" element={<NameForm />} />
        <Route path="/generated" element={<GeneratedPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
