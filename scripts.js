//Print Even Numbers
function displayEvenNumbers() {
    const even_output = document.getElementById('evenNumbers'); //Display the output here
    even_output.innerHTML = '';                                 // Clear previous output
    //Loop to iterate from 0 to 10
    for (let i = 2; i <= 10; i += 2) {
        even_output.innerHTML += i + ' ';                       //Append the current value followed by space until iteration complete
    }
}

//Number > 100 using prompt()
function number_prompt(){
    let num;
    do{
        num = prompt("Enter a number : ");                     //Enter the number 
    }
    while(num<=100 && num!=null && num!=" ");                 //Prompt until number is greater than 100
    if(num != null && num != " "){                            //Check number is not null or no value
        //Display the number which is greater than 100.
        const num_output = document.getElementById('displayNum');
        num_output.textContent = `You entered: ${num}`;
    }
}

//Finding the prime number
function findPrimeNums(){    
    let n1 = prompt("Enter a number : ");                       //Prompt to enter the number
    const prime_output = document.getElementById('primeNum');   //Display the value here
    prime_output.innerHTML = '';                                //Clear the earlier output
    for (i=0; i<=n1; i += 1) {                                  //Loop to iterate from 0 to n
        if(i%2==0){                                             //Check the remainder is zero                           
            prime_output.innerHTML += i + ' ';
        }
    }
    
}

//Reversing a number
function reverseNumber(){
    let n2 = prompt("Enter the number to be reversed");        //Input the number
    let nr = document.getElementById('numEntered');
    nr.textContent = `You entered the number: ${n2}`;          //Display the number entered
    if(n2 != null && n2 != ''){                                //Check the number not null or no value
        let rev_num = n2.split('').reverse().join('');         //Spit, reverse and join the number
        const rev_val = document.getElementById('revNum');
        rev_val.textContent = `The number is ${rev_num}`;      //Display the reversed number here
    }
}

//Sorting the word into alphabetical order
function alphabeticalOrder(){
    let words = prompt("Enter the string here : ");            //Enter the string
    let w = document.getElementById('wordEntered'); 
    w.textContent = `You entered the words: ${words}`;        //Display the entered word on the screen
    let split_words = words.split('');                        //Split the string into character array (no space between quote)
    split_words.sort();                                       //Sort them
    sorted = split_words.join('');                            //Join the sorted characters into a string
    const alpha_output = document.getElementById('alphabetOrder');
    alpha_output.textContent=`Word in alphabetical order : ${sorted}`; //Display the output
}

//Counting the number of vowels in a string
function vowelsCount(){
    let str_words = prompt("Enter the string");                //Enter the string here
    let str1 = document.getElementById('stringEntered');        
    str1.textContent = `You entered the string: ${str_words}`; //Display the entered string
    str_words = str_words.toLowerCase();                       //Convert the string to lowercase
    vowel_lists = 'aeiou';                                     //vowel list
    let vowel_count = 0;                                      
    for(let str_char of str_words){                            //Iterate through each character in the input string
        if(vowel_lists.includes(str_char)){                    //Comparing with vowel list
            vowel_count++;                                     //Increment the count
        }
    }
    const vowel_output = document.getElementById('vowelsCount');
    vowel_output.textContent = `The count is ${vowel_count}`;   //Display the count 
}

//Capitalize the first letter of each word in a sentence
function capitalizeFirstLetter(){
    let text_str = prompt("Go ahead and input the sentence");
    let ew = document.getElementById('sentenceEntered');
    ew.textContent = `You entered the sentence: ${text_str}`;

    let each_words = text_str.split(' ');                                        //Split the sentence into words
    for(i = 0; i < each_words.length; i++){
        each_words[i] = each_words[i].charAt(0).toUpperCase() + each_words[i].slice(1); //Uppercase the first letter of each word
        capital_words = each_words.join(' ').replaceAll(",", " ");        //join the words to sentence 
    }                                                                     //Replace ',' to space in the output
    const sentence_output = document.getElementById('textCapitalize');
    sentence_output.textContent = `The output : ${capital_words}`;
}


//Function to find the current date
function currentDate(){
    const dt = new Date();
    const year = dt.getFullYear(); //get year
    const month = dt.getMonth();   //get month
    const dte = dt.getDate();      //get day
    //Display the date
    document.getElementById('dt_val').innerHTML = `${dte}-${month}-${year}`;
}

