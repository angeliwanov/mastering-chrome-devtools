const list = document.getElementById("catfacts");

try {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((result) => {
      result.products.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item.title;
        list.appendChild(li);
      });
    });
} catch (e) {
  // Silence is golden
}
