   
   
   
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