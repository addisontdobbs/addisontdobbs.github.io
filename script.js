document.addEventListener("DOMContentLoaded", () => {
  let isLocked = false;
  let scrolled = false;

  window.addEventListener("wheel", (event) => {
    if (isLocked) return;
    isLocked = true;

    if (!scrolled) {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      scrolled = true;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      scrolled = false;
    }

    setTimeout(() => {
      isLocked = false;
    }, 1000); // Prevents excessive scrolling
  });
});
