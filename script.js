console.log("script loaded");

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