import React from 'react'
import { Link } from 'react-router-dom'

export default function Nittei() {
    return (
        <div>
            <h1>Nittei</h1>
            <p><Link to="/nittei">日程</Link></p>
        </div>
    )
}