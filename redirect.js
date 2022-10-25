// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "";

list = JSON.parse(window.atob(list));

// normalize path. lower case, remove leading slashes.
const from = window.location.pathname.toLowerCase().replace(/^(\/+)/, "");

// find corresponding "to" field
const to = list.find((entry) => entry?.from === from)?.to;

// enable "preserve log" in browser dev tools to still see this after redirect
console.info({ from, to });

// navigate to destination
if (to) window.location.href = to;
// or display error if no destination
else document.body.innerHTML = `No redirect link found for "${from}"`;
