"use client";

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";
// Import custom UI components from the UI directory
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { FiDivide, FiMinus, FiPlus, FiX } from "react-icons/fi";

// Default export of the Calculator Component function
export default function Calculator() {
  // state hooks for managing input numbers and the result
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");
  // Handler for updating num1 state on input change
  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
  };

  // Hndler for updating num2 state on input change
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
  };

  // Function to perform addition and set the result
  const add = (): void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
  };

  // FUnciton to perfor subtraction and set the result
  const subtrat = () => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };

  // Function to perform multiplication and set the result
  const multiply = () => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };

  // Function to perform division and set the result
  const divide = () => {
    if (parseFloat(num2) !== 0) {
      setResult((parseFloat(num1) / parseFloat(num2)).toString());
    } else {
      setResult(`${"Error: Division by zero"}`);
    }
  };
  // Function to clear all inputs and reset the result
  const clearInputs = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };
  // JSX returns thestatement rendering the calculator UI
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center relative bg-[url('/bgMathematics.gif')]">
      {/* Center the calculator within the screen */}
      <Card className="absolute w-full  max-w-md p-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg">
        {/* Card Header with title  */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center uppercase">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        {/* Card content including inputs, buttons and result display */}
        <CardContent className="space-y-4">
          {/* Input fields for numbers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num1">Number 1</Label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter a number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2">Number 2</Label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter a number"
              />
            </div>
          </div>
          {/* Buttons for arithematic operations */}
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant={"outline"}
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={add}
            >
              <FiPlus />
            </Button>
            <Button
              variant={"outline"}
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={subtrat}
            >
              <FiMinus />
            </Button>
            <Button
              variant={"outline"}
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={multiply}
            >
              <FiX />
            </Button>
            <Button
              variant={"outline"}
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={divide}
            >
              <FiDivide />
            </Button>
          </div>
          {/* Display the result */}
          <div>
            <Label htmlFor="result">Result</Label>
            <Input
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
            />
          </div>
          {/* Clear all inputs and reset result button */}
          <Button variant={"outline"} className="w-full" onClick={clearInputs}>
            Clear
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
