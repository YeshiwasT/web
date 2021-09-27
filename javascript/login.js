
 document.getElementById('subb').addEventListener('click',hello)
 
 //document.getElementById('subb').onclick=hello;


function hello(){
  var username =document.getElementById("username").value;  
  var password=document.getElementById("password").value;
 console.log("button is woeking ");
    var y ='hey';
    var x ='hi';

   // console.log(username);
  if(username==y&&password==x)  {
      
    document.getElementById("fir").setAttribute  ("href","D:/myturismweb/html/home.html");
  
  
    document.getElementById("subb").style.color= "red";
  }else{
    document.getElementById("incorrect").textContent="incorrect username or pasword"
   console.log("incorrect username or pasword");
  }
   
   
   

  
}