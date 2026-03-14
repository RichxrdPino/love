const wrapper = document.getElementById("wrapper");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
var cont = 0;

yesBtn.addEventListener("click", () => {
  if (cont == 0){
    question1.innerHTML = "Yeiii :DDD";
    question2.innerHTML = "¿De verdad? :33";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif"; 
    cont++;
  }else{
    question1.innerHTML = "yupiii";
    question2.innerHTML = "te amo :3";
  }
  
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});