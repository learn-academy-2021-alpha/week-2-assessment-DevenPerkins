# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method super()?

  Your answer: I would use super() to pull attributes from a parent class to a class that will need to have most of the same attributes of the parent class but will have new attributes unique to the class. This will help prevent having to type out all of the attributes from the parent class.

  Researched answer: I would use super() to pull the attributes from the constrictor in the parent class to be used in the child class.



2. What is a virtual DOM?

  Your answer: A virtual DOM is essentially a space that lives between the code and the user. This space can be manipulated by the user and see results on the page, but the original DOM will remain unchanged unless a .State item is edited with a setState item.

  Researched answer: A virtual DOM or VDOM is a resource-light representation of the DOM. JSX is shown through the VDOM and allows for the information to be updated much faster than refreshing the entire DOM.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: A class that extends a react component that contains a render and return should display "Hello World" in the browser

  Researched answer: What I said above is how I'd do it except I forgot to mention the React Fragments that will encase the text that will show up in browser. I can put multiple things inside of these react fragments



4. What is JSX?

  Your answer: JSX is JavaScript that lives inside of a HTML format in a react app. JSX will be used to display text in the browser by being called in a class

  Researched answer: JSX is syntax that is an extension of Javascript. Javascript will mostly act like HTML with a couple of exceptions. It's a building black of React Components and will be something to become familiar with.



5. What is state in React?

  Your answer: State is a set up attributes that can be stored and manipulated by a set state command. More specifically the state can be changed by a set state. This is typically done by the end user.

  Researched answer: With everything in React being a component, state is a type of component that is dynamic. A state is an object that stores data that can be manipulated by a user with in the constraints or conditions set within setState methods. This will re-render the DOM when a setState is used on a State.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Ah... I believe I asked you specifically about this in the lecture when it was happening. It was when you were calling functions before they were declared further down on the file. It was a React file, not sure if that was the reason why it was happening or it was how classes worked.

  Researched answer: Hoisting is allowing the variable to be called even if it was declared below a function or where it would be called. It is a great practice for developers to declare the variable at the top before calling it as it will help prevent bugs, but it is not required due to what Hoisting will do.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - Are methods that are key in the life cycle of a React Component. One of those being the render() component. This is know because a component may have many different functionalities, they still behave in a predictable manner.
- React props - Props are used for passing information from one component to another and are only passed from the parent component to the child component. Once the prop is put into a component from another, they become read only and cannot be updated.
- event.preventDefault() - this method is used for non cancelable event. 
- DOM events - Are interactions that the user has with the DOM that will cause the DOM to change the view for the user. These interactions include when they hover their mouse over an object on the page, use their mouse, and use the keyboard.
- MVC -  Is a way of separating an application into three main logical components: Model, View, and Controller.