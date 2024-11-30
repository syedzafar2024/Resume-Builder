// script.ts
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var profilePictureInput = document.getElementById("profilePicture");
    var profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n      ".concat(profilePictureFile ? "<img src=\"".concat(URL.createObjectURL(profilePictureFile), "\" alt=\"Profile Picture\">") : "", "\n      <h2>").concat(name, "</h2>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(phone, "</p>\n      \n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
    resumeOutput.style.display = "block";
    document.getElementById("printButton").style.display = "block";
}
function printResume() {
    window.print();
}
