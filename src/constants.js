export const initialMarkdownText = `
### Headers

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
---

### Text Decorators

**bold text**
*italic text*
***bold and italic text***
~~strikethrough text~~

---
### List

#### Unordered List

- list item 1
- list item 2
- list item 3

#### Ordered List

1. list item 1
2. list item 2
3. list item 3
---

### Block Quote

> It's simple

### Code

\`npm install create-react-app\`

\`\`\`
function sum(a, b)  {
    return a+b;
}
\`\`\`

---
### Links

[google](https://www.google.com/)

---

### Images
![alt text](https://www.denofgeek.com/wp-content/uploads/2017/09/batman_animated_essential_primary.jpg?resize=768%2C432)
`;

export const BOLD = "**bold text**";
export const ITALIC = "*italic text*";
export const STRIKETHROUGH = "~~strikethrough text~~";
export const UNORDEREDLIST = "- list item one\n- list item two";
export const ORDEREDLIST = "1. list item one\n2. list item two";
export const BLCOCKQUOTE = "> Blockquote";
export const LINK = "[enter link description here](enter link here)";
export const IMAGE = "![enter image description here](enter link here)";
