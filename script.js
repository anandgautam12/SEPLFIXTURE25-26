const matches = [
  {no:1,date:'13 Dec 2025',match:'Satpuda Super Kings vs Satpuda Royals',venue:'Satpuda Cricket Ground'},
  {no:2,date:'13 Dec 2025',match:'Satpuda Panthers vs Satpuda Blasters',venue:'Satpuda Cricket Ground'},
  {no:3,date:'13 Dec 2025',match:'Satpuda Warriors vs Satpuda Strikers',venue:'Satpuda Cricket Ground'},

  {no:4,date:'20 Dec 2025',match:'Satpuda Super Kings vs Satpuda Panthers',venue:'Satpuda Cricket Ground'},
  {no:5,date:'20 Dec 2025',match:'Satpuda Royals vs Satpuda Blasters',venue:'Satpuda Cricket Ground'},
  {no:6,date:'20 Dec 2025',match:'Satpuda Warriors vs Satpuda Super Kings',venue:'Satpuda Cricket Ground'},

  {no:7,date:'27 Dec 2025',match:'Satpuda Strikers vs Satpuda Panthers',venue:'Satpuda Cricket Ground'},
  {no:8,date:'27 Dec 2025',match:'Satpuda Blasters vs Satpuda Super Kings',venue:'Satpuda Cricket Ground'},
  {no:9,date:'27 Dec 2025',match:'Satpuda Royals vs Satpuda Warriors',venue:'Satpuda Cricket Ground'},

  {no:10,date:'03 Jan 2026',match:'Satpuda Panthers vs Satpuda Royals',venue:'Satpuda Cricket Ground'},
  {no:11,date:'03 Jan 2026',match:'Satpuda Strikers vs Satpuda Super Kings',venue:'Satpuda Cricket Ground'},
  {no:12,date:'03 Jan 2026',match:'Satpuda Blasters vs Satpuda Warriors',venue:'Satpuda Cricket Ground'},

  {no:13,date:'10 Jan 2026',match:'Satpuda Royals vs Satpuda Strikers',venue:'Satpuda Cricket Ground'},
  {no:14,date:'10 Jan 2026',match:'Satpuda Blasters vs Satpuda Strikers',venue:'Satpuda Cricket Ground'},
  {no:15,date:'10 Jan 2026',match:'Satpuda Panthers vs Satpuda Warriors',venue:'Satpuda Cricket Ground'},

  {no:16,date:'17 Jan 2026',match:'Satpuda Royals vs Satpuda Super Kings',venue:'Satpuda Cricket Ground'},
  {no:17,date:'17 Jan 2026',match:'Satpuda Blasters vs Satpuda Panthers',venue:'Satpuda Cricket Ground'},
  {no:18,date:'17 Jan 2026',match:'Satpuda Strikers vs Satpuda Warriors',venue:'Satpuda Cricket Ground'},

  {no:19,date:'24 Jan 2026',match:'Satpuda Royals vs Satpuda Blasters',venue:'Satpuda Cricket Ground'},
  {no:20,date:'24 Jan 2026',match:'Satpuda Super Kings vs Satpuda Warriors',venue:'Satpuda Cricket Ground'},
  {no:21,date:'24 Jan 2026',match:'Satpuda Panthers vs Satpuda Strikers',venue:'Satpuda Cricket Ground'},

  {no:22,date:'31 Jan 2026',match:'Satpuda Super Kings vs Satpuda Blasters',venue:'Satpuda Cricket Ground'},
  {no:23,date:'31 Jan 2026',match:'Satpuda Warriors vs Satpuda Royals',venue:'Satpuda Cricket Ground'},
  {no:24,date:'31 Jan 2026',match:'Satpuda Royals vs Satpuda Panthers',venue:'Satpuda Cricket Ground'},

  {no:25,date:'07 Feb 2026',match:'Satpuda Super Kings vs Satpuda Strikers',venue:'Satpuda Cricket Ground'},
  {no:26,date:'07 Feb 2026',match:'Satpuda Warriors vs Satpuda Blasters',venue:'Satpuda Cricket Ground'},
  {no:27,date:'07 Feb 2026',match:'Satpuda Strikers vs Satpuda Royals',venue:'Satpuda Cricket Ground'},

  {no:28,date:'14 Feb 2026',match:'Satpuda Strikers vs Satpuda Blasters',venue:'Satpuda Cricket Ground'},
  {no:29,date:'14 Feb 2026',match:'Satpuda Warriors vs Satpuda Panthers',venue:'Satpuda Cricket Ground'},
  {no:30,date:'14 Feb 2026',match:'Satpuda Panthers vs Satpuda Super Kings',venue:'Satpuda Cricket Ground'},

  {no:31,date:'21 Feb 2026',match:'Eliminator – Rank 2 vs Rank 3',venue:'Satpuda Cricket Ground'},
  {no:32,date:'28 Feb 2026',match:'Final – Rank 1 vs Winner of Eliminator',venue:'Satpuda Cricket Ground'}
];

function render(list){
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  list.forEach(m => {
    tbody.innerHTML += `
      <tr>
        <td>${m.no}</td>
        <td>${m.date}</td>
        <td>${m.match}</td>
        <td>${m.venue}</td>
      </tr>
    `;
  });
}

function showTeam(team){
  if(team === "all"){
    render(matches);
  } else {
    render(matches.filter(m => m.match.includes(team)));
  }
}

render(matches);