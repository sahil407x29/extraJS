// | Property / Method     | Only Elements? | Includes Text Nodes? | Use Case                     |
// | --------------------- | -------------- | -------------------- | ---------------------------- |
// | `.firstChild`         | ❌              | ✔️                   | Raw DOM traversal            |
// | `.firstElementChild`  | ✔️             | ❌                    | UI work / structural DOM     |
// | `.childNodes`         | ❌              | ✔️                   | Low-level DOM inspection     |
// | `.children`           | ✔️             | ❌                    | Working with layout elements |
// | `.nextSibling`        | ❌              | ✔️                   | Fine-grained traversal       |
// | `.nextElementSibling` | ✔️             | ❌                    | Navigating HTML elements     |
