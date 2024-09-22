// Get references to the button and the skills section
onst toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skicllsSection = document.getElementById('Skills') as HTMLElement;

// Function to toggle the visibility of the skills section
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // Show the skills section
    } else {
        skillsSection.style.display = 'none'; // Hide the skills section
    }
});
export{}
