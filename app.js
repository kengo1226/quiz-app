// 答えをArrayでまとめる。Aの場合はAにアップデートする。
const correctAnswers = ["B", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const resultScore = document.querySelector(".result span");

form.addEventListener("submit", (e) => {
  // Submitボタンはデフォルトでページをリフレッシュしてしまうのでしないようにする。
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //Check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //   Show result on page
  //   result.classList.remove("d-none");
  //   resultScore.innerHTML = score + "%";

  //   window.scrollToだがWindowはグローバルオブジェクトなので不要
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}点`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  console.log(score);
});

// window object
// setTimeout(() => {
//   alert("hello ninjas");
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//   console.log("hello");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
