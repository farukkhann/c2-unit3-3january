
    var total=0;
  
    var myObj=JSON.parse(localStorage.getItem('myobj'))
    console.log(myObj)
    appendData(myObj);
function appendData(elem){
    var container=document.getElementById("mealCart")

    var img=document.createElement("img")
    img.src=elem.strMealThumb

    var name=document.createElement('h2')
    name.innerText=elem.strMeal

    var cat=document.createElement('p')
    cat.innerText=elem.strCategory

    var price=document.createElement('h2')
    var value= Math.round(Math.random()*100) 
    price.innerText="Rs "+value+"/"


    
    var remove=document.createElement('button')
    remove.innerText="Remove"
    remove.id="removeItem"
    
    
    var Checkout=document.createElement('button')
    Checkout.innerText='checkout'
    Checkout.id='check'


    var total=document.createElement("h4")
    
    total.innerText=" Your total bill is Rs = "+value

    // var remove=document.createElement('button')
    // remove.innerText="Remove"
    // remove.id='removeButton'

    container.append(img,name,cat,price,total,remove,Checkout)
}

var check=document.getElementById('check')
   check.addEventListener('click',checkOut)
    function checkOut(){
       window.location.href="checkout.html"
    }
var remove=document.getElementById("removeItem")
    remove.style.backgroundColor="green"
    remove.addEventListener('click',removeis)


    function removeis(event){
        event.preventDefault()
        localStorage.removeItem('myobj')
       
    }
