import './App.css'
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo'
import Navbar from './Navbar'

function App() {
  return (
    <>
      {/* <Button variant="text">Text</Button>
      <Button variant="contained" onClick={() => alert('hi')}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" size="large" color="secondary">
        Error
      </Button>
      <IconButton color="primary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton> 
      <RatingDemo /> */}
      <Navbar />
      <FormDemo />
    </>
  )
}

export default App
