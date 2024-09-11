import React from 'react'
import styles from "./ChartBar.module.css"
import styled from 'styled-components'

const Charbar = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ChartBarInner = styled.div`
    height: 100%;
    width: 100%;
    border: 2px solid rgb(252, 247, 247);
    border-radius: 12px;
    background-color: grey;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`;
const ChartBarLabel = styled.p`
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
`;

const ChartBar = ({maxPrice , currentPrice , label}) => {

    const fillHeight = (100 * currentPrice) / maxPrice

  return (
    <Charbar >
      <ChartBarInner>
        <div style={{height: `${fillHeight}%`}} className={styles.chartBarFill}></div>
      </ChartBarInner>
      <ChartBarLabel>{label}</ChartBarLabel>
    </Charbar>
  )
}

export default ChartBar
