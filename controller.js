export const login = (req, res) => {
  const button = req.url.slice(1, req.url.length);
  const capital = button.toUpperCase();

  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body >
    <form action=""  style="width:400px; margin: 0 auto; display:flex;flex-direction:column;">
      <input type="text" name="name" />
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <button type="submit">${capital}</button>
    </form>
  </body>
</html>`);
};

export const register = (req, res) => {
  const button = req.url.slice(1, req.url.length);
  const capital = button.toUpperCase();

  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="" style="width:400px; margin: 0 auto; display:flex;flex-direction:column;">
      <input type="text" name="name" />
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <button type="submit">${capital}</button>
    </form>
  </body>
</html>`);
};
