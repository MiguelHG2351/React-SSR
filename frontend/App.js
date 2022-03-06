import React from 'react'
import './style.scss'

import Section from './Section'

export default function App() {
  return (
    <html>
      <head>
        <title>Server Rendered App</title>
      </head>
      <header className='header'>
        <div className="header-content">
          <h1>Hello, world custom sus!</h1>
        </div>
        <Section />
      </header>
    </html>
  )
}
