import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import MainNav from './components/MainNav.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <div className='blue_bg'>
      <MainNav/>
    </div>
  </>,
)
