// On clicking remove button the item should be removed from DOM as well as localstorage.
let cart = JSON.parse(localStorage.getItem("coffee")) || [];

 let total = cart.reduce(function(sum,ele,index,arr){
     return sum+Number(ele.price);
 },0)

 document.querySelector("#total_amount").innerHTML=total;

      cart.forEach(function (ele, index) {
        let box = document.createElement("div");
        //Each item should show type of coffee, image, price and add to bucket button.

        let image = document.createElement("img");
        image.src = ele.image;

        let title = document.createElement("h2");
        title.innerText = ele.title;

        let price = document.createElement("p");
        price.innerText = ele.price;

        let btn = document.createElement("button");
        btn.innerText = " Remove";
        btn.setAttribute("id", "remove_coffee");
        btn.addEventListener("click", function () {
          remove();
        });

        box.append(image, title, price, btn);
        document.querySelector("#bucket").append(box);
      });

      function remove(ele,index){
          cart.splice(index,1);
          localStorage.setItem('coffee',JSON.stringify(cart));
          window.location.reload();
      }

