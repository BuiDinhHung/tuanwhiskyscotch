/* ============================================================
   TUẤN WHISKY — trang chi tiết sản phẩm (product.html?sp=slug)
   Render thông tin + SEO meta + JSON-LD + sản phẩm liên quan
   ============================================================ */

function initProductPage() {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("sp");
  var p = getProductBySlug(slug);
  var root = document.getElementById("productDetail");

  if (!p) {
    root.innerHTML = '<div class="container"><div class="empty-state" style="margin:70px 0">' +
      '<h3>Không tìm thấy sản phẩm</h3>' +
      '<p>Sản phẩm có thể đã đổi tên hoặc ngừng kinh doanh.</p>' +
      '<p style="margin-top:18px"><a class="btn btn-gold btn-sm" href="products.html">Xem tất cả sản phẩm</a></p>' +
      '</div></div>';
    return;
  }

  /* ----- SEO động ----- */
  document.title = p.name + (p.price != null ? " | Giá " + formatPrice(p.price) : " | Liên hệ báo giá") + " | Tuấn Whisky";
  var meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content",
      p.name + " chính hãng — " + p.type + (p.age ? " " + p.age + " năm tuổi" : "") +
      (p.abv ? ", " + p.abv + "%" : "") + ", " + p.volume + ". " +
      (p.price != null ? "Giá " + formatPrice(p.price) : "Liên hệ báo giá") +
      ". Đặt mua qua Hotline " + SITE.hotline + " hoặc Facebook " + SITE.facebookName + ".");
  }

  /* JSON-LD Product cho Google */
  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.name,
    "brand": { "@type": "Brand", "name": p.brand },
    "description": p.description,
    "offers": p.price != null ? {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": p.price,
      "availability": "https://schema.org/InStock"
    } : undefined
  });
  document.head.appendChild(ld);

  /* ----- nội dung ----- */
  var ageBadge = p.age ? '<span class="badge-age">' + p.age + ' năm</span>' : "";
  var rareBadge = p.price >= 1000 ? '<span class="badge-rare">Bản hiếm</span>' : "";

  root.innerHTML = '' +
  '<div class="container">' +
    '<div class="detail-layout">' +
      '<div class="detail-media">' + ageBadge + rareBadge + mediaHtml(p, "d") + '</div>' +
      '<div class="detail-info">' +
        '<div class="breadcrumb"><a href="index.html">Trang chủ</a> / <a href="' + p.category + '.html">' + p.brand + '</a> / ' + p.name + '</div>' +
        '<div class="product-brand">' + p.brand + '</div>' +
        '<h1>' + p.name + '</h1>' +
        '<p class="detail-desc">' + p.description + '</p>' +
        '<table class="spec-table">' +
          '<tr><td>Thương hiệu</td><td>' + p.brand + '</td></tr>' +
          '<tr><td>Loại rượu</td><td>' + p.type + ' Scotch Whisky</td></tr>' +
          '<tr><td>Tuổi rượu</td><td>' + (p.age ? p.age + " năm" : "Không ghi tuổi (NAS)") + '</td></tr>' +
          (p.abv ? '<tr><td>Độ cồn</td><td>' + p.abv + '% Vol</td></tr>' : '') +
          '<tr><td>Dung tích</td><td>' + p.volume + '</td></tr>' +
          '<tr><td>Xuất xứ</td><td>Scotland</td></tr>' +
        '</table>' +
        '<div class="detail-price">' + formatPrice(p.price) + '</div>' +
        '<div class="detail-vat">' + (p.price != null
          ? 'Giá đã gồm VAT. Liên hệ để nhận báo giá tốt nhất &amp; kiểm tra tình trạng hàng.'
          : 'Hàng sưu tầm hiếm — giá thay đổi theo thị trường. Liên hệ để nhận báo giá mới nhất &amp; kiểm tra tình trạng hàng.') + '</div>' +
        '<div class="detail-actions">' +
          '<button class="btn btn-gold btn-block" onclick="openBuyModal(\'' + p.slug + '\')">Mua ngay — Liên hệ đặt hàng</button>' +
          '<a class="btn btn-ghost btn-block" href="tel:' + SITE.hotlineIntl + '">☎ Gọi Hotline ' + SITE.hotline + '</a>' +
        '</div>' +
        '<div class="detail-note">✓ Cam kết chính hãng 100% · ✓ Giao toàn quốc, đóng gói chống sốc · ✓ Hỗ trợ gói quà biếu cao cấp miễn phí</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  /* ----- sản phẩm cùng brand ----- */
  var related = PRODUCTS.filter(function (x) {
    return x.brand === p.brand && x.id !== p.id;
  }).slice(0, 4);
  if (related.length) {
    var rel = document.getElementById("relatedGrid");
    if (rel) renderGrid(rel, related);
    var relSection = document.getElementById("relatedSection");
    if (relSection) relSection.style.display = "";
  }
}
