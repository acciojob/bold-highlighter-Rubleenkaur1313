function highlight() {
    // Select all <strong> elements
    const boldElements = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change its color to green
    boldElements.forEach(function(element) {
        element.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    // Select all <strong> elements
    const boldElements = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and revert its color to black
    boldElements.forEach(function(element) {
        element.style.color = 'rgb(0, 0, 0)';
    });
}
