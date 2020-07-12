import React from 'react'
// import { Link } from 'react-router-dom'

export default function Timetable(props) {
    return (
        <div className='detail'>
            <table className='schedule'>
                <tbody>
                    {props.schedules.map(schedule => (
                        <tr key={Math.random()}>
                            <th>{schedule.time}</th>
                            <td>{schedule.event}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="map">
                <iframe
                    src={props.map}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="fullscreen"
                    aria-hidden="false"
                    tabIndex="0">
                </iframe>
            </div>
        </div>
    )
}