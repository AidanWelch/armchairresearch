//I was initially going to just read the template from a static file,
//then I realized just storing in RAM would be quicker and efficient enough
//TODO remove this comment
var template = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="stylesheet" href="./common.css" type="text/css">
    <link rel="icon" href="./logos/favicon.ico">
  </head>
  <body>

    <div class="sidebar">
      <img src="./logos/favicon.ico">
      <nav>
        <a href="./">Main Page</a>
      </nav>
    </div>

    <div class="topbar">
      <input type="text" placeholder="Search">
    </div>

    <div class="content">
      <h1 id="title">${title}</h1>
      ${body}
    </div>

  </body>
</html>
`;