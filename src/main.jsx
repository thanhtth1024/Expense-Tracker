import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'


// Register service worker in production build
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('/src/service-worker.js')
.then(() => console.log('ServiceWorker registered'))
.catch(err => console.log('ServiceWorker register failed', err))
})
}


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
)