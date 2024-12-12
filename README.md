### Project: Browser History App

In this project, I developed a Browser History app using React to enhance my understanding of core concepts like state management, conditional rendering, and handling events. Below are the key details of the project:

---

### Functionalities Implemented
1. Display History Items:
   - Initially displays a list of history items, each with a delete button.
   - Items include information such as time accessed, logo, title, and domain URL.

2. Search Functionality:
   - Filters and displays history items based on the search input, regardless of case.
   - If no items match the search query, an empty history view is shown.

3. Delete Functionality:
   - Allows users to delete individual history items using the delete button.
   - Displays the empty history view when all items are deleted.

4. Dynamic Empty State:
   - Shows a dedicated view when no history items are present due to search or deletion.

---

### Features of the App
- Responsive Design: Adjusts the layout for various screen sizes:
  - Extra Small (less than 576px)
  - Small (576px and above)
  - Medium, Large, and Extra Large (768px and above)

- Custom Components:
  - Components are structured within the `src/components` directory for modularity.
  - Pre-filled code was used as a foundation to streamline development.

- Accessibility:
  - Added appropriate alt text for images.
  - Buttons include `data-testid` attributes to support testing.

---

### Technical Details
1. Data Structure:
   - The app uses a `historyList` array containing objects with keys like `id`, `timeAccessed`, `logoUrl`, `title`, and `domainUrl`.

2. Design Specifications:
   - Colors: Utilized a predefined color palette for styling.
   - Font Family: Applied the Roboto font for consistent typography.

3. Development Process:
   - Installed dependencies using `npm install`.
   - Started the app locally using `npm start`.

---

### Challenges and Learnings
- Challenge: Implementing the search functionality to filter items dynamically.
- Learning: Gained proficiency in managing React state and applying conditional rendering techniques.

---


