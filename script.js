console.log("script loaded");
document.querySelectorAll(".youtube-preview").forEach((preview) => {
    preview.querySelector("button").addEventListener("click", () => {
        console.log("clicked", videoId);
        const videoId = preview.dataset.videoId;

        preview.innerHTML = `
            <iframe
                width="1280"
                height="720"
                src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    });
});
