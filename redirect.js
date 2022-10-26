// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W3siZnJvbSI6ImNoYXRyb29tIiwidG8iOiJ6b29tLnVzL2ovMTIzNDVhYmNkZWYiLCJfc291cmNlIjoicmVkaXJlY3RzLnlhbWwiLCJfZW50cnkiOjF9LHsiZnJvbSI6Imdvb2dsZWRvYyIsInRvIjoiZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMTIzNDVhYmNkZWYiLCJfc291cmNlIjoicmVkaXJlY3RzLnlhbWwiLCJfZW50cnkiOjJ9XQ==";

list = JSON.parse(window.atob(list));

// name of this repo
const repo = "redirects-website";

// normalize path. lower case, remove leading slashes, remove repo name.
const from = window.location.pathname
  .toLowerCase()
  .replace(new RegExp(`^/*${repo}`), "")
  .replace(/^(\/+)/, "");

// find corresponding "to" field
const to = list.find((entry) => entry?.from === from)?.to;

// enable "preserve log" in browser dev tools to still see this after redirect
console.info({ from, to });

// immediately navigate to destination
if (to) window.location.href = to;

// if no matching destination, do a fallback action of your choice

// show html error message
const message = `
  No redirect link found for "${from}".<br>
`;
window.onload = () => (document.body.innerHTML = message);

// immediately navigate to some fallback url
// window.location.href = "some-fallback-url.com/";
