// Select the theme selector dropdown
const themeSelector = document.querySelector('#theme-selector');

// Function to change theme based on the selected value
function changeTheme() {
    // Check the selected value
    if (themeSelector.value === 'dark') {
        // Add dark class to body and update the logo image
        document.body.classList.add('dark');
        document.querySelector('footer img').src = 'images/byui-logo_white.jpg';
    } else {
        // Remove dark class and revert the logo image
        document.body.classList.remove('dark');
        document.querySelector('footer img').src = 'images/byui-logo_blue.jpg';
    }
}

// Add event listener to listen for changes in the theme selector
themeSelector.addEventListener('change', changeTheme);