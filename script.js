// Validate from inputs before submiting data
function validateForm(){
    var name = document.getElementById("name").value;
    var PhoneNumber = document.getElementById("phone").value;
    var Adress = document.getElementById("adress").value;
    var Product = document.getElementById("product").value;
    var Price = document.getElementById("price").value;
    var Time = document.getElementById("time").value;

    if(name == ""){
        alert("Name is required");
        return false;
    }

    if(PhoneNumber == ""){
        alert("PhoneNumber is required");
        return false;
    }

    if(Adress == ""){
        alert("Adress is required");
        return false;
    }

    if(Product == ""){
        alert("Product is required");
        return false;
    }

    if(Price == ""){
        alert("Price is required");
        return false;
    }

    if(Time == ""){
        alert("Time is required");
        return false;
    }

    return true;
}

//function to show data
function showData(){
    //Saving files as Json file
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.PhoneNumber + "</td>";
        html += "<td>" + element.Adress + "</td>";
        html += "<td>" + element.Product + "</td>";
        html += "<td>" + element.Price + "</td>";
        html += "<td>" + element.Time + "</td>";
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button> <button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
        html += "<tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Loads All data when document or page loaded
document.onload = showData();

function AddData(){
    if(validateForm() == true){
        var name = document.getElementById("name").value;
        var PhoneNumber = document.getElementById("phone").value;
        var Adress = document.getElementById("adress").value;
        var Product = document.getElementById("product").value;
        var Price = document.getElementById("price").value;
        var Time = document.getElementById("time").value;

        //Saving files as Json file
        var peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
    }

    peopleList.push({
        name : name,
        PhoneNumber : PhoneNumber,
        Adress : Adress,
        Product : Product,
        Price : Price,
        Time : Time,
    });

    //Saving files as Json file then showing results
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
    document.getElementById("time").value = "";
}

//Deleting data from local storage
function deleteData(index){

    //Saving files as Json file
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

//Editing/Updating data from local storage
function updateData(index){
    //submit button hide and update butoon shows up
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    //Saving files as Json file
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("phone").value = peopleList[index].PhoneNumber;
    document.getElementById("adress").value = peopleList[index].Adress;
    document.getElementById("product").value = peopleList[index].Product;
    document.getElementById("price").value = peopleList[index].Price;
    document.getElementById("time").value = peopleList[index].Time;

    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){

            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].PhoneNumber = document.getElementById("phone").value;
            peopleList[index].Adress = document.getElementById("adress").value;
            peopleList[index].Product = document.getElementById("product").value;
            peopleList[index].Price = document.getElementById("price").value;
            peopleList[index].Time = document.getElementById("time").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));

            showData();

            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("adress").value = "";
            document.getElementById("product").value = "";
            document.getElementById("price").value = "";
            document.getElementById("time").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}