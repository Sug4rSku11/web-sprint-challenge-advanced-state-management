# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    - Context API helps us use data by many components at different nesting levels and helps keep your state
        relatively clean.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - Actions are events that describe something that happened in the application.
    - Reducers are functions that take the current state and an actions as arguments, and return a new state result.
    - Store brings together state, actions, and reducers that make up the app.
    - It is known as the 'single source of truth' because you will only have a single store in a Redux app.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    - It allows us to make the flow asynchronous and make API calls from our action creators.
    - It intercepts the normal Redux flow and can make a call before actions make it to the reducer.

4. What is your favorite state management system you've learned and this sprint? Please explain why!