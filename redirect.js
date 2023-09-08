// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W3siZnJvbSI6ImNoYXRyb29tIiwidG8iOiJodHRwczovL3pvb20udXMvai8xMjM0NWFiY2RlZiJ9LHsiZnJvbSI6Imdvb2dsZWRvYyIsInRvIjoiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xMjM0NWFiY2RlZiJ9XQ==";

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
if (to)
  window.location.href = to;

// if no matching destination
else {
  // show html error message
  const message = `
    No redirect link found for "${from}".<br>
  `;
  window.onload = () => { document.body.innerHTML = message };

  // OR, immediately navigate to some fallback url
  // window.location.href = "some-fallback-url.com/";
}
