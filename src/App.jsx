import { useState } from "react";
import { VariableTextBox } from "./VariableTextBox";
import { OperatorDropDown } from "./OperatorDropDown";

export default function App() {
  const [firstVariable, setFirstVariable] = useState("");
  const [secondVariable, setSecondVariable] = useState("");
  const [operator, setOperator] = useState("");

  const calculateResult = () => {
    const num1 = Number(firstVariable);
    const num2 = Number(secondVariable);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
      default:
        return;
    }
  };

  return (
    <>
      <VariableTextBox
        label="First Variable"
        value={firstVariable}
        onChange={setFirstVariable}
      />
      <VariableTextBox
        label="Second Variable"
        value={secondVariable}
        onChange={setSecondVariable}
      />
      <OperatorDropDown value={operator} onChange={setOperator} />

      <p>Result: {calculateResult()}</p>
    </>
  );
}
