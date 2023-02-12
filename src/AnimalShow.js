import cat from './svg/cat.svg'
import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'

const svgMap = {
    cat,
    bird,
    cow,
    dog,
    gator,
    horse,
  }

function Animal({type}){

  const animalSvg = svgMap[type];
  return <img src={animalSvg} alt={`${type} icon`} />
}

export default Animal;