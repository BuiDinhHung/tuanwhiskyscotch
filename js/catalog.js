/* ============================================================
   TUẤN WHISKY — catalog: bộ lọc brand / tuổi rượu / giá / loại
   Dùng cho products.html và các trang brand.
   initCatalog({ brand: "Macallan" })  →  khoá sẵn theo brand
   ============================================================ */

var catalogState = {
  fixedBrand: null,
  brands: [],
  ages: [],
  prices: [],
  types: [],
  query: "",
  sort: "default"
};

/* bỏ dấu tiếng Việt + thường hoá để so khớp tìm kiếm */
function normSearch(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
}

var AGE_BUCKETS = [
  { id: "u12",   label: "Dưới 12 năm",   test: function (p) { return p.age !== null && p.age < 12; } },
  { id: "12-17", label: "12 – 17 năm",   test: function (p) { return p.age !== null && p.age >= 12 && p.age <= 17; } },
  { id: "18-24", label: "18 – 24 năm",   test: function (p) { return p.age !== null && p.age >= 18 && p.age <= 24; } },
  { id: "25up",  label: "25 năm trở lên", test: function (p) { return p.age !== null && p.age >= 25; } },
  { id: "nas",   label: "Không ghi tuổi (NAS)", test: function (p) { return p.age === null; } }
];

var PRICE_BUCKETS = [
  { id: "p1", label: "Dưới £100",        test: function (p) { return p.price < 100; } },
  { id: "p2", label: "£100 – £300",      test: function (p) { return p.price >= 100 && p.price < 300; } },
  { id: "p3", label: "£300 – £1.000",    test: function (p) { return p.price >= 300 && p.price < 1000; } },
  { id: "p4", label: "£1.000 – £5.000",  test: function (p) { return p.price >= 1000 && p.price < 5000; } },
  { id: "p5", label: "Trên £5.000",      test: function (p) { return p.price >= 5000; } }
];

function checkboxRow(group, id, label) {
  return '<label class="filter-option">' +
    '<input type="checkbox" data-group="' + group + '" value="' + id + '" onchange="onFilterChange()"> ' +
    label + '</label>';
}

function buildFilters() {
  var el = document.getElementById("filters");
  if (!el) return;

  var html = '<h3>Bộ lọc</h3>';

  if (!catalogState.fixedBrand) {
    html += '<div class="filter-group"><h4>Thương hiệu</h4>' +
      BRANDS.map(function (b) { return checkboxRow("brands", b.name, b.name); }).join("") +
      '</div>';
  }

  html += '<div class="filter-group"><h4>Tuổi rượu</h4>' +
    AGE_BUCKETS.map(function (a) { return checkboxRow("ages", a.id, a.label); }).join("") +
    '</div>';

  html += '<div class="filter-group"><h4>Khoảng giá</h4>' +
    PRICE_BUCKETS.map(function (r) { return checkboxRow("prices", r.id, r.label); }).join("") +
    '</div>';

  html += '<div class="filter-group"><h4>Loại rượu</h4>' +
    checkboxRow("types", "Single Malt", "Single Malt") +
    checkboxRow("types", "Blended", "Blended Scotch") +
    '</div>';

  html += '<button class="btn btn-dark btn-sm filter-clear" onclick="clearFilters()">Xoá bộ lọc</button>';
  el.innerHTML = html;
}

function onFilterChange() {
  ["brands", "ages", "prices", "types"].forEach(function (group) {
    catalogState[group] = Array.prototype.slice
      .call(document.querySelectorAll('input[data-group="' + group + '"]:checked'))
      .map(function (i) { return i.value; });
  });
  applyCatalog();
}

function clearFilters() {
  document.querySelectorAll("#filters input:checked").forEach(function (i) { i.checked = false; });
  onFilterChange();
}

function onSortChange(sel) {
  catalogState.sort = sel.value;
  applyCatalog();
}

function applyCatalog() {
  var list = PRODUCTS.slice();

  if (catalogState.query) {
    var words = normSearch(catalogState.query).split(/\s+/).filter(Boolean);
    list = list.filter(function (p) {
      var hay = normSearch(p.name + " " + p.brand);
      return words.every(function (w) { return hay.indexOf(w) !== -1; });
    });
  }
  if (catalogState.fixedBrand) {
    list = list.filter(function (p) { return p.brand === catalogState.fixedBrand; });
  }
  if (catalogState.brands.length) {
    list = list.filter(function (p) { return catalogState.brands.indexOf(p.brand) !== -1; });
  }
  if (catalogState.ages.length) {
    list = list.filter(function (p) {
      return AGE_BUCKETS.some(function (a) {
        return catalogState.ages.indexOf(a.id) !== -1 && a.test(p);
      });
    });
  }
  if (catalogState.prices.length) {
    list = list.filter(function (p) {
      return PRICE_BUCKETS.some(function (r) {
        return catalogState.prices.indexOf(r.id) !== -1 && r.test(p);
      });
    });
  }
  if (catalogState.types.length) {
    list = list.filter(function (p) { return catalogState.types.indexOf(p.type) !== -1; });
  }

  if (catalogState.sort === "price-asc")  list.sort(function (a, b) { return a.price - b.price; });
  if (catalogState.sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
  if (catalogState.sort === "age-desc")   list.sort(function (a, b) { return (b.age || 0) - (a.age || 0); });
  if (catalogState.sort === "name")       list.sort(function (a, b) { return a.name.localeCompare(b.name); });

  renderGrid(document.getElementById("catalogGrid"), list);
  var count = document.getElementById("catalogCount");
  if (count) {
    var msg = "Hiển thị <strong>" + list.length + "</strong> sản phẩm";
    if (catalogState.query) msg += " cho từ khoá “<strong></strong>”";
    count.innerHTML = msg;
    if (catalogState.query) count.querySelectorAll("strong")[1].textContent = catalogState.query;
  }
}

function toggleFilters() {
  document.getElementById("filters").classList.toggle("open");
}

function initCatalog(opts) {
  opts = opts || {};
  catalogState.fixedBrand = opts.brand || null;

  /* đọc từ khoá tìm kiếm từ URL (?q=...) — ô search ở header trỏ về products.html */
  var q = new URLSearchParams(window.location.search).get("q") || "";
  catalogState.query = q.trim();
  if (catalogState.query) {
    var input = document.querySelector('.header-search input[name="q"]');
    if (input) input.value = catalogState.query;
  }

  buildFilters();
  applyCatalog();
}
