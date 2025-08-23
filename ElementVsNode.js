// 🔹 Node

// A node is a generic term — everything in the DOM is a node.

// Types of nodes include:

// Element Node (<div>, <p>, <h1>, etc.)

// Text Node ("Hello")

// Comment Node (<!-- hi -->)

// Attribute Node (id="box") (rarely used directly now)

// Document Node (the root document itself)

// Every node has a nodeType property:

// Element = 1

// Attribute = 2

// Text = 3

// Comment = 8

// Document = 9



// 🔹 Element

// An element is a special type of node (specifically nodeType = 1).

// Represents an HTML tag and can contain:

// attributes

// child nodes (text, comments, other elements)



// 🔹 1. Element Node (nodeType = 1)

// Represents HTML elements (tags).

// Examples: <div>, <p>, <span>, <h1>, etc.

// Can have attributes and child nodes (like text or other elements).

// Example:
/* <p id="para">Hello</p>
<script>
  let el = document.getElementById("para");
  console.log(el.nodeType);   // 1
  console.log(el.nodeName);   // P
</script> */


// 🔹 2. Text Node (nodeType = 3)
// Represents the actual text inside an element or attribute.

// Cannot have attributes or children.

// Example:

/* <p id="para">Hello</p>
<script>
  let el = document.getElementById("para");
  let text = el.firstChild;
  console.log(text.nodeType);  // 3
  console.log(text.nodeValue); // Hello
</script> */


// 🔹 3. Attribute Node (nodeType = 2)

// Represents an attribute of an element.

// Example: id="para", class="myClass".

// Modern DOM usually gives attributes via element.getAttribute() instead of directly using attribute nodes.

// Example:
/* <p id="para" class="myClass">Hello</p>
<script>
  let el = document.getElementById("para");
  let attr = el.getAttributeNode("class");
  console.log(attr.nodeType);   // 2
  console.log(attr.nodeName);   // class
  console.log(attr.nodeValue);  // myClass
</script> */


// | Node Type          | `nodeType` | Example in `<p id="p">Hello</p>` |
// | ------------------ | ---------- | -------------------------------- |
// | **Element Node**   | 1          | `<p>`                            |
// | **Text Node**      | 3          | `"Hello"`                        |
// | **Attribute Node** | 2          | `id="p"`                         |


/* <h1 class="element">Element vs Node</h1> */
// let el = document.getElementsByClassName("element")
// console dir(el[0])

// | Feature         | `.childNodes`                  | `.children`                 |
// | --------------- | ------------------------------ | --------------------------- |
// | **Return type** | NodeList                       | HTMLCollection              |
// | **Includes**    | Elements, Text nodes, Comments | Only Elements               |
// | **Whitespace**  | Yes (treated as Text nodes)    | No                          |
// | **Usage**       | When you need *all* node types | When you only need elements |

// const card = document.querySelector(".card");

// for(let i = 2; i< 1000; i++){
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   document.body.appendChild(newCard)
// }

// cloneNode() (shallow clone)

// Copies only the element itself.

// Does not copy child elements or text inside.

// cloneNode(true) (deep clone)

// Copies the element and all of its children, text, and attributes.


// ✅ appendChild()

// Only accepts a Node (element, text node, etc.).

// Returns the appended node.

// Older method (works in all browsers).

// ✅ append()

// Can take Nodes OR strings.

// Can append multiple nodes/strings at once.

// Does not return anything.