import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
    console.error('Root element not found!')
} else {
    try {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        )
    } catch (error) {
        console.error('React render error:', error)
        rootElement.innerHTML = `<div style="color: red; padding: 20px; font-family: monospace;"><h2>Error loading portfolio:</h2><pre>${error.message}</pre></div>`
    }
}
