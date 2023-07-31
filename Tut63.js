// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Gokul');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseuo Selectors & more designing</title>
      <style>
  .container{
      border: 2px solid red;
      background-color: rgb(184, 213, 238);
      padding: 34px;
      margin: 34px auto;
      width: 666px;
  }
  a{
      text-decoration: none;
      color: black;
  }
  a:hover{
      color: rgb(114, 79, 79);
      background-color: rgb(238, 235, 235);
  }
  a:visited{
  color: rgb(91, 128, 136);
  }
  a:active{
      background-color: darkblue;
  }
  .btn{
      background-color: blanchedalmond;
      padding: 6px;
      border: none;
      cursor: pointer;
      font-size: 13px;
      border-radius: 4px;
  }
  .btn:hover{
      color: chocolate;
      background-color: aqua;
      border: 2px solid black;
  }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi est dicta earum accusamus nesciunt quasi alias corrupti tenetur quod sint, porro at a sunt, perferendis, fugit quisquam laborum consequatur. Dolorum officia nobis labore!</p>
          <a href="https://facebook.com" class="btn">Read more</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});