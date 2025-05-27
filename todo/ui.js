
    async function fetchData() {
      try {
        const response = await fetch("http://www.omdbapi.com/?s=guardians&apikey=2649d654");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        const container = document.getElementById("poster-container");
          data.Search.forEach(movie => {
            if ( movie.Poster !== "N/A") {
              const posterDiv = document.createElement("div");
              posterDiv.className = "poster";

              const img = document.createElement("img");
              img.src = movie.Poster;
              img.alt = movie.Title;

              const title = document.createElement("div");
              title.className = "poster-title";
              title.textContent = movie.Title;

              posterDiv.appendChild(img);
              posterDiv.appendChild(title);
              container.appendChild(posterDiv);
            }
          });
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    
    fetchData();
 