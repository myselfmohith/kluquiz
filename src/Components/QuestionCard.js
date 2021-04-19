import React from 'react'

export default function QuestionCard({ i,ques, ans }) {
    return (
        <div className="questionContainer">
            <p className="question" dangerouslySetInnerHTML={{ __html: ques.question_name }}></p>
            <ol>
                <li className={ans === '1' ? "option selectedOption" : "option"} dangerouslySetInnerHTML={{ __html: ques.answer1 }}></li>
                <li className={ans === '2' ? "option selectedOption" : "option"} dangerouslySetInnerHTML={{ __html: ques.answer2 }}></li>
                <li className={ans === '3' ? "option selectedOption" : "option"} dangerouslySetInnerHTML={{ __html: ques.answer3 }}></li>
                <li className={ans === '4' ? "option selectedOption" : "option"} dangerouslySetInnerHTML={{ __html: ques.answer4 }}></li>
            </ol>
        </div>
    )
}