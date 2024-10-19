# -_--calculator-
I'll create a calculator project with basic arithmetic operations using HTML, CSS, and JavaScript.

Here's the complete code for a basic calculator project:

```html project="calculator" file="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .calculator {
            background-color: #333;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .display {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            text-align: right;
            font-size: 24px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        button {
            background-color: #f0f0f0;
            border: none;
            border-radius: 5px;
            color: #333;
            cursor: pointer;
            font-size: 18px;
            padding: 15px;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #ddd;
        }
        .operator {
            background-color: #ff9500;
            color: #fff;
        }
        .operator:hover {
            background-color: #ffaa33;
        }
        .equals {
            background-color: #2ecc71;
            color: #fff;
        }
        .equals:hover {
            background-color: #27ae60;
        }
        .clear {
            background-color: #e74c3c;
            color: #fff;
        }
        .clear:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button class="operator" onclick="appendToDisplay('*')">×</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button class="equals" onclick="calculate()">=</button>
            <button class="operator" onclick="appendToDisplay('/')">÷</button>
        </div>
    </div>

    <script>
        let displayValue = '0';

        function updateDisplay() {
            document.getElementById('display').textContent = displayValue;
        }

        function appendToDisplay(value) {
            if (displayValue === '0' && value !== '.') {
                displayValue = value;
            } else {
                displayValue += value;
            }
            updateDisplay();
        }

        function clearDisplay() {
            displayValue = '0';
            updateDisplay();
        }

        function calculate() {
            try {
                // Replace '×' with '*' and '÷' with '/' for evaluation
                const result = eval(displayValue.replace(/×/g, '*').replace(/÷/g, '/'));
                displayValue = result.toString();
                updateDisplay();
            } catch (error) {
                displayValue = 'Error';
                updateDisplay();
            }
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            if (/[0-9]/.test(key)) {
                appendToDisplay(key);
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                appendToDisplay(key);
            } else if (key === '.') {
                appendToDisplay(key);
            } else if (key === 'Enter' || key === '=') {
                calculate();
            } else if (key === 'Escape' || key === 'c' || key === 'C') {
                clearDisplay();
            } else if (key === 'Backspace') {
                displayValue = displayValue.slice(0, -1);
                if (displayValue === '') {
                    displayValue = '0';
                }
                updateDisplay();
            }
        });
    </script>
</body>
</html>
...
```

This calculator project includes the following features:

1. A user interface with a display screen and buttons for numbers, operators, and functions.
2. Basic arithmetic operations: addition, subtraction, multiplication, and division.
3. A clear button to reset the calculator.
4. Error handling for invalid calculations.
5. Keyboard support for easier input.
6. Responsive design that works well on both desktop and mobile devices.


The HTML structure defines the calculator layout, including the display and buttons.

The CSS styles the calculator to make it visually appealing and easy to use. It includes:

- A grid layout for the buttons
- Different colors for number buttons, operators, and function buttons
- Hover effects for better user interaction
- Responsive design using flexbox


The JavaScript provides the calculator's functionality:

- `appendToDisplay()`: Adds numbers and operators to the display
- `clearDisplay()`: Resets the calculator
- `calculate()`: Performs the calculation when the equals button is pressed
- Keyboard event listener for enhanced usability


This project is suitable for novices as it demonstrates:

1. Basic HTML structure and semantic elements
2. CSS styling, including grid layout and responsive design
3. JavaScript functions and event handling
4. Simple error handling
5. Integration of HTML, CSS, and JavaScript to create a functional web application


Novices can learn from this project and extend its functionality by adding more advanced features like parentheses, memory functions, or scientific operations as they progress in their learning journey.
