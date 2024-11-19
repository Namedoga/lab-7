   
   
   
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