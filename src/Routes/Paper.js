import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DB } from '../Firebase'
import QuestionCard from '../Components/QuestionCard'
import Loader from '../Components/Loader'

export default function Paper() {
    const { examID, userPaperID } = useParams()
    const [data, setdata] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        DB.collection('exams').doc(examID).collection('papers').doc(userPaperID).get().then(doc => {
            setdata(JSON.parse(doc.data().jsonData));
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])

    function getListData() {
        try {
            const items = data.questiongiven.map((ele, index) => <QuestionCard key={index} i={index + 1} ques={ele} ans={data.myanswers[index].answer} />)
            return items
        } catch (error) {
            return <h1>ERROR</h1>
        }
    }


    if (loading) return <Loader />

    return (
        <>
            <h3>Questions</h3>
            {getListData()}
        </>
    )
}