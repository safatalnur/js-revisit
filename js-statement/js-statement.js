//Pagination
function prevSection() {
  window.location = "../index.html";
}

function nextSection() {
  window.location = "/syntax/index.html";
}

myBlock = () => {
  document.getElementById('demo1').innerHTML = "Here is my head, Look for my body",
  document.getElementById('demo2').innerHTML = "Here is the body"
}
