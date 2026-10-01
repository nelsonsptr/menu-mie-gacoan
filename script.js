// Data Produk Resmi Mie Gacoan
const menuData = [
  // Mie
  {
    id: 1,
    name: "Mie Suit",
    category: "Mie",
    price: 10500,
    hasLevel: false,
    desc: "Mie gurih original tanpa cabai dengan taburan ayam halus & pangsit renyah.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAB82tStZ-KI0K9hNNV2aC2o-KxcUDyIXLkl_63q90UxbJLdYslaFB1wM&s=10",
  },
  {
    id: 2,
    name: "Mie Hompimpa",
    category: "Mie",
    price: 10500,
    hasLevel: true,
    desc: "Mie gurih dan asin dengan sensasi pedas yang nikmat.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGlFu8vRJ5dbT21piJ52ItVincMm0-kzaIRGUl7YYhIbENgcFvREFI4vK&s=10",
  },
  {
    id: 3,
    name: "Mie Gacoan",
    category: "Mie",
    price: 10500,
    hasLevel: true,
    desc: "Mie pedas dan manis dengan tambahan kecap yang khas.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs837LdIgSV9hi5meOGe2dOlXjiCDuNthqLtleukE-gd6EIgCRDWywd1I&s=10",
  },
  // Dimsum
  {
    id: 4,
    name: "Udang Rambutan",
    category: "Dimsum",
    price: 9500,
    hasLevel: false,
    desc: "Sensasi crispy di luar dengan potongan kulit pangsit yang garing.",
    img: "https://image.popmama.com/post/20260223/upload_b14a0b3e9aaf66a6d85fd43a15a2dcb5_7f24c091-a117-4caa-a39a-4dfeea9effa5.jpg",
  },
  {
    id: 5,
    name: "Lumpia Udang",
    category: "Dimsum",
    price: 9500,
    hasLevel: false,
    desc: "Gurih dan renyah di luar dengan tekstur lembut di dalam.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhyv4CJ3tj9dDOFlyptbr4viyAWfzylVD3d2WzrrfkT4xcyKTZTC7mrkP&s=10",
  },
  {
    id: 6,
    name: "Udang Keju",
    category: "Dimsum",
    price: 9500,
    hasLevel: false,
    desc: "Dimsum olahan udang krispi dengan isian keju lumer yang lezat.",
    img: "https://i.pinimg.com/736x/2a/9d/6d/2a9d6d176f77f65669f9bf0bb8f0606b.jpg",
  },
  {
    id: 7,
    name: "Pangsit Goreng",
    category: "Dimsum",
    price: 10500,
    hasLevel: false,
    desc: "Tipis, lebar dan renyah saat dikunyah. Nikmat temani dengan saus pedas.",
    img: "https://i.pinimg.com/736x/a5/e1/dc/a5e1dc58722b9c8bbdcfdc8ea6ca79a4.jpg",
  },
  {
    id: 8,
    name: "Siomay",
    category: "Dimsum",
    price: 9500,
    hasLevel: false,
    desc: "Teksturnya lembut, kenyal dan juicy cocok untuk menghangatkan harimu.",
    img: "https://image.popbela.com/post/20241210/d454e925343e0eec0c29202f2b9e6b2c.png",
  },
  // Minuman
  {
    id: 9,
    name: "Es Gobak Sodor",
    category: "Minuman",
    price: 9500,
    hasLevel: false,
    desc: "Minuman manis menyegarkan berpadu dengan potongan buah dan aneka lainnya.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROiB6NvUMTAfE_KSou7a-98E65hYI08t5rbSGq5RWtaA8fpNnS02_ObYT1&s=10",
  },
  {
    id: 10,
    name: "Es Teklek",
    category: "Minuman",
    price: 6400,
    hasLevel: false,
    desc: "Minuman pelepas dahaga sekaligus minuman efektif meredakan sensasi pedas.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Rt_78vbsBxKreoLonbLogtR1y_ChdWms7VVD7_4W6A&s=10",
  },
  {
    id: 11,
    name: "Es Petak Umpet",
    category: "Minuman",
    price: 9500,
    hasLevel: false,
    desc: "Minuman segar berwarna kuning cerah dengan tambahan air jeruk dan potongan jeruk segar.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SWUsDhfUYg6rBqJpu-GKrcMLL4xY1ZaXLQgWC32kuMqFbqORNvQ1f5Dx&s=10",
  },
  {
    id: 12,
    name: "Es Sluku Bathok",
    category: "Minuman",
    price: 6400,
    hasLevel: false,
    desc: "Perpaduan susu dan moka membuatnya menjadi creamy dan cocok untuk penetral rasa pedas.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRjwMAd4n1upAhmKorUJvFlXiaemcCN6_asqqyBzKPw&s=10",
  },
  {
    id: 13,
    name: "Thai Green Tea",
    category: "Minuman",
    price: 8600,
    hasLevel: false,
    desc: "Minuman dengan racikan teh hijau yang milky dan gurih.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtCQBvUDVzYM68C-UOUJcIV3U0vZqdpFEUiPotVo7xAnPC2CHIkVMxU_t&s=10",
  },
  {
    id: 14,
    name: "Thai Tea",
    category: "Minuman",
    price: 8600,
    hasLevel: false,
    desc: "Aroma dan rasa daun teh hijau yang kuat dan memiliki tekstur milky dan creamy.",
    img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/4429dab5-eed6-4f76-9ae2-29fc7fd9c5b0_MNU_129_20230909111327.jpeg?auto=format",
  },
  {
    id: 15,
    name: "Milo",
    category: "Minuman",
    price: 8600,
    hasLevel: false,
    desc: "Minuman coklat malt yang disukai anak muda karena creamy dan manis.",
    img: "https://i.pinimg.com/736x/ba/b4/50/bab4503156904175d36e6b7e1efd209d.jpg",
  },
  {
    id: 16,
    name: "Vanilla Latte",
    category: "Minuman",
    price: 8600,
    hasLevel: false,
    desc: "Minuman kopi susu yang manis, lembut, creamy serta ramah di perut.",
    img: "https://i.pinimg.com/736x/50/74/f9/5074f9c4b218c2e0909085c5dd7a612a.jpg",
  },
  {
    id: 17,
    name: "Teh Tarik",
    category: "Minuman",
    price: 6800,
    hasLevel: false,
    desc: "Perpaduan rasa manis dan susu yang creamy namun dengan rasa teh yang cukup kuat.",
    img: "https://i.pinimg.com/736x/52/01/ef/5201efdfe74204519116e2e5193783f8.jpg",
  },
  {
    id: 18,
    name: "Lemon Tea",
    category: "Minuman",
    price: 6400,
    hasLevel: false,
    desc: "Perpaduan rasa asam dan manis yang pas sehingga nyaman di tenggorokan.",
    img: "https://i.pinimg.com/736x/e0/20/09/e02009f4ddd985f6c59f67939938f8c9.jpg",
  },
  {
    id: 19,
    name: "Orange",
    category: "Minuman",
    price: 5500,
    hasLevel: false,
    desc: "Minuman berwarna jingga yang memiliki kombinasi rasa manis dan asam jeruk yang khas.",
    img: "https://i.pinimg.com/736x/a8/79/d7/a879d79e378cf371a976f7eab074ff74.jpg",
  },
  {
    id: 20,
    name: "Tea",
    category: "Minuman",
    price: 4500,
    hasLevel: false,
    desc: "Minuman teh manis yang selalu menjadi teman makan.",
    img: "https://i.pinimg.com/736x/63/30/04/633004a76c6f03ab9665d8cce7dade47.jpg",
  },
  {
    id: 21,
    name: "Air Mineral",
    category: "Minuman",
    price: 4500,
    hasLevel: false,
    desc: "Minuman jernih, bening dan sehat yang cocok untuk segala makanan.",
    img: "https://i.pinimg.com/736x/5a/09/37/5a09374b25a645cbdae0c9ef0c3a426b.jpg",
  },
];

