const slides = document.querySelectorAll(".slide");

slides.forEach((s, i) => {
  s.style.transform = `translate(${100 * i})`;
  console.log(s);
});
