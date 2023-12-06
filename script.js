window.onload = function() {
    var table = document.getElementById("customers");
    
    let retrievedFits = localStorage.getItem("allFits");
    if (retrievedFits == null) {
        retrievedFits = [];
        return 
    }

    var parsedFits = JSON.parse(retrievedFits)

    for (let i = 0; i < parsedFits.length; i++) {
        table.innerHTML += "<tr><td>" + parsedFits[i].make.toUpperCase() + "</td><td>" + parsedFits[i].model.toUpperCase() + "</td><td>" + parsedFits[i].registration.toUpperCase() + "</td><td>" + parsedFits[i].typeOfFit + "</td><td>" + parsedFits[i].paid + "</td><td>" + parsedFits[i].carCheck + "</td><td>" + '<input type="button" value="Delete" onclick="deleteRow(this)"/>' +"</td></tr>";
    }

};


function  save() {
    var existingFits = JSON.parse(localStorage.getItem("allFits"));
    if (existingFits == null) existingFits = [];


    var make = document.getElementById('make-input-field').value;
    var model = document.getElementById('model-input-field').value;

    var registration = document.getElementById('registration-input-field').value;
    var typeOfFit = document.getElementById('fit-selection').value;

    var paid = document.getElementById('paid-selection').value;
    var carCheck = document.getElementById('carcheck-selection').value;

    if (make == "" || model == "" || registration == "" || typeOfFit == "" || paid == "" || carCheck == "" || typeOfFit == "-------Select a Type of Fit----------") {
        
    } else {
        var fit = {
            "make": make,
            "model": model,

            "registration": registration,
            "typeOfFit": typeOfFit,
            
            "paid": paid,
            "carCheck": carCheck,
        }

        localStorage.setItem("entery", JSON.stringify(fit));

        existingFits.push(fit)
        localStorage.setItem("allFits", JSON.stringify(existingFits));

        
        location.reload();

    }
}


function getInputDetails() {

    var make = document.getElementById('make-input-field').value;
    var model = document.getElementById('model-input-field').value;

    var registration = document.getElementById('registration-input-field').value;
    var typeOfFit = document.getElementById('fit-selection').value;

    var paid = document.getElementById('paid-selection').value;
    var carCheck = document.getElementById('carcheck-selection').value;

    save();


    if (registration == "" || typeOfFit == "" || paid == "" || carCheck == "" || typeOfFit == "-------Select a Type of Fit----------") {
        alert("Make sure all input fields are filled in")
    } else {

        let table = document.getElementById('customers');
        var row = document.createElement('tr');
        
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        var td5 = document.createElement('td');
        var td6 = document.createElement('td');

        
        let td7 = document.createElement('button');
        
        td1.innerHTML = make.toUpperCase();
        td2.innerHTML = model.toUpperCase();
        
        td3.innerHTML = registration.toUpperCase();
        td4.innerHTML = typeOfFit;
        
        td5.innerHTML = paid;
        td6.innerHTML = carCheck;
        td7.innerHTML='<input type="button" value="Delete" onclick="deleteRow(this)"/>';


        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        row.appendChild(td7);

        table.children[0].appendChild(row);

        clearInputFields();
    }
}


function clearInputFields() {
    document.getElementById("make-input-field").value = "";
    document.getElementById("model-input-field").value = "";

    document.getElementById("registration-input-field").value = "";
    document.getElementById("fit-selection").value = "-------Select a Type of Fit----------";

    document.getElementById("paid-selection").value = "❌ No";
    document.getElementById("carcheck-selection").value = "❌ No";
}

function deleteRow(r) {
    var selectedIndex=r.parentNode.parentNode.rowIndex;
    document.getElementById('customers').deleteRow(selectedIndex);
    
    let retrievedFits = localStorage.getItem("allFits");
    if (retrievedFits == null) {
        retrievedFits = [];
        return 
    }

    var parsedFits = JSON.parse(retrievedFits)
    parsedFits.splice([selectedIndex-1], 1);
    localStorage.setItem("allFits", JSON.stringify(parsedFits));
    location.reload();
}
