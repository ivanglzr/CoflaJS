let llavesURL = [
  "https://cdn-icons-png.flaticon.com/512/69/69891.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vaqk08eUZw_PLQQjJz16tOA_TF_5TfbAsg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcNcMjyIDTcrhiBqkf6BDvOOmCkWNYaVWUQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdw8CnP1qP0fzO6Z4OjnDXutMBfiiWYFUO0A&usqp=CAU",
];

for (let i = 0; i < 20; i++) {
  let keyImg = Math.floor(Math.random() * 5);

  let div = document.createElement("div");
  div.classList.add("key-container");
  div.classList.add(`${i}`);

  let img = document.createElement("img");
  img.classList.add("img");
  img.src = llavesURL[keyImg];

  let p = document.createElement("p");
  p.innerHTML = `Llave ${i + 1}`;

  let btn = document.createElement("button");
  btn.addEventListener("click", (e) => {
    let key = i;
    alert("Has seleccionado la llave " + (key + 1));
  });
  btn.innerHTML = "Seleccionar";

  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(btn);

  document.body.appendChild(div);
}
