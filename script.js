const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getAkanName() {
    const dateofBirth = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    if (!dateofBirth || !gender) {
        alert("Please enter your date of birth and select your gender.");
        return;
    }
    const date = new Date(dateofBirth);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are 0-based
    const day = date.getDate();

    // Validate February 29 for leap years
    if (month === 2 && day === 29 && !isLeapYear(year)) {
        alert(`${year} is not a leap year, so February 29 is invalid.`);
        return;
    }

    const dayIndex = date.getDay(); //0 (Sunday) to 6 (Saturday)

    let akanName;
    if (gender === "male") {
        akanName = maleNames[dayIndex];
    }
    else if (gender === "female") {
        akanName = femaleNames[dayIndex];
    
    }
    document.getElementById("result").textContent = 'Your Akan name is ${akanName}';
}