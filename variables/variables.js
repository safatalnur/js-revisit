// ##### Pagination #####
function prevSection() {
  window.location = "/syntax/index.html";
}

function nextSection() {
  window.location = "/arithmatics/index.html";
}

// ##### End of Pagination #####

myVariables = () => {
  //variables with var can be redeclared
  var carName = "Volvo";
  console.log(carName);

  var carName;
  console.log(carName);

  //variables with let and const cannot be redeclared with a scope
  let planName = "Cessna";
  console.log(planName);

  //   let planName; //Throw an error
  //   console.log(planName);

  const spaceName = "space x";
  console.log(spaceName);

  //   const spaceName //Throw an error saying already declared
  //   console.log(spaceName)
};

myScope = () => {
  {
    var x = 2;
  }

  console.log(x); //x is accessible from outside of the block thus global scope

  {
    let y = 5;
    console.log(y); //Now accessible
  }
  //   console.log(y); //Throws an error because y is not accessible from outside of the block.  Try from inside the block

  {
    const space = "galaxy";
    console.log(space);
  }
  //   console.log(space); //Same like let.

  //let reassign example
  let testLet = 25;
  console.log(testLet);
  testLet = 50; //VAlue has been reassigned
  console.log(testLet);

  //let and const can not be hoisted example
  testHoist = "Hello";
  console.log(testHoist);
  //   let testHoist = "World"; // let and const can not hoist throws an error
  //   const testHoist = "World";

  testHoistVar = "Good";
  console.log(testHoistVar);
  var testHoistVar = "luck"; //var allows hoisting
  console.log(testHoistVar);
};
