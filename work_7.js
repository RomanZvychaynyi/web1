const container = document.createElement('div');
 container.className = 'container';
 const question = document.createElement('div');
 question.className = 'question';
 question.textContent = 'Чи буде завтра сонячно?';
 container.appendChild(question);
 const crystalBall = document.createElement('div');
 crystalBall.className = 'crystal-ball';
 container.appendChild(crystalBall);
 function batton() {
  let randomAnswer = Math.floor(Math.random() * 2);
  if(randomAnswer === 1){
    crystalBall.textContent = "Yes";
  }
  else {
    crystalBall.textContent = "No";
  }
}
crystalBall.addEventListener('click', () => {
    batton()
  });
 document.body.appendChild(container);
