import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { USER } from '../App'
import { DB } from '../Firebase'
import ExamUserCard from '../Components/ExamUserCard'
import Loader from '../Components/Loader'

export default function UserList() {
    const { examID } = useParams();
    const [page, setPage] = useState(null);
    const [userList, setUserlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useContext(USER);

    // ! Retrive data from FireBase on Mount 
    useEffect(() => {
        DB.collection('exams').doc(examID).get().then(doc => {
            setPage(doc.data().ename);
        })


        DB.collection('exams').doc(examID).collection('papers').orderBy('marks', 'asc').get().then(snap => {
            snap.forEach(doc => {
                const gotData = {
                    id: doc.id,
                    imgURL: doc.data().uimgURL,
                    marks: doc.data().marks,
                    name: doc.data().uname
                }
                setUserlist(pre => [gotData, ...pre])
            })
            setLoading(false);
        })

        return () => {
            // TODO: UNSUBSCRIBE FROM DATA FLOW
        }
        // eslint-disable-next-line
    }, [])


    if (loading) return <Loader />

    return (
        <div>
            <h2><center>{page}</center></h2>
            {user && <div id="addNewUSERPAPER" ><Link title="Add your Paper" to={`/${examID}/adduserpaper`}>+</Link></div>}
            <div id="grid2x2">
                {userList.map(ele => <ExamUserCard examID={examID} key={ele.id} data={ele} />)}
            </div>
        </div>
    )
}
