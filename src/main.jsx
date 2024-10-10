import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Spline from '@splinetool/react-spline';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Spline style={{ height: '100vh' }} className='w-screen' scene="https://prod.spline.design/Ic7C21XebvCNdNjo/scene.splinecode" />
  </StrictMode>,
)
