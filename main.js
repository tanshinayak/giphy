const input = document.getElementById("search");
const searchbutton = document.querySelector(".submit");

const img = document.querySelector("img");

searchbutton.addEventListener("click", (x) => {
  x.preventDefault();
  search(input.value);
});
async function search(val) {
  let s = val ? val : null;

  const request = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=eiBWo22a1Z7DE47CoMr1KTn0MYF9q8BI&s=${s}&10`
  );
  const data = await request.json();
  img.src = data.data.images.original.url;
}

search();