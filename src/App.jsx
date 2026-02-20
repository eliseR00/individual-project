import { useState , useEffect} from 'react'
import './App.css'
import PageContainer from './components/PageContainer.jsx';
import Navbar from './components/Navbar.jsx';
import NameGenerator from './components/NameGenerator.jsx';



function App() {
  const [count, setCount] = useState(0)
  //Here will be the import of names



  return (
    <>
      <PageContainer>
        <Navbar />
        <NameGenerator />
      </PageContainer>
    </>
  )
}

export default App
