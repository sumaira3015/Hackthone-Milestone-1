"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get references to the button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('Skills');
// Function to toggle the visibility of the skills section
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // Show the skills section
    }
    else {
        skillsSection.style.display = 'none'; // Hide the skills section
    }
});
