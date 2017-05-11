var links = elemento(".open-project")
var project_page = elemento('#project-page')
var body = elemento('body')[0];

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    project_page.style.display = 'block';
    body.style.overflow = 'hidden';
  }
}

elemento('.close-project')[0].onclick = function () {
  project_page.style.display = 'none';
  body.style.overflow = 'auto';
}
