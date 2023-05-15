import React from "react";
import Container from "../components/Containers/Container";
import containerStyles from "../components/Containers/styles.module.css";
import Wrapper from "../components/Wrappers/Wrapper";
import wrapperStyles from "../components/Wrappers/styles.module.css";
import Image from "../components/Images/Images";
import imageStyles from "../components/Images/styles.module.css";
import Button from "../components/Buttons/Button";
import buttonStyles from "../components/Buttons/styles.module.css";

const QuestionCard = ({ question, displayNextQuestion, collectChoices }) => {

  const handleClick = (e) => {
    // Get the associated values for the clicked button
    const side = e.target.getAttribute("data-attr");
    if (side === "left") {
      const property = question.filter.left.property;
      const value = question.filter.left.searchVal;
      const feature = question.filter.left.feature;
      collectChoices(property, value, feature);
    } else if (side === "right") {
      const property = question.filter.right.property;
      const value = question.filter.right.searchVal;
      const feature = question.filter.right.feature;
      collectChoices(property, value, feature);
    }
    displayNextQuestion();
  };

  return (
    <div>
      <Container id={containerStyles.quiz}>
        <Wrapper className={wrapperStyles.contentWrapper}>
          <Wrapper className={wrapperStyles.imageWrapper}>
            <Image id={imageStyles.wildFlower}> </Image>
          </Wrapper>
          <Wrapper className={wrapperStyles.cardWrapper}>
            <Wrapper className={wrapperStyles.card}>
              <Wrapper className={wrapperStyles.textwrapper}>
                <h5>{`question ${question.number} of 10`}</h5>
                <h3>{question.question}</h3>
              </Wrapper>

              <Wrapper className={wrapperStyles.buttonWrapper}>
                <Button
                  handleClick={handleClick}
                  className={buttonStyles.primary}
                  text={question.filter.left.btnTxt}
                  data={"left"}
                ></Button>
                <Button
                  handleClick={handleClick}
                  className={buttonStyles.secondary}
                  text={question.filter.right.btnTxt}
                  data={"right"}
                ></Button>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default QuestionCard;
