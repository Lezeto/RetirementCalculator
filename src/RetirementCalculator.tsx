import React, { useState } from 'react';

function calculateExpression(a: number, n: number, m: number): number | undefined {
  // Check if a is not equal to 1, as the expression is undefined when a is 1
  if (a === 1) {
    console.error("Error: 'a' cannot be equal to 1.");
    return undefined;
  }

  // Calculate the expression
  const result = a * (Math.pow(a, n) - 1) / (a - 1);

  return result * m;
}

const RetirementCalculator: React.FC = () => {
  const [interestRate, setInterestRate] = useState<number>(0.08); // Example initial value
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(100); // Example initial value
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(30); // Example initial value
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculateFutureValue = () => {
    const a: number = interestRate + 1; // Convert interest rate to a decimal
    const n: number = investmentPeriod;
    const m: number = monthlyInvestment*12; // Convert montly investment to year investment

    const result = calculateExpression(a, n, m);

    if (result !== undefined) {
      setFutureValue(Number(result.toFixed(2))); // Format result to two decimal places
    } else {
      setFutureValue(null);
    }
  };

  return (
    <div className="retirement-calculator">
      <h2>Retirement Calculator</h2>
      <label>
        Interest Rate (%):
        <input
          type="number"
          value={interestRate * 100} // Display interest rate as a percentage
          onChange={(e) => setInterestRate(Number(e.target.value) / 100)} // Convert back to decimal
        />
      </label>
      <br />
      <label>
        Monthly Investment ($):
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Investment Period (years):
        <input
          type="number"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateFutureValue}>Calculate</button>
      <br />
      {futureValue !== null && (
        <div>
          <h3>Future Value:</h3>
          <p>${futureValue}</p>
        </div>
      )}
    </div>
  );
};

export default RetirementCalculator;
