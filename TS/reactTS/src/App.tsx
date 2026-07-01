import './App.css'
import { Card } from './components/Card';

function App() {

  return (
    <>
      <Card 
      name = 'guru'
      isFriend = {true}
      />

      <Card 
      name='giri'
      />
    </>
  )
}

export default App
