### Project Overview

This project is a multi-step kitchen cost calculator quiz. It is built with plain HTML, CSS, and uses the Alpine.js library for interactivity. The entire application is contained within a single `index.html` file, with its logic defined in `js/calculator.js` and styling in `style/calculator.css`.

The quiz is data-driven, with all questions and answers defined in a `questions` array within the `quiz` Alpine.js component. This allows for easy addition and modification of questions. The quiz supports different question types, such as `radio` buttons (with images) and `range` sliders.

The application's layout is responsive, with specific styles for mobile devices. It also uses custom CSS classes (`layout-2-items`, `layout-4-items`, `layout-5-items`) to create different grid layouts for the answers depending on the question.

### Building and Running

This is a static web project with no build process. To run the project, simply open the `index.html` file in a web browser.

- **Running locally:** Open `index.html` in a web browser.

### Development Conventions

*   **Data-Driven:** All quiz content is managed in the `questions` array in `js/calculator.js`. To add or change questions, modify this array.
*   **Component-Based:** The entire application logic is encapsulated within the `quiz` Alpine.js component in `js/calculator.js`.
*   **Styling:** All styles are in `style/calculator.css`. The project uses a BEM-like naming convention for classes (e.g., `.questions__answer-image`).
*   **Dynamic Layouts:** The number of answers per row is controlled by adding a `customClass` property (e.g., `layout-5-items`) to a question object in the `questions` array. The corresponding styles for this class must be defined in `style/calculator.css`.
*   **State Reset:** The `restartQuiz` function is designed to be generic. It relies on an `initialValue` property in each question object to reset the state, so this property must be set for all new questions.

### Agent Notes

*   **File Encoding:** When using `run_shell_command` with `echo` and output redirection (`>>`) on Windows, PowerShell may save the file with `UCS-2 LE` encoding, causing issues. Always prefer using the `write_file` tool with the `append=True` parameter (if available) or read-and-rewrite the file to avoid encoding problems.