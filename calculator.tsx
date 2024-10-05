import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [currentOperation, setCurrentOperation] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

  const handleNumberClick = (number) => {
    if (display === '0' || shouldResetDisplay) {
      setDisplay(number.toString())
      setShouldResetDisplay(false)
    } else {
      setDisplay(display + number)
    }
  }

  const handleOperationClick = (operation) => {
    if (currentOperation !== null) {
      handleEqualsClick()
    }
    setPreviousValue(parseFloat(display))
    setCurrentOperation(operation)
    setShouldResetDisplay(true)
  }

  const handleEqualsClick = () => {
    if (currentOperation === null || previousValue === null) return

    const current = parseFloat(display)
    let result

    switch (currentOperation) {
      case '+':
        result = previousValue + current
        break
      case '-':
        result = previousValue - current
        break
      case '*':
        result = previousValue * current
        break
      case '/':
        result = previousValue / current
        break
      default:
        return
    }

    setDisplay(result.toString())
    setCurrentOperation(null)
    setPreviousValue(null)
    setShouldResetDisplay(true)
  }

  const handleClearClick = () => {
    setDisplay('0')
    setCurrentOperation(null)
    setPreviousValue(null)
    setShouldResetDisplay(false)
  }

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-72">
        <Input
          className="text-right text-2xl font-bold mb-4 h-12"
          value={display}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="h-12 text-lg"
            >
              {num}
            </Button>
          ))}
          <Button onClick={handleDecimalClick} className="h-12 text-lg">.</Button>
          <Button onClick={handleClearClick} className="h-12 text-lg bg-red-500 hover:bg-red-600">C</Button>
          {['+', '-', '*', '/'].map((op) => (
            <Button
              key={op}
              onClick={() => handleOperationClick(op)}
              className="h-12 text-lg bg-blue-500 hover:bg-blue-600"
            >
              {op}
            </Button>
          ))}
          <Button
            onClick={handleEqualsClick}
            className="h-12 text-lg col-span-2 bg-green-500 hover:bg-green-600"
          >
            =
          </Button>
        </div>
      </div>
    </div>
  )
    }
