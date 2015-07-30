var someHTML = '';

module['exports'] = function about (req, res) {
  
  function buildHTML() {
    someHTML += '<h1>This is our awesome about page! Please buy our stuff!</h1>';
    return someHTML;
  }
  
  res.end(buildHTML());
};