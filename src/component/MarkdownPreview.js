import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownPreview.css'

const MarkdownPreview = () => {
    const [markdown, setMarkdown] = useState(`
# H1
## H2
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
}
\`\`\`
You can also make text **bold**... whoa!
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  const renderedMarkdown = marked(markdown);
  return (
    <div className="markdown-preview">
      <div className="markdown-editor">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="在这里输入 Markdown 格式的内容">

        </textarea>
      </div>
      <div id="preview"
        className="markdown-preview-area"
        dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
      ></div>
    </div>
  );
};

export default MarkdownPreview;