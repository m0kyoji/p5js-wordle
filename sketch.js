WORD_LENGTH = 5;

slotList = [ "", "", "", "", "" ]

collectList = [
    "a", "l", "l", "o", "w"
]

resultList = []

let t = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50)
  t ++;
  
  for (let i = 0; i < WORD_LENGTH; i++) {
    let x = 160 + i * 60;
    let y = 100;
    
    if ( t < 10) {
      x = x + random(-3, 3);
    }
    
    noFill()
    stroke(100);
    strokeWeight(2);
    rect(x, y, 50, 50);
    
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(200);
    text(slotList[i].toUpperCase(), x + 25, y + 25);
  }
  
  if (resultList.length != 0) {
    for(let j = 0; j < resultList.length; j++) {
      for(let k = 0; k < resultList[j].length; k++) {
        let x = 160 + k * 60;
        let y = 160 + j * 60;
        
        if (slotList[j][k] == collectList[k]) {
          fill(97, 163, 186);
        } else if (isInclude(slotList[j][k], collectList)) {
          fill(210, 222, 50)
        } else {
          noFill();
        }
        
        stroke(100);
        strokeWeight(2);
        rect(x, y, 50, 50);

        textAlign(CENTER, CENTER);
        textSize(32);
        fill(200);
        text(resultList[j][k].toUpperCase(), x + 25, y + 25);
      }
    }
  }
  
  if (isClear()) {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("CLEAR", 300, 350);
  }
}

function keyPressed() {
  if (isAcceptKey(key)) {
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (slotList[i] == "") {
        slotList[i] = key;
        t = 0;
        break;
      }
    }
  }
  if (key == 'Backspace') {
    for (let i = 0; i < slotList.length; i++) {
      if (slotList[4 - i] != "") {
        slotList[4 - i] = "";
        break;
      }
    }
  }
  if (key == 'Enter') {
    resultList[resultList.length] = slotList
    slotList = [ "", "", "", "", "" ];
  }
}

function isAcceptKey(k) {
  let list = "abcdefghijklmnopqrstuvwxyz".split('');
  return isInclude(k, list);
}

function isClear() {
  for (let i = 0; i < collectList.length; i++) {
    if (collectList[i] != slotList[i]) {
      return false;
    }
  }
  return true;
}

function isInclude(str, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == str) {
      return true;
    }
  }
  return false;
}