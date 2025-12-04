const container = document.getElementById("container");

const GetProducts = async () => {
  try {
    const res = await fetch("https://ilkinibadov.com/api/v1/products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error(error);
  }
};

const renderProducts = async () => {
  if (!container) return;

  const products = await GetProducts();
  if (!products) return;

  container.classList.add("grid", "grid-cols-4", "gap-6");

  products.forEach((product) => {
    const card = document.createElement("div");
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    const productName = document.createElement("h2");
    const productPrice = document.createElement("p");
    const addToBasked = document.createElement("button");

    img.src = product.images[0];
    productName.innerText = product.title;
    productPrice.innerText = `${product.price} ₼`;
    addToBasked.innerText = "Add to Basket";

    img.classList.add("w-full", "h-60", "object-cover", "rounded-lg", "mb-4");
    productName.classList.add("text-lg", "font-semibold", "text-gray-800");
    productPrice.classList.add("text-red-500", "mt-2");
    addToBasked.classList.add(
        "bg-black",
        "text-white",
        "justify-center",
        "rounded-b-lg",
        "py-2",
        "w-full",
        "absolute",
        "bottom-4",
        "transform",
      );

    imgWrapper.classList.add("relative", "group");
    card.classList.add(
      "bg-gray-100",
      "rounded-lg",
      "shadow-lg",
      "flex",
      "flex-col",
      "transition",
      "transform",
      "hover:scale-105",
      "hover:shadow-2xl",
      "p-4",

    );
    imgWrapper.addEventListener("mouseenter", () => {
        addToBasked.style.opacity = "1";
      });
      imgWrapper.addEventListener("mouseleave", () => {
        addToBasked.style.opacity = "0";
      });
  
      imgWrapper.append(img, addToBasked);
      card.append(imgWrapper, productName, productPrice);
      container.append(card);
  });
};

renderProducts();
