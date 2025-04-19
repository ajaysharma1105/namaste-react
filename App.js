const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"}
    ,[ React.createElement("h1",{},"I'm an h1 tag") ,React.createElement("h2",{},"I'm an h2 tag")]
),
React.createElement(
    "div",
    {id:"child1"}
,[ React.createElement("h1",{},"I'm an h1 tag") ,React.createElement("h2",{},"I'm an h2 tag")]
)
]
);


const heading = React.createElement(
    "h2",{id:"heading",xyz :"abc"},"Hello World from React!");
    const root2 = ReactDOM.createRoot(document.getElementById("root"));
    root2.render(heading);
    root2.render(parent);