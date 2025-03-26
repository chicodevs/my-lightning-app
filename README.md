# Lightning Network Top 100 Nodes Web App

## Overview

This project is a web application built with **Svelte 5**, **Vite**, **TailwindCSS**, and **TypeScript**. It consumes an API from [mempool.space](https://mempool.space/api/v1/lightning/nodes/rankings/connectivity) to display a list of the top 100 most connected nodes in the Lightning Network. The UI is designed to be modern, responsive, and interactive, with smooth animations, skeleton loading states, and error handling.

## Libraries & Frameworks Used

- **Svelte 5** – For building reactive UI components.
- **Vite** – Fast development server and build tool.
- **TailwindCSS** – Utility-first CSS framework for styling.
- **TypeScript** – Provides type safety and a better developer experience.
- **Axios** – For making API calls.
- **Vitest** – Testing framework for unit and component tests.


## Steps to Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/chicodevs/my-lightning-app.git
   cd my-lightning-app
2. **Install dependencies:**
   ```bash
   npm install
3. **Run the Development Server:**
   ```bash
   npm run dev
   
The app will be available at http://localhost:5173 

4. **Run the Tests:**
   ```bash
   npm run test
   
   
## What Areas of the Web App Did You Focus On?

- **UI/UX Design:**  
  Developed a modern and responsive layout with interactive animations, ensuring a clean and engaging interface.
  
- **State Management:**  
  Utilized Svelte’s reactive stores to manage API data, loading states, and error handling.
  
-  **Performance:**  
  While a caching mechanism could reduce repeated API calls and improve responsiveness, the data’s validity period was uncertain, making cache invalidation challenging. Instead, I opted for a simpler approach by providing a manual refetch button, allowing users to update the data as needed without the overhead of managing cached state. Additionally, since the API returns only 100 results, I decided not to implement pagination or virtual rendering. Given the small data set, these optimizations would add unnecessary complexity without significant performance benefits.

  
- **Testability:**  
  Created unit tests for utility functions, API logic, and components using Vitest and Svelte Testing Library.

## What Was the Reason for Your Focus? What Problems Were You Trying to Solve?

- **Responsive Design:**  
  Ensured the application is visually appealing and usable across various devices and screen sizes.
  
- **Smooth Transitions:**  
  Added subtle animations (like fade-in and spin effects) to provide a pleasant user experience during interactions and loading.
  
- **Modular Architecture:**  
  Separated concerns into different modules (components, stores, utilities) to improve maintainability and scalability.
  
- **Basic Test Coverage:**  
  Implemented tests to catch regressions and document component behavior without striving for 100% coverage, keeping the project lightweight.

## How Long Did You Spend on This Project?

I spent approximately **5 hours** on this project, focusing on the UI, functionality, and basic test coverage.

## Did You Make Any Trade-offs for This Project? What Would You Have Done Differently With More Time?

- **Trade-offs:**  
  I prioritized building a clean, functional UI with essential testing over achieving comprehensive test coverage.
  
- **With More Time:**  
  I would expand the test suite to cover more edge cases, add more robust error handling and caching for API data, and further optimize the UI for performance and accessibility.

## What Do You Think Is the Weakest Part of Your Project?

The current test coverage for UI components is minimal and could be expanded. Additionally, the error handling for the API could be further enhanced with more detailed user feedback.

## Is There Any Other Information You’d Like Us to Know?

- I'm open to feedback on the architecture and design decisions.
- Future improvements could include advanced state management techniques and deeper integration tests.
