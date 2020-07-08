import React from 'react'
// import { Link } from 'react-router-dom'

export default function Timetable(props) {
    return (
        <div>
            <table>
                <tbody>
                    {props.schedules.map(schedule => (
                        <tr key={Math.random()}>
                            <th>{schedule.time}</th>
                            <td>{schedule.event}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}