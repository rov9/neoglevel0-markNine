import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  horror: [
    {
      name: "Tumbbad",
      rating: "8.3/10",
      desc:
        "Tumbbad is a 2018 Indian Hindi-language period horror film directed by Rahi Anil Barve"
    },
    {
      name: "Bhootnath",
      rating: "6.3/10",
      desc:
        "Bhoothnath is a 2008 Indian Hindi comedy horror film written and directed by Vivek Sharma"
    },
    {
      name: "Stree",
      rating: "7.6/10",
      desc:
        "Stree is a 2018 Indian Hindi-language comedy horror film directed by debutant Amar Kaushik in his directorial debut"
    }
  ],

  action: [
    {
      name: "Commando",
      rating: "6.2/10",
      desc:
        "Commando: A One Man Army is a 2013 Indian Hindi-language action film directed by Dilip Ghosh and produced by Vipul Amrutlal Shah"
    },
    {
      name: "Kesari",
      rating: "7.4/10",
      desc:
        "Kesari is a 2019 Indian Hindi-language war film[3] written and directed by Anurag Singh"
    },
    {
      name: "Sholay",
      rating: "8.2/10",
      desc:
        "Sholay is a 1975 Indian action-adventure film written by Salim–Javed, directed by Ramesh Sippy"
    }
  ],
  comedy: [
    {
      name: "Phir Hera Pheri",
      rating: "7.1/10",
      desc:
        "Phir Hera Pheri is a 2006 Indian Hindi-language comedy film co-written and directed by Neeraj Vora"
    },
    {
      name: "Welcome",
      rating: "7/10",
      desc:
        "Welcome is an Indian 2007 Hindi-language comedy film directed and co-written by Anees Bazmee with production by Firoz Nadiadwala"
    },
    {
      name: "Dhamaal",
      rating: "4.7/10",
      desc:
        "Dhamaal is a 2007 Indian comedy film directed by Indra Kumar and produced by Ashok Thakeria"
    }
  ],
  romance: [
    {
      name: "Kuch Kuch Hota Hai ",
      rating: "7.6/10",
      desc:
        "Kuch Kuch Hota Hai is a 1998 Indian Hindi-language romantic comedy-drama film, written and directed by Karan Johar"
    },
    {
      name: "Veer Zaara",
      rating: "7.8/10",
      desc:
        "Veer-Zaara is a 2004 Indian Hindi-language period romantic drama film directed by Yash Chopra"
    },
    {
      name: "Raanjhanaa ",
      rating: "7.6/10",
      desc:
        "Raanjhanaa is a 2013 Indian Hindi-language romantic drama film directed by Aanand L. Rai and written by Himanshu Sharma"
    }
  ],
  thriller: [
    {
      name: "Drishyam",
      rating: "8.2/10",
      desc:
        "Drishyam is a 2015 Indian Hindi-language thriller film directed by Nishikant Kamat.The film is a remake of the 2013 Malayalam-language film of the same name"
    },
    {
      name: "Special Chabbis",
      rating: "8/10",
      desc:
        "Special 26 is a 2013 Indian Hindi-language heist film written and directed by Neeraj Pandey and produced by Shital Bhatia"
    },
    {
      name: "Baby",
      rating: "8/10",
      desc:
        "Baby is a 2015 Indian Hindi-language spy thriller film written and directed by Neeraj Pandey"
    }
  ],
  war: [
    {
      name: "Bose: The Forgotten Hero",
      rating: "7.6/10",
      desc:
        "Netaji Subhas Chandra Bose: The Forgotten Hero is a 2004 Indian epic biographical war film, written and directed by Shyam Benegal"
    },
    {
      name: "Border",
      rating: "7.9/10",
      desc:
        "Border is a 1997 Indian Hindi-language epic war film directed, produced and written by J. P. Dutta. Set during the Indo-Pakistani War of 1971"
    },
    {
      name: "Uri: The Surgical Strike",
      rating: "8.2/10",
      desc:
        "Uri: The Surgical Strike is a 2019 Indian Hindi-language action film[6] written and directed by debutant Aditya Dhar and produced by Ronnie Screwvala"
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
              <div
                style={{
                  fontSize: "10px",
                  display: "block",
                  margin: "auto",
                  textAlign: "center"
                }}
              >
                {" "}
                {movie.desc}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
