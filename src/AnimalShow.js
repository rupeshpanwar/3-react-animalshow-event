import cat from './svg/cat.svg'
import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import { useState } from 'react'

const svgMap = {
    cat,
    bird,
    cow,
    dog,
    gator,
    horse,
  }

function Animal({type}){

 const [clicks,setClicks] = useState(0)

 const handleClicks = () => {
    setClicks(clicks + 1)
 }

  const animalSvg = svgMap[type];
  return (
  <div onClick={handleClicks}>
    <img src={animalSvg} alt={`${type} icon`} />
    <img src={heart} alt={`${type} icon`}
    style={{
        width: 10 + 10 * clicks + 'px'
    }}
     />
  </div>
  )
}

export default Animal;