

// Array to hold box objects
let boxes = [
    {
        id: 1,
        leader: "Mishary",
        balance: 200000,
        dept: "2000SR",
        goalAchieved: "75%",
        maxVlaue: 100000,
        MinValue: 30000,
        members: [],
        dataOfCreation: "10-2-2004",
        transections: []
    },
    {
        id: 2,
        leader: "Ahmed",
        balance: 200000,
        dept: "20003SR",
        goalAchieved: "7%",
        maxVlaue: 200000,
        MinValue: 239999,
        members: [],
        dataOfCreation: "10-2-2004",
        transections: []
    }
    // Add more box objects here
];

function renderBoxes() {
    const boxesContainer = document.querySelector('.boxes');
    boxesContainer.innerHTML = '<h1>Your Boxes</h1>';  // Clears the previous content and adds title

    if (boxes.length === 0) {
        boxesContainer.innerHTML += '<p>You are not in any box, do you want to <a href="#">join</a> or <a href="#">create</a> a new box?</p>';
    } else {
        boxes.forEach(box => {
            const boxHTML = `
                <div class="box">
                    <h3><i class="fa-solid fa-box"></i> Box ${box.id}</h3>
                    <div class="box-details" class="grid-container">
                        <div class="box-column">
                            <h4 class="box-info">Leader: <span>${box.leader}</span></h4>
                        </div>
                        <div class="box-column">
                            <h4 class="box-info">Dept: <span>${box.dept}</span></h4>
                        </div>
                        <div class="box-column">
                            <h4 class="box-info">Goal achieved: <span>${box.goalAchieved}</span></h4>
                        </div>
                        <div class="box-column">
                            <button class="btn-showDetails" id="btn-showDetails-${box.id}">Show Options</button>
                        </div>
                    </div>
                </div>`;
            boxesContainer.innerHTML += boxHTML;
        });

        // Attach modal events after boxes are rendered
        attachModalEvents();
    }
}

function attachModalEvents() {
    boxes.forEach(box => {
        document.getElementById(`btn-showDetails-${box.id}`).addEventListener('click', function () {
            showModal(box);
        });
    });
}

function showModal(box) {
    var modal = document.getElementById("myModal");
    var boxDetails = document.getElementById('boxDetails');
    boxDetails.innerHTML = `
        
    <div class="boxDetail" id="modal-leader-name">
        <p>Leader: ${box.leader}</p>
        <p>Balance: ${box.Balance} </p>
    </div>
    <div class="boxDetail" id="modal-dept-and-goal">
        <p>Dept: ${box.dept}</p>
        <p>Goal Achieved: ${box.goalAchieved}</p>
    </div>
    <div class="boxDetail" id="modal-max-min">
        <p>Maximum Value: ${box.maxVlaue}</p>
        <p>Minimum Value: ${box.MinValue}</p>
    </div>
    <div class="boxDetail" id="modal-date-of-creation">
        <p>Date of Creation: ${box.dataOfCreation}</p>
    </div>
        `;
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Example functions for the options list
function askForLoan() { console.log('Asking for a loan...'); }
function showMembers() { console.log('Showing members...'); }
function payDept() { console.log('Paying dept...'); }
function leaveBox() { console.log('Leaving the box...'); }

window.onload = renderBoxes;

// -------------------------------------------------------------------------------------


