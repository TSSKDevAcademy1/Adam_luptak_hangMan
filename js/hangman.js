var secret = "JAVASCRIPT";//secret word
var lettersGuessed = "";
var pocitadlo = 0;
var cas = 0;

var myVar = setInterval(function(){myTimer()},1000);





onLoad(); // initialized everything
alphabet(); // button group plot
initilisation();//len priz zaciatku


function onLoad() //first run everything will be initialized
{
    secret = "JAVASCRIPT";
    lettersGuessed = "";
    pocitadlo = 0;
    var empty="";
    for(var c of secret){ empty +="_";}
    document.getElementById("secret").textContent = empty;
    cas = 0;
    clearInterval(myVar);
    cas = 0;

     document.getElementById("time").textContent ="Time:" + cas++ +"s";

    el1 = document.getElementById("obrazok");
    el1.setAttribute("src","Images/phase1.png");
}















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
cas=0;

clearInterval(myVar);

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



function myTimer()
{

   document.getElementById("time").textContent ="Time:" + cas++ +"s";

}


function timer_count()
{

cas = 0;
 var myVar = setInterval(function(){document.getElementById("time").textContent ="Time:" + cas++ +"s";
},1000);


}









function alphabet()
{


  for(i = 65 ;i <= 90; i++ )
  {

    var btn = document.createElement("button"); // vytvorim tlacidlo
    btn.setAttribute("type","button"); // nastavim typ a hodnotu
    btn.setAttribute("class","btn btn-default");
    btn.setAttribute("disabled","false");
    btn.addEventListener("click",onClick)


    btn.setAttribute("value",String.fromCharCode(i));
    btn.textContent = String.fromCharCode(i);

    var elem = document.getElementById("buttonn");
    

    elem.appendChild(btn);


 }

   
}


function f1(objButton){  
   /// alert(objButton.value);
   document.getElementById("secret").textContent= objButton.value;
 }

 function bavi(){

   var buttonValue = document.getElementById('buttonn').value

   document.getElementById("secret").textContent= buttonValue;   

 }

function button_release()
{
    $(':button').each(function() {
        
        var el2 = this.target;

      
   
    this.removeAttribute('disabled');
 
                         
    });

}




function onClick1()
{

  onLoad();
  button_release();

}





function onClick2()
{

 button_release();

var el = event.target;

 el.setAttribute("disabled","false");

var cas =  0;

document.getElementById("time").textContent ="Time:" + cas++ +"s";
 myVar= setInterval(function(){myTimer()},1000);

}


addRow();

function addRow()
{
   


     document.getElementById("tabulka").innerHTML = "<td>sdsdsd</td> <td>sdsdsd</td> <td>sdsdsd</td>";



}










function initilisation()
{
   clearInterval(myVar);


    var btn = document.createElement("button"); // vytvorim tlacidlo
    btn.setAttribute("type","button"); // nastavim typ a hodnotu
    btn.setAttribute("class","btn btn-success");


    btn.setAttribute("style","width:6em; margin-right: 2em;");
    btn.addEventListener("click",onClick1);

// width: 20em;  height: 2em;

   
    btn.textContent = "Restart";

    var elem = document.getElementById("reset");
    

    elem.appendChild(btn);

    



    var btn2 = document.createElement("button"); // vytvorim tlacidlo
    btn2.setAttribute("type","button"); // nastavim typ a hodnotu
    btn2.setAttribute("class","btn btn-success");
    btn2.setAttribute("style","width:6em");

    btn2.addEventListener("click",onClick2);


   
    btn2.textContent = "Start";

    var elem = document.getElementById("reset");
    

    elem.appendChild(btn2);



    made_button("About game","about",onClick4);

    made_button("Contact","about",onClick5);



}

function onClick4() {//onClick4
    alert("To paly game push start button timer starts tick and you have to tip the correct answerr and not deid");
}


function onClick5() {//onClick4
    alert("Adam Luptak /n Kosice 2015");
}



function made_button(String, where,fun)
{
  var btn3 = document.createElement("a"); // vytvorim tlacidlo
    
     
    btn3.setAttribute("style","width:6em; margin-right: 2em; color:black");
    btn3.addEventListener("click",fun);

// width: 20em;  height: 2em;

   
    btn3.textContent = String;

    var elem = document.getElementById(where);
    

    elem.appendChild(btn3);



}