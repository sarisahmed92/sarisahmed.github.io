document.querySelectorAll(".youtube-preview").forEach((preview) => {
  const button = preview.querySelector("button");

  button.addEventListener("click", () => {
    console.log("clicked");

    const videoId = preview.dataset.videoId;

    preview.innerHTML = `
      <iframe
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0"
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  });
});

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
console.log(menuButton, siteNav);

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);
  });
}