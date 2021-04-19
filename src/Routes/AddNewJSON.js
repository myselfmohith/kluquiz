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
        his.goBack();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Enter Your JSON DATA :
                <textarea name="jsondata" id="" cols="30" rows="10"></textarea>
            </label>
            <br />
            <label htmlFor="">
                Enter your gained Marks :
                 <input type="text" name="marks" />
            </label>

            <button type="reset">reset fields</button>
            <button type="submit">SAVE</button>
        </form>
    )
}
