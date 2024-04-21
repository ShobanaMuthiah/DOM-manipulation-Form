document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var foodArray = [];
    var checkboxes = document.querySelectorAll('input[name="food"]:checked');
    checkboxes.forEach(function(checkbox) {
        foodArray.push(checkbox.value);
    });
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    if (foodArray.length < 2) {
        document.getElementById("food-error").innerText = "(Please select at least 2 food items)";
        return; 
    } else {
        document.getElementById("food-error").innerText = ""; 
    }



    var table = document.getElementById("details").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7)
    ];
    cells[0].innerHTML = firstName;
    cells[1].innerHTML = lastName;
    cells[2].innerHTML = address;
    cells[3].innerHTML = pincode;
    cells[4].innerHTML = gender;
    cells[5].innerHTML = foodArray.join(', ');
    cells[6].innerHTML = state;
    cells[7].innerHTML = country;

   
    document.getElementById("form").reset();
});