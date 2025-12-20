// Product Data Objects (same as in main catalogue)
const products = [
  {
    id: 1,
    name: "Bubble Candles",
    category: "Decorative Candles",
    fragrance: "Floral Scent",
    price: "₹30",
    imageUrl: "../assets/Bubbles.jpeg",
    description:
      "This bubble-style candle is thoughtfully designed to enhance modern home interiors. Its clean geometric form and smooth finish make it a perfect decorative accent for coffee tables, shelves, bedside corners, and console spaces. Blending simplicity with elegance, it works beautifully as both a statement décor piece and a functional candle. Ideal for minimal homes, gifting, and luxury styling.",
    rating: 4.8,
    reviewCount: 124,
    additionalImages: [
      "../assets/ziaCandlesImages/bubbles2.jpeg",
      "../assets/ziaCandlesImages/bubbles3.jpeg",
    ],
    ingredients: "Natural soy wax, premium fragrance oil, cotton wick",
    scentProfile: "Soft floral, light herbaceous, soothing",
    roomSize: "Small rooms or personal spaces",
    madeIn: "Handcrafted in India",
  },
  {
    id: 2,
    name: "Christmas Tree Candle",
    category: "Festive Collection",
    fragrance: "Warm, Cozy & Festive",
    price: "₹150",
    imageUrl: "../assets/Christmass-tree.jpeg",
    description:
      "This beautifully crafted tree-shaped candle is designed to capture the warmth and charm of festive celebrations. Inspired by seasonal décor, its elegant silhouette adds a joyful and celebratory touch to living spaces, dining tables, and decorative corners. Whether used as a centerpiece or a subtle accent, it enhances the festive ambiance with its visually appealing design. Ideal for holidays, special occasions, and gifting, this decorative candle blends tradition with modern aesthetics to elevate your home décor during celebrations.",
    rating: 4.6,
    reviewCount: 89,
    additionalImages: [],
    ingredients: "Natural soy wax, premium fragrance oil, cotton wick",
    scentProfile: "Warm, sweet, festive",
    roomSize: "Small to medium rooms",
    madeIn: "Handcrafted in India",
  },
  {
    id: 3,
    name: "Desert Cactus Boat Candle",
    category: "Luxury Candles",
    fragrance: "Lusty Meadows",
    price: "₹899",
    imageUrl: "../assets/Desert-Boat.jpeg",
    description:
      "This elegant boat-shaped candle is designed to elevate premium home décor with its refined form and delicate floral detailing. Inspired by graceful silhouettes, it serves as a sophisticated decorative accent that enhances living rooms, dining spaces, and statement corners. The intricate floral elements add a touch of artistry, while the sleek boat design brings balance and elegance to modern interiors. Perfect for luxury styling, festive arrangements, and thoughtful gifting, this candle blends aesthetic craftsmanship with timeless charm to create a truly premium décor piece.",
    rating: 4.9,
    reviewCount: 156,
    additionalImages: [
      "../assets/ziaCandlesImages/desert-boat2.jpeg",
      "../assets/ziaCandlesImages/desert-boat3.jpeg",
      "../assets/ziaCandlesImages/desert-boat4.jpeg",
      "../assets/ziaCandlesImages/desert-boat6.jpeg",
    ],
    ingredients: "Soy wax, rose essential oil, cotton wick",
    scentProfile: "Floral, romantic, elegant",
    roomSize: "Medium to large rooms",
    madeIn: "Handcrafted in India",
  },
  {
    id: 4,
    name: "Heart Shaped Tray Candle",
    category: "Gift Collection",
    fragrance: "Vanilla & Rose",
    price: "₹699",
    imageUrl: "../assets/Heart-Shaped.jpeg",
    description:
      "This elegant heart-shaped candle tray is thoughtfully designed to celebrate love, warmth, and meaningful moments. Its graceful shape makes it a perfect choice for gifting on special occasions such as anniversaries, weddings, birthdays, and festive celebrations. Whether used as a decorative centerpiece or to hold candles in a stylish arrangement, it adds a charming and emotional touch to any space. Blending aesthetic appeal with functional design, this tray enhances home décor while making every occasion feel a little more special.",
    rating: 4.9,
    reviewCount: 156,
    additionalImages: [
      "../assets/ziaCandlesImages/heart-shaped1.jpeg",
      "../assets/ziaCandlesImages/heart-shaped2.jpeg",
      "../assets/ziaCandlesImages/heart-shaped3.jpeg",
      "../assets/ziaCandlesImages/heart-shaped4.jpeg",
      "../assets/ziaCandlesImages/heart-shaped5.jpeg",
      "../assets/ziaCandlesImages/heart-shaped6.jpeg",
      "../assets/ziaCandlesImages/heart-shaped8.jpeg",
    ],
    ingredients: "Natural soy wax, vanilla fragrance oil, cotton wick",
    scentProfile: "Warm, sweet, romantic",
    roomSize: "Medium to large rooms",

    madeIn: "Handcrafted in India",
  },
  {
    id: 5,
    name: "Lavender Boat Candle",
    category: "Decorative Candles",
    fragrance: "Lavender Bliss",
    price: "₹1200",
    imageUrl: "../assets/Lavender-Boat.jpeg",
    description:
      "The Lavender Boat Candle features a uniquely crafted boat-inspired design that brings a sense of calm, balance, and elegance to any space. Its aesthetic form, combined with a soothing lavender fragrance, creates a relaxing atmosphere ideal for unwinding after a long day. Perfect for bedrooms, living areas, meditation corners, or spa-like settings, this candle works beautifully as both a decorative statement and a sensory experience. The soft glow and gentle aroma enhance the ambience, making it an excellent choice for self-care moments, peaceful evenings, and thoughtful gifting.",
    rating: 4.9,
    reviewCount: 156,
    additionalImages: [
      "../assets/ziaCandlesImages/lavenderBoat.jpeg",
      "../assets/ziaCandlesImages/lavenderBoat2.jpeg",
      "../assets/ziaCandlesImages/lavenderBoat3.jpeg",
      "../assets/ziaCandlesImages/lavenderBoat4.jpeg",
      "../assets/ziaCandlesImages/lavenderBoat5.jpeg",
    ],
    ingredients: "Natural soy wax, lavender fragrance oil, cotton wick",
    scentProfile: "Soft floral, calming, soothing",
    roomSize: "Medium to large rooms",

    madeIn: "Handcrafted in India",
  },
  {
    id: 6,
    name: "Biscuit Jar Candle",
    category: "Creative Candles",
    fragrance: "Nostalgic Comfort",
    price: "₹120",
    imageUrl: "../assets/ParleG.jpeg",
    description:
      "This playful and creatively designed candle draws inspiration from everyday favorites, transforming familiar shapes into a unique décor piece. Its fun aesthetic adds character and charm to any space, making it a perfect conversation starter for modern homes. Designed to stand out, it blends creativity with functionality, serving both as a decorative accent and a candle. Ideal for casual gifting, quirky home styling, and adding a touch of personality to shelves, desks, or side tables, this candle brings a light-hearted and artistic vibe to your décor.",

    rating: 4.9,
    reviewCount: 156,
    additionalImages: [],
    ingredients: "Natural soy wax, mild fragrance oil, cotton wick",
    scentProfile: "Light, pleasant, non-overpowering",
    roomSize: "Small to medium rooms",

    madeIn: "Handcrafted in India",
  },
  {
    id: 7,
    name: "Red Heart Floral Candle",
    category: "Gift Collection",
    fragrance: "Romantic Bliss",
    price: "₹999",
    imageUrl: "../assets/Red-Heart.jpeg",
    description:
      "This beautifully crafted floral heart-shaped candle is designed to express love, warmth, and celebration. Its elegant heart form combined with delicate floral detailing makes it a perfect choice for romantic moments and festive gifting. Whether presented as a thoughtful gift for anniversaries, weddings, Valentine’s Day, or festive occasions, it adds an emotional and decorative charm to any setting. The soft glow and graceful design enhance the ambience, making it ideal for special celebrations, intimate evenings, and meaningful décor styling.",
    rating: 4.9,
    reviewCount: 156,
    additionalImages: [
      "../assets/ziaCandlesImages/red-heart2.jpeg",
      "../assets/ziaCandlesImages/heart-shaped7.jpeg",
      "../assets/ziaCandlesImages/red-heart3.jpeg",
    ],
    ingredients: "Natural soy wax, floral fragrance oil, cotton wick",
    scentProfile: "Soft floral, romantic, soothing",
    roomSize: "Medium to large rooms",

    madeIn: "Handcrafted in India",
  },
  {
    id: 8,
    name: "Snowflake Candle",
    category: "Festive Collection",
    fragrance: "Frosted Vanilla",
    price: "₹130",
    imageUrl: "../assets/snowFlakes.jpeg",
    description:
      "This snowflake-inspired candle is beautifully designed to capture the charm and serenity of the winter season. Its intricate snowflake form adds a festive and cozy touch to interiors, making it an ideal décor accent for winter celebrations, holiday gatherings, and seasonal styling. Whether placed on coffee tables, shelves, or festive centerpieces, it enhances the ambience with its soft glow and elegant design. Perfect for winter-themed décor and thoughtful seasonal gifting, this candle brings warmth and festive elegance to any space.",
    rating: 4.9,
    reviewCount: 156,
    additionalImages: [
      
      "../assets/ziaCandlesImages/snowflakes2.jpeg",
    ],
    ingredients: "Natural soy wax, premium fragrance oil, cotton wick",
    scentProfile: "Light, fresh, cozy",
    roomSize: "Medium to large rooms",

    madeIn: "Handcrafted in India",
  },
  {
    id: 9,
    name: "Star Tealight Candle",
    category: "Decorative Candles",
    fragrance: "Assorted Fragrances",
    price: "₹30",
    imageUrl: "../assets/Star-shaped.jpeg",
    description:
      "This charming star-shaped tealight candle is designed to bring a warm and festive glow to any space. Its elegant star form makes it a perfect accent for celebrations, festive décor, and special occasions. When lit, it creates a soft, inviting ambience that enhances tablescapes, shelves, and decorative corners. Ideal for festivals, parties, and gifting, this tealight candle blends simplicity with festive charm, making it a delightful addition to both modern and traditional décor settings.",
    rating: 4.9,
    reviewCount: 156,
    additionalImages: [],
    ingredients: "Natural soy wax, premium fragrance oil, cotton wick",
    scentProfile: "Light, subtle, pleasant",
    roomSize: "Small to medium rooms",

    madeIn: "Handcrafted in India",
  },
  {
    id: 10,
    name: "Sunflower Candle",
    category: "Premium Decor",
    fragrance: "Sunshine Bloom",
    price: "₹259",
    imageUrl: "../assets/Sunflower.jpeg",
    description:
      "This sunflower-inspired candle is thoughtfully designed to bring warmth, positivity, and charm into your living space. Inspired by the cheerful beauty of sunflowers, its detailed form adds a vibrant and uplifting touch to home décor. Whether placed in living rooms, bedrooms, or decorative corners, it instantly enhances the ambience with a soft glow and inviting presence. Perfect for everyday décor, gifting, and special occasions, this candle blends aesthetic appeal with a joyful, nature-inspired design to brighten any interior setting.",
    rating: 4.9,
    reviewCount: 156,
    additionalImages: [],
    ingredients: "Natural soy wax, premium fragrance oil, cotton wick",
    scentProfile: "Light, fresh, uplifting",
    roomSize: "Small to medium rooms",

    madeIn: "Handcrafted in India",
  },
];

