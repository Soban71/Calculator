/*let screen=document.getElementById('screens');
 buttons= document.querySelectorAll('button');
let screenvalue='';
 for(items of buttons){
 	items.addEventListener('click',(e)=>{
 		buttontext=e.target.innerText;

     if (buttontext == 'X') {
     	buttontext='*';
     	screenvalue +=buttontext;
     	screen.value=screenvalue;
     }
     else if (buttontext == 'C') {
     	screenvalue='';
     	screen.value=screenvalue;
     }

     else if (buttontext == '=') {
     	screen.value=eval(screenvalue);
     }

     else { 
              screenvalue +=buttontext;
              screen.value=screenvalue;
     }
 	})
 }
*/


let screen=document.getElementById('screens');
 let btn=document.querySelectorAll('button');
let screenvalue='';
 for(items of btn){
     items.addEventListener('click', (e)=>{

        buttontext=e.target.innerText;

        if (buttontext == 'X') {
            buttontext='*';
            screenvalue +=buttontext;
            screen.value=screenvalue; 
        }

       else if (buttontext == 'C') {
            screenvalue='';
            screen.value=screenvalue;
        }

        else if (buttontext == '=') {
            screen.value=eval(screenvalue);
        }
         else
         {
            screenvalue +=buttontext;
            screen.value=screenvalue;  
         }

                 

     })



 }























