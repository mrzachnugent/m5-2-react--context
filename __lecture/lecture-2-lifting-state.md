# Lifting State

---

Sometimes, you'll want to share data with a sibling component.

---

### Example: An e-commerce app with search

<img src='./assets/search-app-init.png' />

---

### Example: An e-commerce app with search

<img src='./assets/search-app-filled.png' />

---

```js
const App = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <header>
      <Logo />
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      {/* how do I access `searchTerm`? */}
      Search results for {searchTerm}
    </main>
  );
};
```

---

By _lifting state up_ to a parent or grandparent, we can pass that data around via props.

---

# Exercise

Lift state up

---

```js
const App = () => {
  return (
    <>
      <Header />
      <WelcomeBack />
    </>
  );
};

const Header = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState(null);

  return (
    <form
      onSubmit={() => {
        logInUser(username, password).then((user) => {
          setUser(user);
        });
      }}
    >
      <Input label="Username" value={username} handleChange={setUsername} />
      <Input
        label="Password"
        type="password"
        value={password}
        handleChange={setPassword}
      />
      <button>Submit</button>
    </>
  );
};

const WelcomeBack = () => {
  return <div>Welcome back, {user.displayName}!</div>;
};
```

---

```js
const App = () => {
  return (
    <>
      <SearchBar />
      <Main />
    </>
  );
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <form
      onSubmit={() => {
        fetchSearchResults(searchTerm).then((results) => console.log(results));
      }}
    >
      <Input
        label="Search for an item:"
        value={searchTerm}
        handleChange={setSearchTerm}
      />
      <Button>Go</Button>
    </form>
  );
};

const Main = () => {
  return (
    <>
      <News />
      <SearchResults />
    </>
  );
};

const SearchResults = () => {
  return searchResults.map((result) => (
    <SearchResult
      key={result.id}
      title={result.title}
      description={result.description}
    />
  ));
};
```
