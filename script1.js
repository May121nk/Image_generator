var btn = document.querySelector("button");

var arr = [
  "https://imgs.search.brave.com/s8KH-IFnCFnwRYqNr1JHX_Zm2C8ZmtYr5kENmSzAQoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2RhdGFfaW1h/Z2VzLzQyODY3MC5w/bmc",
  "https://imgs.search.brave.com/s8KH-IFnCFnwRYqNr1JHX_Zm2C8ZmtYr5kENmSzAQoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2RhdGFfaW1h/Z2VzLzQyODY3MC5w/bmc",
  "https://imgs.search.brave.com/PvRV9fooAOhLFUztgs8djBq1dTe9nYDn7AOUvZ7SQzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvUG9r/ZW1vbi1UcmVlY2tv/LVBORy1QaG90b3Mu/cG5n",
  "https://imgs.search.brave.com/x9SjJGikgOzjHH2pCosYVPxFnV2of8cMGqFawoyIdHg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTUyODA4MDY2/NXJlbmRlci1wb2tl/bW9uLWNoZW5pcGFu/LXBuZy5wbmc",
  "https://imgs.search.brave.com/3lecZ2vq4IUBqiCmXuLnYz8G0yI6xkM5M-4BCGubvAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9M/Y2RkeXBreGkucG5n","https://imgs.search.brave.com/OK9XgzIUTdCAWUmcHY-2gLOniisx1en7lec0XJjsZzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL0h5/YnJpZFNoaXZhbS9Q/b2tlbW9uL21hc3Rl/ci9hc3NldHMvaW1h/Z2VzLzgwNy5wbmc","https://imgs.search.brave.com/OK9XgzIUTdCAWUmcHY-2gLOniisx1en7lec0XJjsZzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL0h5/YnJpZFNoaXZhbS9Q/b2tlbW9uL21hc3Rl/ci9hc3NldHMvaW1h/Z2VzLzgwNy5wbmc","https://imgs.search.brave.com/sfry2FZiYxqOfYO-PGOCcQaeTosEEbB476GUDfNLx2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ni9Qb2tlbW9uLUhp/Z2gtUXVhbGl0eS1Q/TkcucG5n","https://imgs.search.brave.com/sfry2FZiYxqOfYO-PGOCcQaeTosEEbB476GUDfNLx2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ni9Qb2tlbW9uLUhp/Z2gtUXVhbGl0eS1Q/TkcucG5n"
];

function getRandom() {
  var randomX = Math.random() * 90;
  var randomY = Math.random() * 90;
  var rotate = Math.random() * 360;
  var randomImg = Math.floor(Math.random() * arr.length);

  return { randomX, randomY, rotate, randomImg };
}

btn.addEventListener("click", () => {
  //   console.log("clicked");

  
  var img = document.createElement("img");
  
  var { randomX, randomY, rotate, randomImg } = getRandom();
  
  setInterval(()=>{
img.src = ''

  },3000)

  img.src = arr[randomImg];
  img.style.position = "absolute";
  img.style.left = randomX + "%";
  img.style.top = randomY + "%";
  img.style.transform = "rotate(" + rotate + "deg)";
  img.style.zIndex = '5'

  img.style.height = "150px";

  document.body.appendChild(img);
});
