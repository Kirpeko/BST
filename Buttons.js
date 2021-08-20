
/*\ Array Functionality for BTree \*/

let number_list = [];

let single_number = [""];  // set to string for adding separate digits together to a whole number. example; "1" + "0" = "10"


/*\ Define html Buttons \*/

let button_one = document.querySelector("#button1");
let button_two = document.querySelector("#button2");
let button_three = document.querySelector("#button3");
let button_four = document.querySelector("#button4");
let button_five = document.querySelector("#button5");
let button_six = document.querySelector("#button6");
let button_seven = document.querySelector("#button7");
let button_eight = document.querySelector("#button8");
let button_nine = document.querySelector("#button9");
let button_zero = document.querySelector("#button0");
let button_finish = document.querySelector("#button_finish");
let button_submit = document.querySelector("#button_submit");

button_one.addEventListener("click", function(){
    single_number.push(1)
});

button_two.addEventListener("click", function(){
    single_number.push(2)
});

button_three.addEventListener("click", function(){
    single_number.push(3)
});

button_four.addEventListener("click", function(){
    single_number.push(4)
});

button_five.addEventListener("click", function(){
    single_number.push(5)
});

button_six.addEventListener("click", function(){
    single_number.push(6)
});

button_seven.addEventListener("click", function(){
    single_number.push(7)
});

button_eight.addEventListener("click", function(){
    single_number.push(8)
});

button_nine.addEventListener("click", function(){
    single_number.push(9)
});

button_zero.addEventListener("click", function(){
    single_number.push(0)
});


/*\ Submit Button to start next number \*/

button_submit.addEventListener("click", function(){
    console.log("Single Number " + single_number)
    let sum = single_number.reduce((x, y) => x + y);
    if(sum === ""){
        sum = "0"
    }                                           // Submit button converts single button inputs as strings to int and adds
    console.log("Sum " + sum)                  // to number list
    sum = parseInt(sum);
    number_list.push(sum);
    single_number.splice(1, single_number.length)
    console.log("Number List " + number_list)
    console.log("Single Number" + single_number)
});


/*\ Finish Button to complete number input \*/

button_finish.addEventListener("click", function(){
    single_number.splice(1, single_number.length);
    console.log(number_list);
    let form = document.createElement("form");
    form.hidden=true;
    form.method="POST";
    form.action="/";
    let input = document.createElement("input");
    input.name="numbers";
    input.id="numbers"
    input.value=JSON.stringify(number_list);
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
});
