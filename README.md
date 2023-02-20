# React Components

## React Functional Components VS Class Components

### Introduction to component

- ->a component represent the part of user interface
- ->component are reusable and can be use in anywhere in user interface

* There are mainly two components in React:
  - Functional Components also known as Stateless component
  - Class Component also known as Stateful component

### Functional Component or Stateless Component:

- It is simple javascript functions that simply returns html UI
- It is also called “stateless” components because they simply accept data and display them in some form that is they are mainly responsible for rendering UI.
- It accept properties(props) in function and return html(JSX)
- It gives solution without using state
- There is no render method used in functional components.
- These can be typically defined using arrow functions but can also be created with the regular function keyword.

### Class Component or Stateful Component

- It is regular ES6 classes that extends component class form react library
- Also known as “stateful” components because they implement logic and state.
- It must have render() method returning html
- It has complex UI Logic
- You pass props to class components and access them with this.props

[Additional Perspectives](https://articles.wesionary.team/react-functional-components-vs-class-components-86a2d2821a22)
