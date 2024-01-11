const continer = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

sqr = 1000 - 12;
const selecColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const mouseup = (e) => {
  const color = selecColor();
  e.style.background = color;
};
const mouseout = (e) => {
  e.style.background = "#111";
};
for (i = 0; i < sqr; i++) {
  let div = document.createElement("div");
  div.className = "sqr";
  div.addEventListener("mouseover", () => {
    mouseup(div);
  });
  div.addEventListener("mouseout", () => {
    setTimeout(() => {
      mouseout(div);
    }, 1000);
  });
  continer.appendChild(div);
}
