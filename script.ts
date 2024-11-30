// script.ts

function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
  
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
    resumeOutput.innerHTML = `
      ${profilePictureFile ? `<img src="${URL.createObjectURL(profilePictureFile)}" alt="Profile Picture">` : ""}
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    resumeOutput.style.display = "block";
    document.getElementById("printButton")!.style.display = "block";
  }
  
  function printResume() {
    window.print();
  }
  