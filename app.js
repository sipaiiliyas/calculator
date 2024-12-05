let diplay = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");


let buttonArray = Array.from(buttons);
let string = '';

buttonArray.forEach(btn =>{
    btn.addEventListener('click',function(event){  
        if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
            diplay.value = string; 
        }
        else if(event.target.innerHTML == 'AC'){
            string='';
            diplay.value = string;
        }
        else if(event.target.innerHTML == '='){
            string = eval(string);
            diplay.value = string;
        }
        else{
          string += event.target.innerHTML;
           diplay.value = string; 
        }
     

    })
})

