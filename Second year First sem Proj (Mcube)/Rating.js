 const ratingStars = document.querySelectorAll(".rating i");
      const ratingValue = document.getElementById("rating-value");

      ratingStars.forEach((star) => {
        star.addEventListener("click", () => {
          const rating = star.getAttribute("data-rating");
          ratingValue.textContent = rating;
          ratingStars.forEach((s) => {
            s.classList.remove("selected");
          });
          for (let i = 0; i < rating; i++) {
            ratingStars[i].classList.add("selected");
          }
        });
      });