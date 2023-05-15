import React from "react";
import Link from "next/link";

import Container from "../components/Containers/Container";
import containerStyles from "../components/Containers/styles.module.css";
import Wrapper from "../components/Wrappers/Wrapper";
import wrapperStyles from "../components/Wrappers/styles.module.css";
import Button from "../components/Buttons/Button"



const PreResultsCard = ({ topMatches }) => {

  const handleClick = () => {
    console.log("");
  }

  return (
    <div>
      <Container id={containerStyles.preResults}>
        <Wrapper className={wrapperStyles.contentWrapper}>
          <Wrapper className={wrapperStyles.card}>
            <h1>You Have {topMatches} Matches</h1>
            <Wrapper className={wrapperStyles.button}>
                <Link href="/results"><Button
                  handleClick={handleClick}
                  text={"View Results"}
                ></Button></Link>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default PreResultsCard;
