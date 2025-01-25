const button = document.querySelector(".talk");
const content = document.querySelector(".content");

let islistening = false;

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1.15;
  text_speak.volume = 1;
  text_speak.pitch = -2;  // Ensuring the pitch is set
  window.speechSynthesis.speak(text_speak);
}

// This function greets the user based on the time of day
function greet() {
  let day = new Date();
  var hour = day.getHours();
  if (hour >= 0 && hour < 12) {
    speak("Good Morning Sir...");
  } else if (hour >= 12 && hour < 17) {
    speak("Good Afternoon Sir...");
  } else if (hour >= 17 && hour <= 23) {
    speak("Good Evening Sir...");
  }
}

// Initial greeting when the page loads
window.addEventListener("load", () => {
  speak("initialising FRETTY....");
  greet();
});

// Set up Speech Recognition
const SpeecReco = window.SpeechRecognition || window.webkitSpeechRecognition;
const reco = new SpeecReco();

// Listen for results
reco.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const Transcript = event.results[currentIndex][0].transcript; // Corrected case issue
  content.textContent = Transcript;

  takeCommand(Transcript.toLowerCase()); // Call takeCommand with the transcript
};

reco.onend = () => {
    if (isListening) {
      reco.start();  // Restart listening automatically after recognition ends
    }
};

// Start listening when the button is clicked
button.addEventListener("click", () => {
  content.textContent = "Listening....";
  reco.start();
});

// Handling Repzz commands
function takeCommand(transcript) {
  if (transcript.includes("hey") || transcript.includes("hello") || transcript.includes("hi") || transcript.includes("hey ") || transcript.includes(" hi nef")) {
    speak("Hello Sir , How may i help you today");
  }
  else if (transcript.includes("google")) {
    window.open("https://www.google.com/");
    speak("Google has been opened");
  }
  else if (transcript.includes("youtube") || transcript.includes("YT")) {
    window.open("https://www.youtube.com/");
    speak("Here's the YouTube!!");
  }
  else if (transcript.includes("instagram") || transcript.includes("insta")) {
    window.open("https://www.instagram.com/accounts/login/?hl=en");
    speak("As you say sir");
  }
  else if (transcript.includes("chat GPT") || transcript.includes("gpt")) {
    window.open("https://chatgpt.com/");
    speak("Sure Sir");
  }
  else if (transcript.includes("leetcode") || transcript.includes("Leetcode") || transcript.includes("lead code")) {
    window.open("https://www.leetcode.com/");
    speak("Sure Sir");
  }
  else if (transcript.includes("spotify")) {
    window.open("https://www.spotify.com/");
    speak("Let's listen to some music, Sir.");
  }
  else if (transcript.includes("zomato")) {
    window.open("https://www.zomato.com/");
    speak("Opening Zomato, Sir.");
  }
  else if (transcript.includes("dominos")) {
    window.open("https://www.dominos.com/");
    speak("Opening Domino's, Sir.");
  }
  else if (transcript.includes("linkedin")) {
    window.open("https://www.linkedin.com/");
    speak("Opening LinkedIn, Sir.");
  }
  else if (transcript.includes("rockstar") || transcript.includes("rockstar games")) {
    window.open("https://www.rockstargames.com/");
    speak("Opening Rockstar Games, Sir.");
  }
  else if (transcript.includes("ambition box")) {
    window.open("https://www.ambitionbox.com/");
    speak("Opening AmbitionBox, Sir.");
  }
  else if (transcript.includes("fix code") || transcript.includes("fix my code")) {
    window.open("https://chatgpt.com/");
    speak("Let's fix it on ChatGPT Sir..");
  }
  else if (transcript.includes("time") || transcript.includes("tell time") || transcript.includes("current time")) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    speak(`The current time is ${time}`);
  }
  else if (transcript.includes("what's the date") || transcript.includes("tell me the date") || transcript.includes("current date")) {
    const now = new Date();
    const date = now.toLocaleDateString();
    speak(`Today's date is ${date}`);
  }
  else if (transcript.includes("what's the weather") || transcript.includes("weather update")) {
    // Example: Replace with your actual API key
    const apiKey = "https://api.weatherapi.com/v1/current.json?key=b13989793f184149a91141538230103&q={city}";
    const city = "YOUR_CITY";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        speak(`The current weather in ${city} is ${temperature} degrees Celsius with ${weatherDescription}`);
      })
      .catch(error => {
        speak("Sorry, I couldn't get the weather right now.");
      });
  }
  else if (transcript.includes("calculator")) {
    window.open("calculator://");  // This only works in specific environments, e.g., Windows
    speak("Opening Calculator for you, Sir.");
  }
  else if (transcript.includes("open vs code") || transcript.includes("open visual studio code")) {
    window.open("https://code.visualstudio.com/");
    speak("Opening Visual Studio Code, Sir.");
  }
  else if (transcript.includes("github")) {
    window.open("https://github.com/");
    speak("Here's Github!");
  }
  else if (transcript.includes("vit") || transcript.includes("vtop") || transcript.includes("college") || transcript.includes("college site")) {
    window.open("https://vtopcc.vit.ac.in/");
    speak("I have opened VIT Chennai Web Page");
  }
  else if (transcript.includes("lms") || transcript.includes("assignments")) {
    window.open("https://lms.vit.ac.in/");
    speak("Opening LMS");
  }
  else if (transcript.includes("wikipedia") || transcript.includes("wiki")) {
    window.open("https://www.wikipedia.org/");
    speak("Let's get some knowledge!");
  }
  else if (transcript.includes("amazon")) {
    window.open("https://www.amazon.com/");
    speak("Shopping time, I see... Sir!");
  }
  else if (transcript.includes("created") || transcript.includes("who created you")) {
    speak("I was created by Pranjal Malhotra, a student at VIT Chennai.");
  }
  else {
    speak("Sorry, can you please repeat, Sir?");
  }
}

