```jsx
import { GameContext } from "./GameContext";

function App(props) {
  const { numCookies, setNumCookies, cookiesPerSecond } = React.useContext(
    GameContext
  );

  useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}
```

You'll notice that we've **removed all props** from the `<Game />` element. Your next job is to update `Game` to pull all the data and setters it needs from `GameContext`, same as we did here in `App`. This is left up to you as an exercise.
