const startRecordBtn = document.getElementById('start-record-btn');
const playAudioBtn = document.getElementById('play-audio-btn');
const transcriptArea = document.getElementById('transcript');
const recordingStatus = document.getElementById('recording-status');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'te-IN';

startRecordBtn.addEventListener('click', () => {
    recognition.start();
    recordingStatus.textContent = 'Recording...';
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    transcriptArea.value = transcript;
    recordingStatus.textContent = 'Recording stopped.';
};

playAudioBtn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(transcriptArea.value);
    utterance.lang = 'te-IN';
    speechSynthesis.speak(utterance);
});
