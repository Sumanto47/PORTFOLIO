/*------------------------------------------- SCRIPT FOR PAGE-OVERLAPPING-SCROLL START ------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementsByTagName("main")[0];
    var header = document.getElementById("parallaxHeader");

    // Set the height of the body to the height of the container
    document.body.style.height = container.clientHeight + "px";

    var sx = 0,
        sy = 0;
    var dx = 0,
        dy = 0;
    var power = 0.025; // Higher value = faster scrolling

    // Linear interpolation function
    const li = (a, b, n) => (1 - n) * a + n * b;

    function render() {
        // Interpolate towards the target scroll positions
        dx = li(dx, sx, power);
        dy = li(dy, sy, power);

        // Round values to avoid sub-pixel rendering issues
        dx = Math.floor(dx * 100) / 100;
        dy = Math.floor(dy * 100) / 100;

        // Apply the transform
        container.style.transform = `translate3d(-${dx}px, -${dy * 0.55}px, 0)`;
        // Apply the transform to the header to achieve the parallax effect
        header.style.transform = `translate3d(0, -${dy * 0.55}px, 0)`;
        // Request the next frame
        requestAnimationFrame(render);
    }

    // Update the scroll position
    function easeScroll() {
        sx = window.pageXOffset;
        sy = window.pageYOffset;
    }

    // Listen for the scroll event
    window.addEventListener("scroll", easeScroll);
    window.addEventListener("wheel", easeScroll);

    // Start the rendering loop
    requestAnimationFrame(render);
});

/*------------------------------------------- SCRIPT FOR PAGE-OVERLAPPING-SCROLL COMPLETE ------------------------------------------*/