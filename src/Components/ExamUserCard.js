import React from 'react'
import { Link } from 'react-router-dom'

export default function ExamUserCard({ examID, data }) {
    return (
        <Link to={`/${examID}/${data.id}`} className="exam-user-card">
            <img src={data.imgURL} alt="" />
            <div className="paperInfo">
                <span>{data.name}</span>
                <span>{ data.marks }/100</span>
            </div>
        </Link>
    )
}
