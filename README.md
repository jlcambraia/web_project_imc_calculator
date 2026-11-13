# BMI Calculator — React Application

An interactive Body Mass Index (BMI) calculator built with **React 19 and Vite 6**, demonstrating form validation, state management, and conditional rendering.

**[Live Demo](https://jlcambraia.github.io/web_project_imc_calculator/)**

## Overview

BMI Calculator is a responsive web application that allows users to calculate their Body Mass Index using height and weight measurements. The project focuses on an intuitive user experience while practicing core React concepts.

## Features

- Step-by-step height and weight input
- Automatic BMI calculation
- Numeric input validation
- Dynamic display of calculation results
- Conditional rendering based on user interaction
- Illustrative article suggestions based on BMI results
- Reset functionality
- Responsive layout for desktop and mobile

> Suggested articles are fictional demonstration content and should not be treated as medical advice.

## Tech Stack

React 19 · Vite 6 · JavaScript (ES6+) · React Hooks · CSS3 · HTML5 · GitHub Pages

## How It Works

```text
Enter Height
     |
Enter Weight
     |
Validate Inputs
     |
Calculate BMI
     |
Display Results
     |
Reset or Start Again
```

### BMI Formula

```text
BMI = weight (kg) / height (m)²
```

For example, 70 kg and 1.75 m yield a BMI of approximately 22.86.

## React Concepts

- **State management:** React's `useState` manages input values, calculation progress, results, and reset behavior.
- **Conditional rendering:** The interface displays different content based on the current state.
- **Input validation:** Input checks prevent nonnumeric values from being processed.

## Getting Started

Requires Node.js and npm.

```bash
git clone https://github.com/jlcambraia/web_project_imc_calculator.git
cd web_project_imc_calculator
npm install
npm run dev
```

Open the local URL displayed by Vite.

Build and preview:

```bash
npm run build
npm run preview
```

Deploy using the repository's GitHub Pages script:

```bash
npm run deploy
```

## Learning Outcomes

- Functional React components
- State management with React Hooks
- Form input handling and conditional rendering
- Mathematical calculations in JavaScript
- Responsive UI development and deployment

## Potential Improvements

- Calculation history
- Metric and imperial unit selection
- Improved accessibility
- More informative result explanations
- Additional automated tests
- Enhanced animations and transitions

## Disclaimer

BMI is a general screening measurement and does not provide an individualized assessment of health. This application is intended for educational and demonstration purposes.

## Author

**João Luiz Cambraia**

[GitHub](https://github.com/jlcambraia) · [LinkedIn](https://www.linkedin.com/in/joaoluizcambraia/)