// Item keranjang belanja
let cart = {};
let currentCategory = "Semua";

// Fungsi penentu harga berdasarkan level pedas
function getPrice(item, level = 1) {
  if (!item.hasLevel) return item.price;
  if (level <= 1) return 10500;
  if (level <= 5) return 10900;
  return 11400;
}

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  const items = currentCategory === "Semua" ? menuData : menuData.filter((i) => i.category === currentCategory);
  grid.innerHTML = items.map((item) => {
      const initialPrice = item.hasLevel ? getPrice(item, 1) : item.price;
      const levelSelectHtml = item.hasLevel
        ? `
                <div class="level-container">
                    <label for="level-${item.id}">Level Pedas:</label>
                    <select id="level-${item.id}" onchange="updateCardPrice(${item.id})">
                        <option value="0">Lvl 0 (Rp 10.500)</option>
                        <option value="1" selected>Lvl 1 (Rp 10.500)</option>
                        <option value="2">Lvl 2 (Rp 10.900)</option>
                        <option value="3">Lvl 3 (Rp 10.900)</option>
                        <option value="4">Lvl 4 (Rp 10.900)</option>
                        <option value="5">Lvl 5 (Rp 10.900)</option>
                        <option value="6">Lvl 6 (Rp 11.400)</option>
                        <option value="7">Lvl 7 (Rp 11.400)</option>
                        <option value="8">Lvl 8 (Rp 11.400)</option>
                    </select>
                </div>
            `
        : "";

      return `
                <article class="card-produk">
                    <div>
                        <div class="card-img-wrapper">
                            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/400x250/17308f/ffffff?text=${encodeURIComponent(item.name)}'">
                        </div>
                        <div>
                            <h3 class="card-title">${item.name}</h3>
                            <p class="card-desc">${item.desc}</p>
                        </div>
                        ${levelSelectHtml}
                    </div>
                    <div class="card-footer">
                        <span id="price-display-${item.id}" class="card-price">
                            Rp ${initialPrice.toLocaleString("id-ID")}
                        </span>
                        <button onclick="addToCart(${item.id})" class="btn-add">
                            <span>+ Tambah</span>
                        </button>
                    </div>
                </article>
            `;
    })
    .join("");
}

