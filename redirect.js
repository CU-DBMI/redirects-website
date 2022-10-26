// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W10=";

list = JSON.parse(window.atob(list));

// normalize path. lower case, remove leading slashes, remove repo name.
const from = window.location.pathname
  .toLowerCase()
  .replace(/^redirects-website/, "")
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
  No redirect link found for ${from}.<br>
`;
window.onload = () => (document.body.innerHTML = message);

// immediately navigate to some fallback url
// window.location.href = "some-fallback-url.com/";
