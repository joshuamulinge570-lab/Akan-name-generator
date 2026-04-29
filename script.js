// Akan names
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Leap year checker
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Form submit event
document.getElementById("form-submit").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  getAkanName();
});

function getAkanName() {
  const day = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // Validate inputs
  if (!day || !month || !year || !gender) {
    alert("Please fill in all fields.");
    return;
  }

  // Leap year validation
  if (month === 2 && day === 29 && !isLeapYear(year)) {
    alert(`${year} is not a leap year, so February 29 is invalid.`);
    return;
  }

  // Create date object
  const birthDate = new Date(year, month - 1, day);

  // Invalid date check
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    alert("Invalid date entered.");
    return;
  }

  // Day index
  const dayIndex = birthDate.getDay();

  let akanName = "";

  if (gender === "male") {
    akanName = maleNames[dayIndex];
  } else if (gender === "female") {
    akanName = femaleNames[dayIndex];
  }

  // Display result
  const resultbox = document.getElementById("result");
  resultbox.textContent = `You were born on a ${daynames[dayIndex]} and your Akan name is ${akanName}.`;
}
