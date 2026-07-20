# Tuấn Whisky (Tuanwhiskyscotch.com)

Website giới thiệu whisky Scotland cao cấp — giao diện sáng kiểu shop whisky Anh Quốc
(nền kem / thẻ trắng / xanh rêu đậm / vàng đồng). Site tĩnh 100% HTML/CSS/JS,
không cần build tool, không cần server đặc biệt — upload lên bất kỳ hosting nào là chạy.

**Dữ liệu**: 305 sản phẩm + ảnh thật lấy lại từ site cũ tuanwhiskyscotch.com
(Macallan 144, Glenfiddich 66, Balvenie 34, Royal Salute 30, Dalmore 31).

## Cấu trúc thư mục

```
├── index.html          Trang chủ (hero, brand, sản phẩm nổi bật, bộ sưu tập hiếm)
├── products.html       Tất cả sản phẩm + bộ lọc (brand / tuổi / giá / loại)
├── product.html        Trang chi tiết sản phẩm (?sp=slug)
├── macallan.html       Trang danh mục Macallan
├── royal-salute.html   Trang danh mục Royal Salute
├── glenfiddich.html    Trang danh mục Glenfiddich
├── dalmore.html        Trang danh mục Dalmore
├── balvenie.html       Trang danh mục Balvenie
├── chivas-royal.html   Trang danh mục Chivas Royal (chưa có sản phẩm)
├── hibiki.html         Trang danh mục Hibiki (chưa có sản phẩm)
├── css/style.css       Toàn bộ giao diện
├── js/data.js          ★ DỮ LIỆU SẢN PHẨM — chỉnh sửa ở đây
├── js/main.js          Header, mega menu, footer, age gate, modal Mua ngay
├── js/catalog.js       Bộ lọc + sắp xếp
├── js/product.js       Render trang chi tiết + SEO + JSON-LD
└── images/products/    Ảnh sản phẩm thật (đặt theo tên trong data.js)
```

## Thêm / sửa sản phẩm

Mở `js/data.js`, copy một object trong mảng `PRODUCTS` và sửa:

```js
{
  id: 48,                                  // số duy nhất, tăng dần
  name: "Macallan 12 Year Old Triple Cask",
  brand: "Macallan",                       // đúng 1 trong 7 brand
  category: "macallan",                    // slug trang brand
  type: "Single Malt",                     // hoặc "Blended"
  age: 12,                                 // null nếu không ghi tuổi
  price: 95.00,                            // giá GBP
  image: "images/products/macallan-12-triple-cask.jpg",
  description: "Mô tả tiếng Việt...",
  abv: 40,
  volume: "70cl",
  slug: "macallan-12-triple-cask",         // không dấu, gạch ngang, duy nhất
  buyLink: "contact",                      // mở hộp liên hệ FB/Zalo/Hotline
  featured: true                           // (tuỳ chọn) hiện ở trang chủ
}
```

Sản phẩm mới tự động xuất hiện ở: trang brand, trang tất cả sản phẩm,
mega menu, bộ lọc và trang chi tiết (`product.html?sp=slug`).

## Ảnh sản phẩm

- Toàn bộ 305 ảnh đã tải sẵn trong `images/products/`, tên file = `slug` trong data.js.
- Thêm ảnh mới: đặt file vào `images/products/` đúng tên như trường `image` trong data.js.
  Nên dùng ảnh vuông nền trắng, chai đứng giữa, ~660×660px trở lên.
- **Chưa có ảnh?** Không sao — site tự hiển thị chai minh hoạ SVG theo màu từng brand.

## Thông tin liên hệ (footer + modal Mua ngay)

Sửa trong `js/data.js`, object `SITE` ở đầu file:

- Website: Tuanwhiskyscotch.com
- Email: Tuanbeonx@gmail.com
- Hotline: 07577888999
- Facebook: Tuấn Whisky — https://www.facebook.com/tuanwhisky.88
- Zalo / WhatsApp: +447577888999

## Tính năng

- Tìm kiếm ở header (không phân biệt dấu) → kết quả tại `products.html?q=...`
- Age gate 18+ (lưu localStorage, chỉ hỏi lần đầu; thêm `?nogate=1` vào URL để bỏ qua khi kiểm thử)
- Mega menu 7 brand, mỗi cột 5 sản phẩm + link "Xem tất cả"
- Bộ lọc: thương hiệu, tuổi rượu (5 nhóm), khoảng giá (5 mức), loại rượu
- Sắp xếp: giá tăng/giảm, tuổi rượu, tên A–Z
- Nút **Mua ngay** → modal liên hệ Facebook / Zalo / Hotline (không checkout online)
- Nút nổi Zalo + Hotline góc phải màn hình (tiện cho mobile)
- SEO: title/description riêng từng trang; trang chi tiết tự sinh title,
  meta description và JSON-LD Product theo sản phẩm
- Responsive đầy đủ: mobile menu, grid 2 cột, bộ lọc thu gọn

## Chạy thử tại máy

Mở thẳng `index.html` bằng trình duyệt, hoặc chạy server nhỏ:

```
python -m http.server 8000
# rồi mở http://localhost:8000
```
