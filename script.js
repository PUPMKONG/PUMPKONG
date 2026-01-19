const caText = document.getElementById("caText");
const copyBtn = document.getElementById("copyCA");
const memeBtn = document.getElementById("newMeme");
const memeOut = document.getElementById("memeOutput");
const particles = document.getElementById("particles");
const modeText = document.getElementById("modeText");

const memeLines = [
  "WE PUMP AT DAWN (IN MEMES).",
  "NO ROADMAP. ONLY VIBES.",
  "GREEN CANDLES — MEME ENERGY.",
  "THE JUNGLE HAS SPOKEN.",
  "THIS IS NOT FINANCIAL ADVICE.",
  "JUST A MEME. JUST A MOMENT.",
  "PUMPKONG IS COMING (FOR LAUGHS).",
  "JUNGLE LAW: HAVE FUN, STAY SAFE.",
];

function randomFrom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(caText.innerText.trim());
    copyBtn.innerText = "✅ COPIED";
    setTimeout(() => (copyBtn.innerText = "📋 Copy CA"), 1200);
  } catch (e) {
    alert("Copy failed. Paste manually.");
  }
});

memeBtn.addEventListener("click", () => {
  memeOut.innerText = randomFrom(memeLines);
  memeOut.animate(
    [{ transform: "scale(1)", opacity: 0.6 }, { transform: "scale(1.02)", opacity: 1 }],
    { duration: 220, easing: "ease-out" }
  );
});

function makeParticles(count = 45){
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (6 + Math.random() * 8) + "s";
    p.style.animationDelay = (-Math.random() * 10) + "s";
    p.style.opacity = (0.35 + Math.random() * 0.65).toFixed(2);
    p.style.transform = `translateY(${100 + Math.random() * 40}vh)`;
    particles.appendChild(p);
  }
}
makeParticles();

setInterval(() => {
  modeText.innerText = Math.random() > 0.5 ? "PUMP" : "BONK";
  modeText.animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
    { duration: 260, easing: "ease-out" }
  );
}, 1800);

memeOut.innerText = randomFrom(memeLines);
