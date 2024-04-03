function getFormvalue() {
    //Write your code herefunction getFormvalue() {
    // Get the values of first name and last name from the form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Combine first name and last name and display in an alert
    var fullName = firstName + " " + lastName;
    alert(fullName);
}

}
