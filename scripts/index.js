// Add the coffee to local storage with key "coffee"
let i =0;
const url =
  "https://masai-mock-api.herokuapp.com/coffee/menu";
 
  async function getUrl(){
      let res = await fetch(url);
      let items = await res.json();
      let x = items.menu.data;
      append(x)
     // console.log(items.menu.data)
    
  }

  getUrl();
 let cart =
   JSON.parse(localStorage.getItem("coffee")) || [];

  function append(x){
     
      x.map(function(ele){
let box = document.createElement("div");
//Each item should show type of coffee, image, price and add to bucket button.

let image = document.createElement("img");
image.src = ele.image;


let title = document.createElement("h2");
title.innerText = ele.title;

let  price = document.createElement("p");
price.innerText = ele.price;


let btn= document.createElement("button");
 btn.innerText = "Add to bucket";
  btn.setAttribute("id", "add_to_bucket");
  btn.addEventListener('click',function(){
     addToBucket(ele);
  })

  box.append(image,title,price,btn);
  document.querySelector('#menu').append(box)
      })
    
  }

  function addToBucket(ele){
     
    cart.push(ele)
    let length = cart.length;
     
      document.querySelector("#coffee_count").innerHTML =length;
localStorage.setItem("coffee",JSON.stringify(cart));

  }