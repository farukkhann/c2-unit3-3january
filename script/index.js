async function gerData(){
    var res=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    var result=await res.json();
    var obj=result.meals[0]

    appendData(obj)

    console.log("local storage")
    localStorage.setItem("myobj", JSON.stringify(obj))

}
gerData()

function appendData(elem){
    var container=document.getElementById("meal")

    var img=document.createElement("img")
    img.src=elem.strMealThumb

    var name=document.createElement('h2')
    name.innerText=elem.strMeal

    var cat=document.createElement('p')
    cat.innerText=elem.strCategory

    var price=document.createElement('h2')
    var value= Math.round(Math.random()*100) 
    price.innerText="Rs "+value+"/"

    // var addcart=document.createElement("button")
    // addcart.innerText="Add to cart this item"
    // addcart.class="addIncart"

    var goto=document.createElement('button')
    goto.innerText="go to Cart"
    goto.id="goto"


    container.append(img,name,cat,price,goto)
}

var goto=document.getElementById("goto")
goto.addEventListener('click',Goto)

function Goto(event){
    event.preventDefault()
    window.location.href="cart.html"
}

var addcart=document.getElementById('addIncart')

  addcart.addEventListener('click',addInlocal)

//   function addInlocal(event){
//       event.preventDefault()
//       console.log("local storage")
//       localStorage.setItem("myobj", JSON.stringify(obj))
//       console.log('this is new add')
//     }

    // async function addInlocal(event){
    //     event.preventDefault()
    //     var res=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    //     var result=await res.json();
    //     var obj=result.meals[0]
    //     console.log(obj)
    
    //     console.log("local storage")
    //     localStorage.setItem("myobj", JSON.stringify(obj))
    
    // }