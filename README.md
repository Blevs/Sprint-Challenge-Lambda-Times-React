# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

JavaScript is a dynamic language that doesn't have a static type system to check
types during compilation. This allows faster development, but allows for certain
types of bugs. There are systems for dynamic typing that can check types at
runtime. PropTypes are one such system for React components.

It allows us to check types during development execution to catch bugs. While it
doesn't prevent certain obscure code-paths from violating our expected type
system in deployment, it help us reason, develop, and refactor the program.

- [x] Describe a life-cycle event in React?

React components undergo a complete lifecycle during the running of an
application. There are three main phases: mounting, updating and unmounting. A
lifecycle event allows us to execute certain code during specific points in the
existence of the component.

For example, `componentDidMount` runs once for each component just after it is
instantiated. This is a good place for code that fetches and establishes state
that we do not want to wait for during the initial construction of the component.

- [x] Explain the details of a Higher Order Component?

In my opinion, a Higher Order Component is a bit of a misnomer, as it is, in
fact, not a component that takes components as arguments. It is a function that
takes components as arguments to form a new component, that is potentially an
aggregate of the supplied components. It is a function that creates components
from other components.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

There are three main methods of styling components in React:

1. Inline Styles

React support a map syntax that is converted to CSS. It is convenient to supply
inline to components and gives us the full power of JavaScript to construct the
CSS rules. However, the syntax is unideal as it must converted kebabed CSS
keywords to camelCased object keys, and it lacks access to some advanced CSS
features.

2. Style Sheets

React allows us to import css style sheets either directly into our component
files to be compiled with webpack, or to include them in the actual html like
any other webpage. And with a few plugins, we can easily use a preprocessor like
LESS or SASS.

This allows us to leverage all of our standard CSS skills and presents a clear
separation of concerns, but we lose out on using JavaScript to modify our styles
outside of using classes or adding inline styles as well.

3. CSS in JS

There are plugins, like styled-components, that allow embedding CSS directly in
our JavaScript.

This gives us a good combination of traditional CSS syntax and the power of
JavaScript to modify the styles. While some see it as a benefit to do everything
in JavaScript, we do lose the separation of concerns that CSS files normally
present.

## Project Setup

Follow these steps to set up your project:

- [x] Create a forked copy of this project.
- [x] Add your project manager as collaborator on Github.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.
- [x] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [x] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [x] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [x] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [x] You should now be able to filter cards using your tabs!
- [x] Make sure all of your props being passed are validated using PropTypes.
- [x] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
