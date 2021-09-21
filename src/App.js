import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  horror: [
    { name: "Tumbbad", rating: "8.3/10" },
    { name: "Bhootnath", rating: "6.3/10" },
    { name: "Stree", rating: "7.6/10" }
  ],

  action: [
    {
      name: "Commando",
      rating: "6.2/10"
    },
    {
      name: "Kesari",
      rating: "7.4/10"
    },
    {
      name: "Sholay",
      rating: "8.2/10"
    }
  ],
  comedy: [
    {
      name: "Phir Hera Pheri",
      rating: "7.1/10"
    },
    {
      name: "Welcome",
      rating: "7/10"
    },
    {
      name: "Bombay to Goa",
      rating: "4.7/10"
    }
  ],
  romance: [
    {
      name: "Kuch Kuch Hota Hai ",
      rating: "7.6/10"
    },
    {
      name: "Veer Zaara",
      rating: "7.8/10"
    },
    {
      name: "Raanjhanaa ",
      rating: "7.6/10"
    }
  ],
  thriller: [
    {
      name: "Drishyam",
      rating: "8.2/10"
    },
    {
      name: "Special Chabbis",
      rating: "8/10"
    },
    {
      name: "Baby",
      rating: "8/10"
    }
  ],
  war: [
    {
      name: "Bose: The Forgotten Hero",
      rating: "7.6/10"
    },
    {
      name: "Border",
      rating: "7.9/10"
    },
    {
      name: "Uri: The Surgical Strike",
      rating: "8.2/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        ▶ <span class="span">g</span>ood movies{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#C7D2FE",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "larger",
                  display: "block",
                  margin: "auto",
                  textAlign: "center"
                }}
              >
                {" "}
                {movie.name}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  display: "block",
                  margin: "auto",
                  textAlign: "center"
                }}
              >
                {" "}
                {movie.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
