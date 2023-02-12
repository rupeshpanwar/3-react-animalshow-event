import './App.css'
import {useState } from 'react'
import AnimalShow from './AnimalShow'

const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

const randomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};


function App(){

    const [animalName, setAnimalName] = useState([]);

 
    const handleClick = () => {
        setAnimalName([...animalName,randomAnimal()]);
    }

    const renderedAnimals = animalName.map((animal, index) => {
        return <AnimalShow type={animal} key={index}  />
     });

    return <div className="app">
        <button onClick={handleClick}>Add an Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
}

export default App;