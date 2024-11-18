import Counter from './Counter'
import './App.css'
import Toggler from './Toggler'
import ColorBoxGrid from './ColorBoxGrid'

function App() {
  return (
    <>
      {/* <Counter />
      <Toggler /> */}
      <ColorBoxGrid colors={['red', 'blue', 'yellow', 'orange', 'purple', 'brown', 'green']} />
    </>
  )
}

export default App
