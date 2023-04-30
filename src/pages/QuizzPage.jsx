import { useState } from 'react';
import { questions } from '../../questions'
import Buttons from '../components/Buttons';
import Question from '../components/Question';

const QuizzPage = () => {
    // console.log(questions);

    const [currQus, setCurrQus] = useState(0);
    const [submitted, setSubmitted] = useState({});

    const updateSubmission = (index, value) => {
        setSubmitted({ ...submitted, [index]: value });
    }

    console.log(submitted);

    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen'>
                <span>Timer 90Sec</span>
                <Question
                    currQus={questions[currQus]}
                    submitted={updateSubmission}
                    currQusIndex={currQus}
                    selectedOption={submitted[currQus]}
                />
                <Buttons setCurrQus={setCurrQus} currQus={currQus} />
            </div>

        </>
    )
}

export default QuizzPage