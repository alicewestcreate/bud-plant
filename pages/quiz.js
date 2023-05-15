import React, {useState, useContext} from "react";
import QuestionCard from "../large_components/QuestionCard";
import quizQuestion from "../data/quizQuestions.json"
import UserChoicesContext from "../ContextHooks/UserChoicesContext"
import PreResultsCard from "../large_components/PreResultsCard";
import {FilterPlants} from "../functions/FilterPlants"

const QuizPage = () => {

    const { userChoices, setUserChoices } = useContext(UserChoicesContext);

    const [quizIndex, setQuizIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true)
    const [showPreResults, setShowPreResults] = useState(false)
    const [topMatches, setTopMatches] = useState(0)

    const collectChoices = (property, value, feature) => {
        setUserChoices(prevState => ({ 
            ...prevState, // Create a copy of previous state
            allProperties: [...prevState.allProperties, property], // gets a copy of the prevState.allProperties and adds property to the end
            allValues: [...prevState.allValues, value],
            allFeatures: [...prevState.allFeatures, feature]
        }))
    }


    const displayNextQuestion = () => {
        const lengthOfQuiz = quizQuestion.length -1 ;
        if (quizIndex >= lengthOfQuiz) {
            setShowQuiz(false)
            const [sortedMatches, noOfTopMatch] = FilterPlants(userChoices)
            setTopMatches(noOfTopMatch)
            console.log(userChoices);
            setShowPreResults(true)

        } else {
            setQuizIndex(quizIndex + 1)
        }
    }




  return (
    <div>
       {showQuiz && <QuestionCard question={quizQuestion[quizIndex]} displayNextQuestion={displayNextQuestion} collectChoices={collectChoices}></QuestionCard>}
       {showPreResults && <PreResultsCard topMatches={topMatches}/>}
    </div>
  );
};

export default QuizPage;
