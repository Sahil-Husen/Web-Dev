 
// Preloader 
document.addEventListener("DOMContentLoaded", function() {
    // Set the duration (in milliseconds)
    const loadingDuration = 1000; // 3 seconds

    // Show the main content after the loading duration
    setTimeout(function() {
        const loadingContent = document.querySelector(".loading-content");
        loadingContent.classList.add("fade-out");

        // Wait for the transition to complete before hiding the loading page and showing the main content
        loadingContent.addEventListener("transitionend", function() {
            document.getElementById("loading-page").style.display = "none";
            document.getElementById("main").style.display = "block";
        });
    }, loadingDuration);
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    scrollToTopBtn.addEventListener('dblclick', function () {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: "smooth"
      });
    });
  });


  // Progress Bar
  const filled = document.querySelector('.filled');
  function update(){
    filled.style.width =  `${((window.scrollY) /(document.body.scrollHeight - window.innerHeight)*100 )}%`
    requestAnimationFrame(update);
  }
  update();