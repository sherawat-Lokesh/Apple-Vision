import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Suspense fallback={<div>Loading...</div>}>
        <Spline style={{ height: '100vh' }} className='w-screen' scene="https://prod.spline.design/Ic7C21XebvCNdNjo/scene.splinecode" />
      </Suspense>
  </StrictMode>,
)
