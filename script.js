//js by AKG
function changetext(){

 var name;
    name = prompt("Enter your name here : ")
    if (name==null){
        name = "ALIK";
    }
    document.getElementById("change").innerHTML="Hello ! " + name;
    
 } 
    function openSlideMenu(){
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }
console.log("project made by Alik")