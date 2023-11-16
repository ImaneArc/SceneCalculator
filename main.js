
window.onload = function bgImages (){
    const body = document.body;
    
    const bodyImages = [
        'image (1).jpg',
        'image (10).jpg',
        'image (11).jpg',
        'image (12).jpg',
        'image (13).jpg',
        'image (14).jpg',
        'image (2).jpg',
        'image (3).jpg',
        'image (4).jpg',
        'image (5).jpg',
        'image (6).jpg',
        'image (7).jpg',
        'image (8).jpg',
        'image (9).jpg',
    ];

    const randomBg = Math.floor(Math.random() * bodyImages.length);

    body.style.backgroundImage =`url('./images/${bodyImages[randomBg]}')`;
}



const display = document.getElementById('outputDisplay');
const buttons = document.querySelectorAll('#buttons button');

let output = '';

buttons.forEach(button => {
    button.addEventListener('click', () => buttonClick( button.textContent));
})

function buttonClick (value){
    
            if(value==='=' || value=== 'Enter'){
                try {
                  output = eval(output);
                  display.textContent = output;
                }
                catch(error){
                    display.textContent ='Error';
                }
            } else if(value==='C'){
                output ='';
                display.textContent = '';
            }
            else if(value ==='Backspace' || value === 'X'){
                output =output.slice(0,-1);
                display.textContent = output;
            }
            else {
             output += value;
                display.textContent = output;
            }

}


document.addEventListener('keydown', event => {
    const key = event.key;

    if (event.code.startsWith('F')) {
    } else if (key.match(/[0-9+\-*/.=]|Enter|Backspace|Delete/i)) {
        event.preventDefault();
        buttonClick(key === 'Enter' ? '=' : key);
    }
});
