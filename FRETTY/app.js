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
    speak("Hello Sir , How may i help you today");}







    /// here are my list of jokes ///-- can modify it later//
    const jokes = [
      "Why don't skeletons fight each other? They don't have the guts.",
      "Why was the math book sad? Because it had too many problems.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "Why don’t eggs tell jokes? Because they might crack up.",
      "What do you call fake spaghetti? An impasta.",
      "I used to play piano by ear, but now I use my hands.",
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
      "Why don’t some couples go to the gym? Because some relationships don’t work out.",
      "I’m reading a book about anti-gravity. It’s impossible to put down!",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "Why don’t oysters donate to charity? Because they are shellfish.",
      "What’s orange and sounds like a parrot? A carrot!",
      "Why did the bicycle fall over? It was two-tired.",
      "What did one wall say to the other wall? I'll meet you at the corner.",
      "Why do cows have hooves instead of feet? Because they lactose.",
      "What did the ocean say to the beach? Nothing, it just waved.",
      "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "How do you organize a space party? You planet!",
      "What do you get when you cross a snowman and a vampire? Frostbite.",
      "Why did the computer go to the doctor? Because it had a virus.",
      "Why don’t skeletons ever use cell phones? They don’t have the guts.",
      "What’s the best way to watch a fly fishing tournament? Live stream.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
      "I would tell you a joke about an elevator, but it’s an uplifting experience.",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "I don’t trust stairs because they’re always up to something.",
      "Why was the belt arrested? For holding up a pair of pants.",
      "What do you call a pile of cats? A meow-tain.",
      "What do you get when you cross a snowman with a dog? Frostbite.",
      "Why did the chicken join a band? Because it had the drumsticks!",
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "What’s the hardest part about writing a joke? It’s always a bit of a pun-ishment.",
      "Why did the scarecrow get promoted? Because he was outstanding in his field.",
      "What’s a skeleton’s least favorite room in the house? The living room.",
      "What did one hat say to the other hat? Stay here, I’m going on ahead.",
      "Why did the banana go to the doctor? Because it wasn’t peeling well.",
      "What do you call a cow with no legs? Ground beef.",
      "What’s a skeleton’s least favorite room in the house? The living room.",
      "Why do bicycles fall over? Because they’re two-tired."
    ];
    
    // Handle joke command
    if (transcript.includes("joke") || transcript.includes("tell me a joke")) {
      // Pick a random joke from the array
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      speak(randomJoke);
    }




    //jokes ends above //..................```````````````````````
    
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


    // creation part still in progress //
  }
  else if (transcript.includes("created") || transcript.includes("who created you")) {
    window.open("https://www.metalio.com/")
    console.log("Replying to creator question");
    speak("I was created by Pranjal Malhotra, a student at VIT Chennai.");
  }/// fretty's creation question ..........
  else if (transcript.includes("facebook")) {
    window.open("https://www.facebook.com/");
    speak("Opening facebook for you sir...");
  }

  else if (transcript.includes("age")|| transcript.includes("your age")){
    speak("i wwas created by Pranjal Malhotra on 26th January 2025....... you can calculate it , you're a really good mathematician Sir.........")
  }
  else if (transcript.includes("Reddit")) {
    window.open("https://www.reddit.com/");
    speak("Opening reddit comunity for you sir ");
  }

  else if (transcript.includes("netflix")) {
    window.open("https://www.netflix.com/");
    speak("Netflix and chilll...");
  }

  else if (transcript.includes("whatsapp")) {
    window.open("https://www.whatsapp.com/");
    speak("Turning on whatsapp Sir......");
  }

  else if (transcript.includes("Prime")||transcript.includes("video")) {
    window.open("https://www.primevideo.com/");
    speak("Lets have some fun on prime ....");
  }

  else if (transcript.includes("byjus")) {
    window.open("https://byjus.com/");
    speak("Opening byjus for you sir ");
  }

  else if (transcript.includes("redbus")||transcript.includes("bus")) {
    window.open("https://www.redbus.in/");
    speak("Lets look for a bus sir.... ");
  }

  else if (transcript.includes("language")||transcript.includes("improve language")||transcript.includes("duolingo")) {
    window.open("https://www.duolingo.com/");
    speak("Path to learn a new language sir.... ");



    
  }

    // some more settingsss//

    else if (transcript.includes("open new tab")||transcript.includes("new tab")) {
      window.open();
      speak("Opening a new tab, Sir.");
    }
    
    else if (transcript.includes("refresh page")|| transcript.includes("refresh")) {
      window.location.reload();
      speak("Refreshing the page.");
    }
    
    else if (transcript.includes("quit ")||transcript.includes("close")) {
      window.close();
      speak("Goodbye Sir.");
    }
    

  else {
    speak("Sorry, can you please repeat, Sir?");
  }
}

let isRecording = false;

// Adding an event listener for the backtick key
window.addEventListener("keydown", (event) => {
  if (event.key === "`" || event.key === "~") { // Backtick key will help is holding mic on/off commands 
    content.textContent = "Listening....";
    reco.start();
  }
});
  /// adding event listerner for the keyup event to stop mic when key is released //

  window.addEventListener("keyup", (event) => {
    if (event.key === "`" || event.key === "~") {
      content.textContent = "Mic off.";
      reco.stop();
      isRecording = false; // Set to false when recording stops
    }
  });