// Get product ID from URL (simulating product selection)
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id")) || 1;

// Find the selected product
const selectedProduct =
  products.find((product) => product.id === productId) || products[0];

// Function to generate star rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHTML = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHTML += '<i class="fas fa-star"></i>';
    } else if (i === fullStars + 1 && hasHalfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starsHTML += '<i class="far fa-star"></i>';
    }
  }

  return starsHTML;
}

// Function to get related products (excluding current product)
function getRelatedProducts(currentProductId) {
  return products.filter((product) => product.id !== currentProductId);
}

// Function to render product details
function renderProductDetails() {
  const container = document.querySelector(".product-details-container");

  // Generate star rating
  const starsHTML = generateStars(selectedProduct.rating);

  // Generate thumbnails HTML
  const allImages = [
    selectedProduct.imageUrl,
    ...selectedProduct.additionalImages,
  ];
  const thumbnailsHTML = allImages
    .map(
      (img, index) => `
                <div class="thumbnail ${
                  index === 0 ? "active" : ""
                }" data-image="${img}">
                    <img src="${img}" alt="${selectedProduct.name} - View ${
        index + 1
      }">
                </div>
            `
    )
    .join("");

  // Get related products
  const relatedProducts = getRelatedProducts(selectedProduct.id);
  const relatedProductsHTML = relatedProducts
    .map(
      (product) => `
                <div class="related-product-card" data-product-id="${product.id}">
                    <div class="related-product-image" style="background-image: url('${product.imageUrl}')"></div>
                    <div class="related-product-info">
                        <h3 class="related-product-name">${product.name}</h3>
                        <p class="related-product-fragrance">${product.fragrance}</p>
                        <div class="related-product-price">${product.price}</div>
                    </div>
                </div>
            `
    )
    .join("");

  container.innerHTML = `
                <div class="product-details-content">
                    <!-- Product Gallery -->
                    <div class="product-gallery">
                        <div class="main-product-image">
                            <img src="${selectedProduct.imageUrl}" alt="${selectedProduct.name}" id="main-product-image">
                        </div>
                        <div class="image-thumbnails">
                            ${thumbnailsHTML}
                        </div>
                    </div>
                    
                    <!-- Product Info -->
                    <div class="product-info">
                        <div class="product-category">${selectedProduct.category}</div>
                        <h1 class="product-title">${selectedProduct.name}</h1>
                        
                        <div class="product-rating">
                            <div class="stars">${starsHTML}</div>
                            <div class="rating-count">${selectedProduct.rating} (${selectedProduct.reviewCount} reviews)</div>
                        </div>
                        
                        <div class="product-price">${selectedProduct.price}</div>
                        
                        <p class="product-description">${selectedProduct.description}</p>
                        
                        <!-- Product Specifications -->
                        <div class="product-specs">
                            <h3 class="specs-title">Product Specifications</h3>
                            <div class="spec-item">
                                <span class="spec-label">Fragrance</span>
                                <span class="spec-value">${selectedProduct.fragrance}</span>
                            </div>
                
                            <div class="spec-item">
                                <span class="spec-label">Scent Profile</span>
                                <span class="spec-value">${selectedProduct.scentProfile}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Recommended Room Size</span>
                                <span class="spec-value">${selectedProduct.roomSize}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Ingredients</span>
                                <span class="spec-value">${selectedProduct.ingredients}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Origin</span>
                                <span class="spec-value">${selectedProduct.madeIn}</span>
                            </div>
                        </div>
                        
                        <!-- Product Actions -->
                        <div class="product-actions">
                            <div class="quantity-selector">
                                <span class="quantity-label">Quantity:</span>
                                <div class="quantity-controls">
                                    <button class="quantity-btn minus">-</button>
                                    <input type="number" class="quantity-input" value="1" min="1" max="10">
                                    <button class="quantity-btn plus">+</button>
                                </div>
                            </div>
                            
                            <div class="action-buttons">
                                <a href="https://wa.me/+918291209022?text=Hi%20Zia%20Candles,%20I'd%20like%20to%20order%20${selectedProduct.name}" 
                                   class="btn btn-primary" target="_blank">
                                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                                </a>
                                <button class="btn btn-secondary add-to-wishlist">
                                    <i class="far fa-heart"></i> Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Product Benefits -->
                <div class="product-benefits">
                    <h2 class="benefits-title">Why Choose Zia Candles</h2>
                    <div class="benefits-grid">
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <i class="fas fa-leaf"></i>
                            </div>
                            <h3 class="benefit-name">Eco-Friendly</h3>
                            <p class="benefit-description">Made with 100% natural soy wax and sustainable ingredients</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <i class="fas fa-hand-sparkles"></i>
                            </div>
                            <h3 class="benefit-name">Handcrafted</h3>
                            <p class="benefit-description">Each candle is carefully hand-poured with attention to detail</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <h3 class="benefit-name">Long-Lasting</h3>
                            <p class="benefit-description">Enjoy 30-50 hours of beautiful fragrance with each candle</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <i class="fas fa-seedling"></i>
                            </div>
                            <h3 class="benefit-name">Natural Scents</h3>
                            <p class="benefit-description">Premium essential oils and natural fragrance extracts</p>
                        </div>
                    </div>
                </div>
                
                <!-- Related Products -->
                <div class="related-products">
                    <h2 class="section-title">You Might Also Like</h2>
                    <div class="related-products-grid">
                        ${relatedProductsHTML}
                    </div>
                </div>
            `;

  // Add event listeners after rendering
  setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
  // Thumbnail click events
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("main-product-image");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // Update main image
      const imageUrl = this.getAttribute("data-image");
      mainImage.src = imageUrl;

      // Update active thumbnail
      thumbnails.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Quantity controls
  const minusBtn = document.querySelector(".quantity-btn.minus");
  const plusBtn = document.querySelector(".quantity-btn.plus");
  const quantityInput = document.querySelector(".quantity-input");

  minusBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    if (value < 10) {
      quantityInput.value = value + 1;
    }
  });

  // Add to wishlist button
  const wishlistBtn = document.querySelector(".add-to-wishlist");
  wishlistBtn.addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      this.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';
      this.style.color = "#e74c3c";

      // Show notification
      showNotification("Added to wishlist!");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      this.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
      this.style.color = "";

      // Show notification
      showNotification("Removed from wishlist");
    }
  });

  // Related product click events
  const relatedProductCards = document.querySelectorAll(
    ".related-product-card"
  );
  relatedProductCards.forEach((card) => {
    card.addEventListener("click", function () {
      const productId = this.getAttribute("data-product-id");
      // In a real application, this would navigate to the product page
      // For this demo, we'll just show an alert
      const product = products.find((p) => p.id === parseInt(productId));
      if (product) {
        showNotification(
          `Viewing ${product.name}. In a real app, this would navigate to the product page.`
        );
      }
    });
  });
}

// Show notification function
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: var(--charcoal);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;

  // Add animation
  const style = document.createElement("style");
  style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
  document.head.appendChild(style);

  notification.textContent = message;
  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", renderProductDetails);

// Update page title with product name
document.title = `${selectedProduct.name} | Zia Candles`;
