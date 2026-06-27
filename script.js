document.getElementById("learnBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("jobForm").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Application Submitted Successfully!");

    document.getElementById("jobForm").reset();
});
