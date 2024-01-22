// Function to handle the click effect on buttons
function Click(x) {
    var btn = document.getElementById(x);
    btn.style.opacity = "50%";
    setTimeout(() => {
        btn.style.opacity = "";
    }, 200);
}

// Function to handle button clicks
function btnclick(val) {
    if (isFirstClick) {
        alert("Turn on the calculator");
        return; // Calculator is off, do not perform any calculations
    }

    var screen = document.getElementById("screen");
    var resultDiv = document.getElementById("result");

    if (val == '=') {
        var input = screen.textContent;
        try {
            var result = eval(input);
            if (typeof result === 'number') {
                resultDiv.innerHTML = result;
            } else {
                // Handle the case when 'result' is not a number
                resultDiv.innerHTML = result.toFixed(16);
            }
        } catch (error) {
            resultDiv.innerHTML = "Syntax Error";
        }
    } else {
        screen.innerHTML += val; // Use innerHTML to update the content
    }
}

// Function to remove all content from the screen
function removeall() {
    if (isFirstClick) {
        alert("Turn on the calculator");
        return; // Calculator is off, do not perform any calculations
    }

    document.getElementById("screen").innerHTML = '';
    document.getElementById("result").innerHTML = '';
}

// Function to remove the last character from the screen
function remove1() {
    if (isFirstClick) {
        alert("Turn on the calculator");
        return; // Calculator is off, do not perform any calculations
    }

    var a = document.getElementById("screen").textContent;
    if (a.length > 0)
        a = a.slice(0, -1)
    document.getElementById("screen").innerHTML = a;
}

// Function for a non-implemented feature
function non() {
    if (isFirstClick) {
        alert("Turn on the calculator");
        return; // Calculator is off, do not perform any calculations
    }

    alert('Feature coming soon');
}

// Function to handle input changes
function handleInput() {
    if (isFirstClick) {
        return; // Calculator is off, do not perform any calculations
    }

    // Update the content on input change
    const input = document.getElementById("keyboardInput").value;
    document.getElementById("screen").innerText = input;

    // Scroll the screen to the end when new content is added
    document.getElementById("screen").scrollLeft = document.getElementById("screen").scrollWidth;
}

// Function to round the value to 2 decimal points
function round() {
    if (isFirstClick) {
        alert("Turn on the calculator");
        return; // Calculator is off, do not perform any calculations
    }

    var screen = document.getElementById("screen");
    var resultDiv = document.getElementById("result");
    var input = screen.textContent;
    // Use try-catch to handle potential errors during evaluation
    try {
        var result = eval(input);
        // Check if the result is a number
        if (!isNaN(result)) {
            // Display the result with two decimal places
            resultDiv.innerHTML = result.toFixed(2);
        } else {
            resultDiv.innerHTML = 'Invalid input';
        }
    } catch (error) {
        resultDiv.innerHTML = 'Error';
        console.error('Evaluation Error:', error);
    }
}

// Function to handle scrolling
function scr(X) {
    if (isFirstClick) {
        alert("Turn on the calculator");
        return; // Calculator is off, do not perform any calculations
    }

    btn.style.opacity = "50%";
    setTimeout(() => {
        btn.style.opacity = "";
    }, 200);

    var screen = document.getElementById("screen");
    var resultDiv = document.getElementById("result");

    if (X == 2) {
        window.alert('Feature coming soon');
        resultDiv.scrollLeft += 5;
        screen.scrollLeft += 5;
    }
    if (X == 1) {
        window.alert('Feature coming soon');
        resultDiv.scrollLeft -= 5;
        screen.scrollLeft -= 5;
    }
}

let isFirstClick = true;

// Function to handle the power button
function power() {
    // Clear the content of the screen
    var screen = document.getElementById("screen");
    var result = document.getElementById("result");
    var On = document.getElementById("ON");
    var on = document.getElementById("ON");
    document.getElementById("screen").innerHTML = '';
    document.getElementById("result").innerHTML = '';

    if (isFirstClick) {
        // Show the welcome message for 3 seconds
        screen.innerHTML = '<span style="color: red; font-family: Courier New;">-------Hello-------</span>';
        setTimeout(() => {
            screen.innerHTML = '';
            On.innerHTML = 'OFF';
        }, 500);
        on.innerHTML = '<span style="backgroundcolor:red;"></span>';
    } else {
        // Show the thank you message for 3 seconds
        result.innerHTML = '<span style="color: red;">------Thank You------</span>';
        setTimeout(() => {
            result.innerHTML = '';
            On.innerHTML = 'ON';
        }, 500);
    }

    isFirstClick = !isFirstClick; // Toggle isFirstClick for the next click
}

// Function to handle key press events
function handleKeyPress(event) {
    if (event.keyCode == 20) {
        power();
    } else if (isFirstClick) {
        alert("Turn on the calculator");
        return; // Calculator is off, do not perform any calculations
    }

    // Get the key code from the event
    const keyCode = event.keyCode;
    switch (keyCode) {
        // Map key codes to corresponding actions
        case 8: // Backspace
            remove1();
            break;
        case 13: // Enter
            btnclick('=');
            break;
        case 48: // 0
        case 96: // Numeric keypad 0
            btnclick(0);
            break;
        case 49: // 1
        case 97: // Numeric keypad 1
            btnclick(1);
            break;
        case 50: // 2
        case 98: // Numeric keypad 2
            btnclick(2);
            break;
        case 51: // 3
        case 99: // Numeric keypad 3
            btnclick(3);
            break;
        case 52: // 4
        case 100: // Numeric keypad 4
            btnclick(4);
            break;
        case 53: // 5
        case 101: // Numeric keypad 5
            btnclick(5);
            break;
        case 54: // 6
        case 102: // Numeric keypad 6
            btnclick(6);
            break;
        case 55: // 7
        case 103: // Numeric keypad 7
            btnclick(7);
            break;
        case 56: // 8
        case 104: // Numeric keypad 8
            btnclick(8);
            break;
        case 57: // 9
        case 105: // Numeric keypad 9
            btnclick(9);
            break;
        case 106: // / (Multiplication key)
            btnclick('*');
            break;
        case 107: // + (Equals key for most keyboards)
            btnclick('+');
            break;
        case 109: // - (Hyphen/Minus key)
            btnclick('-');
            break;
        case 110: // . (Period/Decimal point key)
            btnclick('.');
            break;
        case 111: // / (Slash key)
            btnclick('/');
            break;
        case 27: // Escape key
            removeall();
            break;
        case 46: // C key
            removeall();
            break;
        // Add more cases for other keys as needed
    }
}

// Add an event listener for the 'keydown' event on the document
document.addEventListener('keydown', handleKeyPress);