//Calculate the number of days left for Christmas
function calculateDate(){
    let today = new Date();
    let christmasYear = today.getFullYear();
    
    if (today.getMonth() == 11 && today.getDate() > 25) {
      christmasYear = christmasYear + 1;
    }
    
    let christmasDate = new Date(christmasYear, 11, 25);
    let dayMilliseconds = 1000 * 60 * 60 * 24;
    
    let remainingDays = Math.ceil(
      (christmasDate.getTime() - today.getTime()) /
       (dayMilliseconds)
    );
    document.getElementById('daysLeft').innerHTML = `The remining days left until Christmas is ${remainingDays}.`;

}

//Sorting an array
function sortingFunction(){
    const array_list = [3,8,7,6,5,-4,3,2,1];
    const l = document.getElementById('numLists');
    //Traverse through the array using for loop
    for(let i=0; i<array_list.length; i++){
        l.textContent = `The numbers to be sorted are: ${array_list}`;
    }
    let a = array_list.sort();
    const sa = document.getElementById('sortedNum');
    sa.textContent = `The sorted array is ${a}`;
}

//Display last day of the month
function monthLastDays(year, month){
    let d = new Date(year, month + 1, 0).getDate();
    document.getElementById('lastDays').innerHTML = `${d}`;
}

//Calculating the age
function ageCalculator() {
    const tod = new Date();                                   //Create an object of Date()
    const currentYear = tod.getFullYear();                    //Finding current year
    const yearOfBirth = prompt("Enter your year of birth");   //Enter the year of birth
    const age = currentYear - yearOfBirth;                    //Calculate the age by finding the difference between current year and the year inputted
    
    //Display the calculated value
    const c_age = document.getElementById('calculatedAge');
    c_age.textContent = `The age is ${age}`;
}
      
//function prompting for age of a person to check if he/she is under 18 or not.
function checkAge(){
    //Enter age
    const your_age = prompt("Enter your age");
    //Check age greater than and equal to 18
    if(your_age >= 18){
        return true;
    }
    else{ 
        return confirm("Did your parents allow you?"); //create pop up
    }
}

//function to find the least number from two numbers
function showMinNumber(){
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);

    //Check which number is the smallest
    if(a < b){
        document.getElementById('minNumber').innerHTML = "The least number is "+a;
    }
    else{
        document.getElementById('minNumber').innerHTML = "The least number is "+b;
    }    
}

//funtion to find the exponential value of a number
function expo(){
    var base = parseFloat(document.getElementById('base_num').value);  //Base value
    var exp = parseInt(document.getElementById('expo_num').value);     //Exponential value
    var val = Math.pow(base, exp);                                     //pow() function to calculate the exponential value

    //Display the output
    document.getElementById('exponential').innerHTML = "The number " +base+ " to the power of " + exp + " is " + val;
}


//Football points calculator
function calculatePoints() {
    const pointsForWin = 3;      //Assigning 3 points for Win
    const pointsForDraw = 1;     //Assigning 1 points for Draw
    const pointsForLoss = 0;     //Assigning 0 points for Loss

    //Retrive the value for win, draw and loss inputted
    const wins = parseInt(document.getElementById('wins').value);
    const draws = parseInt(document.getElementById('draws').value);
    const losses = parseInt(document.getElementById('losses').value);

    //Calculating the total points
    totalPoints = (wins * pointsForWin) + (draws * pointsForDraw) + (losses * pointsForLoss);
    //Display the result
    document.getElementById('result').innerText = "Total points: " + totalPoints;
}

//Calculate the differences between the time
function showTimeDiff(){
    const date1 = new Date(document.getElementById('date1').value);   //Input first date
    const date2 = new Date(document.getElementById('date2').value);   //Input second date
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const date1_ms = date1.getTime();
    const date2_ms = date2.getTime();
    
    // Calculate the difference in milliseconds
    const difference_ms = Math.abs(date2_ms - date1_ms);

    const daysDifference = Math.round(difference_ms / oneDay);
    //Display the output
    document.getElementById('showTime').innerText = "Difference in days: " + daysDifference;
}

//Calculate the ticket price based on age
function calculatePersonAge(){
    //Input the age of the person in the textbox
    let person_age = document.getElementById('person_age').value;
    //Declare price variable
    let price;

    //Checking the conditions using if and assign the price value according to the age.
    if(person_age < 12){  
        price=5;
    }
    else if(person_age < 18){
        price = 10;
    }
    else if(person_age < 60){
        price = 20;
    }
    else{
        price = 15;
    }
    document.getElementById('ageCheck').innerHTML = 'Ticket price: $' +price; //Display the output on the HTML Page
}