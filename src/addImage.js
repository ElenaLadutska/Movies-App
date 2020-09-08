import Icon from '../assets/images/worldMap.png';

export const addMap = () =>{
  const myMap = new Image();
  myMap.src = Icon;
  
  document.body.appendChild(myMap)
}