document.querySelector('#button').addEventListener('click',function(){
    
    let Color_input = document.querySelector('#color').value;

    document.querySelector('.navbar').style.backgroundColor  = Color_input;

    document.querySelector('#current_color').textContent=Color_input;

    document.querySelector('#product').style.backgroundColor  = Color_input;

    document.querySelector('#button').style.backgroundColor  = Color_input;
})