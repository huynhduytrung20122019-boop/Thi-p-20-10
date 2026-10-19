const btn1 = document.querySelectorAll(".key");
const dots = document.querySelectorAll(".dot");
const allCard = document.getElementById("pass-card");
const hoa1 = document.getElementById("hoa");
const Btn = document.getElementById("btn");
const Xt = document.getElementById("xt");
const Lay = document.querySelector(".message p");
const mes = document.getElementById("mes");
const Btn1 = document.getElementById("nut-dong");
const text =
  "Chúc cậu ngày 20/10 thật vui vẻ nha! Chúc cậu lúc nào cũng xinh đẹp, đáng yêu, luôn gặp nhiều may mắn và có thật nhiều niềm vui trong cuộc sống. Mong hôm nay cậu sẽ nhận được thật nhiều lời chúc và những điều dễ thương. Đặc biệt, nhớ cười thật nhiều nhé, vì nụ cười của cậu rất đẹp! 🌷😊";
let kq = "";
hoa1.classList.add("hidden");

// Trái tim

function taoTraiTimRoi() {
  const container = document.querySelector(".hearts-container");
  if (!container) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  const span = document.createElement("span");
  span.innerHTML = "❤️";
  // const img = document.createElement("img");
  // img.src = "image/trung.jpg";
  // img.classList.add("heart-img");
  heart.appendChild(span);
  //heart.appendChild(img);
  //heart.innerHTML = "❤️";

  const randomHorizontalPosition = Math.random() * 100;
  heart.style.left = randomHorizontalPosition + "vw";

  const duration = Math.random() * 6 + 9;
  heart.style.animationDuration = duration + "s";

  const size = Math.random() * 16 + 18;
  heart.style.fontSize = size + "px";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 10000);
}
setInterval(taoTraiTimRoi, 300);

btn1.forEach((key) => {
  key.addEventListener("click", () => {
    let keys = key.textContent;
    if (keys === "❌") kq = kq.slice(0, -1);
    else if (kq.length < 4) {
      kq += keys;
    }
    SangNut();
  });
});
function SangNut() {
  dots.forEach((dot, index) => {
    if (index < kq.length) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
  if (kq.length === 4) {
    Xt.style.display = "block";
    setTimeout(() => {
      Xt.style.display = "none";
      allCard.classList.add("hidden");
      hoa1.classList.remove("hidden");
      hoa1.classList.add("xoay");
      Btn.style.display = "block";
    }, 3000);
  }
}

// Xoay bó hoa
let bouquetImg = document.querySelector(".bo-hoa img");
let isDragging = false;
let startX = 0,
  startY = 0;
let currentX = 0,
  currentY = 0;
bouquetImg.addEventListener("click", (e) => {
  isDragging = true;
  startX = e.clientX - currentX;
  startY = e.clientY - currentY;
  bouquetImg.style.transition = "none";
});
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  currentX = e.clientX - startX;
  currentY = e.clientY - startY;
  let rotateX = -currentY / 5;
  let rotateY = currentX / 5;
  bouquetImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
document.addEventListener("mouseup", () => {
  isDragging = false;
  bouquetImg.style.transition = "transform 0.3s ease-out";
});
// Thiệp chúc mừng
function startTyping() {
  Lay.innerHTML = "";
  let i = 0;
  function Typing() {
    if (i < text.length) {
      Lay.innerHTML += text.charAt(i);
      i++;
      setTimeout(Typing, 50);
    }
  }
  Typing();
}
Btn.addEventListener("click", () => {
  mes.style.display = "block";
  startTyping();
});
Btn1.addEventListener("click", () => {
  mes.style.display = "none";
});
