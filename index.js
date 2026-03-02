const envelope = document.getElementById("envelope");

const letterWrapper = document.getElementById("letterWrapper");
    const letter = document.getElementById("letter");

let opened = false;
    let flipped = false;

envelope.addEventListener("click", () => {
      if (opened) return;
      opened = true;
      envelope.classList.add("open");

      setTimeout(() => {
        letterWrapper.classList.add("show");
      }, 300);
    });

    letter.addEventListener("click", () => {
      flipped = !flipped;
      letter.classList.toggle("flipped", flipped);
    });
