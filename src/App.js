import {useState } from 'react'
import AnimalShow from './AnimalShow'

const animals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra'];

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

    return <div>
        <button onClick={handleClick}>Add an Animal</button>
        <div>{renderedAnimals}</div>
    </div>
}

export default App;