import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GameContext } from "./GameContext";

const Home = () => {
  const {
    setNumCookies,

    setPurchasedItems,
  } = useContext(GameContext);

  const restartHandler = () => {
    localStorage.clear();
    setNumCookies(1000);
    setPurchasedItems({
      cursor: 0,
      grandma: 0,
      farm: 0,
    });
  };
  return (
    <Wrapper>
      <Title>Cookie game</Title>
      <Link to="/game">Go to game</Link>
      {localStorage.getItem("num-cookies") !== "1000" && (
        <Button onClick={restartHandler}>Restart</Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;
`;

const Button = styled.button`
  font-size: 21px;
  margin-top: 50px;
`;

export default Home;
