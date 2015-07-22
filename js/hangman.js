var secret = "JAVASCRIPT";//secret word
var lettersGuessed = "";
var pocitadlo = 0;
var cas = 0;

var myVar = setInterval(function(){myTimer()},1000);





onLoad(); // initialized everything
alphabet(); // button group plot
initilisation();//len priz zaciatku


    document.getElementById("secret").setAttribute("style","Color:red");
    document.getElementById("secret").textContent ="PUSH START TO START THE GAME";


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
     document.getElementById("secret").setAttribute("style","Color:black");
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

   //setTimeout(function(){alert("ligol si")}, 500);
    
    document.getElementById("secret").setAttribute("style","Color:red");
    document.getElementById("secret").textContent =" LOOSE PUSH RESTART TO START THE GAME AGAIN";
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
else if(pre === secret)
{
 document.getElementById("secret").setAttribute("style","Color:#4cae4c");
 cas= cas-1;
  document.getElementById("secret").textContent ="YOU WIN YOUR TIME IS: " + cas.toString() + " s";

 tabb_win();

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

      document.getElementById("secret").setAttribute("style","Color:red");
    document.getElementById("secret").textContent ="PUSH START TO START THE GAME";

$(':button').each(function() {
        
       var el2 = this.target;

       if(this.textContent === "Start")
        {
        this.removeAttribute('disabled'); 
        }
       else
       {
        this.setAttribute("disabled","false");   

       }


                         
    });



  

}





function onClick2()
{

      var empty="";
    for(var c of secret){ empty +="_";}

         document.getElementById("secret").setAttribute("style","Color:Black");
         document.getElementById("secret").textContent =empty;


       button_release();

 var el = event.target;

 el.setAttribute("disabled","false");

 var cas =  0;

 document.getElementById("time").textContent ="Time:" + cas++ +"s";
 myVar= setInterval(function(){myTimer()},1000);

}


function initilisation()
{
   clearInterval(myVar);


    var btn = document.createElement("button"); // vytvorim tlacidlo
    btn.setAttribute("type","button"); // nastavim typ a hodnotu
    btn.setAttribute("class","btn btn-success");


    btn.setAttribute("style","width:10em; height:3em; margin-right: 2em;");
    btn.addEventListener("click",onClick1);

// width: 20em;  height: 2em;

   
    btn.textContent = "Restart";

    var elem = document.getElementById("reset");
    

    elem.appendChild(btn);

    



    var btn2 = document.createElement("button"); // vytvorim tlacidlo
    btn2.setAttribute("type","button"); // nastavim typ a hodnotu
    btn2.setAttribute("class","btn btn-success");
    btn2.setAttribute("style","width:10em; height:3em");

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

tabb();

function tabb()
{

 
 // localStorage.setItem("0", "0,Smith,Network,17");
 //  localStorage.setItem("1", "1,Adriana,Network,19");
 //  localStorage.setItem("2", "2,Adriana,Network,19");

  var str ="";
var res = "";

var cars = ["sdsd", "Volvo", "BMW"];


for(i = 0 ; i < 3; i++)
{
   //function read from memory
      str = localStorage.getItem(i.toString());
      res = str.split(",");
      

     cars[i] = "<tr><td>"+res[1]+"</td> <td>"+ res[2]+"</td> <td>"+res[3]+"</td></tr>"; 
     str = cars.join("");
}


 document.getElementById("tab").innerHTML = str;


}



function tabb_win()
{


  var str ="";
var res = "";
var prepinac = 0;
var cars = ["sdsd", "Volvo", "BMW"];





for(i = 0 ; i < 3; i++)
{

       str = localStorage.getItem(i.toString());
      res = str.split(",");

    if(cas <  parseInt(res[3]) )
    {
      prepinac = res[0];
      break;

    }




}



for(i = 0 ; i < 3; i++)
{
   //function read from memory
      str = localStorage.getItem(i.toString());
      res = str.split(",");
      

      if(prepinac == i)
      {

       var person = prompt("Inster your first and second name");
         var t = person.split(" ");
           
         res[1] = t[0];
         res[2] = t[1];
         res[3] = cas.toString();
        cars[i] = "<tr><td>"+res[1]+"</td> <td>"+ res[2]+"</td> <td>"+res[3]+"</td></tr>"; 
       
       localStorage.setItem(i, i.toString()+","+t[0]+","+t[1]+","+cas.toString());
    
      }

 else{

     cars[i] = "<tr><td>"+res[1]+"</td> <td>"+ res[2]+"</td> <td>"+res[3]+"</td></tr>"; 
   }
     
}

str = cars.join("");


 document.getElementById("tab").innerHTML = str;



}