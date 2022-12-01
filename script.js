import { parse } from "https://unpkg.com/marked@4.2.3/lib/marked.esm.js";

export function include(filename) {
  const name = filename.split(".")[0];
  const ext = filename.split(".").slice(-1)[0];
  fetch(`./${filename}`)
    .then((file) => file.text())
    .then((file) => {
      if (ext === "md") {
        file = parse(file, { breaks: true });
      }
      document.getElementById(name).innerHTML = file;
    });
}
