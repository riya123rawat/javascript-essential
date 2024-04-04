function logText() {
  console.log("Bernadette had a boat");
}

// Call the function
logText();

function logVehicle(vehicle) {
  console.log(`Bernadette had a ${vehicle}`);
}

// Example usage:
logVehicle("car");
logVehicle("bike");
logVehicle("scooter");

 //Function to compute the costof p1 and p2
 function calculateNewBalance(balance,cost){
 const newBalance = balance - cost;
 console.log(`Your new balance is ${newBalance} kr`);

}
 const currentBalance = 1500; 
  const itemCost = 200;
calculateNewBalance(currentBalance, itemCost);

function calculateCircleArea(radius) {
              
 return Math.PI * radius * radius;
          }
          
          
          const radius = 5; 
          const area = calculateCircleArea(radius);
          console.log("The area of the circle with radius", radius, "is:", area);


          function sumThreeNumbers(x, y, z) {
            return x + y + z;
        }
        
        // First call: Three numbers as arguments
        const result1 = sumThreeNumbers(3, 4, 5);
        console.log("Result 1:", result1);
        
        // Second call: Two numbers and a text as arguments
        const result2 = sumThreeNumbers(3, "hello", 5);
        console.log("Result 2:", result2);
        
        // Third call: A text and two numbers as arguments
        const result3 = sumThreeNumbers("hello", 4, 5);
        console.log("Result 3:", result3);
        

           
           
          




         


    



 










