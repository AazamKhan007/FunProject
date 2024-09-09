function startProcess() {
    // Ask for name1 after the link is clicked
    var name1 = prompt("Please enter a name:");
    if (!name1 || name1.trim() === "") {
        alert("You need to enter a valid name.");
        return;
    }

    // Hide the link and show the loading animation
    document.getElementById("showContent").style.display = "none";
    document.getElementById("loading").style.display = "block";
  
    // Get the video element and play the video muted during the loading period
    var videoElement = document.getElementById("video");
    videoElement.style.display = "block";
    videoElement.play();

    // Simulate loading for 3 seconds, then show the content
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";

        // Set the text content for loveMessage and name1Bottom
        document.getElementById("loveMessage").textContent = "My self " + name1 + " and i'm CHUTYA....";
        document.getElementById("name1Bottom").textContent = name1;

        // Display the loveMessage and mainName
        document.getElementById("loveMessage").style.display = "block";
        document.getElementById("mainName").style.display = "block";

        // Play the sound effect
        // document.getElementById("soundEffect").play();

        // After mainName appears, show name1Bottom and play the video
        setTimeout(function() {
            document.getElementById("name1Bottom").style.display = "block";
            
            // Show and play the video when name1 appears
            var videoElement = document.getElementById("video");
            videoElement.style.display = "block";
            videoElement.play(); // Play the video automatically when the name appears
        }, 2000); // Adjust timing as needed

    }, 3000);
}