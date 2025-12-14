function openOrder(product) {
document.getElementById('orderModal').style.display = 'block';
document.getElementById('productName').innerText = product;
}


function closeOrder() {
document.getElementById('orderModal').style.display = 'none';
}


window.onclick = function(e){
let modal = document.getElementById('orderModal');
if(e.target === modal){ modal.style.display = 'none'; }
}
let selectedProduct = {};
function openOrder(name, price){
  selectedProduct = { name, price };
  document.getElementById("orderModal").style.display = "block";
  document.getElementById("productName").innerText = `${name} - $${price}`;
}

async function payNow(){
  const res = await fetch("/create-checkout-session", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify(selectedProduct)
  });
  const data = await res.json();
  window.location.href = data.url;
}
