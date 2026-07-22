/* ============================================================
   TUẤN WHISKY — core UI: header, footer, age gate, buy modal,
   product card rendering (dùng chung mọi trang)
   ============================================================ */

/* ---------- helpers ---------- */
function formatPrice(p) {
  if (p == null) return "Liên hệ"; // hàng sưu tầm hiếm — báo giá theo thời điểm
  return "£" + p.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function productUrl(p) {
  return "product.html?sp=" + encodeURIComponent(p.slug);
}

function getProductBySlug(slug) {
  return PRODUCTS.find(function (p) { return p.slug === slug; }) || null;
}

/* Màu label minh hoạ theo brand (khi chưa có ảnh thật) */
var BRAND_STYLE = {
  "Macallan":     { label: "#7b1f24", liquid: "#8a4a12" },
  "Royal Salute": { label: "#1f3a6e", liquid: "#7d4310" },
  "Glenfiddich":  { label: "#1e5c3a", liquid: "#a3660f" },
  "Dalmore":      { label: "#26262b", liquid: "#6f3c0e" },
  "Balvenie":     { label: "#5a4632", liquid: "#9c5f10" },
  "Chivas Royal": { label: "#7a1020", liquid: "#8a4a12" },
  "Hibiki":       { label: "#8a6d1f", liquid: "#c98a2e" }
};

/* Ảnh chai minh hoạ SVG — dùng khi images/products/... chưa có file thật */
function svgBottle(p, idSuffix) {
  var st = BRAND_STYLE[p.brand] || { label: "#333", liquid: "#8a4a12" };
  var uid = (p.slug + "-" + (idSuffix || "c")).replace(/[^a-z0-9-]/gi, "");
  var brandText = p.brand.toUpperCase();
  var ageText = p.age ? p.age + " NĂM" : (p.volume || "");
  return '' +
  '<svg viewBox="0 0 200 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + p.name + '">' +
    '<defs>' +
      '<linearGradient id="g-' + uid + '" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0" stop-color="' + st.liquid + '"/>' +
        '<stop offset=".5" stop-color="#c98a2e"/>' +
        '<stop offset="1" stop-color="' + st.liquid + '"/>' +
      '</linearGradient>' +
      '<linearGradient id="s-' + uid + '" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0" stop-color="rgba(255,255,255,0)"/>' +
        '<stop offset=".18" stop-color="rgba(255,255,255,.28)"/>' +
        '<stop offset=".3" stop-color="rgba(255,255,255,0)"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<rect x="82" y="8" width="36" height="30" rx="4" fill="#b08d57"/>' +
    '<rect x="82" y="34" width="36" height="8" fill="#8f713f"/>' +
    '<path d="M84 42 h32 v38 c14 14 26 26 26 52 v250 c0 16 -12 28 -28 28 h-28 c-16 0 -28 -12 -28 -28 v-250 c0 -26 12 -38 26 -52 z" fill="#171310" stroke="#3a2f1e" stroke-width="2"/>' +
    '<path d="M62 150 v232 c0 14 10 24 24 24 h28 c14 0 24 -10 24 -24 v-232 c0 -18 -8 -30 -18 -40 h-40 c-10 10 -18 22 -18 40 z" fill="url(#g-' + uid + ')" opacity=".92"/>' +
    '<rect x="58" y="60" width="84" height="330" fill="url(#s-' + uid + ')"/>' +
    '<rect x="58" y="218" width="84" height="106" rx="3" fill="#f4ecd9" stroke="#c9b98e"/>' +
    '<rect x="58" y="218" width="84" height="22" fill="' + st.label + '"/>' +
    '<text x="100" y="233" text-anchor="middle" font-family="Georgia,serif" font-size="10" letter-spacing="1.5" fill="#f4ecd9">' + brandText + '</text>' +
    '<text x="100" y="266" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#2a2118">' + (ageText || "SCOTCH") + '</text>' +
    '<line x1="72" y1="280" x2="128" y2="280" stroke="' + st.label + '" stroke-width="1"/>' +
    '<text x="100" y="298" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" letter-spacing="1" fill="#5a4a33">' + p.type.toUpperCase() + '</text>' +
    '<text x="100" y="312" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="#8a7a5e">' + (p.abv ? p.abv + '% VOL · ' : '') + p.volume + '</text>' +
  '</svg>';
}

/* Thẻ media: thử ảnh thật, lỗi thì thay bằng SVG minh hoạ */
function mediaHtml(p, idSuffix) {
  return '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" ' +
         'onerror="this.outerHTML = svgBottle(getProductBySlug(\'' + p.slug + '\'), \'' + (idSuffix || "c") + '\')">';
}

/* Chai minh hoạ cho một thương hiệu (khi ảnh đại diện chưa có / lỗi) */
function brandSvg(slug) {
  var b = BRANDS.find(function (x) { return x.slug === slug; }) || {};
  var pseudo = { brand: b.name || "", slug: slug, name: b.name || "",
                 age: null, volume: "70cl", type: "Whisky", abv: null };
  return svgBottle(pseudo, "brand");
}

/* Ảnh chai đại diện cho thẻ thương hiệu ở trang chủ */
function brandMedia(b) {
  var src = b.img || "";
  return '<img src="' + src + '" alt="Rượu ' + b.name + '" loading="lazy" ' +
         'onerror="this.outerHTML = brandSvg(\'' + b.slug + '\')">';
}

/* ---------- product card ---------- */
function productCard(p) {
  var ageBadge = p.age ? '<span class="badge-age">' + p.age + ' năm</span>' : "";
  var rareBadge = p.price >= 1000 ? '<span class="badge-rare">Hiếm</span>' : "";
  return '' +
  '<article class="product-card">' +
    '<a class="product-media" href="' + productUrl(p) + '" aria-label="' + p.name + '">' +
      ageBadge + rareBadge + mediaHtml(p) +
    '</a>' +
    '<div class="product-body">' +
      '<div class="product-brand">' + p.brand + '</div>' +
      '<h3 class="product-name"><a href="' + productUrl(p) + '">' + p.name + '</a></h3>' +
      '<div class="product-meta">' + p.volume + (p.abv ? ' · ' + p.abv + '%' : '') + ' · ' + p.type + '</div>' +
      '<div class="product-price">' + formatPrice(p.price) + '</div>' +
      '<div class="product-actions">' +
        '<button class="btn btn-gold btn-sm" onclick="openBuyModal(\'' + p.slug + '\')">Mua ngay</button>' +
        '<a class="btn btn-ghost btn-sm" href="' + productUrl(p) + '">Chi tiết</a>' +
      '</div>' +
    '</div>' +
  '</article>';
}

function renderGrid(el, list) {
  if (!el) return;
  if (!list.length) {
    el.innerHTML = '<div class="empty-state"><h3>Không tìm thấy sản phẩm phù hợp</h3><p>Hãy thử bỏ bớt bộ lọc hoặc liên hệ trực tiếp — chúng tôi có thể tìm nguồn chai bạn cần.</p></div>';
    return;
  }
  el.innerHTML = list.map(productCard).join("");
  scanReveal(el); /* thẻ vừa render cũng hiện dần khi cuộn tới */
}

/* ============================================================
   ✨ SCROLL REVEAL — hiện dần + so le khi cuộn tới
   ============================================================ */
var REVEAL_SELECTOR =
  ".section-head, .brand-card, .product-card, .usp, .cta-banner, .empty-state, " +
  ".footer-grid > *, .detail-info > *, .catalog-toolbar";

function setupReveal() {
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return; /* trình duyệt cũ / người dùng tắt hiệu ứng: để nguyên hiện đủ */
  }
  window.__twIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        window.__twIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  scanReveal(document);
}

