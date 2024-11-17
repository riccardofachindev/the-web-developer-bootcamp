import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slot from './Slot'

function App() {
  return (
    <>
      <Slot icons={['a', 'b', 'a']} />
      <Slot icons={['c', 'c', 'c']} />
      {/* <Heading text="My title" color="teal" fontSize="40px" />
      <DoubleDice />
      <ColorList colors={['red', 'blue', 'yellow', 'pink']} />
      <Greeter person="Bill" />
      <Greeter from="Ric" />
      <Die />
      <Die numSides={10} />
      <ListPicker list={[1, 5, 10]} />
      <ListPicker list={['a', 'e', 'o']} /> */}
    </>
  )
}

export default App
