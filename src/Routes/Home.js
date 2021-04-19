import React, { useEffect, useState } from 'react'
import { DB } from '../Firebase'
import ExamCard from '../Components/ExamCard'
import Loader from '../Components/Loader'

export default function Home() {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);

    // ! Retrive Data from Firebase on Mount
    useEffect(() => {
        DB.collection("exams").get().then(snap => {
            snap.forEach(doc => {
                const gotdata = {
                    id: doc.id,
                    ename: doc.data().ename,
                    edate: doc.data().edate,
                    emode: doc.data().emode
                }
                setExams(pre => [gotdata, ...pre])
            })
            setLoading(false)
        })
        return () => {
            // TODO: Unsubscribe from data Base
        }
    }, [])

    if (loading) return <Loader />

    return (
        <div>
            { exams.map(ele => <ExamCard key={ele.id} examDetails={ele} />)}
        </div>
    )
}