/* Gắn class .reveal + độ trễ so le cho các phần tử trong 'root' rồi theo dõi */
function scanReveal(root) {
  var io = window.__twIO;
  if (!io) return;
  var nodes = (root || document).querySelectorAll(REVEAL_SELECTOR);
  /* nhóm để so le: nhiều thẻ cùng một lưới mới cần chạy nối tiếp nhau */
  var STAGGER_PARENTS = ["product-grid", "brand-strip", "usp-row", "footer-grid"];
  nodes.forEach(function (node) {
    if (node.classList.contains("reveal")) return;
    var parent = node.parentNode;
    var pc = parent ? (parent.className || "") : "";
    var delay = 0;
    if (STAGGER_PARENTS.some(function (c) { return pc.indexOf(c) !== -1; })) {
      var idx = Array.prototype.indexOf.call(parent.children, node);
      delay = Math.min(idx, 6) * 80;
    }
    node.style.setProperty("--d", delay + "ms");
    node.classList.add("reveal");
    io.observe(node);
  });
}

/* ============================================================
   ✨ ĐẾM SỐ Ở HERO — số liệu chạy từ 0 lên khi tải trang
   ============================================================ */
function animateCounts() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".hero-stats strong").forEach(function (el) {
    var target = parseInt(el.textContent.replace(/\D/g, ""), 10);
    if (!target || target > 9999) return;
    var start = null, dur = 1200;
    function step(ts) {
      if (start == null) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3); /* easeOutCubic */
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ============================================================
   ✨ HEADER — đổ bóng rõ hơn khi cuộn xuống
   ============================================================ */
function setupHeaderShadow() {
  var header = document.getElementById("siteHeader");
  if (!header) return;
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   HEADER + FOOTER (inject để dễ bảo trì)
   ============================================================ */
function megaColumns() {
  return BRANDS.map(function (b) {
    var items = PRODUCTS
      .filter(function (p) { return p.brand === b.name; })
      .slice(0, 5)
      .map(function (p) {
        var short = p.name.replace(b.name + " ", "").replace("Year Old", "năm");
        return '<li><a href="' + productUrl(p) + '">' + short + '</a></li>';
      }).join("");
    return '<div class="mega-col"><h4>' + b.name + '</h4><ul>' + items +
      '<li><a class="view-all" href="' + b.slug + '.html">Xem tất cả →</a></li></ul></div>';
  }).join("");
}

function buildHeader(active) {
  var brandLinks = BRANDS.map(function (b) {
    var cls = active === b.slug ? ' class="active"' : "";
    return '<li><a href="' + b.slug + '.html"' + cls + '>' + b.name + '</a></li>';
  }).join("");

  return '' +
  '<div class="topbar"><div class="container topbar-inner">' +
    '<div class="topbar-contact">' +
      '<a href="tel:' + SITE.hotlineIntl + '">☎ Hotline: ' + SITE.hotline + '</a>' +
      '<span class="sep hide-mobile">|</span>' +
      '<a class="hide-mobile" href="mailto:' + SITE.email + '">✉ ' + SITE.email + '</a>' +
    '</div>' +
    '<div class="hide-mobile">Giao rượu chính hãng toàn quốc · Tư vấn quà biếu cao cấp</div>' +
  '</div></div>' +
  '<div class="container header-main">' +
    '<button class="nav-toggle" aria-label="Menu" onclick="toggleNav()">☰</button>' +
    '<a class="logo" href="index.html">' +
      '<img class="logo-mark-img" src="images/logo.png" alt="Maccallan Tuấn Whisky">' +
      '<span class="logo-text"><strong>Tuấn Whisky</strong><span>Est. Scotch</span></span>' +
    '</a>' +
    '<div class="header-search">' +
      '<form action="products.html" method="get" role="search">' +
        '<input type="search" name="q" placeholder="Tìm rượu: Macallan 18, Royal Salute 21..." aria-label="Tìm sản phẩm">' +
        '<button type="submit" aria-label="Tìm kiếm">⌕</button>' +
      '</form>' +
    '</div>' +
    '<div class="header-cta">' +
      '<div class="header-hotline"><span>Đặt rượu nhanh</span><a href="tel:' + SITE.hotlineIntl + '">' + SITE.hotline + '</a></div>' +
    '</div>' +
  '</div>' +
  '<nav class="main-nav" id="mainNav"><div class="container"><ul class="nav-list">' +
    '<li><a href="index.html"' + (active === "home" ? ' class="active"' : "") + '>Trang chủ</a></li>' +
    '<li class="has-mega" id="megaItem">' +
      '<a href="products.html" onclick="return megaTap(event)">Danh mục rượu <span class="caret">▼</span></a>' +
      '<div class="mega">' + megaColumns() + '</div>' +
    '</li>' +
    brandLinks +
    '<li><a href="products.html"' + (active === "products" ? ' class="active"' : "") + '>Tất cả sản phẩm</a></li>' +
    '<li><a href="index.html#lien-he">Liên hệ</a></li>' +
  '</ul></div></nav>';
}

function buildFooter() {
  var brandLinks = BRANDS.map(function (b) {
    return '<li><a href="' + b.slug + '.html">Rượu ' + b.name + '</a></li>';
  }).join("");

  return '' +
  '<div class="container">' +
    '<div class="footer-grid">' +
      '<div class="footer-about">' +
        '<a class="logo" href="index.html">' +
          '<img class="logo-mark-img" src="images/logo.png" alt="Maccallan Tuấn Whisky">' +
          '<span class="logo-text"><strong>Tuấn Whisky</strong><span>Est. Scotch</span></span>' +
        '</a>' +
        '<p>Maccallan Tuấn Whisky — chuyên whisky chính hãng: Macallan, Royal Salute, Glenfiddich, Dalmore, Balvenie, Chivas Royal, Hibiki. Tư vấn tận tâm, giao hàng toàn quốc.</p>' +
      '</div>' +
      '<div><h4>Danh mục</h4><ul>' + brandLinks + '</ul></div>' +
      '<div><h4>Hỗ trợ</h4><ul>' +
        '<li><a href="products.html">Tất cả sản phẩm</a></li>' +
        '<li><a href="tel:' + SITE.hotlineIntl + '">Đặt hàng qua Hotline</a></li>' +
        '<li><a href="' + SITE.zaloUrl + '" target="_blank" rel="noopener">Chat Zalo</a></li>' +
        '<li><a href="' + SITE.whatsappUrl + '" target="_blank" rel="noopener">Chat WhatsApp</a></li>' +
        '<li><a href="' + SITE.facebookUrl + '" target="_blank" rel="noopener">Facebook: ' + SITE.facebookName + '</a></li>' +
      '</ul></div>' +
      '<div id="lien-he"><h4>Liên hệ</h4><ul class="footer-contact">' +
        '<li><span class="k">Website</span> <span>' + SITE.domain + '</span></li>' +
        '<li><span class="k">Email</span> <a href="mailto:' + SITE.email + '">' + SITE.email + '</a></li>' +
        '<li><span class="k">Hotline</span> <a href="tel:' + SITE.hotlineIntl + '">' + SITE.hotline + '</a></li>' +
        '<li><span class="k">WhatsApp/Zalo</span> <a href="' + SITE.whatsappUrl + '" target="_blank" rel="noopener">' + SITE.hotlineIntl + '</a></li>' +
        '<li><span class="k">Facebook</span> <a href="' + SITE.facebookUrl + '" target="_blank" rel="noopener">' + SITE.facebookName + '</a></li>' +
      '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<div>Copyright © ' + new Date().getFullYear() + ' Hoangcaster</div>' +
      '<div class="drink-notice">Sản phẩm dành cho người trên 18 tuổi. Thưởng thức có trách nhiệm — đã uống rượu bia, không lái xe.</div>' +
    '</div>' +
  '</div>' +
  '<div class="float-contact">' +
    '<a class="float-zalo" href="' + SITE.zaloUrl + '" target="_blank" rel="noopener" aria-label="Chat Zalo">Zalo</a>' +
    '<a class="float-whatsapp" href="' + SITE.whatsappUrl + '" target="_blank" rel="noopener" aria-label="Chat WhatsApp">WA</a>' +
    '<a class="float-phone" href="tel:' + SITE.hotlineIntl + '" aria-label="Gọi hotline">☎</a>' +
  '</div>';
}

function toggleNav() {
  document.getElementById("mainNav").classList.toggle("open");
}

/* Trên mobile: chạm lần 1 mở mega menu, lần 2 mới đi tới link */
function megaTap(e) {
  if (window.innerWidth <= 880) {
    var li = document.getElementById("megaItem");
    if (!li.classList.contains("open")) {
      li.classList.add("open");
      e.preventDefault();
      return false;
    }
  }
  return true;
}

/* ============================================================
   AGE GATE 18+
   ============================================================ */
function buildAgeGate() {
  var el = document.createElement("div");
  el.className = "age-gate";
  el.id = "ageGate";
  el.innerHTML = '' +
    '<div class="age-gate-box">' +
      '<img class="logo-mark-img" src="images/logo.png" alt="Maccallan Tuấn Whisky" style="margin:0 auto;width:80px;height:80px;display:block;">' +
      '<h2>Bạn đã đủ 18 tuổi chưa?</h2>' +
      '<p>' + SITE.domain + ' bán các sản phẩm rượu có cồn. Vui lòng xác nhận bạn đã đủ tuổi hợp pháp để tiếp tục.</p>' +
      '<div class="age-gate-actions">' +
        '<button class="btn btn-gold" onclick="ageConfirm(true)">Tôi đã đủ 18 tuổi</button>' +
        '<button class="btn btn-dark" onclick="ageConfirm(false)">Chưa đủ 18</button>' +
      '</div>' +
      '<small>Thưởng thức có trách nhiệm. Không bán rượu cho người dưới 18 tuổi.</small>' +
    '</div>';
  document.body.appendChild(el);

  /* ?nogate=1: bỏ qua cổng 18+ (dùng khi chụp ảnh/kiểm thử) */
  if (window.location.search.indexOf("nogate=1") !== -1) {
    localStorage.setItem("tw_age_ok", "1");
  }
  if (localStorage.getItem("tw_age_ok") === "1") {
    el.classList.add("hidden");
  } else {
    document.body.style.overflow = "hidden";
  }
}

function ageConfirm(ok) {
  if (ok) {
    localStorage.setItem("tw_age_ok", "1");
    document.getElementById("ageGate").classList.add("hidden");
    document.body.style.overflow = "";
  } else {
    window.location.href = "https://www.google.com";
  }
}

/* ============================================================
   BUY MODAL — Mua ngay qua Facebook / Zalo / Hotline
   ============================================================ */
function buildBuyModal() {
  var el = document.createElement("div");
  el.className = "modal-backdrop";
  el.id = "buyModal";
  el.innerHTML = '' +
    '<div class="modal" role="dialog" aria-modal="true">' +
      '<button class="modal-close" onclick="closeBuyModal()" aria-label="Đóng">×</button>' +
      '<h3>Đặt mua sản phẩm</h3>' +
      '<div class="modal-product" id="buyModalProduct"></div>' +
      '<div class="contact-links">' +
        '<a class="contact-link" href="' + SITE.facebookUrl + '" target="_blank" rel="noopener">' +
          '<span class="icon icon-fb">f</span>' +
          '<span><strong>Facebook: ' + SITE.facebookName + '</strong><span>Nhắn tin đặt hàng, phản hồi nhanh</span></span>' +
        '</a>' +
        '<a class="contact-link" id="buyZalo" href="' + SITE.zaloUrl + '" target="_blank" rel="noopener">' +
          '<span class="icon icon-zalo">Z</span>' +
          '<span><strong>Zalo: ' + SITE.hotlineIntl + '</strong><span>Chat Zalo tư vấn &amp; báo giá</span></span>' +
        '</a>' +
        '<a class="contact-link" href="' + SITE.whatsappUrl + '" target="_blank" rel="noopener">' +
          '<span class="icon icon-whatsapp">W</span>' +
          '<span><strong>WhatsApp: ' + SITE.hotlineIntl + '</strong><span>Chat WhatsApp tư vấn &amp; báo giá</span></span>' +
        '</a>' +
        '<a class="contact-link" href="tel:' + SITE.hotlineIntl + '">' +
          '<span class="icon icon-phone">☎</span>' +
          '<span><strong>Hotline: ' + SITE.hotline + '</strong><span>Gọi trực tiếp — hỗ trợ 24/7</span></span>' +
        '</a>' +
      '</div>' +
    '</div>';
  el.addEventListener("click", function (e) { if (e.target === el) closeBuyModal(); });
  document.body.appendChild(el);
}

function openBuyModal(slug) {
  var p = getProductBySlug(slug);
  var label = document.getElementById("buyModalProduct");
  label.textContent = p ? p.name + " — " + formatPrice(p.price) : "";
  document.getElementById("buyModal").classList.add("open");
}

function closeBuyModal() {
  document.getElementById("buyModal").classList.remove("open");
}

/* ============================================================
   INIT — mỗi trang gọi initPage("slug-trang")
   ============================================================ */
function initPage(active) {
  var header = document.getElementById("siteHeader");
  var footer = document.getElementById("siteFooter");
  if (header) header.innerHTML = buildHeader(active);
  if (footer) footer.innerHTML = buildFooter();
  buildAgeGate();
  buildBuyModal();
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeBuyModal();
  });
  setupReveal();
  setupHeaderShadow();
  /* chờ script từng trang bơm nội dung động (hero stats, grid...) rồi mới chạy */
  setTimeout(function () { scanReveal(document); animateCounts(); }, 60);
}
