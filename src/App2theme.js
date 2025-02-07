// App.js

import React from 'react';
import SyntaxHighlighter from './SyntaxHighlighter';

function App() {
  const htmlCode = ` //comment
  <!--comment -->
  /*comment */
  {* comment *}




    <!DOCTYPE html>
    <html>
    <head>
      <title>Sample HTML Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is a sample HTML page.</p>
    </body>
    </html>
  `;

  const cssCode = `//comment
  <!--comment -->
  /*comment */
  {* comment *}



    body {
      background-color: tomato;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: blue;
    }
    p {
      color: green;
    }
  `;

  const jsCode = `//comment
  <!--comment -->
  /*comment */
  {* comment *}





    if(true){false}
      function greet(name) {
      console.log('Hello, ' + name + '!');
    }
    
    greet('World');
  `;

  const reactCode = `//comment
  <!--comment -->
  /*comment */
  {* comment *}



    import React from 'react';
    
    function App() {
      return (
        <div>
          <h1>Hello, World!</h1>
          <p>This is a React component.</p>
        </div>
      );
    }
    
    export default App;
  `;

  const phpCode = `
  //comment
  <!--comment -->
  /*comment */
  {* comment *}



    <?php
      $message = "Hello, World!";
      echo $message;
    ?>
  `;

  return (
    <div className="App">
      <h1>Syntax Highlighting Example</h1>

      <h2>HTML Example</h2>
      <SyntaxHighlighter language="html" code={htmlCode} />

      <h2>CSS Example</h2>
      <SyntaxHighlighter language="css" code={cssCode} />

      <h2>JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" code={jsCode} />

      <h2>React Example</h2>
      <SyntaxHighlighter language="jsx" code={reactCode} />

      <h2>PHP Example</h2>
      <SyntaxHighlighter language="php" code={phpCode} />
    </div>
  );
}

export default App;
