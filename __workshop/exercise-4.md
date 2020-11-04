# Exercise 4: Calculating cookies earned while away

Let's say the user earns 100 cookies per second, and has 500 cookies. They close their tab, and reopen it in 10 seconds. Instead of restoring their cookie total to 500, it should initialize with 1500 cookies; the user should still earn their cookies-per-second while not using the app

HINT: It is impossible to run JS while the browser tab is closed. Instead, you'll need to do all the calculations when the application loads.
