console.log("script loaded");
document.querySelectorAll(".youtube-preview").forEach((preview) => {
    preview.querySelector("button").addEventListener("click", () => {
        const videoId = preview.dataset.videoId;

        preview.innerHTML = `
            <iframe
                src="https://www.youtube-nocookie.com/embed/$I4ZadlDJAZg?autoplay=1&rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    });
});
