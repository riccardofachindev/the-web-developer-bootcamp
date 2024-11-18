import './App.css'
import ShoppingList from './ShoppingList'
import PropertiesList from './PropertiesList';
import Clicker from './Clicker';
import Form from './Form';
import DynamicClicker from './DynamicClicker';

const data = [
  { id: 1, name: 'Milk', quantity: 4, completed: false },
  { id: 2, name: 'Salad', quantity: 2, completed: true },
  { id: 3, name: "Biscuits", quantity: 20, completed: false },
  { id: 4, name: "Meat", quantity: 5, completed: true }
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {

  return (
    <div>
      {/* <ShoppingList items={data} />
      <PropertiesList properties={properties} />
      <Form /> */}
      <DynamicClicker message="You clicked me" buttonText="Click this" />
    </div>
  )
}

export default App
