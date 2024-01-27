const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: 'parent' },
    [React.createElement("div", { id: 'child1' },
        [React.createElement("h1", {}, "i am H1 tag"), React.createElement("h2", {}, "I am H2 tag")]),
    React.createElement("div", { id: 'child2' },
        [React.createElement("h1", {}, "i am H1 tag"), React.createElement("h2", {}, "I am H2 tag")])]
);
root.render(parent);

console.log(heading);