import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className="text">
            <p>Step: 1 - Select any Number</p>
            <p>Step: 2 - Click on dice image</p>
            <p>Step: 3 - After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>Step: 4 - If you get wrong guess then  1 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #ffc7c7;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 20px;
    }
`;
