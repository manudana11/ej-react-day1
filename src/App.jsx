import Person from './components/Person/Person'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css'

function App() {
  const person1 = {
    name: "Manuel",
    surname: "Dana",
    age: 27
  };
  const person2 = {
    name: "JuanCarlos",
    surname: "Gracias",
    age: 27
  };
  const person3 = {
    name: "Pedro",
    surname: "Picapiedra",
    age: 107
  };
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  
  return (
      <div>
        <Person person={person1}/>
        <Person person={person2}/>
        <Person person={person3}/>
        <Header/>
        <Home dishes={dishes}/>
      </div>
  )
}

export default App
