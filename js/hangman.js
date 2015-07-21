var secret = "JANO";
var lettersGuessed = "";
var pocitadlo = 0;
var pomoc = "___";



function getGuessedWord(secret, lettersGuessed)
{
  var result='';
  for(var c of secret)
  {
    if(lettersGuessed.indexOf(c)>=0)
    {
      result+=c;
    }
    else
      result+='_';
  }


  return result;



}








function myFunction() {

  var pre = 0;

  
  pre = getGuessedWord(secret, lettersGuessed);

  localStorage.setItem("secret", pre);

  document.getElementById("secret").textContent= pre;
}


function onClick(event)
{

 var el = event.target;

 el.setAttribute("disabled","false");




 lettersGuessed += el.textContent;


 var pre = getGuessedWord(secret, lettersGuessed);


if(pre.indexOf(document.getElementById("secret").textContent) >=0)
{

  pocitadlo++;

  console.log("ssd");
}

 
  

 document.getElementById("secret").textContent = pre;
 
 el1 = document.getElementById("obrazok");
  


  




 switch(pocitadlo)
 {
  case 1: el1.setAttribute("src","Images/phase2.png"); break;
  case 2: el1.setAttribute("src","Images/phase3.png"); break;
  case 3: el1.setAttribute("src","Images/phase4.png"); break;
  case 4: el1.setAttribute("src","Images/phase5.png"); break;

}


if(pocitadlo >= 4 &&  pre != secret)
{
  el1.setAttribute("src","Images/phase5.png");

   setTimeout(function(){alert("ligol si")}, 500);
    
     $(':button').each(function() {
        
       var el2 = this.target;

       if(this.textContent === "Restart")
        { 
        }
       else
       {
      this.setAttribute("disabled","false");   

       }


                         
    });
   

}
else if(pre === secret)
{

  alert("vyhral si");


  $(':button').each(function() {
        
       var el2 = this.target;

       if(this.textContent === "Restart")
        { 
        }
       else
       {
      this.setAttribute("disabled","false");   

       }


                         
    });
   
}






}




alphabet();
function alphabet()
{


  for(i = 65 ;i <= 90; i++ )
  {

    ///vytvor nasvat vsetko hnoda kde a napchat append to div
    

    //document.body.appendChild(btn);
    

    
    var btn = document.createElement("button"); // vytvorim tlacidlo
    btn.setAttribute("type","button"); // nastavim typ a hodnotu
    btn.setAttribute("class","btn btn-default");

    btn.addEventListener("click",onClick)


    btn.setAttribute("value",String.fromCharCode(i));
    btn.textContent = String.fromCharCode(i);

    var elem = document.getElementById("buttonn");
    

    elem.appendChild(btn);


    

   // console.log(String.fromCharCode(i));

 }

   el1 = document.getElementById("secret");
   el1.textContent = "____";

}


function f1(objButton){  
   /// alert(objButton.value);
   document.getElementById("secret").textContent= objButton.value;
 }

 function bavi(){

   var buttonValue = document.getElementById('buttonn').value

   document.getElementById("secret").textContent= buttonValue;   

 }


function onClick1()
{

 secret = "JANO";
 lettersGuessed = "";
 pocitadlo = 0;
 pomoc = "___";
 pocitadlo =0;
   el1 = document.getElementById("secret");
   el1.textContent = "____";
 //location.reload();
 el1 = document.getElementById("obrazok");
 el1.setAttribute("src","Images/phase1.png");


 $(':button').each(function() {
        
       var el2 = this.target;

      
   
    this.removeAttribute('disabled');
 
                         
    });

}









reset();



function reset()
{

    var btn = document.createElement("button"); // vytvorim tlacidlo
    btn.setAttribute("type","button"); // nastavim typ a hodnotu
    btn.setAttribute("class","btn btn-default");

    btn.addEventListener("click",onClick1);


    btn.setAttribute("value",String.fromCharCode(i));
    btn.textContent = "Restart";

    var elem = document.getElementById("reset");
    

    elem.appendChild(btn);
    


}



