const timerElement = document.getElementById("timer");

function countDown(btn_id) {
  // disable clicked adopt button
  const btn = document.getElementById(`adopt_btn_${btn_id}`);
  btn.disabled = "true";
  btn.style.backgroundColor = "gray";
  btn.style.color = "black";
  btn.classList.remove("hover:bg-[#0E7A81]");
  console.log(btn);
  let counter = 3;
  my_modal_1.showModal();
  timerElement.style.setProperty("--value", counter);

  let interval = setInterval(() => {
    counter--;
    timerElement.style.setProperty("--value", counter);

    if (counter < 0) {
      document.getElementById("closeBtn").click();
      clearInterval(interval);
    }
  }, 1000);
}
