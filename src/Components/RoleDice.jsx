import { useState } from "react"
import styled from "styled-components"


const RoleDice = ({currentDice, roleDice}) => {


  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
        /* border: 2px solid red;
        padding: 5px; */
    }

    p{
        font-size: 24px;
    }
`