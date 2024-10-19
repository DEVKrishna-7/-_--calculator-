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
