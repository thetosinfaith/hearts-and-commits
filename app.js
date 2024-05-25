function toggleMessage() {
    var messageContent = document.getElementById("messageContent");
    if (messageContent.style.display === "none" || messageContent.style.display === "") {
        messageContent.style.display = "block";
    } else {
        messageContent.style.display = "none";
    }
}
