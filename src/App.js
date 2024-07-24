import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Discover hidden places in the world around you</h1>
        <a href="https://www.google.com">Download Excursion</a>
      </header>
      <main>
        <video src="/assets/excursion-project-video.mp4" autoPlay loop muted>
          Failed to play video
        </video>
        <h2>Your personal travel guide</h2>
        <p>
          Excursion remembers places you like, and recommends new points of
          interest around you.
        </p>
        <img
          src="assets/excursion-camp.webp"
          alt="Camping in the woods with yellow lighting."
        />
      </main>
      <footer>
        <img src="assets/phone-logo.webp" alt="phone logo" />
        <h2>Coming Soon for iPhone and Android</h2>
        <a href="https://www.apple.com/app-store/">
          Download Excursion (Coming Soon)
        </a>
      </footer>
    </div>
  );
}

export default App;
