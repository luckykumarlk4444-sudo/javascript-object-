let number = Math.floor(Math.random() * 10) + 1;

function check() {
  let guess = document.getElementById("guess").value;
  let result = document.getElementById("result");

  if (guess == number) {
    result.innerText = "🎉 Correct!";
  } else if (guess < number) {
    result.innerText = "Too Low!";
  } else {
    result.innerText = "Too High!";
  }
}
