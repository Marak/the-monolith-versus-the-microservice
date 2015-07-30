module['exports'] = function index (req, res) {
  res.write('<h1>Welcome to our awesome website! <br/>');
  res.write('<a href="/about">About</a> <br/>');
  res.write('<a href="/signup">Signup</a>');
  res.end();
};