        // Sum of numbers

function sum(num1 , num2){
    return num1 + num2;
}
console.log(sum(55 , 25));



        // Subtract Of numbers
    function Subtract(num1 , num2){
        return num1 - num2;
        
    }
    console.log(Subtract(50 , 20));

        // Multiplication of Numbers
function Multiplication(num1 , num2){
    return num1 * num2;

}
console.log(Multiplication(3 ,5));


        // Division of Numbers
function Division(num1 , num2){
    return num1 / num2 ;

}
console.log(Division(15 , 3));

        // Remainder of Numbers
function Remainder(num1 , num2){
    return num1 % num2;

}
console.log(Remainder(10 , 3));

            // Is Positive
    function checkpositive( number){
        if (number < 0 ){
            return "not positive "
        }else {
            return "positive number"
        }
    }
    console.log(checkpositive(55));
    
            // Is Negative
function checknegative( number){
    if (number > 0 ){
        return "not negative"
    } else {
        return "Negative "
    }
}
console.log(checknegative (-2));

            // Check Even
function checkevenandodd(number){
    if (number % 2 == 0 ){
        return "Even"
    } else{
        return "odd"
    }
}
console.log(checkevenandodd(3));

        // Equal and Not Equal
function checkequal(num1 , num2){

    if ( num1 == num2){
        return "equal"
    } else {
        return "not equal"
    }
}
console.log(checkequal(2 , 2));


            // Compare Number
function checkgreaterandsmaller( num1 , num2){
    if ( num1 > num2){
        return "Greater"
    } else {
        return "smaller"
    }
}
console.log(checkgreaterandsmaller(5 , 10));


function getname(FirstName , LastName){
    return FirstName +" " + LastName;

}
console.log(getname("Sohaib" , "Ahmed"));

            // Get Grade 
let grade = 30;
if (grade >= 40 && grade <= 100){
    console.log("PASS");
    
} else{
    console.log("FAIl");
    
}


            // IS Teenger
let age = 55;
if (age >=13  && age <=19){
    console.log("Teenager");
    
} else{
    console.log("Not a Teenager");
    
}


function getname(){
    console.log("Hello , Sohiab");
    
    
}
getname ()

            // Is Eligible To Vote
let age = 18;
if ( age >= 18){
    console.log("Eligible ");
    
}else {
    console.log("Not Eligible ");
    
}


            // Check Temperature 
let temp = 30;
if (temp >=30){
    console.log("HOT");
    
} else if(temp < 10){
    console.log("COld");
    
} else {
    console.log("NORMAL");
    
}

        // Get Triangle Type 
function Triangle (side1, side2, side3){
    if (side1 === side2 && side2 === side3){
        return 'equilateral'
    }
    else if (side1 === side2 || side2 === side3 || side1=== side3){
        return 'isoceles'
    }
    else {
        return 'scalene'
    }
}

console.log(Triangle(4, 4, 4))


function calculateprice(price , discount){
    let calculateprice = (price * discount) / 100;
    let finalprice = price - calculateprice;
    return finalprice; 
}
let result = calculateprice(100 , 2)
console.log(result);


        // Is Password Valid
function Password(password){
    if(password.length >= 8 ){
        console.log("Valid Password");
        
    } else {
        console.log("Too Short ");
        
    }
}
console.log(Password("alauddinbugti"));