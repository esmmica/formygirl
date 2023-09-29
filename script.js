let currentMessageIndex = 1;

function nextMessage() {
    const currentMessage = document.getElementById(`message${currentMessageIndex}`);
    currentMessage.style.maxHeight = "0";
    currentMessageIndex++;
    if (currentMessageIndex > 13) {
        currentMessageIndex = 1; 
    }
    const nextMessage = document.getElementById(`message${currentMessageIndex}`);
    setTimeout(() => {
        nextMessage.style.maxHeight = nextMessage.scrollHeight + "px";
    }, 100);
}

let letterFrameVisible = false;
const letterContainer = document.getElementById("letterContainer");

function toggleLetterFrame() {
    letterFrameVisible = !letterFrameVisible;
    if (letterFrameVisible) {
        letterContainer.style.display = "block";
        letterContainer.innerHTML = '<iframe src="letter.html" frameborder="0"></iframe>';
    } else {
        letterContainer.style.display = "none";
        letterContainer.innerHTML = ""; // Clear the content
    }
}



