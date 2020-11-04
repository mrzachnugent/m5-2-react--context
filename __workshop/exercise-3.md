Next, we need to use this context in our app.

We'll see how to consume it to power our interval that grants the user cookies every second. You probably have something like this in your `App.js`:

```js
useInterval(() => {
  const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
  setNumCookies(numCookies + numOfGeneratedCookies);
}, 1000);
```

We'll import the GameContext, pluck out the relevant data, and update the interval. Give this a shot first!

> 🆘 **If you are stuck, or want to compare, you can look at this [hint](./_hints/hint-2.md).**
