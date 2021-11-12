// // // 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
let boton1 = document.getElementById('btnToClick')
boton1.addEventListener('click', function(evento) {
    console.log(evento)})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let eventoFocus = document.querySelector('input.focus');
eventoFocus.addEventListener('focus', function(){
    console.log(eventoFocus.value)
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let eventoValue = document.querySelector('input.value')
eventoValue.addEventListener('input', function(){
    console.log(eventoValue.value)
})
