// Product catalogue — edit names, prices and categories here
const products = [
  { id: 1, name: "Linen Wrap Dress", cat: "women", price: 79, icon: "👗", bg: "#e9d8c8", badge: "New" },
  { id: 2, name: "Tailored Wool Blazer", cat: "men", price: 149, icon: "🧥", bg: "#d3dae0" },
  { id: 3, name: "Leather Tote Bag", cat: "accessories", price: 95, old: 120, icon: "👜", bg: "#ecdfc0", badge: "Sale" },
  { id: 4, name: "Silk Blouse", cat: "women", price: 65, icon: "👚", bg: "#f1e3e0" },
  { id: 5, name: "Oxford Cotton Shirt", cat: "men", price: 55, icon: "👔", bg: "#dde5ec", badge: "New" },
  { id: 6, name: "Classic Sneakers", cat: "accessories", price: 89, icon: "👟", bg: "#e6e6e1" },
  { id: 7, name: "High-Rise Denim", cat: "women", price: 69, old: 89, icon: "👖", bg: "#d6dfea", badge: "Sale" },
  { id: 8, name: "Aviator Sunglasses", cat: "accessories", price: 45, icon: "🕶️", bg: "#efe7d6" },
  { id: 9, name: "Knit Polo", cat: "men", price: 59, icon: "👕", bg: "#e3e8df" },
  { id: 10, name: "Heeled Sandals", cat: "women", price: 85, icon: "👠", bg: "#f0ddd6" },
  { id: 11, name: "Wool Fedora", cat: "accessories", price: 49, icon: "🎩", bg: "#e4dccf" },
  { id: 12, name: "Chelsea Boots", cat: "men", price: 129, old: 159, icon: "🥾", bg: "#e0d6cc", badge: "Sale" },
];

const catLabels = { women: "Women", men: "Men", accessories: "Accessories" };

function productCard(p) {
  const badge = p.badge
    ? `<span class="badge ${p.badge === "Sale" ? "sale" : ""}">${p.badge}</span>`
    : "";
  const old = p.old ? `<del>$${p.old}</del>` : "";
  return `
    <article class="product">
      <div class="product-img" style="background:${p.bg}">${badge}${p.icon}</div>
      <div class="product-info">
        <span class="cat">${catLabels[p.cat]}</span>
        <h3>${p.name}</h3>
        <div class="price">$${p.price}${old}</div>
        <button class="add-btn" data-id="${p.id}">Add to bag</button>
      </div>
    </article>`;
}

function renderProducts(container, list) {
  container.innerHTML = list.map(productCard).join("");
}

// Cart (kept in this browser only)
function getCart() {
  try { return JSON.parse(localStorage.getItem("fh-cart")) || []; } catch { return []; }
}
function saveCart(cart) {
  try { localStorage.setItem("fh-cart", JSON.stringify(cart)); } catch {}
}
function updateCartCount() {
  const el = document.querySelector(".cart-count");
  if (el) el.textContent = getCart().length;
}

function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));

  // Featured products on the home page
  const featured = document.querySelector("#featured-products");
  if (featured) renderProducts(featured, products.slice(0, 8));

  // Full catalogue with filters on the shop page
  const shop = document.querySelector("#shop-products");
  if (shop) {
    const params = new URLSearchParams(location.search);
    let current = params.get("cat") || "all";
    const buttons = document.querySelectorAll(".filter-btn");
    const apply = () => {
      buttons.forEach((b) => b.classList.toggle("active", b.dataset.cat === current));
      renderProducts(shop, current === "all" ? products : products.filter((p) => p.cat === current));
    };
    buttons.forEach((b) => b.addEventListener("click", () => { current = b.dataset.cat; apply(); }));
    apply();
  }

  // Add to bag
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-btn");
    if (!btn) return;
    const product = products.find((p) => p.id === Number(btn.dataset.id));
    const cart = getCart();
    cart.push(product.id);
    saveCart(cart);
    updateCartCount();
    btn.textContent = "Added ✓";
    btn.classList.add("added");
    setTimeout(() => { btn.textContent = "Add to bag"; btn.classList.remove("added"); }, 1500);
    showToast(`${product.name} added to your bag`);
  });

  document.querySelector(".cart-btn")?.addEventListener("click", () => {
    const count = getCart().length;
    showToast(count ? `You have ${count} item${count > 1 ? "s" : ""} in your bag` : "Your bag is empty");
  });

  // Newsletter and contact forms (no backend yet — just a thank-you message)
  document.querySelectorAll("form[data-message]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.parentElement.querySelector(".form-note");
      if (note) note.textContent = form.dataset.message;
      form.reset();
    });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  updateCartCount();
});
