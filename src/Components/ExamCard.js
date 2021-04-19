import React from 'react'
import { Link } from 'react-router-dom';

export default function ExamCard({ examDetails }) {
    const { ename, edate, id, emode } = examDetails;
    return (
        <Link to={`/${id}`} className="examCard">
            <div className="date">
                <span>{edate.split(" ")[0]}</span>
                <span>{ edate.split(" ")[1] }</span>
            </div>
            <div className="info">
                <h3>{ename}</h3>
                <p>{emode}</p>
            </div>
        </Link>
    )
}
