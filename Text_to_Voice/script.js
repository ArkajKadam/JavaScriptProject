// Create a SpeechSynthesisUtterance instance
let speech = new SpeechSynthesisUtterance();

// Reference the select dropdown for voices
let voiceSelect = document.querySelector("select");


// Speak the text from the textarea when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});




// Populate the voices in the dropdown
window.speechSynthesis.onvoiceschanged = () => {
    let voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // Clear any existing options

    voices.forEach((voice, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
    });

    // Set the default voice
    speech.voice = voices[0];
};

// Change voice based on dropdown selection
voiceSelect.addEventListener("change", () => {
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices[voiceSelect.value];
});


