const head = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children_1" },
    React.createElement("h1", {}, "hello from ashish")),
    React.createElement(
      "div",
      { id: "children_2" },
      React.createElement("h1", {}, "hello from billionarie Ashish")
    )
  );

const header = React.createElement("h1", {}, "hello h1");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);
