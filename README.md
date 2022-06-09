## How I worked on this App

My goal was to build a Single Page React Application that leverages data from the Giphy API. The application should:

- Query the API and display gifs in a performance-minded fashion,
- Display different Renditions of each Giphy when user clicks on it,
- Provide a way for users to perform keyword searches against the API.

### 1. Design

Firstly, I designed the React application through the following steps:

- **API Review:**: browsed to understand the endpoints and required parameters, as well as the structure of data returned by Giphy API.
- **Mock UI:** sketched a simple UI that will display giphies and allow users to search the ones they like.
- **React Components and Hierarchy:** did a breakdown of the UI into small components, and identified the hierarchies between the components. See hierarchy in attached image below:
  ![giphy_app_tree](https://user-images.githubusercontent.com/51297126/172799624-cfe1e079-9ef4-4eaf-b2b4-9a9cfcdbd65f.jpg)
- **Data Flow Management:** determined how data will flow in the app - which data should be state, and which should be props, and where each state should live. I also determined how data will flow from parent components to children.

### 2. Development

Secondly, I proceeded to implementation, with the following steps:

- **Unit Tests:** wrote unit tests for some components before developing them, following TDD approach. With more time I would cover more test cases.
- **Static React App:** built the static version of the App using Material UI components to speed up the development process.
- **Data Flow Implementation:** implemented data management (state, props) and its flow from one component to another. Here I used axios to query the API with in custom hook, and used the context API and props to move the data between components.
- **Utilities:** implemented utility components for error-indicator, data-loading indicator, and pagination.

### 3. Performance Optimization

As the application queries many giphies from the API, I optimized the app performance through:

- Lazy loading of giphies
- Pagination

### Others Details

Here are some choices I made and the reasons behind them.

- **TypeScript:** to enforce static typing for the App, and eliminate type-related errors from surfacing at runtime.
- **Material UI:** as a component library to speed up the development process.
- **Axios:** to benefit from automatic transformation of JSON data, to keep the code cleaner (compared to built-in fetch)
- **Jest:** to leverage its mocking functionality to facilitate unit testing.
- **create-react-app:** to benefit from already configured webpack, babel, and basic code organization.

## What needs to be improved

- Increasing unit tests coverage
- Improving App UI/UX
- More refactoring to keep the code more clean and maintainable

## How long it took me

I took me roughly 3 hours to design and build the app:

- 45 mins for API review and Design
- 2hrs + 15mins for implementation

## How to install and launch the App

- Clone the app
- Install dependencies
  - `npm install`
- Run App
  - `npm run start`
- In case you want to run tests:
  - `npm run test`
