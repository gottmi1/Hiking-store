function scrollMove(x) {
  scrollTo({
    top: x,
    behavior: "smooth",
  });
}

const $leftArrow = document.querySelector("#left-arrow");
const $rightArrow = document.querySelector("#right-arrow");
const $number = document.querySelectorAll("#number > li");

for (let i = 0; i < $number.length; i++) {
  $number[i].addEventListener("click", (e) => {
    for (let i = 0; i < $number.length; i++) {
      $number[i].classList.remove("number-on");
    }
    e.target.classList.add("number-on");
  });
}

$leftArrow.addEventListener("click", () => {
  if ($number[1].classList.contains("number-on")) {
    $number[1].classList.remove("number-on");
    $number[0].classList.add("number-on");
  } else if ($number[2].classList.contains("number-on")) {
    $number[2].classList.remove("number-on");
    $number[1].classList.add("number-on");
  }
});

$rightArrow.addEventListener("click", () => {
  if ($number[0].classList.contains("number-on")) {
    $number[0].classList.remove("number-on");
    $number[1].classList.add("number-on");
  } else if ($number[1].classList.contains("number-on")) {
    $number[1].classList.remove("number-on");
    $number[2].classList.add("number-on");
  }
});

const $secOneArrow = document.querySelector("#sec1-right-arrow");
const $secOneToggle = document.querySelectorAll("#sec1-toggle > div");

for (let i = 0; i < $secOneToggle.length; i++) {
  $secOneToggle[i].addEventListener("click", (e) => {
    for (let i = 0; i < $secOneToggle.length; i++) {
      $secOneToggle[i].classList.remove("toggle-on");
    }
    e.target.classList.add("toggle-on");
  });
}

const $secFourToggle = document.querySelectorAll("#sec4-toggle > div");

for (let i = 0; i < $secFourToggle.length; i++) {
  $secFourToggle[i].addEventListener("click", (e) => {
    for (let i = 0; i < $secFourToggle.length; i++) {
      $secFourToggle[i].classList.remove("toggle-on");
    }
    e.target.classList.add("toggle-on");
  });
}
