import React, { useContext } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { USER } from '../App'
import { DB } from '../Firebase'

export default function AddNewJSON() {
    const user = useContext(USER)
    const his = useHistory();
    const { examID } = useParams();

    if (!user) return <Redirect to="/" />

    function handleSubmit(e) {
        e.preventDefault();

        const writeData = {
            uimgURL: user.photoURL,
            uname: user.displayName,
            marks: e.target.marks.value,
            jsonData: e.target.jsondata.value
        }
        DB.collection('exams').doc(examID).collection('papers').add(writeData);
        his.push(`/${examID}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Enter Your JSON DATA :
                <textarea name="jsondata" placeholder={`questiongiven: <Contains the Question from NETWORKS LOG>\nmyanswers: <Contains Your local storage answers>\nNOTE: Iam not responsible for your DUMB form filling
                `} required></textarea>
            </label>
            <br />
            <label htmlFor="">
                Enter your gained Marks :
                 <input type="text" name="marks" required />
            </label>
            <button type="submit">SAVE</button>
        </form>
    )
}
