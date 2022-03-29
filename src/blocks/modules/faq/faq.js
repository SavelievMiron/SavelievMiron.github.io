const topics = document.getElementsByClassName("hot-topic");
if (topics.length !== 0) {
  for (let i = 0; i < topics.length; i++) {
    topics[i].addEventListener("click", function () {
        for (let i = 0; i < topics.length; i++) {
            topics[i].classList.remove('is-active')
        }
        this.classList.toggle("is-active");
    });
  }
}

const questions = document.getElementsByClassName("faq__question");
if (questions.length !== 0) {
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
      this.classList.toggle("is-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
}
