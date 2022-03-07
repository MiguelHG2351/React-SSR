import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLeft() {
    return (
      <div className="header">
        <p>header izquierdo si</p>
        <p>sus</p>
        <Link to='/xd'>
          a XD
        </Link>
      </div>
    )
  }