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
            <iframe
                src={props.map}
                width="50%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0">
            </iframe>
        </div>
    )
}