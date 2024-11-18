import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper from './ScoreKeeper'
import DynamicScoreKeeper from './DynamicScoreKeeper'

function App() {

  return (
    <>
      {/* <Counter />
      <Dumbo /> 
      <ScoreKeeper />
      <EmojiClicker />*/}
      <DynamicScoreKeeper players={7} target={5} />
    </>
  )
}

export default App
