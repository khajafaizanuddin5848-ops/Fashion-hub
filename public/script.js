// Image helper — photos are served from Unsplash
const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Blog posts — add new posts to the top of this list.
// In "body", lines starting with "## " become headings and "> " become quotes.
const posts = [
  {
    slug: "street-style-autumn",
    title: "The New Rules of Autumn Street Style",
    tag: "Trends",
    date: "October 18, 2026",
    read: "5 min read",
    image: "1485968579580-b6d095142e6e",
    excerpt: "Oversized checks, relaxed tailoring and the art of the effortless layer — what we're seeing on the streets this season.",
    body: [
      "Every autumn the city becomes a runway, and this year the mood is unmistakably relaxed. Structured pieces are being worn loose, tailoring is softer, and the best-dressed people we've seen look like they barely tried.",
      "## Oversized, but intentional",
      "The boyfriend blazer is back in a big way — think heritage checks and wool blends, sized up and worn over everything from slip dresses to denim. The trick is balance: if the jacket is generous, keep the rest of the silhouette streamlined.",
      "> Style is knowing exactly how much effort to let people see.",
      "## Colour in quiet doses",
      "Neutrals still lead, but deep tones like burgundy, forest green and navy are being used as accents. A single coloured piece against camel and cream feels considered without trying too hard.",
      "## The finishing touch",
      "Accessories are doing the heavy lifting this season. A structured shoulder bag, a slim belt and a good pair of boots will take the simplest outfit somewhere new.",
    ],
  },
  {
    slug: "capsule-wardrobe-guide",
    title: "How to Build a Capsule Wardrobe That Actually Works",
    tag: "Style Guide",
    date: "October 2, 2026",
    read: "7 min read",
    image: "1512436991641-6745cdb1723f",
    excerpt: "Fewer pieces, more outfits. Our stylists share the 12 essentials they'd build any wardrobe around.",
    body: [
      "A capsule wardrobe isn't about owning less for the sake of it — it's about owning pieces you genuinely love and wear. When everything works together, getting dressed becomes the easiest part of your day.",
      "## Start with a palette",
      "Choose two or three base neutrals (black, navy, camel, grey or cream) and one or two accent colours. Everything you add should work with at least three other pieces.",
      "## The essentials",
      "Our stylists' shortlist: a tailored blazer, a crisp white shirt, a fine-knit jumper, straight-leg trousers, dark denim, a midi skirt or dress, a trench or wool coat, a white tee, leather boots, clean sneakers, a structured bag and one statement piece that makes you smile.",
      "> Buy less, choose well, make it last.",
      "## Invest where it counts",
      "Spend more on the pieces you wear most — coats, shoes and tailoring. Save on trend-led items you'll rotate seasonally.",
    ],
  },
  {
    slug: "art-of-layering",
    title: "The Art of Layering for Cooler Days",
    tag: "Style Guide",
    date: "September 21, 2026",
    read: "4 min read",
    image: "1556905055-8f358a7a47b2",
    excerpt: "Textures, proportions and the one rule that makes layered looks feel polished instead of bulky.",
    body: [
      "Layering is where personal style really shines. Done well, it adds depth and interest to an outfit while keeping you comfortable as temperatures change through the day.",
      "## Thin to thick",
      "Start with your lightest layer closest to the body and build outward: a fine cotton tee, then a lightweight knit, then an overshirt or jacket.",
      "## Mix your textures",
      "Pair smooth with chunky: silk with cable knit, denim with wool, leather with cashmere. Contrast keeps a tonal outfit from feeling flat.",
      "> When in doubt, let one layer peek out — a collar, a hem, a cuff.",
      "## Mind the proportions",
      "If your top half is voluminous, balance it with a slimmer leg, and vice versa. A belt can define the waist and pull a layered look together instantly.",
    ],
  },
  {
    slug: "menswear-essentials",
    title: "Five Menswear Pieces Worth Investing In",
    tag: "Menswear",
    date: "September 9, 2026",
    read: "5 min read",
    image: "1479064555552-3ef4979f8908",
    excerpt: "From the perfect leather boot to a belt that lasts a decade — the foundations of a modern men's wardrobe.",
    body: [
      "Great menswear is built on a handful of pieces that do a lot of work. Get these right and everything else falls into place.",
      "## 1. Leather boots",
      "A pair of well-made brown leather boots works with denim, chinos and even relaxed tailoring. Look for Goodyear welting so they can be resoled for years.",
      "## 2. A quality belt",
      "Full-grain leather, a simple buckle and a colour that matches your shoes. It's a small detail that people notice.",
      "## 3. Tailored trousers",
      "A pair of mid-grey wool trousers will dress up a tee or dress down a blazer.",
      "> Fit is everything. A tailor is the best investment you'll ever make.",
      "## 4 & 5. The white tee and a classic watch",
      "A heavyweight white tee is the foundation of countless outfits, and a simple, clean-faced watch finishes them.",
    ],
  },
  {
    slug: "summer-prints",
    title: "Florals, Reimagined: Prints for the Season Ahead",
    tag: "Trends",
    date: "August 27, 2026",
    read: "3 min read",
    image: "1496747611176-843222e1e57c",
    excerpt: "Soft botanicals, painterly blooms and how to wear print without it wearing you.",
    body: [
      "Florals are a perennial favourite for a reason, but this season's take is softer and more painterly — less garden party, more watercolour.",
      "## Keep the base simple",
      "Let a printed dress or shirt be the focus and keep everything else neutral: white sneakers, a tan sandal, a simple bag.",
      "> Print is a mood. Choose the one that matches yours.",
      "## Try a print clash",
      "Feeling bold? Pair two prints that share a colour. A floral skirt with a fine stripe can look surprisingly polished.",
    ],
  },
  {
    slug: "behind-the-seams",
    title: "Behind the Seams: Inside Our Design Studio",
    tag: "Journal",
    date: "August 12, 2026",
    read: "6 min read",
    image: "1551232864-3f0890e580d9",
    excerpt: "A day with the Fashion Hub design team — from first sketch to final fitting.",
    body: [
      "Every Fashion Hub collection starts in the same place: a long white table covered in fabric swatches, mood boards and far too many cups of coffee.",
      "## From sketch to sample",
      "Our designers begin with hand sketches before moving to digital patterns. Each piece goes through at least three rounds of samples before it's approved.",
      "## Fabric first",
      "We source fabrics from mills we've worked with for years, choosing natural and recycled fibres wherever we can.",
      "> We design clothes we'd want to wear ourselves — and keep wearing.",
      "## The final fitting",
      "Before anything goes into production, it's tried on real people of different shapes and sizes. If it doesn't feel right, it goes back to the drawing board.",
    ],
  },
];

