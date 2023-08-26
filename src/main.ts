import './style.css'

import { DragAndDrop } from './draggable'
import MovePizza from './movePizza';

let plate = document.querySelector('.trey') as HTMLElement;
let menu = document.querySelector('.menu') as HTMLElement;
const obj = new DragAndDrop(menu, plate);

const step = {
  step: 0
}

obj.onInit(step);

window.addEventListener('popstate',()=>{
  alert('changein')
})
document.querySelector('#move-pizza').addEventListener('click',()=>{
    MovePizza(step);
})
