const matches = [
"Satpuda Blasters vs Satpuda Warriors",
"Satpuda Super Kings vs Satpuda Royals",
"Satpuda Panthers vs Satpuda Strikers",
"Satpuda Warriors vs Satpuda Panthers",
"Satpuda Blasters vs Satpuda Super Kings",
"Satpuda Royals vs Satpuda Strikers",
"Satpuda Super Kings vs Satpuda Strikers",
"Satpuda Blasters vs Satpuda Royals",
"Satpuda Warriors vs Satpuda Panthers",
"Satpuda Blasters vs Satpuda Panthers",
"Satpuda Super Kings vs Satpuda Warriors",
"Satpuda Royals vs Satpuda Strikers",
"Satpuda Blasters vs Satpuda Strikers",
"Satpuda Super Kings vs Satpuda Panthers",
"Satpuda Royals vs Satpuda Warriors",
"Satpuda Blasters vs Satpuda Warriors",
"Satpuda Super Kings vs Satpuda Royals",
"Satpuda Panthers vs Satpuda Strikers",
"Satpuda Blasters vs Satpuda Super Kings",
"Satpuda Warriors vs Satpuda Royals",
"Satpuda Panthers vs Satpuda Strikers",
"Satpuda Super Kings vs Satpuda Strikers",
"Satpuda Warriors vs Satpuda Blasters",
"Satpuda Royals vs Satpuda Panthers",
"Satpuda Blasters vs Satpuda Strikers",
"Satpuda Super Kings vs Satpuda Panthers",
"Satpuda Royals vs Satpuda Warriors",
"Satpuda Blasters vs Satpuda Panthers",
"Satpuda Super Kings vs Satpuda Warriors",
"Satpuda Royals vs Satpuda Strikers"
];

const container = document.getElementById("matches");

matches.forEach(match => {
    const div = document.createElement("div");
    div.className = "match";
    div.textContent = match;
    container.appendChild(div);
});

