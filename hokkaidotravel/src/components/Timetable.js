import React from 'react'
// import { Link } from 'react-router-dom'

export default function Timetable(props) {
    // const schedules = ([
    //     { time: '16:30', event: 'あずさ' },
    //     { time: '19:10', event: 'ホテル到着' },
    //     { time: '19:30', event: '泥酔' },
    //     { time: '23:00', event: '死亡' }
    // ])

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