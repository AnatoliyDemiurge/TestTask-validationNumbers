//Проверка на непустой не нулл и на то что это не любой символ кроме цифры или десятичной дроби
const str = document.querySelector('.field');
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    var strValue = str.value;
    var strValueClean = strValue.split('.');
    const regexp = /[^0-9 | ^\.]/mg;
    if ((typeof(strValue)) == null || strValue == '' || strValue.match(regexp) || (strValueClean.length > 2)){
        console.log('Вводите только целые числа или десятиченые дроби');
    }else{
        let strOutput = strValue;
        if (strValueClean.length > 1) {
            let strValueCleanFractionPart = strValueClean[1];
            if (strValueCleanFractionPart.length > 2) {
                strValue = +strValue;
                strOutput = strValue.toFixed(2);
            }
        }
        let pizda = strOutput;
        console.log(pizda);
    }
});

// btn.addEventListener('click',()=>{
//     let strValue = str.value;
//     strValueClean = strValue.split('.');
//     console.log(strValueClean.length);

// });