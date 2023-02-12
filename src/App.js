import {useState } from 'react'


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

    return <div>
        <button onClick={handleClick}>Add an Animal</button>
        <div>Random Animal: {animalName}</div>
    </div>
}

export default App;