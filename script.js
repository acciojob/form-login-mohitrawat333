function getFormvalue() {
    function getFormvalue() {
    // Get the values of first name and last name from the form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Split the last name to handle cases with middle names
    var lastNameParts = lastName.split(" ");
    var lastNameToDisplay = lastNameParts.join(" ");

    // Combine first name and last name and display in an alert
    var fullName = firstName + " " + lastNameToDisplay;
    alert(fullName);
}

