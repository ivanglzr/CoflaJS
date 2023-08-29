let datos = [
  ["URL", location.href],
  ["Pathname", location.pathname],
  ["Hostname", location.hostname],
  ["Protocol", location.protocol],
];

let data = `<h2>Datos</h2> <br>`;

for (const dato of datos) {
  data += `
    ${dato[0]}: <b>${dato[1]}</b> <br>
  `;
}

document.write(data);
