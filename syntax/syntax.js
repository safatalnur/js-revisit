// ##### Pagination #####
function prevSection() {
    window.location = "/js-statement/index.html";
}

function nextSection() {
    window.location = "/variables/index.html";
}
  
// ##### End of Pagination #####

myExpressions1 = () => {
    document.getElementById('demo1').innerHTML = 5 * 10
}

myExpressions2 = () => {
    let x = 5
    document.getElementById('demo2').innerHTML = x * 50
}