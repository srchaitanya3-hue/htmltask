function checkPrice() {

    let age = Number(document.getElementById("age").value);
    let showtime = document.getElementById("showtime").value.toLowerCase();

    let result = document.getElementById("result");

    if (isNaN(age) || age < 0) {
        result.innerText = "Invalid Age";
    }
    else if (age < 12) {
        result.innerText = "Child Discount Ticket Price: ₹5";
    }
    else if (age >= 65) {
        result.innerText = "Senior Citizen Ticket Price: ₹7";
    }
    else if (showtime === "matinee") {
        result.innerText = "Adult Matinee Ticket Price: ₹10";
    }
    else {
        result.innerText = "Adult Evening Ticket Price: ₹15";
    }
}