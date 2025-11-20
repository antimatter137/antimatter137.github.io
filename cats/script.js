// zoom in to cats
function openZoom(img) {
    const zoom = document.getElementById("zoom");
    const zoomImg = document.getElementById("zoom-img");

    zoomImg.src = img.src;
    zoom.classList.add("active");

    // Close when clicking outside the image
    zoom.addEventListener("click", (e) => {
        if (e.target === zoom) {
            closeZoom();
        }
    });
}
// close zoom from cats
function closeZoom() {
    const zoom = document.getElementById("zoom");
    const zoomImg = document.getElementById("zoom-img");

    zoom.classList.remove("active");
    zoomImg.src = "";
}