function postCard(p) {
  return `
    <a class="post-card reveal" href="post.html?p=${p.slug}">
      <div class="thumb"><img src="${img(p.image, 800)}" alt="${p.title}" loading="lazy"></div>
      <div class="post-meta"><span class="tag">${p.tag}</span><span>${p.date}</span></div>
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
    </a>`;
}

function renderBlog() {
  const grid = document.querySelector("#blog-grid");
  if (!grid) return;
  const limit = Number(grid.dataset.limit) || posts.length;
  const skipFirst = grid.hasAttribute("data-skip-featured");
  const chips = document.querySelectorAll(".chip");
  let current = "All";

  const draw = () => {
    let list = current === "All" ? posts : posts.filter((p) => p.tag === current);
    if (skipFirst && current === "All") list = list.slice(1);
    grid.innerHTML = list.slice(0, limit).map(postCard).join("");
    observeReveals();
  };
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      current = chip.dataset.tag;
      chips.forEach((c) => c.classList.toggle("active", c === chip));
      document.querySelector(".post-featured")?.toggleAttribute("hidden", current !== "All");
      draw();
    })
  );
  draw();

  const featured = document.querySelector(".post-featured");
  if (featured) {
    const p = posts[0];
    featured.innerHTML = `
      <a href="post.html?p=${p.slug}"><img src="${img(p.image, 1400)}" alt="${p.title}"></a>
      <div>
        <span class="eyebrow">Featured · ${p.tag}</span>
        <h2>${p.title}</h2>
        <p>${p.excerpt}</p>
        <a class="link-arrow" href="post.html?p=${p.slug}">Read the story</a>
      </div>`;
  }
}

function renderPost() {
  const article = document.querySelector("#article");
  if (!article) return;
  const slug = new URLSearchParams(location.search).get("p");
  const index = Math.max(0, posts.findIndex((p) => p.slug === slug));
  const p = posts[index];
  const next = posts[(index + 1) % posts.length];
  document.title = `${p.title} | Fashion Hub Journal`;

  const body = p.body
    .map((line) => {
      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith("> ")) return `<blockquote>${line.slice(2)}</blockquote>`;
      return `<p>${line}</p>`;
    })
    .join("");

  article.innerHTML = `
    <header class="article-hero narrow">
      <span class="eyebrow">${p.tag}</span>
      <h1>${p.title}</h1>
      <div class="post-meta"><span>${p.date}</span><span>${p.read}</span></div>
    </header>
    <div class="article-cover"><img src="${img(p.image, 2000)}" alt="${p.title}"></div>
    <div class="article-body narrow">
      ${body}
      <div class="article-footer">
        <a class="link-arrow" href="blog.html">All stories</a>
        <a class="link-arrow" href="post.html?p=${next.slug}">Next: ${next.title}</a>
      </div>
    </div>`;
}

// Fade-in on scroll: reveal anything that has entered the viewport
function observeReveals() {
  const limit = window.innerHeight * 0.92;
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    if (el.getBoundingClientRect().top < limit) el.classList.add("visible");
  });
}
window.addEventListener("scroll", observeReveals, { passive: true });
window.addEventListener("resize", observeReveals);
window.addEventListener("load", observeReveals);

document.addEventListener("DOMContentLoaded", () => {
  // Header turns solid after scrolling past the hero
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  document.querySelector(".menu-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => document.body.classList.remove("menu-open"))
  );

  renderBlog();
  renderPost();

  // Forms (no backend yet — show a thank-you message)
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

  observeReveals();
});
