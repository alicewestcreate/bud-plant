import plantAPI from "../data/plantAPI.json"

const FilterPlants = (userChoices) => {
  const { allProperties, allValues, allFeatures } = userChoices;
    const plants = plantAPI
  
    const matches = [];
    let noOfTopMatch = 0
  
    for (let i = 0; i < plants.length; i++) {
      const plantEntry = plants[i];
  
      plantEntry.score = 0;
      plantEntry.matchedOn = [];
      plantEntry.match = false;
  
      allProperties.forEach((property, index) => {
        if (allValues[index].includes(plantEntry[property])) { // allValues[index] is an array. 
          plantEntry.score++;
          plantEntry.matchedOn.push(allFeatures[index]);
          plantEntry.match = true;
        }
      });
      if (plantEntry.match === true) {
        matches.push(plantEntry);
        if (plantEntry.score >= 3 ) {
            noOfTopMatch += 1 
        }
      }
    }
  
    const sortedMatches = matches.sort((a,b) => b.score - a.score );
  
    return [sortedMatches, noOfTopMatch];
  };
  
  export { FilterPlants };
  