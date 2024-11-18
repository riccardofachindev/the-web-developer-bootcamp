import './App.css'
import Dice from './Dice'
import LuckyN from './LuckyN'
import { sum } from './utils'
import Box from './Box'
import GridBox from './GridBox'

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allTheSame(dice) {
  return dice.every(d => d === dice[0]);
}

function App() {
  return (
    <>
      {/* <Dice dice={[3, 6, 5]} />
      <Dice dice={[1, 2, 3]} color='red' />
      <LuckyN numDice={2} winCheck={lessThan4} title="Less than 4" />
      <LuckyN winCheck={allTheSame} title="All same" /> */}
      <GridBox />
    </>
  )
}

export default App
