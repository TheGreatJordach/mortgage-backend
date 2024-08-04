
## TDD for the Mortgage Calculator Project
----

### Test Strategy for Mortgage Calculator
Given the nature of the mortgage calculator, we can focus on the following test areas:

-  **Unit Tests**:
    1. <b>Mortgage calculation logic: </b>
        - **Test different input scenarios**
            - loan amount, 
            - Interest rate, 
            - Term and
            - verify correct output.
        - **Data validation:** 
            - Test input validation for invalid values (e.g., negative loan amount, zero interest rate).
        - **Error handling:** Test how the application handles exceptions or unexpected input.
    2. **Entity tests:** For backend entities (User, MortgageCalculation), test data integrity and relationships.
        - **Integration Tests**
        - **API tests:** Test the backend APIs to ensure they return correct data

    3. **Database interactions:** Test data persistence and retrieval.
    4. **E2E Tests**
    5. **User interface testing:** Test the frontend's interaction with the backend.
    6. **User flows:** Simulate user actions (inputting data, clicking buttons) and verify expected outcomes.

-** Test Framework Selection**
    - Unit tests: Jest or Mocha for JavaScript, and potentially TypeORM's built-in testing utilities for database interactions.
    - Integration tests: Jest or Supertest for API testing.
    - E2E tests: Cypress or Playwright for browser automation.

- **Test-Driven Development Cycle**
    1.  Write a test: Create a test case that defines the desired behavior.
    2. Run the test: The test should fail initially.
    3. Write the code: Implement the code to make the test pass.
    4. Refactor: Improve code quality without changing its behavior.
    5. Repeat: Continue this cycle for all features.


>   By following a systematic TDD approach, we can ensure the quality and reliability of the mortgage calculator application.


##  Writing Unit Tests for Mortgage Calculation Logic
---

### Understanding the Mortgage Calculation Logic

> Before we dive into writing tests, let's clarify the mortgage calculation formula we'll be using. A common formula is:
   
   
    M = P * (r(1+r)^n) / ((1+r)^n-1)
   
  [ Where:]
   -  M is the monthly payment
   -  P is the principal (loan amount)
   -  r is the monthly interest rate (annual interest rate divided by 12)   
   -  n is the number of payments (loan term in months)   

### Setting Up the Test Environment
   -  **MortgageCalculator class:**
      Let's create a MortgageCalculator class in a mortgageCalculator.ts file:

```sh    
export enum RepaymentType {
    Repayment = 'repayment',
    InterestOnly = 'interestOnly',
   }

export class MortgageCalculator {
  constructor(
    public principal: number,
    public annualInterestRate: number,
    public termInYears: number,
    public repaymentType: RepaymentType
  ) {}

  calculateMonthlyPayment(): number {
    // Implementation considering repayment type
  }
}
```

### the Calculation Logic calculateMonthlyPayment() logic

```sh
calculateMonthlyPayment(): number {
  const monthlyInterestRate = this.annualInterestRate / 12 / 100;
  const numberOfPayments = this.termInYears * 12;

  if (this.repaymentType === RepaymentType.Repayment) {
    // Standard repayment calculation
    const numerator = this.principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    return numerator / denominator;
  } else if (this.repaymentType === RepaymentType.InterestOnly) {
    // Interest-only calculation
    return this.principal * monthlyInterestRate;
  } else {
    // Handle invalid repayment type
    throw new Error('Invalid repayment type');
  }
}
```

 ### Test Cases
 ```sh
 describe('MortgageCalculator', () => {
  it('should calculate monthly payment correctly for repayment', () => {
    // ...
  });

  it('should calculate monthly payment correctly for interest-only', () => {
    // ...
  });

  // ... other test cases
});
```

### Next Steps
Let's move on to other aspects of the project:

-   Data validation: Implementing checks for invalid input (e.g., negative values, non-numeric inputs).
-   Error handling: Handling potential errors (e.g., division by zero, invalid repayment type).
-   Additional features: Considering features like amortization schedules or loan comparisons.
-   Database interactions: If storing calculation results, defining how to -     interact with the database.
-   User interface: Basic structure and components for the frontend.
Would you like to focus on data validation and error handling next?