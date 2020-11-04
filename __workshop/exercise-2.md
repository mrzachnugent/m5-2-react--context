# Exercise 2: Using React Context

As our app is getting a little bigger now, we're starting to feel the pain that comes along with lifting state up and "prop drilling".

Let's add a new context component, so that we can make our lives a bit easier.

Create a new file in `src/components` called `GameContext.js`. Inside that file, create and export a new Context:

```js
export const GameContext = React.createContext(null);
```

We will also want to create a provider component, and export it:

```js
export const GameProvider = ({ children }) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};
```

The provider needs to wrap around our application; it makes data available to child components. Open up `src/index.js`, import and use our provider:

```diff
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
+import { GameProvider } from './components/GameContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
- <App />
+ <GameProvider>
+   <App />
+ </GameProvider>,
  rootElement
);

```

This is all the "structure" we need, although right now our context isn't very useful, since it doesn't hold any of the state!

Our app has two pieces of state:

1. The number of cookies collected, `numCookies`
2. The items that the user has purchased, `purchasedItems`

We want to move this state into this new context component, and expose their values through context. Take a moment and try to update this, so that the `value` prop in `GameContext.Provider` makes available everything the rest of the app will need.

> 🆘 **If you are stuck, or want to compare, you can look at this [hint](./_hints/hint-1.md).**
