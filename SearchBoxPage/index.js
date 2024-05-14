// script.js

document.addEventListener('DOMContentLoaded', function() {
    const boxNames = document.querySelectorAll('.recreational-outings-box');

    // Attach click event listener to each box name
    boxNames.forEach(boxName => {
        boxName.addEventListener('click', function() {
            // Open a modal/dialog box with options
            showModal(boxName.textContent); // Pass box name to the modal
        });
    });


    

    // Function to show a modal/dialog box with options
    function showModal(boxName) {
        // Create a modal element
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Choose an action for "${boxName}":</p>
                <button onclick="joinBox()">Join</button>
                <button onclick="sendRequest()">Show Members</button>
                <button onclick="sendRequest()">show more information</button>
                <button onclick="sendRequest()">send private message to the admin</button>
                <button onclick="sendRequest()">close the window</button>
            </div>
        `;
        
        // Append modal to the document body
        document.body.appendChild(modal);

        // Close modal when clicking on the close button
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modal); // Remove modal from the DOM
        });
    }

    // Function to handle "Join" action
    function joinBox() {
        alert('You clicked Join!'); // Placeholder action, replace with actual logic
    }

    // Function to handle "Send Request" action
    function sendRequest() {
        alert('You clicked Send Request!'); // Placeholder action, replace with actual logic
    }
});





