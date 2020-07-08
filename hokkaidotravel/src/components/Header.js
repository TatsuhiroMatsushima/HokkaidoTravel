import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>header</h1>
            <p><Link to="/">Top</Link></p>
            <p><Link to="/nittei">日程</Link></p>
        </div>
    )
}