Your `GameProvider` component should look something like this:

```jsx
export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = usePersistedState("numCookies", 1000);

  const [purchasedItems, setPurchasedItems] = usePersistedState(
    "purchasedItems",
    {
      cursor: 0,
      grandma: 0,
      farm: 0,
    }
  );

  const calculateCookiesPerSecond = (purchasedItems) => {
    /* logic */
  };

  return (
    <GameContext.Provider
      value={{
        numCookies,
        setNumCookies,
        purchasedItems,
        setPurchasedItems,
        cookiesPerSecond: calculateCookiesPerSecond(purchasedItems),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
```

It's important to note that this is the house for _all things related to game state_:

- The state itself, `numCookies` and `purchasedItems`
- The setter functions, `setNumCookies` and `setPurchasedItems`
- Additional helpers like `cookiesPerSecond`.

That said, it _doesn't_ include the interval that grants the user cookies every second. This will remain in `App`, since that loop actually _does something_ with the state.