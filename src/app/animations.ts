// makes toolbar fade in from above after the page loads
export function fadeInAboveAnimation() {
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            const toolbar: HTMLElement | null = document.getElementById("toolbar");
            if (toolbar) {
                toolbar.classList.add("!translate-y-0");
            }
        }, 500);
    });
}

// makes main content fade in after the page loads
export function fadeInAnimation() {
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            const main: HTMLElement | null = document.getElementById("main");
            if (main) {
                main.classList.add("!opacity-100");
            }
        }, 300);
    });
}