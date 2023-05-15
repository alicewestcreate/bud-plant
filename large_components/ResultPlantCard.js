import React from "react";
import Container from "../components/Containers/Container";
import containerStyles from "../components/Containers/styles.module.css";
import Wrapper from "../components/Wrappers/Wrapper";
import wrapperStyles from "../components/Wrappers/styles.module.css";
import Image from "../components/Images/Images";
import imageStyles from "../components/Images/styles.module.css";
import Button from "../components/Buttons/Button";
import buttonStyles from "../components/Buttons/styles.module.css";
import ImageTag from "../components/Images/ImageTag";



const ResultPlantCard = ({plant, displayNextPlant}) => {


    const handleClick = (e) => {
        const decision = e.target.getAttribute("data-attr");
        console.log(e.target.getAttribute("data-attr"));
        console.log(decision);
        if (decision === "true") {
            console.log("keep plant");
        }
        else if (decision === "false") {
            console.log("bin plant");
        }
        displayNextPlant()
    }
    


    const MainFeatures = plant.matchedOn && plant.matchedOn.map(( feature) => { 
        return <li>{feature}</li>})

        console.log(MainFeatures);
   
   
   
    return (

        <Container id={containerStyles.results}>
        <Wrapper className={wrapperStyles.contentWrapper}>
          <Wrapper id={wrapperStyles.plantImage} className={wrapperStyles.imageWrapper}>
            <ImageTag src={plant.Img}/>
          </Wrapper>
          
          <Wrapper className={wrapperStyles.cardWrapper}>
            <Wrapper className={wrapperStyles.card}>
              <Wrapper className={wrapperStyles.textwrapper}>
                <h3>{plant.Categories}</h3>
                <ul>
                    {MainFeatures}
                </ul>
              </Wrapper>

              <Wrapper className={wrapperStyles.buttonWrapper}>
                <Button
                  handleClick={handleClick}
                  className={buttonStyles.primary}
                  text={"gimmie"}
                  data={true}
                ></Button>
                <Button
                  handleClick={handleClick}
                  className={buttonStyles.secondary}
                  text={"meh"}
                  data={false}
                ></Button>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>

    );
}

export default ResultPlantCard;
