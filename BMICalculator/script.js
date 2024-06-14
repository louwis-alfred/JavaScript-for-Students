var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

function selectGender(gender) {
    // Reset border color of previously selected option (if any)
    const selectedOption = document.querySelector('.gender.selected');
    if (selectedOption) {
        selectedOption.style.borderColor = ''; // Reset to default
        selectedOption.classList.remove('selected');
    }

    // Find the clicked gender option by ID
    const option = document.getElementById(`${gender}Option`);
    // Will add information of the selected class
    option.classList.add('selected');
    
    // Example of extracting information (you can adjust as per your specific need)
    console.log(`Selected gender: ${gender}`);
}

