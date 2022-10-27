// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W3siZnJvbSI6ImNoYXRyb29tIiwidG8iOiJodHRwczovL3pvb20udXMvai8xMjM0NWFiY2RlZiIsIl9zb3VyY2UiOiJyZWRpcmVjdHMueWFtbCIsIl9lbnRyeSI6MX0seyJmcm9tIjoiZ29vZ2xlZG9jIiwidG8iOiJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzEyMzQ1YWJjZGVmIiwiX3NvdXJjZSI6InJlZGlyZWN0cy55YW1sIiwiX2VudHJ5IjoyfV0=";

list = JSON.parse(window.atob(list));

// root where site is being hosted
const baseurl = "/redirects-website";

// normalize path. lower case, remove leading slashes, remove baseurl.
const from = window.location.pathname
  .toLowerCase()
  .replace(new RegExp(`^/*${baseurl}`), "")
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
