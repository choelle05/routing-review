import React from 'react';
import { Link } from 'react-router-dom'



export default function (props) {
    return (
        <div>
            Hello
            <div>
                <Link to='/schedule/teama'>Team A</Link>
                <Link to='/schedule/teamb'>Team B</Link>
            </div>
            {props.children}
        </div>
    )
}