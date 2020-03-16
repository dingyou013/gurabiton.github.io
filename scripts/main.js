var myHeading = document.querySelector('h1');
if(!localStorage.getItem('name')) {
    setUserName();
} else {
var storedName = localStorage.getItem('name');
    myHeading.innerHTML = '主人公: ' + storedName;
}
var myButton = document.querySelector('button');
function setUserName() {
    // prompt 要求用戶輸入資料
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '主人公: ' + myName;
}
myButton.onclick = function() {
    setUserName();
}

myButton.onclick = function() {
    setUserName();
}
var myImage = document.querySelector('img');
var actor = document.querySelector('p');
var content = document.querySelectorAll('li');
var cocoro = ["坦克","輔助"];
var alisa = ["輸出","後方"];
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/0.jpg') {
      myImage.setAttribute ('src','images/1.jpg');
      actor.textContent = "亞里沙"

      content.forEach((value,index)=>{
        value.textContent = alisa[index];
      })
    } else {
      myImage.setAttribute ('src','images/0.jpg');
      actor.textContent = "可可羅"
      content.forEach((value,index)=>{
        value.textContent = cocoro[index];
      })
    }
}