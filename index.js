let userInputString = prompt(
  "Enter a list of comma-separated froyo flavors:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

let userFlavorsArray = userInputString.split(',');
let flavorObject = getFlavorCount(userFlavorsArray);

displayFlavorsCount(flavorObject);

/*----------------------FUNCTIONS-------------------------- */

//getFlavorCount
function getFlavorCount(flavorsArray){
    //Create an object to store the flavors and count for each
    const flavorObj = {};
    //for each element in flavorArray
    //if flavor exists in flavorObject
    //increment flavor by one
    //if not, create key and assign the value '1' to it.
    for( const flavor of flavorsArray){
        if(flavorObj[flavor]){
            flavorObj[flavor]+= 1;
        } else {
            flavorObj[flavor]= 1;
        }
    }
    return flavorObj;
}
//displayFlavors and Count 
function displayFlavorsCount(flavorsObj){
    console.log(flavorsObj);
}