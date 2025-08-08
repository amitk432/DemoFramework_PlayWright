# Playwright Automation Framework

This is a UI automation testing framework using Playwright and JavaScript.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18+)
*   [npm](https://www.npmjs.com/) (v9+)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/amitk432/DemoFramework_PlayWright.git
    cd DemoFramework_PlayWright
    ```

2.  Install dependencies:
    ```sh
    npm install
    ```

3.  Install Playwright browsers:
    ```sh
    npx playwright install
    ```

## Running Tests

To run the entire test suite, use:

```sh
npm test
```

To run tests in headed mode:

```sh
npm run test:headed
```

## Reporting

After running the tests, an HTML report can be found in the `playwright-report` directory.
```sh
npm run report
