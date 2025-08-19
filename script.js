const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("show");
      }
    });

    if (
      e.target.className !== "answer" &&
      e.target.className !== "answer-container"
    ) {
      faq.classList.toggle("show");
    }
  });
});
