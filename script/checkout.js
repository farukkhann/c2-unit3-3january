
  var myObj=JSON.parse(localStorage.getItem('myobj'))

  console.log(myObj)

  var submit=document.getElementById('submit')
  submit.addEventListener('click',checkout)

  function checkout(event){
      event.preventDefault()
      alert("Your order is accepted")

      setTimeout(function(){
          alert('your order is being Cooked')
      },3000)

      setTimeout(function(){
          alert('your order is ready')
      },8000)

      setTimeout(function(){
          alert('your order is out for delievey ')
      },10000)

      setTimeout(function(){
          alert('your order is Delivered ')
      },12000)
  }