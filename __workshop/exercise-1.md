# Exercise 1: Fulfill new requirements

The product manager comes to your desk, and tells you that there are two new requirements:

1. When you navigate away from the game, all "progress" (cookie count) is lost. You always get reset back to 1000. Instead, we should keep the game running even when not on the game screen! You should still be collecting additional cookies when on the homepage, and the total should never be lost as you move between routes.

2. Similarly: if you close and reopen the tab, you shouldn't be reset to 1000 cookies! We want to ensure that the progress is saved and restored.

This exercise is left to be a little vague, but the hope is that it's a bit of an uphill climb. See if you can puzzle it out.

(That said, if you're stuck for 15+ minutes, please do ask for help!)

Some notes/instructions:

- For lifting state up, you'll want to pull all the state up into `App`, and then pass it down via props.
- The list of `items` can be pulled into a `data.js` file, and imported in both `App` and `Game`.
- For persisting across closing and reopening the tab, you can use the localStorage API. Because interacting with localStorage is a side-effect, it can be done within the `useEffect` hook.

The solution you'll come up with will likely be tied very specifically to the problem at hand (storing the number of cookies). It would be neat to take some time and extract a _custom hook_, one that could be used in other situations when data needs to be persisted in localStorage.

Create a new custom hook called `usePersistedState`. It's your job to figure out how to implement it, but it should be used like this:

```js
const [numCookies, setNumCookies] = usePersistedState(1000, "num-cookies");
```

(That second parameter is the name, to be used as a local storage key)
