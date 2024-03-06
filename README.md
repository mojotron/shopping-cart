# Shopping Cart

This project is part of The [Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart) curriculum. Goal of this project is to continue learning about React library. The main goal of this project is to use react function components and hooks, react-router-dom as well as a writing test.

[Live preview current version](https://mojotron-shopping-cart.netlify.app/) of this project, hosted by Netlify.

## V2 updates (April, 2024)

- move from Create React App to Vite
- vanilla css to tailwind
- add tailwind config with limiting options for cleaner design
- add typescript
- react router v5 to v6
- create data for use (future update is to create own REST API with node and express)
- visual update - from basic design to full web site
- theme update - gaming goods to e commerce shop
- full responsive design

## Project Screenshots

![store item](/public//screenshots/screenshot-store.png 'This is a sample image.')
![cart](/public//screenshots/screenshot-cart.png 'This is a sample image.')
![checkout](/public//screenshots/screenshot-checkout.png 'This is a sample image.')
![new design](/public//screenshots/screenshot-design.png 'This is a sample image.')
![responsive design](/public//screenshots/screenshot-responsive.png 'This is a sample image.')

## V1 What have I learned (May, 2022)

functional react components - also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand

useState hook - The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

useEffect hook - The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. It is like componentDidMount, componentDidUpdate and componentWillUnmount in one.

react router v6 - configuring routes, navigation with Link and NavLink, reading URL parameters with useParams hook, nested routes, index routes, relative links, not found routes, protected routes

testing-library - setup, queries, queries priority, user events, async methods, mocking

mock service worker - for intercepting http request in tests
