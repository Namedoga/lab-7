   
   
   var form = document.getElementById('form');
   // Mouse Events: Detect when a button is hovered over and when the hover ends. Display messages for each state.
   
   var hoverButton = document.getElementById('hoverButton');
        hoverButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'lightblue';
             hoverButton.textContent = "You're hovering!"

        });
        hoverButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
              hoverButton.textContent = "Hover Over Me"
        });



    // Keyboard Events: Capture input from a text field, displaying the last key pressed.


    var form = document.getElementById('form');
    var textInput = document.getElementById('textInput');
    var displayArea = document.getElementById('displayArea')
    textInput.addEventListener('keydown', function(event) {
  
    displayArea.textContent = event.key;
    });


    // Form Events: Handle form submission, preventing the default behavior and displaying a submission message.





document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    var submissionMessage = document.getElementById('submissionMessage');

  
    form.addEventListener('submit', function(event) {
        event.preventDefault();


        submissionMessage.textContent = "Form submitted successfully!";
    });
});



// Focus Events: Update a message when an input field gains or loses focus.

function validateEmail() {
    var email = document.getElementById('emailInput');
    var emailValue = email.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailPattern.test(emailValue)) {
        email.style.backgroundColor = 'green'; 
    } else {
        email.style.backgroundColor = 'pink'; ``
        console.log('Invalid email.');
    }
}





// Event Delegation: Use a container element with several buttons. Use event delegation to handle clicks on any button in the container and display a unique message for each.



const container = document.getElementById('container');

container.addEventListener('click', function(event) {
   
    if (event.target.tagName === 'BUTTON') {
        alert('You clicked: ' + event.target.textContent);
     
        event.target.style.backgroundColor = 'yellow'; 
    }
});




 