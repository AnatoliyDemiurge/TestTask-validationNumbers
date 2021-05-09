//Проверка на непустой не нулл и на то что это не любой символ кроме цифры или десятичной дроби
const str = document.querySelector('.field');
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    const strValue = str.value;
    strValueClean = strValue.split('.');
    strValueCleanFractionPart = strValueClean[1];
    console.log(strValueCleanFractionPart.length);
    const regexp = /[^0-9 | ^\.]/mg;
    if ((typeof(strValue)) == null || strValue == '' || strValue.match(regexp) || (strValueClean.length > 2)){
        console.log('Вводите только целые числа или десятиченые дроби');
    }else{
        let pizda = strValue;
        console.log(pizda);
    }
});

// btn.addEventListener('click',()=>{
//     let strValue = str.value;
//     strValueClean = strValue.split('.');
//     console.log(strValueClean.length);

// });