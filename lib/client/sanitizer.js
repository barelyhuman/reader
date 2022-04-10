export async function sanitizer(html) {
  var tmpl = document.createElement("template");
  tmpl.innerHTML = html.trim();
  return tmpl.innerHTML;
}