// Update tampilan harga kartu saat pilihan level diubah
function updateCardPrice(id) {
  const item = menuData.find((m) => m.id === id);
  if (!item || !item.hasLevel) return;
  const levelSelect = document.getElementById(`level-${id}`);
  const level = parseInt(levelSelect.value);
  const price = getPrice(item, level);
  const priceDisplay = document.getElementById(`price-display-${id}`);
  if (priceDisplay) {
    priceDisplay.textContent = `Rp ${price.toLocaleString("id-ID")}`;
  }
}

function filterMenu(category) {
  currentCategory = category;
  document.querySelectorAll(".btn-filter").forEach((btn) => {
    const text = btn.textContent.trim();
    const isActive =
      (category === "Semua" && text.includes("Semua")) ||
      text.includes(category);
    if (isActive) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderMenu();
}

function addToCart(id) {
  const item = menuData.find((m) => m.id === id);
  if (!item) return;
  let level = null;
  let key = `${id}`;
  if (item.hasLevel) {
    const levelSelect = document.getElementById(`level-${id}`);
    level = parseInt(levelSelect.value);
    key = `${id}_lv${level}`;
  }
  if (cart[key]) {
    cart[key].qty += 1;
  } else {
    cart[key] = { id: item.id, level: level, qty: 1 };
  }
  updateCartUI();
}

function changeQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) {
    delete cart[key];
  }
  updateCartUI();
}

function resetCart() {
  cart = {};
  document.getElementById("order-message").classList.add("hidden");
  updateCartUI();
}

function updateCartUI() {
  const list = document.getElementById("cart-list");
  let totalPrice = 0;
  let totalCount = 0;
  const keys = Object.keys(cart);
  // Kalo kosong
  if (keys.length === 0) {
    list.innerHTML = `<li class="cart-empty">Keranjang masih kosong.<br>Pilih menu favoritmu!</li>`;
    document.getElementById("cart-total").textContent = "Rp 0";
    document.getElementById("cart-count").textContent = "0 Porsi";
    return;
  }
  // Kalo isinya ada
  list.innerHTML = keys.map((key) => {
      const cartItem = cart[key];
      const item = menuData.find((m) => m.id === cartItem.id);
      if (!item) return "";
      const itemPrice = getPrice(item, cartItem.level);
      const subtotal = itemPrice * cartItem.qty;
      totalPrice += subtotal;
      totalCount += cartItem.qty;
      const levelTag = cartItem.level !== null ? ` <span class="cart-item-level">(Lvl ${cartItem.level})</span>` : "";
      return `
            <li class="cart-item">
                <div class="cart-item-info">
                    <p class="title">${item.name}${levelTag}</p>
                    <p class="price">Rp ${itemPrice.toLocaleString("id-ID")}</p>
                </div>
                <div class="qty-control">
                    <button onclick="changeQty('${key}', -1)" class="qty-btn">-</button>
                    <span class="qty-num">${cartItem.qty}</span>
                    <button onclick="changeQty('${key}', 1)" class="qty-btn">+</button>
                </div>
            </li>
        `;
    })
    .join("");
  document.getElementById("cart-total").textContent = `Rp ${totalPrice.toLocaleString("id-ID")}`;
  document.getElementById("cart-count").textContent = `${totalCount} Porsi`;
}

function checkout() {
  if (Object.keys(cart).length === 0) return;
  const msg = document.getElementById("order-message");
  msg.classList.remove("hidden");
  cart = {};
  updateCartUI();
  setTimeout(() => msg.classList.add("hidden"), 4000);
}

// selalu muncul saat dibuka web nya
window.onload = function () {
  renderMenu();
  updateCartUI();
};
