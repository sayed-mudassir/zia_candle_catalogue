// Product Data Objects
const products = [
  {
    id: 1,
    name: "Bubble Candles",
    category: "Decorative Candles",
    fragrance: "Floral Scent",
    price: "₹30",
    imageUrl: "./assets/Bubbles.jpeg",
    description: "Minimal bubble-style candle designed for modern home decor.",
  },
  {
    id: 2,
    name: "Christmas Tree Candle",
    category: "Festive Collection",
    fragrance: "Warm, Cozy & Festive",
    price: "₹150",
    imageUrl: "./assets/Christmass-tree.jpeg",
    description: "Tree-shaped decorative candle perfect for festive celebrations.",
  },
  {
    id: 3,
    name: "Desert Cactus Boat Candle",
    category: "Luxury Candles",
    fragrance: "Lusty Meadows",
    price: "₹899",
    imageUrl: "./assets/Desert-Boat.jpeg",
    description: "Elegant boat-shaped candle with floral detailing for premium decor.",
  },
  {
    id: 4,
    name: "Heart Shaped Tray Candle",
    category: "Gift Collection",
    fragrance: "Vanilla & Rose",
    price: "₹699",
    imageUrl: "./assets/Heart-Shaped.jpeg",
    description: "Heart-shaped candle tray ideal for gifting and special occasions.",
  },
  {
    id: 5,
    name: "Lavender Boat Candle",
    category: "Decorative Candles",
    fragrance: "Lavender Bliss",
    price: "₹1200",
    imageUrl: "./assets/Lavender-Boat.jpeg",
    description: "Aesthetic boat-style candle crafted for a calm and elegant ambience.",
  },
  {
    id: 6,
    name: "Biscuit Jar Candle",
    category: "Creative Candles",
    fragrance: "Nostalgic Comfort",
    price: "₹120",
    imageUrl: "./assets/ParleG.jpeg",
    description: "Fun and creative candle inspired by everyday favorites.",
  },
  {
    id: 7,
    name: "Red Heart Floral Candle",
    category: "Gift Collection",
    fragrance: "Romantic Bliss",
    price: "₹999",
    imageUrl: "./assets/Red-Heart.jpeg",
    description: "Floral heart-shaped candle designed for romantic and festive gifting.",
  },
  {
    id: 8,
    name: "Snowflake Candle",
    category: "Festive Collection",
      fragrance: "Frosted Vanilla",
    price: "₹130",
    imageUrl: "./assets/snowFlakes.jpeg",
    description: "Snowflake-inspired candle perfect for winter and festive decor.",
  },
  {
    id: 9,
    name: "Star Tealight Candle",
    category: "Decorative Candles",
    fragrance: "Assorted Fragrances",
    price: "₹30",
    imageUrl: "./assets/Star-shaped.jpeg",
    description: "Star-shaped tealight candle that adds a warm festive glow.",
  },
  {
    id: 10,
    name: "Sunflower Candle",
    category: "Premium Decor",
    fragrance: "Sunshine Bloom",
    price: "₹259",
    imageUrl: "./assets/Sunflower.jpeg",
    description: "Sunflower-inspired candle designed to brighten your living space.",
  },
];



// Function to render product cards
function renderProducts() {
  const productsContainer = document.querySelector(".products-container");

  // Clear existing content
  productsContainer.innerHTML = "";

  // Create and append product cards for each product object
  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.dataset.index = index;

    // Set inline background image
    const imageStyle = `background-image: url('${product.imageUrl}')`;

    productCard.innerHTML = `
                    <div class="product-image ${product.imageClass}" style="${imageStyle}"></div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-details">
                            <div class="detail-item">
                                <span class="detail-label">category:</span>
                                <span class="detail-value">${product.category}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Fragrance:</span>
                                <span class="detail-value">${product.fragrance}</span>
                            </div>
                        </div>
                        <div class="price">${product.price}</div>
                    </div>
                `;

    productsContainer.appendChild(productCard);
  });
}

// Animation on scroll
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -150px 0px", // 🔥 MOBILE FIX
};


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate child elements with delay for product cards
      if (entry.target.id === "products") {
        const productCards = entry.target.querySelectorAll(".product-card");
        productCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 200);
        });
      }

      // Animate contact items with delay
      if (entry.target.id === "contact") {
        const contactItems = entry.target.querySelectorAll(".contact-item");
        contactItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 200);
        });

        const contactText = entry.target.querySelector(".contact-text");
        const ctaButton = entry.target.querySelector(".cta-button");
        const bulkOrder = entry.target.querySelector(".bulk-order");

        setTimeout(() => contactText.classList.add("visible"), 100);
        setTimeout(() => ctaButton.classList.add("visible"), 300);
        setTimeout(() => bulkOrder.classList.add("visible"), 500);
      }

      // Animate about content
      if (entry.target.id === "about") {
        const aboutContent = entry.target.querySelector(".about-content");
        setTimeout(() => aboutContent.classList.add("visible"), 300);
      }

      // Animate section titles
      const sectionTitle = entry.target.querySelector(".section-title");
      if (sectionTitle) {
        setTimeout(() => sectionTitle.classList.add("visible"), 200);
      }
    }
  });
}, observerOptions);

// Create floating particles animation
function createFloatingParticles() {
  const header = document.querySelector("header");

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.classList.add("floating-particle");

    // Random size between 2-6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random opacity
    particle.style.opacity = Math.random() * 0.3 + 0.1;

    // Random animation
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    header.appendChild(particle);
  }
}

// Initialize the page
function initPage() {
  // Render products
  renderProducts();

  // Create floating particles
  createFloatingParticles();

  // Observe all sections for animations
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Add event listeners
  setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth",
        });
      }
    });
  });

  // Print/PDF functionality simulation
  document.addEventListener("keydown", function (e) {
    // Ctrl+P or Cmd+P for print/PDF
    if ((e.ctrlKey || e.metaKey) && e.key === "p") {
      e.preventDefault();
      alert(
        "For best PDF export results, use your browser's 'Print to PDF' function. Make sure to select 'Background graphics' in print settings."
      );
    }
  });

  // Add a subtle hover effect to the brand name
  const brandName = document.querySelector(".brand-name");
  brandName.addEventListener("mouseenter", () => {
    brandName.style.transform = "scale(1.02)";
    brandName.style.transition = "transform 0.5s ease";
  });

  brandName.addEventListener("mouseleave", () => {
    brandName.style.transform = "scale(1)";
  });
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", initPage);

console.log(
  "Zia Candles Catalogue - Premium Handcrafted Candle Collection with Dynamic Product Rendering"
);
