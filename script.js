
let tr = document.querySelector('tr');
let tbody = document.querySelector('tbody');
let total = document.querySelector('tfoot td');
let valueTotal = document.getElementById('total');
let subTotal = document.getElementById('sub-total');
// let discount = document.getElementById('discount');
let tax = document.getElementById('tax');

// Initialize the array
let values = [];

// Get all the buttons with the class "addButton"
const addButtons = document.getElementsByClassName('addButton');

// Loop through each button and add a click event listener
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener('click', function() {
    // Get the value from the clicked button
    const value = this.value;
    // Get all <td> elements
    const tds = document.querySelectorAll('#myTable td');
    // Iterate through each <td> element and remove it
    tds.forEach(function(td) {
    td.parentNode.removeChild(td);
  });
    // store buttons values in array when clicked
    values.push(value);
    
    // set initial value for invoice
    let invoice = 0;

    // loop for each value in array
    values.forEach(calculatePrice);

    // function to work on array values
    function calculatePrice (item, index){

        var split = item.split(':');
        var productName = split[0];
        var productPrice = split[1];
        // set the product price for variable invoice
        invoice += +productPrice;

        // calc others values 
        var calcTax = invoice * 13/100;
        // var calcDiscount = invoice * 30/100;
        var calcTotal = invoice + calcTax;

        // create <tr> element and create and store <td> element in tbody
        var newRow = document.createElement('tr');
        var data = `<td>${productName}</td><td>${productPrice}</td>`;
        newRow.innerHTML = data;
        tbody.appendChild(newRow);

        subTotal.innerHTML = invoice;
        tax.innerHTML = calcTax;
        // discount.innerHTML = calcDiscount;
        valueTotal.innerHTML = calcTotal;
       
      
    }

  });


    }