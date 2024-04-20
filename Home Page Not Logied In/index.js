document.addEventListener('DOMContentLoaded', function() {
    // Function to handle click on sections
    function handleSectionClick(event) {
        const sectionText = event.target.textContent.trim();
        console.log(`Clicked on section: ${sectionText}`);
        // Add your custom logic here based on the clicked section
        // Example: Show/hide content, navigate to another page, etc.
    }

    // Add click event listeners to all sections
    const sections = document.querySelectorAll('.section, .section1, .section2, .section3, .section4, .section5, .section6, .section7');
    sections.forEach(section => {
        section.addEventListener('click', handleSectionClick);
    });

    // Function to handle mouseover on profile avatar
    function handleAvatarMouseover(event) {
        event.target.style.border = '2px solid #333';
    }

    // Function to handle mouseout on profile avatar
    function handleAvatarMouseout(event) {
        event.target.style.border = 'none';
    }

    // Add mouseover and mouseout event listeners to profile avatar
    const profileAvatar = document.querySelector('.avatar-icon');
    profileAvatar.addEventListener('mouseover', handleAvatarMouseover);
    profileAvatar.addEventListener('mouseout', handleAvatarMouseout);

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        console.log('Form submitted');
        // Add your custom form handling logic here
        // Example: Validate inputs, make AJAX request, etc.
    }

    // Add submit event listener to the form
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

    // Function to handle click on payment and box-info
    function handlePaymentClick() {
        console.log('Payment clicked');
        // Add your custom logic here for payment handling
    }

    function handleBoxInfoClick() {
        console.log('Box Info clicked');
        // Add your custom logic here for box info handling
    }

    // Add click event listeners to payment and box-info
    const payment = document.querySelector('.payment');
    const boxInfo = document.querySelector('.box-info');
    payment.addEventListener('click', handlePaymentClick);
    boxInfo.addEventListener('click', handleBoxInfoClick);
});

