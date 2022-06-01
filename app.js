const countBtn = document.getElementById("btn-count");
let resetCountBtn = document.getElementById('btn-reset');
let count = 0;

function increaseCount() {  
  count += 1;
  document.getElementById("clicks").innerHTML = count;
  console.log(count);  
}

function resetCount() {
  count = 0;
  document.getElementById("clicks").innerHTML = count;
}

countBtn.addEventListener("click", increaseCount);
resetCountBtn.addEventListener("click", resetCount);

// onclick="increaseCount()"