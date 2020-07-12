import React from 'react'
import { Timetable } from './index'
// import { Link } from 'react-router-dom'

export default function Date(props) {
    return (
        <section className="contents">
            <h2 className="contents-title">{props.date}</h2>
            <h3 className="lodging">ホテル:
            <a rel="noopener noreferrer" target="_blank" href={props.lodgingUrl} >{props.lodgingName} </a>
            </h3>
            {/* <h3 className="spots">観光地を入力:{props.spots}</h3> */}
            <h3>タイムスケジュール<Timetable map={props.map} schedules={props.schedules} /></h3>
        </section >
    )
}