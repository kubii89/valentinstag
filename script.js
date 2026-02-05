/* ===== NEIN-Button ===== */
const no = document.getElementById("no");
const texts = ["NEIN 😳","Fast 😏","Elif bitte 😭","Nope 💔","Nice try 😜"];
let n = 0;

function createHeart(x, y) {
  const h = document.createElement("div");
  h.className = "float";
  h.textContent = "💖";
  h.style.left = x + "px";
  h.style.top = y + "px";
  h.style.fontSize = Math.random() * 20 + 15 + "px";
  h.style.animationDuration = Math.random() * 2 + 2 + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 3000);
}

function flee(e) {
  const padding = 20;
  const btnWidth = no.offsetWidth;
  const btnHeight = no.offsetHeight;
  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  // Maus-/Fingerposition
  let cursorX = e.clientX || (e.touches && e.touches[0].clientX) || window.innerWidth / 2;
  let cursorY = e.clientY || (e.touches && e.touches[0].clientY) || window.innerHeight / 2;

  // Neue Position: mindestens 150px vom Cursor entfernt
  let x, y;
  let tries = 0;
  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
    tries++;
  } while (Math.hypot(x - cursorX, y - cursorY) < 150 && tries < 100);

  no.textContent = texts[n++ % texts.length];

  // sanftes Verschieben + Zittern
  no.style.transition = "all 0.2s ease";
  no.style.left = x + "px";
  no.style.top = y + "px";
  no.style.transform = `scale(1.1) rotate(${Math.random() * 20 - 10}deg)`;
  setTimeout(() => no.style.transform = "scale(1) rotate(0deg)", 150);

  // Herzen um den Button erzeugen
  for (let i = 0; i < 5; i++) {
    const offsetX = Math.random() * btnWidth - btnWidth / 2;
    const offsetY = Math.random() * btnHeight - btnHeight / 2;
    createHeart(x + btnWidth / 2 + offsetX, y + btnHeight / 2 + offsetY);
  }
}

// Events: Click + Touch
no.addEventListener("click", flee);
no.addEventListener("touchstart", e => { e.preventDefault(); flee(e); });

// Optional: Button springt auch, wenn Maus sich nähert
document.addEventListener("mousemove", flee);
//Countdown für Valentinstag
const countdownElement = document.getElementById('countdown');
const valentinstag = new Date(new Date().getFullYear(), 1, 14);

function updateCountdown() {
    const now = new Date();
    let diff = valentinstag - now;

    if (diff < 0) {
        valentinstag.setFullYear(valentinstag.getFullYear() + 1);
        diff = valentinstag - now;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent =
        `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
/* ===== Hintergrund-Herzen ===== */
setInterval(()=>{
  const h = document.createElement("div");
  h.className = "float";
  h.textContent = "💖";
  h.style.left = Math.random()*100+"vw";
  h.style.fontSize = Math.random()*20+15+"px";
  h.style.animationDuration = Math.random()*3+4+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},200);

/* ===== Feuerwerk ===== */
function firework(){
  const x = Math.random()*innerWidth;
  const r = document.createElement("div");
  r.className = "rocket";
  r.textContent = "🚀";
  r.style.left = x+"px";
  document.body.appendChild(r);

  setTimeout(()=>{
    r.remove();
    for(let i=0;i<60;i++){
      const s = document.createElement("div");
      s.className = "spark";
      s.textContent = "💖";
      s.style.left = x+"px";
      s.style.top = "40vh";
      s.style.setProperty("--x",(Math.random()*600-300)+"px");
      s.style.setProperty("--y",(Math.random()*600-300)+"px");
      document.body.appendChild(s);
      setTimeout(()=>s.remove(),1000);
    }
  },600);
}

/* ===== JA-Button ===== */
const yes = document.getElementById("yes");
let started = false;

function startLove(){
  if(started) return;
  started = true;

  document.getElementById("card").remove();

  const msg = document.createElement("div");
  msg.style.position = "absolute";
  msg.style.inset = "0";
  msg.style.display = "flex";
  msg.style.flexDirection = "column";
  msg.style.justifyContent = "center";
  msg.style.alignItems = "center";
  msg.style.textAlign = "center";

  // personalisierte Nachricht
  const text = `💖 JAAAA!, Elif ist dein Valentinstag, die Allerschönste der Welt! 😍💘`;

  // WhatsApp-Link (ohne Nummer)
  const waLink = "https://wa.me/?text=" + encodeURIComponent(text);

  msg.innerHTML = `
    <h1 style="color:#ff4d6d;font-size:3em">
      JAAAA 😍💖
    </h1>
    <p style="font-size:1.5em;margin-bottom:30px">
      Willst du mir das per WhatsApp bestätigen? 🥰
    </p>
    <a href="${waLink}" target="_blank"
       style="
         background:#25D366;
         color:white;
         padding:16px 30px;
         border-radius:30px;
         font-size:20px;
         text-decoration:none;
         font-weight:bold;
       ">
       💬 Bestätigen via WhatsApp
    </a>
  `;

  document.body.appendChild(msg);

  // Feuerwerk starten
  setInterval(firework,700);

}

yes.addEventListener("click", startLove);
yes.addEventListener("touchstart", e => { e.preventDefault(); startLove(); });













