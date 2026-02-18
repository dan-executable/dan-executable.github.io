const svg = document.getElementById("my-svg");
const creative = document.getElementById("creative-svg");

console.log("vis.js loaded", svg, creative);

const regions = [
  { name: "Europe", value: 170 },
  { name: "Asia", value: 145 },
  { name: "Africa", value: 98 },
  { name: "Americas", value: 140 },
  { name: "Oceania", value: 27 }
];

const barWidth = 60;
const baseY = 350;

regions.forEach((d, i) => {
  const barHeight = d.value;
  const xPos = 100 + i * (barWidth + 30);

  const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  bar.setAttribute("x", xPos);
  bar.setAttribute("y", baseY - barHeight);
  bar.setAttribute("width", barWidth);
  bar.setAttribute("height", barHeight);
  bar.setAttribute("fill", "steelblue");
  svg.appendChild(bar);

  const valueText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  valueText.setAttribute("x", xPos + barWidth / 2);
  valueText.setAttribute("y", baseY - 10);
  valueText.setAttribute("text-anchor", "middle");
  valueText.setAttribute("font-size", "12");
  valueText.setAttribute("fill", "white");
  valueText.textContent = d.value;
  svg.appendChild(valueText);

  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("x", xPos + barWidth / 2);
  label.setAttribute("y", baseY + 20);
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("font-size", "12");
  label.textContent = d.name;
  svg.appendChild(label);
});

const yLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
yLabel.setAttribute("x", 20);
yLabel.setAttribute("y", 200);
yLabel.setAttribute("transform", "rotate(-90 20 200)");
yLabel.setAttribute("text-anchor", "middle");
yLabel.setAttribute("font-size", "14");
yLabel.textContent = "UNESCO World Heritage Sites";
svg.appendChild(yLabel);

for (let i = 0; i < 12; i++) {
  const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", 80 + i * 40);
  c.setAttribute("cy", 200 + Math.sin(i) * 40);
  c.setAttribute("r", 12 + i * 0.8);
  c.setAttribute("fill", `hsl(${i * 30}, 70%, 55%)`);
  creative.appendChild(c);
}
