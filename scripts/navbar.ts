window.addEventListener("scroll", () => {
  const navbar: HTMLElement = document.querySelector(".navbar") as HTMLElement;
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});