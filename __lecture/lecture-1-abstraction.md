# [5-2]

# Abstraction

---

Fundamentally, React is kinda weird.

It requires a bit of a shift in mental perspective.

---

# The spectrum of components

Here are two different React components being used:

```js
<Heading>Welcome to my website!</Heading>
```

```js
<Dashboard
  currentUser={isAuthorized ? currentUser : null}
  metrics={{
    views: data.views,
    uniques: data.uniques,
    bounceRate: data.bounceRate,
  }}
  handleLogOut={() => logOutCurrentUser(currentUser)}
  sidePanel={
    <UserActions
      currentUser={currentUser}
      handleBanUser={actions.banUser}
      handleChangeRole={actions.changeRole}
    />
  }
/>
```

---

- How generic are these components?
- How specific to _our_ application are they? Could I copy/paste this into another project?
- How many instances of each component do I expect I'll need?
- How much _state_ is involved with each component?

---

There is a _spectrum_ from "concrete" to "abstract":

<img src="./assets/spectrum-of-abstraction.png" />

---

## "Concrete" components are:

- Reusable
- Generic
- Flexible

---

## "Abstract" components are:

- tied into our application
- one-off
- rigid

<!--
  To elaborate a little here: abstract items tend to be very high-level.
  "This is a homepage", or "this is a React app".
  It doesn't tell you anything concrete about what the HTML will look like.

  On the other hand, a <Button> component will almost certainly render
  a <button> html node, and not much else.
-->

---

# Why is this thinking useful

We want to structure our components so that items have a _clear spot_ on this spectrum.

This leads to more predictable, "cleaner" code.

---

# Example

The following component is blurry in terms of abstraction. Let's address that by extracting components.

---

```js
const Banner = ({ type, message, user }) => {
  const bg = type === "success" ? "green" : "red";

  // Only logged in users are allowed to see the banner
  if (!user) {
    return null;
  }

  return (
    <div style={{ backgroundColor: bg }}>
      Notification from HelloPets.com: {message}
    </div>
  );
};
```

---

```js
const ContactPage = () => {
  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState(false);

  return (
    <div>
      <Header />

      <h1>Contact Us</h1>
      <p>
        We're looking forward to hearing from you. Please fill in this contact
        form:
      </p>

      <label>
        Message:
        <textarea
          value={message}
          onChange={(ev) => {
            setMessage(ev.target.value);

            if (ev.target.value.length < 100) {
              setMessageError(true);
            } else {
              setMessageError(false);
            }
          }}
        />
      </label>
      {messageError && (
        <p className="error">Please enter at least 100 characters.</p>
      )}
    </div>
  );
};
```

---

## Resources

[On the Spectrum of Abstraction](https://www.youtube.com/watch?v=mVVNJKv9esE)

This is an advanced talk, but definitely worthwhile.

Even if you don't understand everything the speaker says, the general idea should get you think about all of this stuff.
