let field = document.querySelector('.field'),
    button = document.querySelector('.btn');

const rules = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
button.addEventListener('click', ()=>{
    console.log(rules(field.value));
});


field.addEventListener('input', ()=>{
    if (rules(field.value) == 2) {
        field.value = '';
    }
});

console.log(rules(123.24124124));
