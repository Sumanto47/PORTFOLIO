/*------------------------------------------- SCRIPT FOR BANNER-DECORATE START ------------------------------------------*/

const words = '............................................................';
const duration = 3000;
const characters = words.split('').forEach((char, i) => {
  function createElement(offset) {
    const div = document.createElement('div');
    div.innerText = char;
    div.classList.add('character');
    div.style.animationDelay = `-${i * (duration / 20) - offset}ms`
    
    return div;
  }
  document.getElementById('spiral').append(createElement(0));
  
  document.getElementById('spiral2').append(createElement(-1 * (duration / 2)));
});

/*------------------------------------------- SCRIPT FOR BANNER-DECORATE COMPLETE ------------------------------------------*/