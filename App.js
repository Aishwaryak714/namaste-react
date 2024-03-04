/*
* <div id="parent">
*  <div id="child">
*  <h1>I'm H1 tag</h1>
* </div>
*</div>
*
*/
const parent = React.createElement("div",{id:"Parent"},
React.createElement("div", {id:"child"},
[React.createElement("h1",{id:"h1"},"I'm h1 tag"),React.createElement("h2",{id:"h2"},"I'm h2 tag")]
))

const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);