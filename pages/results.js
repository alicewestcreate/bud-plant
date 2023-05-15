import React, {useState, useContext} from 'react';
import UserChoicesContext from "../ContextHooks/UserChoicesContext"
import {FilterPlants} from "../functions/FilterPlants"
import ResultsPlantCard from "../large_components/ResultPlantCard"

const ResultsPage = () => {
    const { userChoices, setUserChoices } = useContext(UserChoicesContext);
    const [plantIndex, setplantIndex] = useState(0);
    const [showResultCard, setShowResultCard] = useState(true)

    const [sortedMatches, noOfTopMatch] = FilterPlants(userChoices)

    const displayNextPlant = () => {
        setplantIndex(plantIndex + 1)
    }

    return (
        <div>

        {showResultCard && <ResultsPlantCard plant={sortedMatches[plantIndex]} displayNextPlant={displayNextPlant}/>}
        </div>
    );
}

export default ResultsPage;
