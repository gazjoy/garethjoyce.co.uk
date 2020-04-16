'use strict';

const boxes = document.querySelectorAll('.slide:not([skip])');
const buttons = document.querySelectorAll('button')

let state = {
    currentIndex: 0,
    maxIndex: boxes.length - 1
}

function switchBox(direction) {
    switch(direction) {
        case 'forwards':
            state.currentIndex = (state.currentIndex >= state.maxIndex ? 0 : state.currentIndex + 1);
            break;
        case 'backwards':
            state.currentIndex = (state.currentIndex <= 0 ? state.maxIndex : state.currentIndex - 1);
            break;
    }
    
    boxes.forEach((box, index) => {
        if(index === state.currentIndex) {
            box.removeAttribute('hidden');
            return;
        }
        
        box.setAttribute('hidden', '')
    })
}

buttons.forEach(button => {
    button.addEventListener('click', evt => {
        evt.preventDefault();
        switchBox(button.getAttribute('data-dir'));
    });
});



// export default {
//   init: Slide
// };
