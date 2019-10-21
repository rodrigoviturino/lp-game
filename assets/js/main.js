form = document.querySelector('#formHome');
input = document.querySelectorAll('#formHome .t');
console.log(input)

form.addEventListener('submit', function(){
    document.querySelector('.msg-enviada').classList.add('msg-ativa');

    input.forEach(item => {
        if(item == document.getElementsByClassName('error')) {
            console.log('vazio');    
        } else {
            console.log('já tem classe');
        }    
    });

});



