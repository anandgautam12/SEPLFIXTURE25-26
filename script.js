const matches = [
  {no:1, date:'',  match:'Satpuda Super Kings vs Satpuda Royals',        venue:'Satpuda Cricket Ground'},
  {no:2, date:'',  match:'Satpuda Panthers vs Satpuda Blasters',         venue:'Satpuda Cricket Ground'},
  {no:3, date:'',  match:'Satpuda Warriors vs Satpuda Strikers',         venue:'Satpuda Cricket Ground'},

  {no:4, date:'',  match:'Satpuda Super Kings vs Satpuda Panthers',      venue:'Satpuda Cricket Ground'},
  {no:5, date:'',  match:'Satpuda Royals vs Satpuda Blasters',           venue:'Satpuda Cricket Ground'},
  {no:6, date:'',  match:'Satpuda Warriors vs Satpuda Super Kings',      venue:'Satpuda Cricket Ground'},

  {no:7, date:'',  match:'Satpuda Strikers vs Satpuda Panthers',         venue:'Satpuda Cricket Ground'},
  {no:8, date:'',  match:'Satpuda Blasters vs Satpuda Super Kings',      venue:'Satpuda Cricket Ground'},
  {no:9, date:'',  match:'Satpuda Royals vs Satpuda Warriors',           venue:'Satpuda Cricket Ground'},

  {no:10,date:'',  match:'Satpuda Panthers vs Satpuda Royals',           venue:'Satpuda Cricket Ground'},
  {no:11,date:'',  match:'Satpuda Strikers vs Satpuda Super Kings',      venue:'Satpuda Cricket Ground'},
  {no:12,date:'',  match:'Satpuda Blasters vs Satpuda Warriors',         venue:'Satpuda Cricket Ground'},

  {no:13,date:'',  match:'Satpuda Royals vs Satpuda Strikers',           venue:'Satpuda Cricket Ground'},
  {no:14,date:'',  match:'Satpuda Blasters vs Satpuda Strikers',         venue:'Satpuda Cricket Ground'},
  {no:15,date:'',  match:'Satpuda Panthers vs Satpuda Warriors',         venue:'Satpuda Cricket Ground'},

  {no:16,date:'',  match:'Satpuda Royals vs Satpuda Super Kings',        venue:'Satpuda Cricket Ground'},
  {no:17,date:'',  match:'Satpuda Blasters vs Satpuda Panthers',         venue:'Satpuda Cricket Ground'},
  {no:18,date:'',  match:'Satpuda Strikers vs Satpuda Warriors',         venue:'Satpuda Cricket Ground'},

  {no:19,date:'',  match:'Satpuda Royals vs Satpuda Blasters',           venue:'Satpuda Cricket Ground'},
  {no:20,date:'',  match:'Satpuda Super Kings vs Satpuda Warriors',      venue:'Satpuda Cricket Ground'},
  {no:21,date:'',  match:'Satpuda Panthers vs Satpuda Strikers',         venue:'Satpuda Cricket Ground'},

  {no:22,date:'',  match:'Satpuda Super Kings vs Satpuda Blasters',      venue:'Satpuda Cricket Ground'},
  {no:23,date:'',  match:'Satpuda Warriors vs Satpuda Royals',           venue:'Satpuda Cricket Ground'},
  {no:24,date:'',  match:'Satpuda Royals vs Satpuda Panthers',           venue:'Satpuda Cricket Ground'},

  {no:25,date:'',  match:'Satpuda Super Kings vs Satpuda Strikers',      venue:'Satpuda Cricket Ground'},
  {no:26,date:'',  match:'Satpuda Warriors vs Satpuda Blasters',         venue:'Satpuda Cricket Ground'},
  {no:27,date:'',  match:'Satpuda Strikers vs Satpuda Royals',           venue:'Satpuda Cricket Ground'},

  {no:28,date:'',  match:'Satpuda Strikers vs Satpuda Blasters',         venue:'Satpuda Cricket Ground'},
  {no:29,date:'',  match:'Satpuda Warriors vs Satpuda Panthers',         venue:'Satpuda Cricket Ground'},
  {no:30,date:'',  match:'Satpuda Panthers vs Satpuda Super Kings',      venue:'Satpuda Cricket Ground'},

  {no:31,date:'',  match:'Eliminator – Rank 2 vs Rank 3',                venue:'Satpuda Cricket Ground'},
  {no:32,date:'',  match:'Final – Rank 1 vs Winner of Eliminator',       venue:'Satpuda Cricket Ground'}
];

function render(list){
  const tbody = document.getElementById("tbody");
  // safer and faster: build HTML once
  tbody.innerHTML = list.map(m => `
    <tr>
      <td>${m.no}</td>
      <td>${m.date}</td>
      <td>${m.match}</td>
      <td>${m.venue}</td>
    </tr>
  `).join("");
}

function showTeam(team){
  if(team === "all"){
    render(matches);
  } else {
    render(matches.filter(m => m.match.includes(team)));
  }
}

// initial render
render(matches);
