//Writing in to innerHTML
document.getElementById("demo1").innerHTML = "Hello World !!! from Safat Alnur";

//Never write document.write() after HTML document is loaded. It will delete everything
function myWrite() {
  document.write(5 + 6);
}

//Alert to display data on alert box.
function myAlert() {
  window.alert("Thank you for clicking me");
}

//Display on console
function myConsole() {
  console.log(
    "I guessed you clicked the console 'Try Me' thats why I am in the console"
  );
}

//Pagination
function nextSection() {
  window.location = "/js-statement/index.html";
}
