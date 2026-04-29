const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akousa", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];

function getAkanName() {
    const dateofBirth = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    if (!dateofBirth || !gender) {
        alert("Please enter your date of birth and select your gender.");
        return;
    }
}
const date = new Date(dateofBirth);
const dayIndex = date.getDay(); //0 (Sunday) to 6 (Saturday)

let akanName;
if (gender === "male") {
    akanName = maleNames[dayIndex];
}
else if (gender === "female") {
    akanName = femaleNames[dayIndex];
    
}
document.getElementById("result").textContent= 'Your Akan name is $(akanName)' ;