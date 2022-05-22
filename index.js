// NOTE:earlier we were facing an issue that our Js event listener was not working; this was because we were adding event listener before our content was loaded i mean we added our <script> tag before body but we have to add <script> tag in this case after body.

// REASON:Put the script section at the bottom of your body section right above </body> , the element you're referencing was not loaded yet. –
// ****************************************************************************

let string=" ";
var buttons=document.querySelectorAll('.btn');
for(let i=0;i<buttons.length;i++){
 buttons[i].addEventListener('click',(e)=>{

   
   if (e.target.innerHTML=='='){
      string=eval(string);
      let display=document.querySelector('.display')
     display.value=string;
     
   }
     else if( e.target.value=='/'){
    
     string+=e.target.value;
      let display=document.querySelector('.display')
     display.value=string;

     
     }
     else if( e.target.innerHTML=='X'){
    
     string+=e.target.value;
      let display=document.querySelector('.display')
     display.value=string;

     
     }
 else if( e.target.innerHTML=='CLEAR'){
     let display=document.querySelector('.display')
    string=string.substring(0, string.length - 1);
    display.value = string;

 }
 else if( e.target.innerHTML=='ALL CLEAR'){
     let display=document.querySelector('.display')
    string="";
    display.value=string;

 }
 else {

    string+=e.target.innerHTML;
    let display=document.querySelector('.display')
    display.value=string;

 }

 

     
   
     })
                            
                            
}

let str="7+4*8"
console.log(eval(str));


    // buttons.addEventListener('click', (e)=>{
    //     if (e.target.innerHTML=="=") {
    //         string=eval(string);
    //         display.value=string;
           
            
    //     }
    //     else if(
    //        e.target.innerHTML=="X"
    //     ){
    //         string+=buttons.value;
    //     }

    //     else if(
    //         e.target.innerHTML=="&#247;"
    //     ){
    //         string+=buttons.value;
    //     }

        
    //     else {
    //         string+=e.target.innerHTML;
    //         console.log(e.target);
    //         display.value=string;
    //     }


    // }
    // )
     
//  }
