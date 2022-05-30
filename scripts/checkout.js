document
  .querySelector("#confirm")
  .addEventListener("click", add);

async function add() {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  // console.log(name,number,address)
   document.getElementById("name").innerHTML = null;
   document.getElementById("number").innerHTML = null;
   document.getElementById("address").innerHTML = null;
  await run();

 
}

function run() {
  setTimeout(function () {
    alert("Your order is accepted");
    setTimeout(function () {
      alert("Your order is being Prepared");
      setTimeout(function () {
        alert("Your order is being packed");
        setTimeout(function () {
          alert(" Your order is out for delivery");
          setTimeout(function () {
            alert("Order delivered");
          }, 12000);
        }, 10000);
      }, 8000);
    }, 3000);
  }, 0000);
}
