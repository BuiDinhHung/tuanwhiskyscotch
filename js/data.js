/* ============================================================
   TUẤN WHISKY — DỮ LIỆU SẢN PHẨM
   ------------------------------------------------------------
   Thêm sản phẩm mới: copy một object bên dưới, sửa thông tin.
   Các trường bắt buộc:
     id        : số duy nhất
     name      : tên hiển thị
     brand     : "Macallan" | "Royal Salute" | "Glenfiddich" | "Dalmore" | "Balvenie"
     category  : slug danh mục (trùng tên file trang brand)
     type      : "Single Malt" | "Blended"
     age       : số tuổi rượu (null nếu No Age Statement)
     price     : giá GBP (số)
     image     : đường dẫn ảnh trong /images/products/ (nếu chưa có ảnh,
                 site tự hiển thị ảnh chai minh hoạ theo brand)
     description : mô tả tiếng Việt
     abv       : độ cồn (%)
     volume    : dung tích (vd "70cl", "5cl")
     slug      : dùng cho URL trang chi tiết (không dấu, gạch ngang)
     buyLink   : "contact" = mở hộp liên hệ FB/Zalo/Hotline (mặc định)
     featured  : true nếu muốn hiện ở trang chủ
   ============================================================ */

const SITE = {
  name: "Tuấn Whisky",
  fullName: "Maccallan Tuấn Whisky",
  domain: "Tuanwhiskyscotch.com",
  email: "Tuanbeonx@gmail.com",
  hotline: "07577888999",
  hotlineIntl: "+447577888999",
  facebookName: "Tuấn Whisky",
  facebookUrl: "https://www.facebook.com/tuanwhisky.88",
  zaloUrl: "https://zalo.me/447577888999",
  whatsappUrl: "https://wa.me/447577888999"
};

/* img: ảnh chai đại diện hiện ở trang chủ (thẻ thương hiệu). Muốn đổi chai
   đại diện, chỉ cần sửa đường dẫn ảnh ở đây. Nếu ảnh lỗi/chưa có, site tự vẽ
   chai minh hoạ theo màu thương hiệu. */
const BRANDS = [
  { name: "Macallan",     slug: "macallan",     img: "images/products/macallan-18-year-old-sherry-oak-1993.jpg",        tagline: "Đỉnh cao Single Malt vùng Speyside — ủ thùng Sherry Oak trứ danh." },
  { name: "Royal Salute", slug: "royal-salute", img: "images/products/royal-salute-21-year-old-signature-blend.jpg",     tagline: "Blended Scotch hoàng gia, tối thiểu 21 năm tuổi, đựng trong bình sứ thủ công." },
  { name: "Glenfiddich",  slug: "glenfiddich",  img: "images/products/glenfiddich-18-year-old.jpg",                     tagline: "Nhà chưng cất gia đình lâu đời nhất Scotland, biểu tượng hươu sừng." },
  { name: "Dalmore",      slug: "dalmore",      img: "images/products/dalmore-king-alexander-iii.jpg",                  tagline: "Single Malt Highland sang trọng với biểu tượng đầu hươu 12 gạc." },
  { name: "Balvenie",     slug: "balvenie",     img: "images/products/balvenie-12-year-old-doublewood.jpg",             tagline: "Thủ công truyền thống — tự trồng lúa mạch, tự đóng thùng, tự ủ rượu." },
  { name: "Chivas Royal", slug: "chivas-royal", img: "images/products/chivas-regal-25-year-old-blended-scotch-whisky.jpg", tagline: "Blended Scotch danh giá, hài hoà và sang trọng — lựa chọn cho những dịp trang trọng nhất." },
  { name: "Hibiki",       slug: "hibiki",       img: "images/products/Hibiki-Blossom-2026.webp",                        tagline: "Blended whisky Nhật Bản tinh tế — hoà quyện hoa, mật ong và gỗ sồi Mizunara." }
];

const PRODUCTS = [

  /* ---------------- MACALLAN ---------------- */
  {
    id: 349, name: "Macallan 10 Year Old - Fine Oak", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 10, price: null,
    image: "images/products/macallan-fine-oak-10-transparent-v2.png",
    description: "Macallan Fine Oak 10 năm — Single Malt ủ kết hợp thùng Bourbon và Sherry Oak, cân bằng tinh tế giữa vị ngọt vani, cam quýt và gỗ sồi. Phiên bản Fine Oak đã ngừng sản xuất, ngày càng được nhà sưu tầm săn tìm. Liên hệ Tuấn Whisky để được báo giá và tư vấn tình trạng hộp/chai.",
    abv: 40, volume: "70cl", slug: "macallan-10-year-old-fine-oak", buyLink: "contact", featured: true
  },
  {
    id: 1, name: "Macallan 10 Year Old - Sherry Oak", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 10, price: 299.9,
    image: "images/products/macallan-10-year-old-sherry-oak.jpg",
    description: "Phiên bản 10 năm Sherry Oak đã ngừng sản xuất, ngày càng hiếm trên thị trường sưu tầm. Hương sherry đậm, mứt cam và sồi ngọt.",
    abv: 40, volume: "70cl", slug: "macallan-10-year-old-sherry-oak", buyLink: "contact"
  },
  {
    id: 2, name: "Macallan 12 Year Old - Double Cask - 5cl Miniature", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 12, price: 9.9,
    image: "images/products/macallan-12-year-old-double-cask-5cl-miniature.jpg",
    description: "Macallan 12 Year Old - Double Cask - 5cl Miniature — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "5cl", slug: "macallan-12-year-old-double-cask-5cl-miniature", buyLink: "contact"
  },
  {
    id: 3, name: "Macallan 12 Year Old - The Colour Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 12, price: 94.9,
    image: "images/products/macallan-12-year-old-the-colour-collection.jpg",
    description: "Macallan 12 Year Old - The Colour Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-12-year-old-the-colour-collection", buyLink: "contact", featured: true
  },
  {
    id: 4, name: "Macallan 15 Year Old - Double Cask", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 15, price: 146.9,
    image: "images/products/macallan-15-year-old-double-cask.jpg",
    description: "15 năm trong thùng đôi sồi Âu — Mỹ, cho vị caramel bơ, táo nướng và quế. Cân bằng, tròn trịa, dễ chinh phục mọi khẩu vị.",
    abv: 43, volume: "70cl", slug: "macallan-15-year-old-double-cask", buyLink: "contact"
  },
  {
    id: 5, name: "Macallan 15 Year Old - Fine Oak", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 15, price: 299.9,
    image: "images/products/macallan-15-year-old-fine-oak.jpg",
    description: "Macallan 15 Year Old - Fine Oak — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-15-year-old-fine-oak", buyLink: "contact"
  },
  {
    id: 6, name: "Macallan 15 Year Old - Fine Oak - 75cl", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 15, price: 399.9,
    image: "images/products/macallan-15-year-old-fine-oak-75cl.jpg",
    description: "Macallan 15 Year Old - Fine Oak - 75cl — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "macallan-15-year-old-fine-oak-75cl", buyLink: "contact"
  },
  {
    id: 7, name: "Macallan 15 Year Old - Fine Oak - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 15, price: 299.9,
    image: "images/products/macallan-15-year-old-fine-oak-box-slightly-damaged.jpg",
    description: "Macallan 15 Year Old - Fine Oak - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-15-year-old-fine-oak-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 8, name: "Macallan 15 Year Old - The Colour Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 15, price: 189.9,
    image: "images/products/macallan-15-year-old-the-colour-collection.jpg",
    description: "Macallan 15 Year Old - The Colour Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-15-year-old-the-colour-collection", buyLink: "contact"
  },
  {
    id: 9, name: "Macallan 18 Year Old - 1985 - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 3199.9,
    image: "images/products/macallan-18-year-old-1985-box-slightly-damaged.jpg",
    description: "Macallan 18 Year Old - 1985 - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-1985-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 10, name: "Macallan 18 Year Old - 1991 - Sherry Oak + 5cl Miniature", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1899.9,
    image: "images/products/macallan-18-year-old-1991-sherry-oak-5cl-miniature.jpg",
    description: "Macallan 18 Year Old - 1991 - Sherry Oak + 5cl Miniature — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "5cl", slug: "macallan-18-year-old-1991-sherry-oak-5cl-miniature", buyLink: "contact"
  },
  {
    id: 11, name: "Macallan 18 Year Old - 1997 - Sherry Oak - US Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1199.9,
    image: "images/products/macallan-18-year-old-1997-sherry-oak-us-release.jpg",
    description: "Macallan 18 Year Old - 1997 - Sherry Oak - US Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-1997-sherry-oak-us-release", buyLink: "contact"
  },
  {
    id: 12, name: "Macallan 18 Year Old - Double Cask - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 319.9,
    image: "images/products/macallan-18-year-old-double-cask-2022-release.jpg",
    description: "Macallan 18 Year Old - Double Cask - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-double-cask-2022-release", buyLink: "contact"
  },
  {
    id: 13, name: "Macallan 18 Year Old - Sherry Oak - 1988", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1999.9,
    image: "images/products/macallan-18-year-old-sherry-oak-1988.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 1988 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-1988", buyLink: "contact"
  },
  {
    id: 14, name: "Macallan 18 Year Old - Sherry Oak - 1991 - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1799.9,
    image: "images/products/macallan-18-year-old-sherry-oak-1991-box-slightly-damaged.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 1991 - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-1991-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 15, name: "Macallan 18 Year Old - Sherry Oak - 1993", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1599.9,
    image: "images/products/macallan-18-year-old-sherry-oak-1993.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 1993 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-1993", buyLink: "contact"
  },
  {
    id: 16, name: "Macallan 18 Year Old - Sherry Oak - 1994 - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1499.9,
    image: "images/products/macallan-18-year-old-sherry-oak-1994-box-slightly-damaged.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 1994 - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-1994-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 17, name: "Macallan 18 Year Old - Sherry Oak - 1995", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1399.9,
    image: "images/products/macallan-18-year-old-sherry-oak-1995.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 1995 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-1995", buyLink: "contact"
  },
  {
    id: 18, name: "Macallan 18 Year Old - Sherry Oak - 1996", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 1299.9,
    image: "images/products/macallan-18-year-old-sherry-oak-1996.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 1996 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-1996", buyLink: "contact"
  },
  {
    id: 19, name: "Macallan 18 Year Old - Sherry Oak - 2017", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 999.9,
    image: "images/products/macallan-18-year-old-sherry-oak-2017.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 2017 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-2017", buyLink: "contact"
  },
  {
    id: 20, name: "Macallan 18 Year Old - Sherry Oak - 2019", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 799.9,
    image: "images/products/macallan-18-year-old-sherry-oak-2019.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 2019 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-2019", buyLink: "contact"
  },
  {
    id: 21, name: "Macallan 18 Year Old - Sherry Oak - 2020", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 699.9,
    image: "images/products/macallan-18-year-old-sherry-oak-2020.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 2020 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-2020", buyLink: "contact"
  },
  {
    id: 22, name: "Macallan 18 Year Old - Sherry Oak - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 449.9,
    image: "images/products/macallan-18-year-old-sherry-oak-2022-release.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-2022-release", buyLink: "contact"
  },
  {
    id: 23, name: "Macallan 18 Year Old - Sherry Oak - 2023 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 390,
    image: "images/products/macallan-18-year-old-sherry-oak-2023-release.jpg",
    description: "Macallan 18 Year Old - Sherry Oak - 2023 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-sherry-oak-2023-release", buyLink: "contact", featured: true
  },
  {
    id: 24, name: "Macallan 18 Year Old - The Colour Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 449.9,
    image: "images/products/macallan-18-year-old-the-colour-collection.jpg",
    description: "Macallan 18 Year Old - The Colour Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-the-colour-collection", buyLink: "contact"
  },
  {
    id: 25, name: "Macallan 1950 Speymalt - Gordon &amp; Macphail - 40%", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 6999.9,
    image: "images/products/macallan-1950-speymalt-gordon-amp-macphail-40.jpg",
    description: "Macallan 1950 Speymalt - Gordon &amp; Macphail - 40% — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1950-speymalt-gordon-amp-macphail-40", buyLink: "contact"
  },
  {
    id: 26, name: "Macallan 1969 - 52 Year Old - Duncan Taylor Rarest of The Rare", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 52, price: 69999.9,
    image: "images/products/macallan-1969-52-year-old-duncan-taylor-rarest-of-the-rare.jpg",
    description: "Macallan 1969 - 52 Year Old - Duncan Taylor Rarest of The Rare — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1969-52-year-old-duncan-taylor-rarest-of-the-rare", buyLink: "contact"
  },
  {
    id: 27, name: "Macallan 1973 - Bottled 2004 Gordon &amp; Macphail - Speymalt", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 3199.9,
    image: "images/products/macallan-1973-bottled-2004-gordon-amp-macphail-speymalt.jpg",
    description: "Macallan 1973 - Bottled 2004 Gordon &amp; Macphail - Speymalt — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1973-bottled-2004-gordon-amp-macphail-speymalt", buyLink: "contact"
  },
  {
    id: 28, name: "Macallan 1977 - 30 Year Old - Douglas Laing's Old &amp; Rare", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 2699.9,
    image: "images/products/macallan-1977-30-year-old-douglas-laing-s-old-amp-rare.jpg",
    description: "Macallan 1977 - 30 Year Old - Douglas Laing's Old &amp; Rare — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1977-30-year-old-douglas-laing-s-old-amp-rare", buyLink: "contact"
  },
  {
    id: 29, name: "Macallan 1988 - Exceptional Single Cask 2018 - ESB 3892 - 08", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 11999.9,
    image: "images/products/macallan-1988-exceptional-single-cask-2018-esb-3892-08.jpg",
    description: "Macallan 1988 - Exceptional Single Cask 2018 - ESB 3892 - 08 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1988-exceptional-single-cask-2018-esb-3892-08", buyLink: "contact"
  },
  {
    id: 30, name: "Macallan 1989 - 30 Year Old - XOP The Black Series", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 3499.9,
    image: "images/products/macallan-1989-30-year-old-xop-the-black-series.jpg",
    description: "Macallan 1989 - 30 Year Old - XOP The Black Series — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1989-30-year-old-xop-the-black-series", buyLink: "contact"
  },
  {
    id: 31, name: "Macallan 1989 - 33 Year Old - Statement 53 - Blackadder Raw Cask", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 33, price: 10000,
    image: "images/products/macallan-1989-33-year-old-statement-53-blackadder-raw-cask.jpg",
    description: "Macallan 1989 - 33 Year Old - Statement 53 - Blackadder Raw Cask — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1989-33-year-old-statement-53-blackadder-raw-cask", buyLink: "contact"
  },
  {
    id: 32, name: "Macallan 1990 - 31 Year Old - Xtra Old Particular Black Series", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 31, price: 3499.9,
    image: "images/products/macallan-1990-31-year-old-xtra-old-particular-black-series.jpg",
    description: "Macallan 1990 - 31 Year Old - Xtra Old Particular Black Series — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1990-31-year-old-xtra-old-particular-black-series", buyLink: "contact"
  },
  {
    id: 33, name: "Macallan 1993 - 30 Year Old - Halcyon Release #1", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 2950,
    image: "images/products/macallan-1993-30-year-old-halcyon-release-1.jpg",
    description: "Macallan 1993 - 30 Year Old - Halcyon Release #1 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1993-30-year-old-halcyon-release-1", buyLink: "contact"
  },
  {
    id: 34, name: "Macallan 1997 - 25 Year Old - Signatory Symington’s Choice", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 25, price: 1949.9,
    image: "images/products/macallan-1997-25-year-old-signatory-symington-s-choice.jpg",
    description: "Macallan 1997 - 25 Year Old - Signatory Symington’s Choice — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1997-25-year-old-signatory-symington-s-choice", buyLink: "contact"
  },
  {
    id: 35, name: "Macallan 2006 - 18 Year Old - Cask 9620 - Gordon &amp; Macphail - Speymalt", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 219.9,
    image: "images/products/macallan-2006-18-year-old-cask-9620-gordon-amp-macphail-speymalt.jpg",
    description: "Macallan 2006 - 18 Year Old - Cask 9620 - Gordon &amp; Macphail - Speymalt — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-2006-18-year-old-cask-9620-gordon-amp-macphail-speymalt", buyLink: "contact"
  },
  {
    id: 36, name: "Macallan 2008 - Distil Your World London Edition - Single Cask", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 19999.9,
    image: "images/products/macallan-2008-distil-your-world-london-edition-single-cask.jpg",
    description: "Macallan 2008 - Distil Your World London Edition - Single Cask — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-2008-distil-your-world-london-edition-single-cask", buyLink: "contact"
  },
  {
    id: 37, name: "Macallan 21 Year Old - The Colour Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 21, price: 1050,
    image: "images/products/macallan-21-year-old-the-colour-collection.jpg",
    description: "Macallan 21 Year Old - The Colour Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-21-year-old-the-colour-collection", buyLink: "contact"
  },
  {
    id: 38, name: "Macallan 25 Year Old - Sherry Oak", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 25, price: 2999.9,
    image: "images/products/macallan-25-year-old-sherry-oak.jpg",
    description: "Một phần tư thế kỷ trong thùng sherry chọn lọc. Chiều sâu hiếm có: nho khô ngâm rượu, gỗ đàn hương, cà phê rang và vỏ cam sấy.",
    abv: 43, volume: "70cl", slug: "macallan-25-year-old-sherry-oak", buyLink: "contact"
  },
  {
    id: 39, name: "Macallan 25 Year Old - Sherry Oak - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 25, price: 2699.9,
    image: "images/products/macallan-25-year-old-sherry-oak-2022-release.jpg",
    description: "Macallan 25 Year Old - Sherry Oak - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-25-year-old-sherry-oak-2022-release", buyLink: "contact"
  },
  {
    id: 40, name: "Macallan 25 Year Old - Sherry Oak - 2023 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 25, price: 2199.9,
    image: "images/products/macallan-25-year-old-sherry-oak-2023-release.jpg",
    description: "Macallan 25 Year Old - Sherry Oak - 2023 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-25-year-old-sherry-oak-2023-release", buyLink: "contact"
  },
  {
    id: 41, name: "Macallan 30 Year Old - Batch 16 - That Boutique-y Whisky Company", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 1699.9,
    image: "images/products/macallan-30-year-old-batch-16-that-boutique-y-whisky-company.jpg",
    description: "Macallan 30 Year Old - Batch 16 - That Boutique-y Whisky Company — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-30-year-old-batch-16-that-boutique-y-whisky-company", buyLink: "contact"
  },
  {
    id: 42, name: "Macallan 30 Year Old - Double Cask - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 4199.9,
    image: "images/products/macallan-30-year-old-double-cask-2022-release.jpg",
    description: "Macallan 30 Year Old - Double Cask - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-30-year-old-double-cask-2022-release", buyLink: "contact"
  },
  {
    id: 43, name: "Macallan 30 Year Old - Sherry Oak", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 4995,
    image: "images/products/macallan-30-year-old-sherry-oak.jpg",
    description: "Đỉnh cao dòng Sherry Oak thường niên — 30 năm tuổi với tầng hương mứt trái cây đen, thuốc lá ngọt và sô-cô-la cam. Chai sưu tầm đẳng cấp.",
    abv: 43, volume: "70cl", slug: "macallan-30-year-old-sherry-oak", buyLink: "contact", featured: true
  },
  {
    id: 44, name: "Macallan 30 Year Old - Sherry Oak - 2020 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 6999.9,
    image: "images/products/macallan-30-year-old-sherry-oak-2020-release.jpg",
    description: "Macallan 30 Year Old - Sherry Oak - 2020 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-30-year-old-sherry-oak-2020-release", buyLink: "contact"
  },
  {
    id: 45, name: "Macallan 30 Year Old - Sherry Oak - 2023 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 4599.9,
    image: "images/products/macallan-30-year-old-sherry-oak-2023-release.jpg",
    description: "Macallan 30 Year Old - Sherry Oak - 2023 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-30-year-old-sherry-oak-2023-release", buyLink: "contact"
  },
  {
    id: 46, name: "Macallan 30 Year Old - Sherry Oak - Old Bottling", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 30, price: 14999.9,
    image: "images/products/macallan-30-year-old-sherry-oak-old-bottling.jpg",
    description: "Macallan 30 Year Old - Sherry Oak - Old Bottling — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-30-year-old-sherry-oak-old-bottling", buyLink: "contact"
  },
  {
    id: 47, name: "Macallan 50 Year Old - Red Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 50, price: 49999.9,
    image: "images/products/macallan-50-year-old-red-collection.jpg",
    description: "Macallan 50 Year Old - Red Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-50-year-old-red-collection", buyLink: "contact"
  },
  {
    id: 48, name: "Macallan 52 Year Old - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 52, price: 55000,
    image: "images/products/macallan-52-year-old-2018-release.jpg",
    description: "Macallan 52 Year Old - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-52-year-old-2018-release", buyLink: "contact"
  },
  {
    id: 49, name: "Macallan 77 Year Old - Red Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 77, price: 74999.9,
    image: "images/products/macallan-77-year-old-red-collection.jpg",
    description: "Macallan 77 Year Old - Red Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-77-year-old-red-collection", buyLink: "contact"
  },
  {
    id: 50, name: "Macallan 78 Year Old - Red Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 78, price: 79999.9,
    image: "images/products/macallan-78-year-old-red-collection.jpg",
    description: "Macallan 78 Year Old - Red Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-78-year-old-red-collection", buyLink: "contact"
  },
  {
    id: 51, name: "Macallan A Night on Earth in Jerez - 2024 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 109.9,
    image: "images/products/macallan-a-night-on-earth-in-jerez-2024-release.jpg",
    description: "Macallan A Night on Earth in Jerez - 2024 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-a-night-on-earth-in-jerez-2024-release", buyLink: "contact"
  },
  {
    id: 52, name: "Macallan A Night on Earth in Scotland - 2021 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 215.9,
    image: "images/products/macallan-a-night-on-earth-in-scotland-2021-release.jpg",
    description: "Macallan A Night on Earth in Scotland - 2021 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-a-night-on-earth-in-scotland-2021-release", buyLink: "contact"
  },
  {
    id: 53, name: "Macallan Aera", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 399.9,
    image: "images/products/macallan-aera.jpg",
    description: "Macallan Aera — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-aera", buyLink: "contact"
  },
  {
    id: 54, name: "Macallan Art is the Flower", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 819.9,
    image: "images/products/macallan-art-is-the-flower.jpg",
    description: "Macallan Art is the Flower — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-art-is-the-flower", buyLink: "contact"
  },
  {
    id: 55, name: "Macallan Boutique Collection - 2020 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599.9,
    image: "images/products/macallan-boutique-collection-2020-release.jpg",
    description: "Macallan Boutique Collection - 2020 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-boutique-collection-2020-release", buyLink: "contact"
  },
  {
    id: 56, name: "Macallan Chairman's Release - 1700 Series", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1199.9,
    image: "images/products/macallan-chairman-s-release-1700-series.jpg",
    description: "Macallan Chairman's Release - 1700 Series — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-chairman-s-release-1700-series", buyLink: "contact"
  },
  {
    id: 57, name: "Macallan Classic Cut - 2017 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 849.9,
    image: "images/products/macallan-classic-cut-2017-release.jpg",
    description: "Macallan Classic Cut - 2017 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2017-release", buyLink: "contact"
  },
  {
    id: 58, name: "Macallan Classic Cut - 2018 - US Release 75cl", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 799.9,
    image: "images/products/macallan-classic-cut-2018-us-release-75cl.jpg",
    description: "Macallan Classic Cut - 2018 - US Release 75cl — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "macallan-classic-cut-2018-us-release-75cl", buyLink: "contact"
  },
  {
    id: 59, name: "Macallan Classic Cut - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 799.9,
    image: "images/products/macallan-classic-cut-2018-release.jpg",
    description: "Macallan Classic Cut - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2018-release", buyLink: "contact"
  },
  {
    id: 60, name: "Macallan Classic Cut - 2018 Release - Without Box", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 699.9,
    image: "images/products/macallan-classic-cut-2018-release-without-box.jpg",
    description: "Macallan Classic Cut - 2018 Release - Without Box — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2018-release-without-box", buyLink: "contact"
  },
  {
    id: 61, name: "Macallan Classic Cut - 2019 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 289.9,
    image: "images/products/macallan-classic-cut-2019-release.jpg",
    description: "Macallan Classic Cut - 2019 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2019-release", buyLink: "contact"
  },
  {
    id: 62, name: "Macallan Classic Cut - 2020 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 349.9,
    image: "images/products/macallan-classic-cut-2020-release.jpg",
    description: "Macallan Classic Cut - 2020 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2020-release", buyLink: "contact"
  },
  {
    id: 63, name: "Macallan Classic Cut - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 299.9,
    image: "images/products/macallan-classic-cut-2022-release.jpg",
    description: "Macallan Classic Cut - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2022-release", buyLink: "contact"
  },
  {
    id: 64, name: "Macallan Classic Cut - 2023 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 134.9,
    image: "images/products/macallan-classic-cut-2023-release.jpg",
    description: "Macallan Classic Cut - 2023 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2023-release", buyLink: "contact"
  },
  {
    id: 65, name: "Macallan Classic Cut - 2024 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 124.9,
    image: "images/products/macallan-classic-cut-2024-release.jpg",
    description: "Macallan Classic Cut - 2024 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2024-release", buyLink: "contact"
  },
  {
    id: 66, name: "Macallan Classic Cut - 2025 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 129.9,
    image: "images/products/macallan-classic-cut-2025-release.jpg",
    description: "Macallan Classic Cut - 2025 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-classic-cut-2025-release", buyLink: "contact"
  },
  {
    id: 67, name: "Macallan Concept No. 3", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 399.9,
    image: "images/products/macallan-concept-no-3.jpg",
    description: "Macallan Concept No. 3 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-concept-no-3", buyLink: "contact"
  },
  {
    id: 68, name: "Macallan Concept No.1", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1199.9,
    image: "images/products/macallan-concept-no-1.jpg",
    description: "Macallan Concept No.1 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-concept-no-1", buyLink: "contact"
  },
  {
    id: 69, name: "Macallan Concept No.2", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 499.9,
    image: "images/products/macallan-concept-no-2.jpg",
    description: "Macallan Concept No.2 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-concept-no-2", buyLink: "contact"
  },
  {
    id: 70, name: "Macallan Diamond Jubilee - Bottled 2012", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 17999.9,
    image: "images/products/macallan-diamond-jubilee-bottled-2012.jpg",
    description: "Macallan Diamond Jubilee - Bottled 2012 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-diamond-jubilee-bottled-2012", buyLink: "contact"
  },
  {
    id: 71, name: "Macallan Easter Elchies Black - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 2499.9,
    image: "images/products/macallan-easter-elchies-black-2018-release.jpg",
    description: "Macallan Easter Elchies Black - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-easter-elchies-black-2018-release", buyLink: "contact"
  },
  {
    id: 72, name: "Macallan Easter Elchies Black - 2019 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/macallan-easter-elchies-black-2019-release.jpg",
    description: "Macallan Easter Elchies Black - 2019 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-easter-elchies-black-2019-release", buyLink: "contact"
  },
  {
    id: 73, name: "Macallan Easter Elchies Black - 2019 Release - Damaged Box", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1949.9,
    image: "images/products/macallan-easter-elchies-black-2019-release-damaged-box.jpg",
    description: "Macallan Easter Elchies Black - 2019 Release - Damaged Box — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-easter-elchies-black-2019-release-damaged-box", buyLink: "contact"
  },
  {
    id: 74, name: "Macallan Edition No. 1", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 3999.9,
    image: "images/products/macallan-edition-no-1.jpg",
    description: "Macallan Edition No. 1 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-1", buyLink: "contact"
  },
  {
    id: 75, name: "Macallan Edition No. 1 - 75cl", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 3999.9,
    image: "images/products/macallan-edition-no-1-75cl.jpg",
    description: "Macallan Edition No. 1 - 75cl — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "macallan-edition-no-1-75cl", buyLink: "contact"
  },
  {
    id: 76, name: "Macallan Edition No. 1 - 75cl - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 3899.9,
    image: "images/products/macallan-edition-no-1-75cl-box-slightly-damaged.jpg",
    description: "Macallan Edition No. 1 - 75cl - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "macallan-edition-no-1-75cl-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 77, name: "Macallan Edition No. 1 - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 3899.9,
    image: "images/products/macallan-edition-no-1-box-slightly-damaged.jpg",
    description: "Macallan Edition No. 1 - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-1-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 78, name: "Macallan Edition No. 2", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 799.9,
    image: "images/products/macallan-edition-no-2.jpg",
    description: "Macallan Edition No. 2 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-2", buyLink: "contact"
  },
  {
    id: 79, name: "Macallan Edition No. 2 - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 769.9,
    image: "images/products/macallan-edition-no-2-box-slightly-damaged.jpg",
    description: "Macallan Edition No. 2 - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-2-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 80, name: "Macallan Edition No. 2 - US Release - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 769.9,
    image: "images/products/macallan-edition-no-2-us-release-box-slightly-damaged.jpg",
    description: "Macallan Edition No. 2 - US Release - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-2-us-release-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 81, name: "Macallan Edition No. 2 - Without Box", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 749.9,
    image: "images/products/macallan-edition-no-2-without-box.jpg",
    description: "Macallan Edition No. 2 - Without Box — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-2-without-box", buyLink: "contact"
  },
  {
    id: 82, name: "Macallan Edition No. 3", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599.9,
    image: "images/products/macallan-edition-no-3.jpg",
    description: "Macallan Edition No. 3 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-3", buyLink: "contact"
  },
  {
    id: 83, name: "Macallan Edition No. 3 - 75cl", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599.9,
    image: "images/products/macallan-edition-no-3-75cl.jpg",
    description: "Macallan Edition No. 3 - 75cl — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "macallan-edition-no-3-75cl", buyLink: "contact"
  },
  {
    id: 84, name: "Macallan Edition No. 4", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 459.9,
    image: "images/products/macallan-edition-no-4.jpg",
    description: "Macallan Edition No. 4 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-4", buyLink: "contact"
  },
  {
    id: 85, name: "Macallan Edition No. 5", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 399.9,
    image: "images/products/macallan-edition-no-5.jpg",
    description: "Macallan Edition No. 5 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edition-no-5", buyLink: "contact"
  },
  {
    id: 86, name: "Macallan Edrington's New Home Celebratory Bottling 2017", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1199.9,
    image: "images/products/macallan-edrington-s-new-home-celebratory-bottling-2017.jpg",
    description: "Macallan Edrington's New Home Celebratory Bottling 2017 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-edrington-s-new-home-celebratory-bottling-2017", buyLink: "contact"
  },
  {
    id: 87, name: "Macallan Estate", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 399.9,
    image: "images/products/macallan-estate.jpg",
    description: "Macallan Estate — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-estate", buyLink: "contact"
  },
  {
    id: 88, name: "Macallan Estate Reserve - 1824 Collection", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 459.9,
    image: "images/products/macallan-estate-reserve-1824-collection.jpg",
    description: "Macallan Estate Reserve - 1824 Collection — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-estate-reserve-1824-collection", buyLink: "contact"
  },
  {
    id: 89, name: "Macallan Genesis - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 4999.9,
    image: "images/products/macallan-genesis-2018-release.jpg",
    description: "Macallan Genesis - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-genesis-2018-release", buyLink: "contact"
  },
  {
    id: 90, name: "Macallan Genesis - 72 Year Old In Lalique Decanter", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 72, price: 99999.9,
    image: "images/products/macallan-genesis-72-year-old-in-lalique-decanter.jpg",
    description: "Macallan Genesis - 72 Year Old In Lalique Decanter — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-genesis-72-year-old-in-lalique-decanter", buyLink: "contact"
  },
  {
    id: 91, name: "Macallan Gold Double Cask", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 149.9,
    image: "images/products/macallan-gold-double-cask.jpg",
    description: "Macallan Gold Double Cask — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-gold-double-cask", buyLink: "contact"
  },
  {
    id: 92, name: "Macallan Harmony Collection - Intense Arabica", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 199.9,
    image: "images/products/macallan-harmony-collection-intense-arabica.jpg",
    description: "Macallan Harmony Collection - Intense Arabica — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-harmony-collection-intense-arabica", buyLink: "contact"
  },
  {
    id: 93, name: "Macallan Home Collection - River Spey - With Prints", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 999.9,
    image: "images/products/macallan-home-collection-river-spey-with-prints.jpg",
    description: "Macallan Home Collection - River Spey - With Prints — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-home-collection-river-spey-with-prints", buyLink: "contact"
  },
  {
    id: 94, name: "Macallan Home Collection River Spey", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599.9,
    image: "images/products/macallan-home-collection-river-spey.jpg",
    description: "Macallan Home Collection River Spey — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-home-collection-river-spey", buyLink: "contact"
  },
  {
    id: 95, name: "Macallan Home Collection The Distillery", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599.9,
    image: "images/products/macallan-home-collection-the-distillery.jpg",
    description: "Macallan Home Collection The Distillery — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-home-collection-the-distillery", buyLink: "contact"
  },
  {
    id: 96, name: "Macallan Home Collection The Distillery + Prints", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1499.9,
    image: "images/products/macallan-home-collection-the-distillery-prints.jpg",
    description: "Macallan Home Collection The Distillery + Prints — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-home-collection-the-distillery-prints", buyLink: "contact"
  },
  {
    id: 97, name: "Macallan James Bond 60th Anniversary - Full Set", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 10999.9,
    image: "images/products/macallan-james-bond-60th-anniversary-full-set.jpg",
    description: "Macallan James Bond 60th Anniversary - Full Set — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-james-bond-60th-anniversary-full-set", buyLink: "contact"
  },
  {
    id: 98, name: "Macallan James Bond 60th Anniversary Release - Decade 1", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/macallan-james-bond-60th-anniversary-release-decade-1.jpg",
    description: "Macallan James Bond 60th Anniversary Release - Decade 1 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-james-bond-60th-anniversary-release-decade-1", buyLink: "contact"
  },
  {
    id: 99, name: "Macallan James Bond 60th Anniversary Release - Decade 2", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/macallan-james-bond-60th-anniversary-release-decade-2.jpg",
    description: "Macallan James Bond 60th Anniversary Release - Decade 2 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-james-bond-60th-anniversary-release-decade-2", buyLink: "contact"
  },
  {
    id: 100, name: "Macallan James Bond 60th Anniversary Release - Decade 3", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/macallan-james-bond-60th-anniversary-release-decade-3.jpg",
    description: "Macallan James Bond 60th Anniversary Release - Decade 3 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-james-bond-60th-anniversary-release-decade-3", buyLink: "contact"
  },
  {
    id: 101, name: "Macallan James Bond 60th Anniversary Release - Decade 4", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/macallan-james-bond-60th-anniversary-release-decade-4.jpg",
    description: "Macallan James Bond 60th Anniversary Release - Decade 4 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-james-bond-60th-anniversary-release-decade-4", buyLink: "contact"
  },
  {
    id: 102, name: "Macallan James Bond 60th Anniversary Release - Decade 5", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/macallan-james-bond-60th-anniversary-release-decade-5.jpg",
    description: "Macallan James Bond 60th Anniversary Release - Decade 5 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-james-bond-60th-anniversary-release-decade-5", buyLink: "contact"
  },
  {
    id: 103, name: "Macallan James Bond 60th Anniversary Release - Decade 6", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/macallan-james-bond-60th-anniversary-release-decade-6.jpg",
    description: "Macallan James Bond 60th Anniversary Release - Decade 6 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-james-bond-60th-anniversary-release-decade-6", buyLink: "contact"
  },
  {
    id: 104, name: "Macallan Lumina", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 182.9,
    image: "images/products/macallan-lumina.jpg",
    description: "Macallan Lumina — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-lumina", buyLink: "contact"
  },
  {
    id: 105, name: "Macallan M Black - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 7000,
    image: "images/products/macallan-m-black-2018-release.jpg",
    description: "Macallan M Black - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-m-black-2018-release", buyLink: "contact"
  },
  {
    id: 106, name: "Macallan M Black - 2020 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 6499.9,
    image: "images/products/macallan-m-black-2020-release.jpg",
    description: "Macallan M Black - 2020 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-m-black-2020-release", buyLink: "contact"
  },
  {
    id: 107, name: "Macallan M Black - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 5700,
    image: "images/products/macallan-m-black-2022-release.jpg",
    description: "Macallan M Black - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-m-black-2022-release", buyLink: "contact"
  },
  {
    id: 108, name: "Macallan M Black - 2023 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 6499.9,
    image: "images/products/macallan-m-black-2023-release.jpg",
    description: "Macallan M Black - 2023 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-m-black-2023-release", buyLink: "contact"
  },
  {
    id: 109, name: "Macallan M Copper - 2023 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 7000,
    image: "images/products/macallan-m-copper-2023-release.jpg",
    description: "Macallan M Copper - 2023 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-m-copper-2023-release", buyLink: "contact"
  },
  {
    id: 110, name: "Macallan M in Lalique Decanter - 2020 Edition", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 4599.9,
    image: "images/products/macallan-m-in-lalique-decanter-2020-edition.jpg",
    description: "Macallan M in Lalique Decanter - 2020 Edition — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-m-in-lalique-decanter-2020-edition", buyLink: "contact"
  },
  {
    id: 111, name: "Macallan M in Lalique Decanter - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 4999.9,
    image: "images/products/macallan-m-in-lalique-decanter-2022-release.jpg",
    description: "Macallan M in Lalique Decanter - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-m-in-lalique-decanter-2022-release", buyLink: "contact"
  },
  {
    id: 112, name: "Macallan Magnum Edition - Masters of Photography", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 3459.99,
    image: "images/products/macallan-magnum-edition-masters-of-photography.jpg",
    description: "Macallan Magnum Edition - Masters of Photography — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-magnum-edition-masters-of-photography", buyLink: "contact"
  },
  {
    id: 113, name: "Macallan Private Eye", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 9999.9,
    image: "images/products/macallan-private-eye.jpg",
    description: "Macallan Private Eye — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-private-eye", buyLink: "contact"
  },
  {
    id: 114, name: "Macallan Rare Cask - 1824 Master Series", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599,
    image: "images/products/macallan-rare-cask-1824-master-series.jpg",
    description: "Macallan Rare Cask - 1824 Master Series — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-1824-master-series", buyLink: "contact"
  },
  {
    id: 115, name: "Macallan Rare Cask - 2020 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 449.9,
    image: "images/products/macallan-rare-cask-2020-release.jpg",
    description: "Macallan Rare Cask - 2020 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-2020-release", buyLink: "contact"
  },
  {
    id: 116, name: "Macallan Rare Cask - 2021 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 419.9,
    image: "images/products/macallan-rare-cask-2021-release.jpg",
    description: "Macallan Rare Cask - 2021 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-2021-release", buyLink: "contact"
  },
  {
    id: 117, name: "Macallan Rare Cask - 2022 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 399.9,
    image: "images/products/macallan-rare-cask-2022-release.jpg",
    description: "Macallan Rare Cask - 2022 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-2022-release", buyLink: "contact"
  },
  {
    id: 118, name: "Macallan Rare Cask - 2024 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 299.9,
    image: "images/products/macallan-rare-cask-2024-release.jpg",
    description: "Macallan Rare Cask - 2024 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-2024-release", buyLink: "contact", featured: true
  },
  {
    id: 119, name: "Macallan Rare Cask - Batch No. 1 - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 579.9,
    image: "images/products/macallan-rare-cask-batch-no-1-2018-release.jpg",
    description: "Macallan Rare Cask - Batch No. 1 - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-batch-no-1-2018-release", buyLink: "contact"
  },
  {
    id: 120, name: "Macallan Rare Cask - Batch No. 1 - 2019 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 499.9,
    image: "images/products/macallan-rare-cask-batch-no-1-2019-release.jpg",
    description: "Macallan Rare Cask - Batch No. 1 - 2019 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-batch-no-1-2019-release", buyLink: "contact"
  },
  {
    id: 121, name: "Macallan Rare Cask - Batch No. 2 - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 559.9,
    image: "images/products/macallan-rare-cask-batch-no-2-2018-release.jpg",
    description: "Macallan Rare Cask - Batch No. 2 - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-batch-no-2-2018-release", buyLink: "contact"
  },
  {
    id: 122, name: "Macallan Rare Cask - Batch No. 3 - 2018 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 519.9,
    image: "images/products/macallan-rare-cask-batch-no-3-2018-release.jpg",
    description: "Macallan Rare Cask - Batch No. 3 - 2018 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-rare-cask-batch-no-3-2018-release", buyLink: "contact"
  },
  {
    id: 123, name: "Macallan Royal Marriage - 1981 - Wooden Box", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 11999.9,
    image: "images/products/macallan-royal-marriage-1981-wooden-box.jpg",
    description: "Macallan Royal Marriage - 1981 - Wooden Box — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-royal-marriage-1981-wooden-box", buyLink: "contact"
  },
  {
    id: 124, name: "Macallan Royal Marriage - Kate &amp; William", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 7899.9,
    image: "images/products/macallan-royal-marriage-kate-amp-william.jpg",
    description: "Macallan Royal Marriage - Kate &amp; William — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-royal-marriage-kate-amp-william", buyLink: "contact"
  },
  {
    id: 125, name: "Macallan Ruby - 1824 Series", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1199.9,
    image: "images/products/macallan-ruby-1824-series.jpg",
    description: "Macallan Ruby - 1824 Series — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-ruby-1824-series", buyLink: "contact"
  },
  {
    id: 126, name: "Macallan Sir Peter Blake - An Estate, A Community, and A Distillery", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1599.9,
    image: "images/products/macallan-sir-peter-blake-an-estate-a-community-and-a-distillery.jpg",
    description: "Macallan Sir Peter Blake - An Estate, A Community, and A Distillery — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-sir-peter-blake-an-estate-a-community-and-a-distillery", buyLink: "contact"
  },
  {
    id: 127, name: "Macallan Terra", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 199.9,
    image: "images/products/macallan-terra.jpg",
    description: "Macallan Terra — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-terra", buyLink: "contact"
  },
  {
    id: 128, name: "Macallan The Archival Series - Folio 5", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 2999.9,
    image: "images/products/macallan-the-archival-series-folio-5.jpg",
    description: "Macallan The Archival Series - Folio 5 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-archival-series-folio-5", buyLink: "contact"
  },
  {
    id: 129, name: "Macallan The Archival Series - Folio 6", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 2499.9,
    image: "images/products/macallan-the-archival-series-folio-6.jpg",
    description: "Macallan The Archival Series - Folio 6 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-archival-series-folio-6", buyLink: "contact"
  },
  {
    id: 130, name: "Macallan The Archival Series - Folio 7", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 1499.9,
    image: "images/products/macallan-the-archival-series-folio-7.jpg",
    description: "Macallan The Archival Series - Folio 7 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-archival-series-folio-7", buyLink: "contact"
  },
  {
    id: 131, name: "Macallan The Archival Series - Folio 8", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 999.9,
    image: "images/products/macallan-the-archival-series-folio-8.jpg",
    description: "Macallan The Archival Series - Folio 8 — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-archival-series-folio-8", buyLink: "contact"
  },
  {
    id: 132, name: "Macallan The Coronation Bottling", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 9999.9,
    image: "images/products/macallan-the-coronation-bottling.jpg",
    description: "Macallan The Coronation Bottling — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-coronation-bottling", buyLink: "contact"
  },
  {
    id: 133, name: "Macallan The Harmony Collection - Amber Meadow", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 149.9,
    image: "images/products/macallan-the-harmony-collection-amber-meadow.jpg",
    description: "Macallan The Harmony Collection - Amber Meadow — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-amber-meadow", buyLink: "contact"
  },
  {
    id: 134, name: "Macallan The Harmony Collection - Fine Cacao", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 699.9,
    image: "images/products/macallan-the-harmony-collection-fine-cacao.jpg",
    description: "Macallan The Harmony Collection - Fine Cacao — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-fine-cacao", buyLink: "contact"
  },
  {
    id: 135, name: "Macallan The Harmony Collection - Fine Cacao - Box Slightly Damaged", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599.9,
    image: "images/products/macallan-the-harmony-collection-fine-cacao-box-slightly-damaged.jpg",
    description: "Macallan The Harmony Collection - Fine Cacao - Box Slightly Damaged — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-fine-cacao-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 136, name: "Macallan The Harmony Collection - Green Meadow", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 299.9,
    image: "images/products/macallan-the-harmony-collection-green-meadow.jpg",
    description: "Macallan The Harmony Collection - Green Meadow — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-green-meadow", buyLink: "contact"
  },
  {
    id: 137, name: "Macallan The Harmony Collection - Green Meadow - Without Box", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 269.9,
    image: "images/products/macallan-the-harmony-collection-green-meadow-without-box.jpg",
    description: "Macallan The Harmony Collection - Green Meadow - Without Box — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-green-meadow-without-box", buyLink: "contact"
  },
  {
    id: 138, name: "Macallan The Harmony Collection - Phoenix Honey Orchid Tea", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 152,
    image: "images/products/macallan-the-harmony-collection-phoenix-honey-orchid-tea.jpg",
    description: "Macallan The Harmony Collection - Phoenix Honey Orchid Tea — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-phoenix-honey-orchid-tea", buyLink: "contact"
  },
  {
    id: 139, name: "Macallan The Harmony Collection - Rich Cacao", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 599.9,
    image: "images/products/macallan-the-harmony-collection-rich-cacao.jpg",
    description: "Macallan The Harmony Collection - Rich Cacao — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-rich-cacao", buyLink: "contact"
  },
  {
    id: 140, name: "Macallan The Harmony Collection - Smooth Arabica", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 499.9,
    image: "images/products/macallan-the-harmony-collection-smooth-arabica.jpg",
    description: "Macallan The Harmony Collection - Smooth Arabica — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-smooth-arabica", buyLink: "contact"
  },
  {
    id: 141, name: "Macallan The Harmony Collection - Smooth Arabica - Damaged Box", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 479.9,
    image: "images/products/macallan-the-harmony-collection-smooth-arabica-damaged-box.jpg",
    description: "Macallan The Harmony Collection - Smooth Arabica - Damaged Box — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-smooth-arabica-damaged-box", buyLink: "contact"
  },
  {
    id: 142, name: "Macallan The Harmony Collection - Vibrant Oak", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 159.9,
    image: "images/products/macallan-the-harmony-collection-vibrant-oak.jpg",
    description: "Macallan The Harmony Collection - Vibrant Oak — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-the-harmony-collection-vibrant-oak", buyLink: "contact"
  },
  {
    id: 143, name: "Tales of The Macallan - Volume II", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 84999.9,
    image: "images/products/tales-of-the-macallan-volume-ii.jpg",
    description: "Tales of The Macallan - Volume II — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "tales-of-the-macallan-volume-ii", buyLink: "contact"
  },
  {
    id: 144, name: "The Macallan Horizon", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: 43000,
    image: "images/products/the-macallan-horizon.jpg",
    description: "The Macallan Horizon — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "the-macallan-horizon", buyLink: "contact"
  },

  /* ---------------- DALMORE ---------------- */
  {
    id: 145, name: "Dalmore 12 Year Old", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 12, price: 61.9,
    image: "images/products/dalmore-12-year-old.jpg",
    description: "Chữ ký của Dalmore: ủ sồi Mỹ rồi chuyển sang thùng Oloroso sherry. Cam sành, sô-cô-la đen và gia vị ấm — đậm chất Highland quý tộc.",
    abv: 40, volume: "70cl", slug: "dalmore-12-year-old", buyLink: "contact"
  },
  {
    id: 146, name: "Dalmore 12 Year Old - Sherry Cask", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 12, price: 79.9,
    image: "images/products/dalmore-12-year-old-sherry-cask.jpg",
    description: "Dalmore 12 Year Old - Sherry Cask — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-12-year-old-sherry-cask", buyLink: "contact"
  },
  {
    id: 147, name: "Dalmore 12 Year Old - With Personalised Engraving", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 12, price: 71.9,
    image: "images/products/dalmore-12-year-old-with-personalised-engraving.jpg",
    description: "Dalmore 12 Year Old - With Personalised Engraving — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-12-year-old-with-personalised-engraving", buyLink: "contact"
  },
  {
    id: 148, name: "Dalmore 12 Year Old - Without Box", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 12, price: 61.9,
    image: "images/products/dalmore-12-year-old-without-box.jpg",
    description: "Dalmore 12 Year Old - Without Box — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-12-year-old-without-box", buyLink: "contact"
  },
  {
    id: 149, name: "Dalmore 15 Year Old", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 15, price: 94.9,
    image: "images/products/dalmore-15-year-old.jpg",
    description: "Ủ qua ba loại thùng sherry khác nhau (Apostoles, Amoroso, Matusalem). Mứt cam, hạnh nhân rang và vani sang trọng.",
    abv: 40, volume: "70cl", slug: "dalmore-15-year-old", buyLink: "contact", featured: true
  },
  {
    id: 150, name: "Dalmore 15 Year Old - With Personalised Engraving", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 15, price: 116.9,
    image: "images/products/dalmore-15-year-old-with-personalised-engraving.jpg",
    description: "Dalmore 15 Year Old - With Personalised Engraving — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-15-year-old-with-personalised-engraving", buyLink: "contact"
  },
  {
    id: 151, name: "Dalmore 18 Year Old - 2023 Release", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 18, price: 314.9,
    image: "images/products/dalmore-18-year-old-2023-release.jpg",
    description: "Dalmore 18 Year Old - 2023 Release — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-18-year-old-2023-release", buyLink: "contact"
  },
  {
    id: 152, name: "Dalmore 18 Year Old - 2024 Release", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 18, price: 299.9,
    image: "images/products/dalmore-18-year-old-2024-release.jpg",
    description: "Dalmore 18 Year Old - 2024 Release — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-18-year-old-2024-release", buyLink: "contact"
  },
  {
    id: 153, name: "Dalmore 2003 - Vintage Collection", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 344.9,
    image: "images/products/dalmore-2003-vintage-collection.jpg",
    description: "Dalmore 2003 - Vintage Collection — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2003-vintage-collection", buyLink: "contact"
  },
  {
    id: 154, name: "Dalmore 2003​ - 21 Year Old - Cask #14736 - Signatory Symington’s Choice", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 21, price: 399.9,
    image: "images/products/dalmore-2003-21-year-old-cask-14736-signatory-symington-s-choice.jpg",
    description: "Dalmore 2003​ - 21 Year Old - Cask #14736 - Signatory Symington’s Choice — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2003-21-year-old-cask-14736-signatory-symington-s-choice", buyLink: "contact"
  },
  {
    id: 155, name: "Dalmore 2005 - Vintage Collection", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 374.9,
    image: "images/products/dalmore-2005-vintage-collection.jpg",
    description: "Dalmore 2005 - Vintage Collection — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2005-vintage-collection", buyLink: "contact"
  },
  {
    id: 156, name: "Dalmore 2006 - 17 Year Old - The Octave", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 17, price: 374.9,
    image: "images/products/dalmore-2006-17-year-old-the-octave.jpg",
    description: "Dalmore 2006 - 17 Year Old - The Octave — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2006-17-year-old-the-octave", buyLink: "contact"
  },
  {
    id: 157, name: "Dalmore 2006 - Vintage Collection - Bottled 2024", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 394.9,
    image: "images/products/dalmore-2006-vintage-collection-bottled-2024.jpg",
    description: "Dalmore 2006 - Vintage Collection - Bottled 2024 — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2006-vintage-collection-bottled-2024", buyLink: "contact"
  },
  {
    id: 158, name: "Dalmore 2008 - Vintage Collection", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 154.9,
    image: "images/products/dalmore-2008-vintage-collection.jpg",
    description: "Dalmore 2008 - Vintage Collection — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2008-vintage-collection", buyLink: "contact"
  },
  {
    id: 159, name: "Dalmore 2009 - Vintage Collection - Bottled 2024", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 157.9,
    image: "images/products/dalmore-2009-vintage-collection-bottled-2024.jpg",
    description: "Dalmore 2009 - Vintage Collection - Bottled 2024 — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2009-vintage-collection-bottled-2024", buyLink: "contact"
  },
  {
    id: 160, name: "Dalmore 25 Year Old", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 25, price: 1299.9,
    image: "images/products/dalmore-25-year-old.jpg",
    description: "Hoàn thiện trong thùng port Tawny hảo hạng. Mận chín, caramel muối và gỗ quý — 25 năm của sự tinh tế Highland.",
    abv: 42, volume: "70cl", slug: "dalmore-25-year-old", buyLink: "contact"
  },
  {
    id: 161, name: "Dalmore 30 Year Old - 2022 Edition", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 30, price: 4699.9,
    image: "images/products/dalmore-30-year-old-2022-edition.jpg",
    description: "Dalmore 30 Year Old - 2022 Edition — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-30-year-old-2022-edition", buyLink: "contact"
  },
  {
    id: 162, name: "Dalmore 30 Year Old - 2024 Edition", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 30, price: 4999.9,
    image: "images/products/dalmore-30-year-old-2024-edition.jpg",
    description: "Dalmore 30 Year Old - 2024 Edition — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-30-year-old-2024-edition", buyLink: "contact"
  },
  {
    id: 163, name: "Dalmore 40 Year Old - 2022 Release", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 40, price: 9949.9,
    image: "images/products/dalmore-40-year-old-2022-release.jpg",
    description: "Dalmore 40 Year Old - 2022 Release — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-40-year-old-2022-release", buyLink: "contact"
  },
  {
    id: 164, name: "Dalmore 45 Year Old - 2023 Release", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 45, price: 18499.9,
    image: "images/products/dalmore-45-year-old-2023-release.jpg",
    description: "Dalmore 45 Year Old - 2023 Release — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-45-year-old-2023-release", buyLink: "contact"
  },
  {
    id: 165, name: "Dalmore Cigar Malt Reserve", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 96.9,
    image: "images/products/dalmore-cigar-malt-reserve.jpg",
    description: "Được blend riêng để sánh đôi cùng xì gà — 70% sherry Matusalem, đậm, ngọt và tròn vị. Người bạn hoàn hảo của những buổi tối đẳng cấp.",
    abv: 44, volume: "70cl", slug: "dalmore-cigar-malt-reserve", buyLink: "contact"
  },
  {
    id: 166, name: "Dalmore Constellation 1976 - 35 Year Old - Cask 3", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 35, price: 10999.9,
    image: "images/products/dalmore-constellation-1976-35-year-old-cask-3.jpg",
    description: "Dalmore Constellation 1976 - 35 Year Old - Cask 3 — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-constellation-1976-35-year-old-cask-3", buyLink: "contact"
  },
  {
    id: 167, name: "Dalmore King Alexander III", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 229.9,
    image: "images/products/dalmore-king-alexander-iii.jpg",
    description: "Kiệt tác ủ qua 6 loại thùng: bourbon, sherry Matusalem, madeira, marsala, port và vang Cabernet. Phức tầng bậc nhất thế giới whisky.",
    abv: 40, volume: "70cl", slug: "dalmore-king-alexander-iii", buyLink: "contact", featured: true
  },
  {
    id: 168, name: "Dalmore Port Wood Reserve", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 79.9,
    image: "images/products/dalmore-port-wood-reserve.jpg",
    description: "Dalmore Port Wood Reserve — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-port-wood-reserve", buyLink: "contact"
  },
  {
    id: 169, name: "Dalmore Quintessence", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 1199.9,
    image: "images/products/dalmore-quintessence.jpg",
    description: "Dalmore Quintessence — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-quintessence", buyLink: "contact"
  },
  {
    id: 170, name: "Dalmore The Quartet", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 104.9,
    image: "images/products/dalmore-the-quartet.jpg",
    description: "Dalmore The Quartet — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-the-quartet", buyLink: "contact"
  },
  {
    id: 171, name: "Dalmore The Quintet", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 99.9,
    image: "images/products/dalmore-the-quintet.jpg",
    description: "Dalmore The Quintet — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-the-quintet", buyLink: "contact"
  },
  {
    id: 172, name: "The Dalmore Luminary No.2 - 16 Year Old", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 16, price: 275,
    image: "images/products/the-dalmore-luminary-no-2-16-year-old.jpg",
    description: "The Dalmore Luminary No.2 - 16 Year Old — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "the-dalmore-luminary-no-2-16-year-old", buyLink: "contact"
  },
  {
    id: 173, name: "The Dalmore Luminary No.3 - 17 Year Old", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 17, price: 279.9,
    image: "images/products/the-dalmore-luminary-no-3-17-year-old.jpg",
    description: "The Dalmore Luminary No.3 - 17 Year Old — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "the-dalmore-luminary-no-3-17-year-old", buyLink: "contact"
  },
  {
    id: 174, name: "Royal Salute 25 Year Old - The Treasured Blend", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 25, price: 25999,
    image: "images/products/royal-salute-25-year-old-the-treasured-blend.jpg",
    description: "Royal Salute 25 Year Old - The Treasured Blend — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-25-year-old-the-treasured-blend", buyLink: "contact"
  },
  {
    id: 175, name: "Chivas Regal 25 Year Old Blended Scotch Whisky", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 25, price: 299.9,
    image: "images/products/chivas-regal-25-year-old-blended-scotch-whisky.jpg",
    description: "Chivas Regal 25 Year Old Blended Scotch Whisky — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "chivas-regal-25-year-old-blended-scotch-whisky", buyLink: "contact"
  },

  /* ---------------- GLENFIDDICH ---------------- */
  {
    id: 176, name: "Glenfiddich 12 Year Old", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 12, price: 37.9,
    image: "images/products/glenfiddich-12-year-old.jpg",
    description: "Single malt bán chạy nhất thế giới. Hương lê tươi đặc trưng, sồi mềm và chút bơ kem — khởi đầu hoàn hảo cho người mới chơi whisky.",
    abv: 40, volume: "70cl", slug: "glenfiddich-12-year-old", buyLink: "contact"
  },
  {
    id: 177, name: "Glenfiddich 12 Year Old - 5cl Miniature", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 12, price: 4.49,
    image: "images/products/glenfiddich-12-year-old-5cl-miniature.jpg",
    description: "Glenfiddich 12 Year Old - 5cl Miniature — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "5cl", slug: "glenfiddich-12-year-old-5cl-miniature", buyLink: "contact"
  },
  {
    id: 178, name: "Glenfiddich 12 Year Old - American Oak", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 12, price: 39.9,
    image: "images/products/glenfiddich-12-year-old-american-oak.jpg",
    description: "Glenfiddich 12 Year Old - American Oak — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-12-year-old-american-oak", buyLink: "contact"
  },
  {
    id: 179, name: "Glenfiddich 12 Year Old - Caoran Reserve", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 12, price: 249.9,
    image: "images/products/glenfiddich-12-year-old-caoran-reserve.jpg",
    description: "Glenfiddich 12 Year Old - Caoran Reserve — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-12-year-old-caoran-reserve", buyLink: "contact"
  },
  {
    id: 180, name: "Glenfiddich 12 Year Old - Limited Edition", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 12, price: 44.9,
    image: "images/products/glenfiddich-12-year-old-limited-edition.jpg",
    description: "Glenfiddich 12 Year Old - Limited Edition — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-12-year-old-limited-edition", buyLink: "contact"
  },
  {
    id: 181, name: "Glenfiddich 12 Year Old - Triple Oak", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 12, price: 54.9,
    image: "images/products/glenfiddich-12-year-old-triple-oak.jpg",
    description: "Glenfiddich 12 Year Old - Triple Oak — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-12-year-old-triple-oak", buyLink: "contact"
  },
  {
    id: 182, name: "Glenfiddich 12, 15 &amp; 18 Year Old - 5cl Miniature Pack", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 17.9,
    image: "images/products/glenfiddich-12-15-amp-18-year-old-5cl-miniature-pack.jpg",
    description: "Glenfiddich 12, 15 &amp; 18 Year Old - 5cl Miniature Pack — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "5cl", slug: "glenfiddich-12-15-amp-18-year-old-5cl-miniature-pack", buyLink: "contact"
  },
  {
    id: 183, name: "Glenfiddich 14 Year Old - Bourbon Barrel Reserve", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 14, price: 44.9,
    image: "images/products/glenfiddich-14-year-old-bourbon-barrel-reserve.jpg",
    description: "Glenfiddich 14 Year Old - Bourbon Barrel Reserve — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-14-year-old-bourbon-barrel-reserve", buyLink: "contact"
  },
  {
    id: 184, name: "Glenfiddich 14 Year Old - Limited Edition", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 14, price: 44.9,
    image: "images/products/glenfiddich-14-year-old-limited-edition.jpg",
    description: "Glenfiddich 14 Year Old - Limited Edition — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-14-year-old-limited-edition", buyLink: "contact"
  },
  {
    id: 185, name: "Glenfiddich 14 Year Old - Rich Oak - 20cl", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 14, price: 42.9,
    image: "images/products/glenfiddich-14-year-old-rich-oak-20cl.jpg",
    description: "Glenfiddich 14 Year Old - Rich Oak - 20cl — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "20cl", slug: "glenfiddich-14-year-old-rich-oak-20cl", buyLink: "contact"
  },
  {
    id: 186, name: "Glenfiddich 15 Year Old - Perpetual Collection Vat 03", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 15, price: 104.9,
    image: "images/products/glenfiddich-15-year-old-perpetual-collection-vat-03.jpg",
    description: "Glenfiddich 15 Year Old - Perpetual Collection Vat 03 — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-15-year-old-perpetual-collection-vat-03", buyLink: "contact"
  },
  {
    id: 187, name: "Glenfiddich 15 Year Old Solera Reserve", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 15, price: 53.9,
    image: "images/products/glenfiddich-15-year-old-solera-reserve.jpg",
    description: "Glenfiddich 15 Year Old Solera Reserve — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-15-year-old-solera-reserve", buyLink: "contact"
  },
  {
    id: 188, name: "Glenfiddich 16 Year Old - Aston Martin", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 16, price: 74.9,
    image: "images/products/glenfiddich-16-year-old-aston-martin.jpg",
    description: "Glenfiddich 16 Year Old - Aston Martin — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-16-year-old-aston-martin", buyLink: "contact"
  },
  {
    id: 189, name: "Glenfiddich 18 Year Old", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 94.90,
    image: "images/products/glenfiddich-18-year-old.jpg",
    description: "18 năm trong thùng Oloroso sherry và sồi Mỹ. Táo nướng, quế và sồi rang — chai quà biếu tầm trung được ưa chuộng bậc nhất.",
    abv: 40, volume: "70cl", slug: "glenfiddich-18-year-old", buyLink: "contact", featured: true
  },
  {
    id: 190, name: "Glenfiddich 18 Year Old - Ancient Reserve Green", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 499.9,
    image: "images/products/glenfiddich-18-year-old-ancient-reserve-green.jpg",
    description: "Glenfiddich 18 Year Old - Ancient Reserve Green — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-ancient-reserve-green", buyLink: "contact"
  },
  {
    id: 191, name: "Glenfiddich 18 Year Old - Ancient Reserve Green - Without Box", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 399.9,
    image: "images/products/glenfiddich-18-year-old-ancient-reserve-green-without-box.jpg",
    description: "Glenfiddich 18 Year Old - Ancient Reserve Green - Without Box — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-ancient-reserve-green-without-box", buyLink: "contact"
  },
  {
    id: 192, name: "Glenfiddich 18 Year Old - Excellence - Box Slightly Damaged", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 474.9,
    image: "images/products/glenfiddich-18-year-old-excellence-box-slightly-damaged.jpg",
    description: "Glenfiddich 18 Year Old - Excellence - Box Slightly Damaged — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-excellence-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 193, name: "Glenfiddich 18 Year Old - Limited Edition", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 94.9,
    image: "images/products/glenfiddich-18-year-old-limited-edition.jpg",
    description: "Glenfiddich 18 Year Old - Limited Edition — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-limited-edition", buyLink: "contact"
  },
  {
    id: 194, name: "Glenfiddich 18 Year Old - Perpetual Collection VAT 04", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 129.9,
    image: "images/products/glenfiddich-18-year-old-perpetual-collection-vat-04.jpg",
    description: "Glenfiddich 18 Year Old - Perpetual Collection VAT 04 — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-perpetual-collection-vat-04", buyLink: "contact"
  },
  {
    id: 195, name: "Glenfiddich 18 Year Old - Pure Malt", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 499.9,
    image: "images/products/glenfiddich-18-year-old-pure-malt.jpg",
    description: "Glenfiddich 18 Year Old - Pure Malt — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-pure-malt", buyLink: "contact"
  },
  {
    id: 196, name: "Glenfiddich 18 Year Old - Superior Reserve - Without Box", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 949.9,
    image: "images/products/glenfiddich-18-year-old-superior-reserve-without-box.jpg",
    description: "Glenfiddich 18 Year Old - Superior Reserve - Without Box — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-superior-reserve-without-box", buyLink: "contact"
  },
  {
    id: 197, name: "Glenfiddich 19 Year Old - Age of Discovery Madeira", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 19, price: 949.9,
    image: "images/products/glenfiddich-19-year-old-age-of-discovery-madeira.jpg",
    description: "Glenfiddich 19 Year Old - Age of Discovery Madeira — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-19-year-old-age-of-discovery-madeira", buyLink: "contact"
  },
  {
    id: 198, name: "Glenfiddich 19 Year Old - Age of Discovery Red Wine", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 19, price: 399.9,
    image: "images/products/glenfiddich-19-year-old-age-of-discovery-red-wine.jpg",
    description: "Glenfiddich 19 Year Old - Age of Discovery Red Wine — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-19-year-old-age-of-discovery-red-wine", buyLink: "contact"
  },
  {
    id: 199, name: "Glenfiddich 19 Year Old - Bourbon Cask", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 19, price: 219.9,
    image: "images/products/glenfiddich-19-year-old-bourbon-cask.jpg",
    description: "Glenfiddich 19 Year Old - Bourbon Cask — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-19-year-old-bourbon-cask", buyLink: "contact"
  },
  {
    id: 200, name: "Glenfiddich 1977 - 39 Year Old - Rare Collection", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 39, price: 3199.9,
    image: "images/products/glenfiddich-1977-39-year-old-rare-collection.jpg",
    description: "Glenfiddich 1977 - 39 Year Old - Rare Collection — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-1977-39-year-old-rare-collection", buyLink: "contact"
  },
  {
    id: 201, name: "Glenfiddich 20 Year Old - Mr Porter", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 20, price: 1399.9,
    image: "images/products/glenfiddich-20-year-old-mr-porter.jpg",
    description: "Glenfiddich 20 Year Old - Mr Porter — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-20-year-old-mr-porter", buyLink: "contact"
  },
  {
    id: 202, name: "Glenfiddich 21 Year Old", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 169.9,
    image: "images/products/glenfiddich-21-year-old.jpg",
    description: "Glenfiddich 21 Year Old — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-21-year-old", buyLink: "contact", featured: true
  },
  {
    id: 203, name: "Glenfiddich 21 Year Old - Caribbean Rum Cask", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 299.9,
    image: "images/products/glenfiddich-21-year-old-caribbean-rum-cask.jpg",
    description: "Glenfiddich 21 Year Old - Caribbean Rum Cask — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-21-year-old-caribbean-rum-cask", buyLink: "contact"
  },
  {
    id: 204, name: "Glenfiddich 21 Year Old - Chinese New Year 2024", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 194.9,
    image: "images/products/glenfiddich-21-year-old-chinese-new-year-2024.jpg",
    description: "Glenfiddich 21 Year Old - Chinese New Year 2024 — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-21-year-old-chinese-new-year-2024", buyLink: "contact"
  },
  {
    id: 205, name: "Glenfiddich 21 Year Old - Old Bottling", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 299.9,
    image: "images/products/glenfiddich-21-year-old-old-bottling.jpg",
    description: "Glenfiddich 21 Year Old - Old Bottling — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-21-year-old-old-bottling", buyLink: "contact"
  },
  {
    id: 206, name: "Glenfiddich 21 Year Old - Wedgwood Decanter - With Box", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 599.9,
    image: "images/products/glenfiddich-21-year-old-wedgwood-decanter-with-box.jpg",
    description: "Glenfiddich 21 Year Old - Wedgwood Decanter - With Box — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-21-year-old-wedgwood-decanter-with-box", buyLink: "contact"
  },
  {
    id: 207, name: "Glenfiddich 21 Year Old - With Personalised Plaque", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 176.9,
    image: "images/products/glenfiddich-21-year-old-with-personalised-plaque.jpg",
    description: "Glenfiddich 21 Year Old - With Personalised Plaque — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-21-year-old-with-personalised-plaque", buyLink: "contact"
  },
  {
    id: 208, name: "Glenfiddich 30 Year Old - Re-Imagination of Time", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 30, price: 959.9,
    image: "images/products/glenfiddich-30-year-old-re-imagination-of-time.jpg",
    description: "Glenfiddich 30 Year Old - Re-Imagination of Time — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-30-year-old-re-imagination-of-time", buyLink: "contact"
  },
  {
    id: 209, name: "Glenfiddich 31 Year Old - Grand Chateau", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 31, price: 1594.9,
    image: "images/products/glenfiddich-31-year-old-grand-chateau.jpg",
    description: "Glenfiddich 31 Year Old - Grand Chateau — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-31-year-old-grand-chateau", buyLink: "contact"
  },
  {
    id: 210, name: "Glenfiddich 40 Year Old - Re-Imagination of Time", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 40, price: 3999.9,
    image: "images/products/glenfiddich-40-year-old-re-imagination-of-time.jpg",
    description: "Glenfiddich 40 Year Old - Re-Imagination of Time — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-40-year-old-re-imagination-of-time", buyLink: "contact"
  },
  {
    id: 211, name: "Glenfiddich 50 Year Old - Re-Imagination of Time", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 50, price: 37999.9,
    image: "images/products/glenfiddich-50-year-old-re-imagination-of-time.jpg",
    description: "Glenfiddich 50 Year Old - Re-Imagination of Time — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-50-year-old-re-imagination-of-time", buyLink: "contact"
  },
  {
    id: 212, name: "Glenfiddich 50 Year Old - Third Release", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 50, price: 44999.99,
    image: "images/products/glenfiddich-50-year-old-third-release.jpg",
    description: "Glenfiddich 50 Year Old - Third Release — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-50-year-old-third-release", buyLink: "contact"
  },
  {
    id: 213, name: "Glenfiddich Centenary 1887-1987 - Limited Edition - 75cl", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 799.9,
    image: "images/products/glenfiddich-centenary-1887-1987-limited-edition-75cl.jpg",
    description: "Glenfiddich Centenary 1887-1987 - Limited Edition - 75cl — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "glenfiddich-centenary-1887-1987-limited-edition-75cl", buyLink: "contact"
  },
  {
    id: 214, name: "Glenfiddich Excellence 26 Year Old", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 26, price: 799.9,
    image: "images/products/glenfiddich-excellence-26-year-old.jpg",
    description: "Glenfiddich Excellence 26 Year Old — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-excellence-26-year-old", buyLink: "contact"
  },
  {
    id: 215, name: "Glenfiddich Experimental Series - Fire &amp; Cane - Without Box", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 40.9,
    image: "images/products/glenfiddich-experimental-series-fire-amp-cane-without-box.jpg",
    description: "Glenfiddich Experimental Series - Fire &amp; Cane - Without Box — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-experimental-series-fire-amp-cane-without-box", buyLink: "contact"
  },
  {
    id: 216, name: "Glenfiddich Experimental Series IPA Cask", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 109.9,
    image: "images/products/glenfiddich-experimental-series-ipa-cask.jpg",
    description: "Glenfiddich Experimental Series IPA Cask — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-experimental-series-ipa-cask", buyLink: "contact"
  },
  {
    id: 217, name: "Glenfiddich Experimental Series Project XX", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 54.9,
    image: "images/products/glenfiddich-experimental-series-project-xx.jpg",
    description: "Glenfiddich Experimental Series Project XX — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-experimental-series-project-xx", buyLink: "contact"
  },
  {
    id: 218, name: "Glenfiddich Grand Couronne - 26 Year Old", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 26, price: 499.9,
    image: "images/products/glenfiddich-grand-couronne-26-year-old.jpg",
    description: "Glenfiddich Grand Couronne - 26 Year Old — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-couronne-26-year-old", buyLink: "contact"
  },
  {
    id: 219, name: "Glenfiddich Grand Couronne - 26 Year Old - With Personalised Engraving", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 26, price: 506.9,
    image: "images/products/glenfiddich-grand-couronne-26-year-old-with-personalised-engraving.jpg",
    description: "Glenfiddich Grand Couronne - 26 Year Old - With Personalised Engraving — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-couronne-26-year-old-with-personalised-engraving", buyLink: "contact"
  },
  {
    id: 220, name: "Glenfiddich Grand Couronne - 26 Year Old - With Personalised Plaque", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 26, price: 506.9,
    image: "images/products/glenfiddich-grand-couronne-26-year-old-with-personalised-plaque.jpg",
    description: "Glenfiddich Grand Couronne - 26 Year Old - With Personalised Plaque — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-couronne-26-year-old-with-personalised-plaque", buyLink: "contact"
  },
  {
    id: 221, name: "Glenfiddich Grand Cru - 23 Year Old", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 23, price: 249.9,
    image: "images/products/glenfiddich-grand-cru-23-year-old.jpg",
    description: "Glenfiddich Grand Cru - 23 Year Old — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-cru-23-year-old", buyLink: "contact"
  },
  {
    id: 222, name: "Glenfiddich Grand Cru - 23 Year Old - 43%", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 23, price: 229.9,
    image: "images/products/glenfiddich-grand-cru-23-year-old-43.jpg",
    description: "Glenfiddich Grand Cru - 23 Year Old - 43% — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-cru-23-year-old-43", buyLink: "contact"
  },
  {
    id: 223, name: "Glenfiddich Grand Cru - 23 Year Old - With Personalised Engraving", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 23, price: 256.9,
    image: "images/products/glenfiddich-grand-cru-23-year-old-with-personalised-engraving.jpg",
    description: "Glenfiddich Grand Cru - 23 Year Old - With Personalised Engraving — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-cru-23-year-old-with-personalised-engraving", buyLink: "contact"
  },
  {
    id: 224, name: "Glenfiddich Grand Cru - 23 Year Old - With Personalised Plaque", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 23, price: 256.9,
    image: "images/products/glenfiddich-grand-cru-23-year-old-with-personalised-plaque.jpg",
    description: "Glenfiddich Grand Cru - 23 Year Old - With Personalised Plaque — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-cru-23-year-old-with-personalised-plaque", buyLink: "contact"
  },
  {
    id: 225, name: "Glenfiddich Grand Yozakura - 29 Year Old", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 29, price: 1500,
    image: "images/products/glenfiddich-grand-yozakura-29-year-old.jpg",
    description: "Glenfiddich Grand Yozakura - 29 Year Old — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-yozakura-29-year-old", buyLink: "contact"
  },
  {
    id: 226, name: "Glenfiddich Grand Yozakura - 29 Year Old - With Personalised Plaque", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 29, price: 1507,
    image: "images/products/glenfiddich-grand-yozakura-29-year-old-with-personalised-plaque.jpg",
    description: "Glenfiddich Grand Yozakura - 29 Year Old - With Personalised Plaque — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-grand-yozakura-29-year-old-with-personalised-plaque", buyLink: "contact"
  },
  {
    id: 227, name: "Glenfiddich High Ball Glass", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 9.9,
    image: "images/products/glenfiddich-high-ball-glass.jpg",
    description: "Glenfiddich High Ball Glass — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-high-ball-glass", buyLink: "contact"
  },
  {
    id: 228, name: "Glenfiddich Malt Master's Edition - Sherry Cask Finish", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 53.9,
    image: "images/products/glenfiddich-malt-master-s-edition-sherry-cask-finish.jpg",
    description: "Glenfiddich Malt Master's Edition - Sherry Cask Finish — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-malt-master-s-edition-sherry-cask-finish", buyLink: "contact"
  },
  {
    id: 229, name: "Glenfiddich Malt Whisky Liqueur", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 399.9,
    image: "images/products/glenfiddich-malt-whisky-liqueur.jpg",
    description: "Glenfiddich Malt Whisky Liqueur — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-malt-whisky-liqueur", buyLink: "contact"
  },
  {
    id: 230, name: "Glenfiddich Malt Whisky Liqueur - 75cl", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 549.9,
    image: "images/products/glenfiddich-malt-whisky-liqueur-75cl.jpg",
    description: "Glenfiddich Malt Whisky Liqueur - 75cl — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "glenfiddich-malt-whisky-liqueur-75cl", buyLink: "contact"
  },
  {
    id: 231, name: "Glenfiddich Orchard - Experimental Series", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 47.9,
    image: "images/products/glenfiddich-orchard-experimental-series.jpg",
    description: "Glenfiddich Orchard - Experimental Series — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-orchard-experimental-series", buyLink: "contact"
  },
  {
    id: 232, name: "Glenfiddich Perpetual Collection Vat 01", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 84.9,
    image: "images/products/glenfiddich-perpetual-collection-vat-01.jpg",
    description: "Glenfiddich Perpetual Collection Vat 01 — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-perpetual-collection-vat-01", buyLink: "contact"
  },
  {
    id: 233, name: "Glenfiddich Perpetual Collection Vat 02", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 79.9,
    image: "images/products/glenfiddich-perpetual-collection-vat-02.jpg",
    description: "Glenfiddich Perpetual Collection Vat 02 — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-perpetual-collection-vat-02", buyLink: "contact"
  },
  {
    id: 234, name: "Glenfiddich Pure Malt - Highland Still Master's Crock", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 199.9,
    image: "images/products/glenfiddich-pure-malt-highland-still-master-s-crock.jpg",
    description: "Glenfiddich Pure Malt - Highland Still Master's Crock — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-pure-malt-highland-still-master-s-crock", buyLink: "contact"
  },
  {
    id: 235, name: "Glenfiddich Reserve Cask - 20cl", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 17.9,
    image: "images/products/glenfiddich-reserve-cask-20cl.jpg",
    description: "Glenfiddich Reserve Cask - 20cl — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "20cl", slug: "glenfiddich-reserve-cask-20cl", buyLink: "contact"
  },
  {
    id: 236, name: "Glenfiddich Snow Phoenix", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 799.9,
    image: "images/products/glenfiddich-snow-phoenix.jpg",
    description: "Glenfiddich Snow Phoenix — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-snow-phoenix", buyLink: "contact"
  },
  {
    id: 237, name: "Glenfiddich The Original - 75cl", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: null, price: 99.9,
    image: "images/products/glenfiddich-the-original-75cl.jpg",
    description: "Glenfiddich The Original - 75cl — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "glenfiddich-the-original-75cl", buyLink: "contact"
  },
  {
    id: 238, name: "Glenfiddich Winter Storm - 21 Year Old - Batch 1", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 599.9,
    image: "images/products/glenfiddich-winter-storm-21-year-old-batch-1.jpg",
    description: "Glenfiddich Winter Storm - 21 Year Old - Batch 1 — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-winter-storm-21-year-old-batch-1", buyLink: "contact"
  },
  {
    id: 239, name: "Glenfiddich Winter Storm - 21 Year Old - Batch 1 - Box Slightly Damaged", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 569.9,
    image: "images/products/glenfiddich-winter-storm-21-year-old-batch-1-box-slightly-damaged.jpg",
    description: "Glenfiddich Winter Storm - 21 Year Old - Batch 1 - Box Slightly Damaged — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-winter-storm-21-year-old-batch-1-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 240, name: "Glenfiddich Winter Storm - 21 Year Old - Batch 2", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 499.9,
    image: "images/products/glenfiddich-winter-storm-21-year-old-batch-2.jpg",
    description: "Glenfiddich Winter Storm - 21 Year Old - Batch 2 — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-winter-storm-21-year-old-batch-2", buyLink: "contact"
  },
  {
    id: 241, name: "Glenfiddich Winter Storm - 21 Year Old - Batch 2 - Box Slightly Damaged", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 21, price: 474.9,
    image: "images/products/glenfiddich-winter-storm-21-year-old-batch-2-box-slightly-damaged.jpg",
    description: "Glenfiddich Winter Storm - 21 Year Old - Batch 2 - Box Slightly Damaged — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-winter-storm-21-year-old-batch-2-box-slightly-damaged", buyLink: "contact"
  },

  /* ---------------- ROYAL SALUTE ---------------- */
  {
    id: 242, name: "Royal Salute", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 129.95,
    image: "images/products/royal-salute.jpg",
    description: "Royal Salute — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute", buyLink: "contact"
  },
  {
    id: 243, name: "Royal Salute 21 Year Old Signature Blend", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 169.99,
    image: "images/products/royal-salute-21-year-old-signature-blend.jpg",
    description: "Blend hoàng gia ra đời năm 1953 mừng lễ đăng quang Nữ hoàng Elizabeth II. Bình sứ thủ công, hương trái cây chín, hoa và sồi ngọt sang trọng.",
    abv: 40, volume: "70cl", slug: "royal-salute-21-year-old-signature-blend", buyLink: "contact", featured: true
  },
  {
    id: 244, name: "Royal Salute Sapphire Signature Blend 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 179.95,
    image: "images/products/royal-salute-sapphire-signature-blend-21-year-old.jpg",
    description: "Royal Salute Sapphire Signature Blend 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-sapphire-signature-blend-21-year-old", buyLink: "contact"
  },
  {
    id: 245, name: "Royal Salute The Miami Polo Edition 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 199.95,
    image: "images/products/royal-salute-the-miami-polo-edition-21-year-old.jpg",
    description: "Royal Salute The Miami Polo Edition 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-the-miami-polo-edition-21-year-old", buyLink: "contact"
  },
  {
    id: 246, name: "Royal Salute 21 Year Old The Miami Polo Edition", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 215,
    image: "images/products/royal-salute-21-year-old-the-miami-polo-edition.jpg",
    description: "Royal Salute 21 Year Old The Miami Polo Edition — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-the-miami-polo-edition", buyLink: "contact"
  },
  {
    id: 247, name: "Royal Salute 2024 Lunar New Year Sapphire Flagon 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 229.95,
    image: "images/products/royal-salute-2024-lunar-new-year-sapphire-flagon-21-year-old.jpg",
    description: "Royal Salute 2024 Lunar New Year Sapphire Flagon 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-2024-lunar-new-year-sapphire-flagon-21-year-old", buyLink: "contact"
  },
  {
    id: 248, name: "Royal Salute The Peated Blend Black Flagon 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 249.95,
    image: "images/products/royal-salute-the-peated-blend-black-flagon-21-year-old.jpg",
    description: "Royal Salute The Peated Blend Black Flagon 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-the-peated-blend-black-flagon-21-year-old", buyLink: "contact"
  },
  {
    id: 249, name: "Royal Salute 2022 Lunar New Year Ruby Flagon 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 249.95,
    image: "images/products/royal-salute-2022-lunar-new-year-ruby-flagon-21-year-old.jpg",
    description: "Royal Salute 2022 Lunar New Year Ruby Flagon 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-2022-lunar-new-year-ruby-flagon-21-year-old", buyLink: "contact"
  },
  {
    id: 250, name: "Royal Salute Richard Quinn Fashion Collection - Daisy Edition 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 249.95,
    image: "images/products/royal-salute-richard-quinn-fashion-collection-daisy-edition-21-year-old.jpg",
    description: "Royal Salute Richard Quinn Fashion Collection - Daisy Edition 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-richard-quinn-fashion-collection-daisy-edition-21-year-old", buyLink: "contact"
  },
  {
    id: 251, name: "Royal Salute 21 Year Old Harris Reed Edition / Gold Flagon", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 250,
    image: "images/products/royal-salute-21-year-old-harris-reed-edition-gold-flagon.jpg",
    description: "Royal Salute 21 Year Old Harris Reed Edition / Gold Flagon — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-harris-reed-edition-gold-flagon", buyLink: "contact"
  },
  {
    id: 252, name: "Royal Salute 21 Year Old Harris Reed Edition / Pink Flagon", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 250,
    image: "images/products/royal-salute-21-year-old-harris-reed-edition-pink-flagon.jpg",
    description: "Royal Salute 21 Year Old Harris Reed Edition / Pink Flagon — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-harris-reed-edition-pink-flagon", buyLink: "contact"
  },
  {
    id: 253, name: "Royal Salute 2022 Lunar New Year Taiwanese Exclusive 23 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 23, price: 299.95,
    image: "images/products/royal-salute-2022-lunar-new-year-taiwanese-exclusive-23-year-old.jpg",
    description: "Royal Salute 2022 Lunar New Year Taiwanese Exclusive 23 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-2022-lunar-new-year-taiwanese-exclusive-23-year-old", buyLink: "contact"
  },
  {
    id: 254, name: "Royal Salute Richard Quinn Fashion Collection - Roses Edition 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 299.95,
    image: "images/products/royal-salute-richard-quinn-fashion-collection-roses-edition-21-year-old.jpg",
    description: "Royal Salute Richard Quinn Fashion Collection - Roses Edition 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-richard-quinn-fashion-collection-roses-edition-21-year-old", buyLink: "contact"
  },
  {
    id: 255, name: "Royal Salute The Jodhpur Polo Edition 21 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 299.95,
    image: "images/products/royal-salute-the-jodhpur-polo-edition-21-year-old.jpg",
    description: "Royal Salute The Jodhpur Polo Edition 21 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-the-jodhpur-polo-edition-21-year-old", buyLink: "contact"
  },
  {
    id: 256, name: "Royal Salute 21 Year Old / Bottled 1970s / Brown Spode Decanter", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 350,
    image: "images/products/royal-salute-21-year-old-bottled-1970s-brown-spode-decanter.jpg",
    description: "Royal Salute 21 Year Old / Bottled 1970s / Brown Spode Decanter — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-bottled-1970s-brown-spode-decanter", buyLink: "contact"
  },
  {
    id: 257, name: "Royal Salute 21 Year Old / Brown Spode Decanter / Bottled 1980s", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 350,
    image: "images/products/royal-salute-21-year-old-brown-spode-decanter-bottled-1980s.jpg",
    description: "Royal Salute 21 Year Old / Brown Spode Decanter / Bottled 1980s — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-brown-spode-decanter-bottled-1980s", buyLink: "contact"
  },
  {
    id: 258, name: "Royal Salute The Hundred Cask Selection - 5th Release", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 474.95,
    image: "images/products/royal-salute-the-hundred-cask-selection-5th-release.jpg",
    description: "Royal Salute The Hundred Cask Selection - 5th Release — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-the-hundred-cask-selection-5th-release", buyLink: "contact"
  },
  {
    id: 259, name: "Royal Salute 32 Year Old Union of the Crowns", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 32, price: 500,
    image: "images/products/royal-salute-32-year-old-union-of-the-crowns.jpg",
    description: "Kỷ niệm sự hợp nhất vương quyền Anh — Scotland năm 1603. Bình decanter khắc nổi tinh xảo, rượu sâu lắng với hương trái cây nhiệt đới và gia vị ấm.",
    abv: 40, volume: "70cl", slug: "royal-salute-32-year-old-union-of-the-crowns", buyLink: "contact", featured: true
  },
  {
    id: 260, name: "Royal Salute 25 Year Old / Royal Wedding Crown Prince of Japan", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 25, price: 2500,
    image: "images/products/royal-salute-25-year-old-royal-wedding-crown-prince-of-japan.jpg",
    description: "Royal Salute 25 Year Old / Royal Wedding Crown Prince of Japan — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-25-year-old-royal-wedding-crown-prince-of-japan", buyLink: "contact"
  },
  {
    id: 261, name: "Royal Salute 62 Gun Salute", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 3899.95,
    image: "images/products/royal-salute-62-gun-salute.jpg",
    description: "Tôn vinh nghi thức 62 phát đại bác hoàng gia tại Tháp London. Blend từ những whisky tối thiểu 40 năm, bình pha lê mạ vàng 24k.",
    abv: 43, volume: "70cl", slug: "royal-salute-62-gun-salute", buyLink: "contact"
  },
  {
    id: 262, name: "Royal Salute House of Quinn by Richard Quinn", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 9500,
    image: "images/products/royal-salute-house-of-quinn-by-richard-quinn.jpg",
    description: "Royal Salute House of Quinn by Richard Quinn — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-house-of-quinn-by-richard-quinn", buyLink: "contact"
  },
  {
    id: 263, name: "Royal Salute Platinum Jubilee / Kent Amethyst Brooch (Purple)", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 14775,
    image: "images/products/royal-salute-platinum-jubilee-kent-amethyst-brooch-purple.jpg",
    description: "Royal Salute Platinum Jubilee / Kent Amethyst Brooch (Purple) — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-platinum-jubilee-kent-amethyst-brooch-purple", buyLink: "contact"
  },
  {
    id: 264, name: "Royal Salute Platinum Jubilee / Queen Adelaide's Brooch (Green)", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 14775,
    image: "images/products/royal-salute-platinum-jubilee-queen-adelaide-s-brooch-green.jpg",
    description: "Royal Salute Platinum Jubilee / Queen Adelaide's Brooch (Green) — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-platinum-jubilee-queen-adelaide-s-brooch-green", buyLink: "contact"
  },
  {
    id: 265, name: "Royal Salute Platinum Jubilee / Teck Corsage Brooch (Blue)", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 14775,
    image: "images/products/royal-salute-platinum-jubilee-teck-corsage-brooch-blue.jpg",
    description: "Royal Salute Platinum Jubilee / Teck Corsage Brooch (Blue) — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-platinum-jubilee-teck-corsage-brooch-blue", buyLink: "contact"
  },
  {
    id: 266, name: "Royal Salute Platinum Jubilee / Pearl &amp; Diamond Brooch (Pink)", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 14775,
    image: "images/products/royal-salute-platinum-jubilee-pearl-amp-diamond-brooch-pink.jpg",
    description: "Royal Salute Platinum Jubilee / Pearl &amp; Diamond Brooch (Pink) — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-platinum-jubilee-pearl-amp-diamond-brooch-pink", buyLink: "contact"
  },
  {
    id: 267, name: "Royal Salute Platinum Jubilee / Richmond Brooch (Yellow)", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 14775,
    image: "images/products/royal-salute-platinum-jubilee-richmond-brooch-yellow.jpg",
    description: "Royal Salute Platinum Jubilee / Richmond Brooch (Yellow) — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-platinum-jubilee-richmond-brooch-yellow", buyLink: "contact"
  },
  {
    id: 268, name: "Royal Salute Platinum Jubilee / Queen Mary Brooch (Teal)", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 14775,
    image: "images/products/royal-salute-platinum-jubilee-queen-mary-brooch-teal.jpg",
    description: "Royal Salute Platinum Jubilee / Queen Mary Brooch (Teal) — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-platinum-jubilee-queen-mary-brooch-teal", buyLink: "contact"
  },
  {
    id: 269, name: "Royal Salute The Coronation of King Charles III Edition", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: 20000,
    image: "images/products/royal-salute-the-coronation-of-king-charles-iii-edition.jpg",
    description: "Royal Salute The Coronation of King Charles III Edition — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-the-coronation-of-king-charles-iii-edition", buyLink: "contact"
  },
  {
    id: 270, name: "Royal Salute 52 Year Old / Time Series", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 52, price: 24000,
    image: "images/products/royal-salute-52-year-old-time-series.jpg",
    description: "Royal Salute 52 Year Old / Time Series — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-52-year-old-time-series", buyLink: "contact"
  },
  {
    id: 271, name: "Royal Salute 50 Year Old / Coronation Cask", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 50, price: 25000,
    image: "images/products/royal-salute-50-year-old-coronation-cask.jpg",
    description: "Royal Salute 50 Year Old / Coronation Cask — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-50-year-old-coronation-cask", buyLink: "contact"
  },

  /* ---------------- BALVENIE ---------------- */
  {
    id: 272, name: "Balvenie 12 Year Old - DoubleWood", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 49.9,
    image: "images/products/balvenie-12-year-old-doublewood.jpg",
    description: "Ủ thùng bourbon rồi chuyển sang thùng sherry Âu — mật ong, vani và hương sherry ngọt dịu. Chai nhập môn kinh điển của Balvenie.",
    abv: 40, volume: "70cl", slug: "balvenie-12-year-old-doublewood", buyLink: "contact", featured: true
  },
  {
    id: 273, name: "Balvenie 12 Year Old - DoubleWood - 5cl Miniature", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 5.9,
    image: "images/products/balvenie-12-year-old-doublewood-5cl-miniature.jpg",
    description: "Balvenie 12 Year Old - DoubleWood - 5cl Miniature — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "5cl", slug: "balvenie-12-year-old-doublewood-5cl-miniature", buyLink: "contact"
  },
  {
    id: 274, name: "Balvenie 12 Year Old - Golden Cask", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 74.9,
    image: "images/products/balvenie-12-year-old-golden-cask.jpg",
    description: "Balvenie 12 Year Old - Golden Cask — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-12-year-old-golden-cask", buyLink: "contact"
  },
  {
    id: 275, name: "Balvenie 12 Year Old - Single Barrel First Fill", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 94.9,
    image: "images/products/balvenie-12-year-old-single-barrel-first-fill.jpg",
    description: "Balvenie 12 Year Old - Single Barrel First Fill — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-12-year-old-single-barrel-first-fill", buyLink: "contact"
  },
  {
    id: 276, name: "Balvenie 12 Year Old - The Sweet Toast of American Oak", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 54.9,
    image: "images/products/balvenie-12-year-old-the-sweet-toast-of-american-oak.jpg",
    description: "Balvenie 12 Year Old - The Sweet Toast of American Oak — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-12-year-old-the-sweet-toast-of-american-oak", buyLink: "contact"
  },
  {
    id: 277, name: "Balvenie 12 Year Old Classic - Bot.1980s", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 749.9,
    image: "images/products/balvenie-12-year-old-classic-bot-1980s.jpg",
    description: "Balvenie 12 Year Old Classic - Bot.1980s — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-12-year-old-classic-bot-1980s", buyLink: "contact"
  },
  {
    id: 278, name: "Balvenie 12 Year Old DoubleWood - Glass Gift Pack", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 64.9,
    image: "images/products/balvenie-12-year-old-doublewood-glass-gift-pack.jpg",
    description: "Balvenie 12 Year Old DoubleWood - Glass Gift Pack — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-12-year-old-doublewood-glass-gift-pack", buyLink: "contact"
  },
  {
    id: 279, name: "Balvenie 14 Year Old - Bourbon Barrel - A Collection Of Curious Casks", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 14, price: 86.9,
    image: "images/products/balvenie-14-year-old-bourbon-barrel-a-collection-of-curious-casks.jpg",
    description: "Balvenie 14 Year Old - Bourbon Barrel - A Collection Of Curious Casks — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-14-year-old-bourbon-barrel-a-collection-of-curious-casks", buyLink: "contact"
  },
  {
    id: 280, name: "Balvenie 14 Year Old - Caribbean Cask", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 14, price: 69.9,
    image: "images/products/balvenie-14-year-old-caribbean-cask.jpg",
    description: "Finish trong thùng rum Caribbean — dứa nướng, kem vani và đường nâu. Ngọt ngào nhiệt đới trên nền malt Speyside mềm mại.",
    abv: 43, volume: "70cl", slug: "balvenie-14-year-old-caribbean-cask", buyLink: "contact"
  },
  {
    id: 281, name: "Balvenie 14 Year Old - The Week of Peat", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 14, price: 85.9,
    image: "images/products/balvenie-14-year-old-the-week-of-peat.jpg",
    description: "Balvenie 14 Year Old - The Week of Peat — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-14-year-old-the-week-of-peat", buyLink: "contact"
  },
  {
    id: 282, name: "Balvenie 14 Year Old Caribbean Cask - 2 Glass Gift Pack", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 14, price: 89.9,
    image: "images/products/balvenie-14-year-old-caribbean-cask-2-glass-gift-pack.jpg",
    description: "Balvenie 14 Year Old Caribbean Cask - 2 Glass Gift Pack — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-14-year-old-caribbean-cask-2-glass-gift-pack", buyLink: "contact"
  },
  {
    id: 283, name: "Balvenie 15 Year Old - Madeira Cask", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 15, price: 129.9,
    image: "images/products/balvenie-15-year-old-madeira-cask.jpg",
    description: "Balvenie 15 Year Old - Madeira Cask — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-15-year-old-madeira-cask", buyLink: "contact"
  },
  {
    id: 284, name: "Balvenie 16 Year Old - French Oak Pineau Cask", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 16, price: 144.9,
    image: "images/products/balvenie-16-year-old-french-oak-pineau-cask.jpg",
    description: "Balvenie 16 Year Old - French Oak Pineau Cask — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-16-year-old-french-oak-pineau-cask", buyLink: "contact"
  },
  {
    id: 285, name: "Balvenie 17 Year Old - Madeira Cask", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 17, price: 499.9,
    image: "images/products/balvenie-17-year-old-madeira-cask.jpg",
    description: "Balvenie 17 Year Old - Madeira Cask — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-17-year-old-madeira-cask", buyLink: "contact"
  },
  {
    id: 286, name: "Balvenie 18 Year Old - French Pineau Cask - A Collection Of Curious Casks", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 18, price: 291.9,
    image: "images/products/balvenie-18-year-old-french-pineau-cask-a-collection-of-curious-casks.jpg",
    description: "Balvenie 18 Year Old - French Pineau Cask - A Collection Of Curious Casks — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-18-year-old-french-pineau-cask-a-collection-of-curious-casks", buyLink: "contact"
  },
  {
    id: 287, name: "Balvenie 18 Year Old - Pedro Ximenez Cask", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 18, price: 299.9,
    image: "images/products/balvenie-18-year-old-pedro-ximenez-cask.jpg",
    description: "Balvenie 18 Year Old - Pedro Ximenez Cask — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-18-year-old-pedro-ximenez-cask", buyLink: "contact"
  },
  {
    id: 288, name: "Balvenie 19 Year Old - Cask And Character", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 19, price: 319.9,
    image: "images/products/balvenie-19-year-old-cask-and-character.jpg",
    description: "Balvenie 19 Year Old - Cask And Character — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-19-year-old-cask-and-character", buyLink: "contact"
  },
  {
    id: 289, name: "Balvenie 1976 - 31 Year Old - Cask #6570", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 31, price: 3999.9,
    image: "images/products/balvenie-1976-31-year-old-cask-6570.jpg",
    description: "Balvenie 1976 - 31 Year Old - Cask #6570 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-1976-31-year-old-cask-6570", buyLink: "contact"
  },
  {
    id: 290, name: "Balvenie 1991 - Port Wood Finish", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 399.9,
    image: "images/products/balvenie-1991-port-wood-finish.jpg",
    description: "Balvenie 1991 - Port Wood Finish — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-1991-port-wood-finish", buyLink: "contact"
  },
  {
    id: 291, name: "Balvenie 21 Year Old - PortWood", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 21, price: 234.9,
    image: "images/products/balvenie-21-year-old-portwood.jpg",
    description: "Finish trong thùng port 30 năm tuổi. Mâm xôi chín, mật ong rừng và hạnh nhân — chai 21 năm được giới sành whisky ca ngợi nhiều thập kỷ.",
    abv: 40, volume: "70cl", slug: "balvenie-21-year-old-portwood", buyLink: "contact", featured: true
  },
  {
    id: 292, name: "Balvenie 21 Year Old - PortWood - Old Bottling", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 21, price: 399.9,
    image: "images/products/balvenie-21-year-old-portwood-old-bottling.jpg",
    description: "Balvenie 21 Year Old - PortWood - Old Bottling — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-21-year-old-portwood-old-bottling", buyLink: "contact"
  },
  {
    id: 293, name: "Balvenie 21 Year Old - The Second Red Rose", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 21, price: 349.9,
    image: "images/products/balvenie-21-year-old-the-second-red-rose.jpg",
    description: "Balvenie 21 Year Old - The Second Red Rose — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-21-year-old-the-second-red-rose", buyLink: "contact"
  },
  {
    id: 294, name: "Balvenie 25 Year Old - Rare Marriages", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 25, price: 639.9,
    image: "images/products/balvenie-25-year-old-rare-marriages.jpg",
    description: "Balvenie 25 Year Old - Rare Marriages — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-25-year-old-rare-marriages", buyLink: "contact"
  },
  {
    id: 295, name: "Balvenie 27 Year Old - The Distant Shores", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 27, price: 1249.9,
    image: "images/products/balvenie-27-year-old-the-distant-shores.jpg",
    description: "Balvenie 27 Year Old - The Distant Shores — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-27-year-old-the-distant-shores", buyLink: "contact"
  },
  {
    id: 296, name: "Balvenie 30 Year Old - Rare Marriages", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 30, price: 3499.9,
    image: "images/products/balvenie-30-year-old-rare-marriages.jpg",
    description: "Balvenie 30 Year Old - Rare Marriages — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-30-year-old-rare-marriages", buyLink: "contact"
  },
  {
    id: 297, name: "Balvenie 40 Year Old - Rare Marriages", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 40, price: 6999.9,
    image: "images/products/balvenie-40-year-old-rare-marriages.jpg",
    description: "Balvenie 40 Year Old - Rare Marriages — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-40-year-old-rare-marriages", buyLink: "contact"
  },
  {
    id: 298, name: "Balvenie 50 Year Old - Batch 3 - Marriage 0614", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 50, price: 36999.9,
    image: "images/products/balvenie-50-year-old-batch-3-marriage-0614.jpg",
    description: "Balvenie 50 Year Old - Batch 3 - Marriage 0614 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-50-year-old-batch-3-marriage-0614", buyLink: "contact"
  },
  {
    id: 299, name: "Balvenie The Creation of a Classic", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 69.9,
    image: "images/products/balvenie-the-creation-of-a-classic.jpg",
    description: "Balvenie The Creation of a Classic — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-the-creation-of-a-classic", buyLink: "contact"
  },
  {
    id: 300, name: "Balvenie Tumbler", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 9.9,
    image: "images/products/balvenie-tumbler.jpg",
    description: "Balvenie Tumbler — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tumbler", buyLink: "contact"
  },
  {
    id: 301, name: "Balvenie Tun 1401 - Batch 2", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 1999.9,
    image: "images/products/balvenie-tun-1401-batch-2.jpg",
    description: "Balvenie Tun 1401 - Batch 2 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tun-1401-batch-2", buyLink: "contact"
  },
  {
    id: 302, name: "Balvenie Tun 1401 - Batch 4", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 1899.9,
    image: "images/products/balvenie-tun-1401-batch-4.jpg",
    description: "Balvenie Tun 1401 - Batch 4 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tun-1401-batch-4", buyLink: "contact"
  },
  {
    id: 303, name: "Balvenie Tun 1509 - Batch 1", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 999.9,
    image: "images/products/balvenie-tun-1509-batch-1.jpg",
    description: "Balvenie Tun 1509 - Batch 1 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tun-1509-batch-1", buyLink: "contact"
  },
  {
    id: 304, name: "Balvenie Tun 1509 - Batch 1 - 75cl", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 999.9,
    image: "images/products/balvenie-tun-1509-batch-1-75cl.jpg",
    description: "Balvenie Tun 1509 - Batch 1 - 75cl — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "75cl", slug: "balvenie-tun-1509-batch-1-75cl", buyLink: "contact"
  },
  {
    id: 305, name: "Balvenie Tun 1509 - Batch 2", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: 699.9,
    image: "images/products/balvenie-tun-1509-batch-2.jpg",
    description: "Balvenie Tun 1509 - Batch 2 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tun-1509-batch-2", buyLink: "contact"
  },
  /* ---- BALVENIE — bổ sung từ thewhiskyworld.com (07/2026) ---- */
  {
    id: 306, name: "Balvenie 12 Year Old - DoubleWood - 20cl", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: 20.9, /* cập nhật 07/2026 (giá cũ 17.9) */
    image: "images/products/balvenie-12-year-old-doublewood-20cl.jpg",
    description: "Balvenie 12 Year Old - DoubleWood - 20cl — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "20cl", slug: "balvenie-12-year-old-doublewood-20cl", buyLink: "contact"
  },
  {
    id: 307, name: "Balvenie 12 Year Old Double Wood - 25th Anniversary Edition", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 12, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/balvenie-12-year-old-double-wood-25th-anniversary-edition.jpg",
    description: "Balvenie 12 Year Old Double Wood - 25th Anniversary Edition — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-12-year-old-double-wood-25th-anniversary-edition", buyLink: "contact"
  },
  {
    id: 308, name: "Balvenie 15 Year Old - Single Barrel - Old Bottling - 5cl Miniature", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 15, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/balvenie-15-year-old-single-barrel-old-bottling-5cl-miniature.jpg",
    description: "Balvenie 15 Year Old - Single Barrel - Old Bottling - 5cl Miniature — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "5cl", slug: "balvenie-15-year-old-single-barrel-old-bottling-5cl-miniature", buyLink: "contact"
  },
  {
    id: 309, name: "Balvenie 17 year Old - Week of Peat", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 17, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/balvenie-17-year-old-week-of-peat.jpg",
    description: "Balvenie 17 year Old - Week of Peat — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-17-year-old-week-of-peat", buyLink: "contact"
  },
  {
    id: 310, name: "Balvenie 19 Year Old - Week of Peat", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 19, price: 299.9,
    image: "images/products/balvenie-19-year-old-week-of-peat.jpg",
    description: "Balvenie 19 Year Old - Week of Peat — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-19-year-old-week-of-peat", buyLink: "contact"
  },
  {
    id: 311, name: "Balvenie 30 Year Old - Old Bottling - Box Slightly Damaged", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: 30, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/balvenie-30-year-old-old-bottling-box-slightly-damaged.jpg",
    description: "Balvenie 30 Year Old - Old Bottling - Box Slightly Damaged — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-30-year-old-old-bottling-box-slightly-damaged", buyLink: "contact"
  },
  {
    id: 312, name: "Balvenie Tun 1509 - Batch 5", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/balvenie-tun-1509-batch-5.jpg",
    description: "Balvenie Tun 1509 - Batch 5 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tun-1509-batch-5", buyLink: "contact"
  },
  {
    id: 313, name: "Balvenie Tun 1509 - Batch 6", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/balvenie-tun-1509-batch-6.jpg",
    description: "Balvenie Tun 1509 - Batch 6 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tun-1509-batch-6", buyLink: "contact"
  },
  {
    id: 314, name: "Balvenie Tun 1509 - Batch 7", brand: "Balvenie", category: "balvenie",
    type: "Single Malt", age: null, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/balvenie-tun-1509-batch-7.jpg",
    description: "Balvenie Tun 1509 - Batch 7 — Balvenie chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "balvenie-tun-1509-batch-7", buyLink: "contact"
  },
  /* ---- DALMORE — bổ sung từ thewhiskyworld.com (07/2026) ---- */
  {
    id: 315, name: "Dalmore 12 Year Old - Gift Tin", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 12, price: 64.9,
    image: "images/products/dalmore-12-year-old-gift-tin.jpg",
    description: "Dalmore 12 Year Old - Gift Tin — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-12-year-old-gift-tin", buyLink: "contact"
  },
  {
    id: 316, name: "Dalmore 12 Year Old - Gift Tin - With Personalised Engraving", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 12, price: 71.9,
    image: "images/products/dalmore-12-year-old-gift-tin-with-personalised-engraving.jpg",
    description: "Dalmore 12 Year Old - Gift Tin - With Personalised Engraving — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-12-year-old-gift-tin-with-personalised-engraving", buyLink: "contact"
  },
  {
    id: 317, name: "Dalmore 14 Year Old - Oloroso Cask Finish - Darkness", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 14, price: 149.9, /* cập nhật 07/2026 (giá cũ 128.9) */
    image: "images/products/dalmore-14-year-old-oloroso-cask-finish-darkness.jpg",
    description: "Dalmore 14 Year Old - Oloroso Cask Finish - Darkness — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "50cl", slug: "dalmore-14-year-old-oloroso-cask-finish-darkness", buyLink: "contact"
  },
  {
    id: 318, name: "Dalmore 15 Year Old - Pedestal Tin", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 15, price: 109.9,
    image: "images/products/dalmore-15-year-old-pedestal-tin.jpg",
    description: "Dalmore 15 Year Old - Pedestal Tin — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-15-year-old-pedestal-tin", buyLink: "contact"
  },
  {
    id: 319, name: "Dalmore 15 Year Old - Pedestal Tin - With Personalised Engraving", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 15, price: 116.9,
    image: "images/products/dalmore-15-year-old-pedestal-tin-with-personalised-engraving.jpg",
    description: "Dalmore 15 Year Old - Pedestal Tin - With Personalised Engraving — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-15-year-old-pedestal-tin-with-personalised-engraving", buyLink: "contact"
  },
  {
    id: 320, name: "Dalmore 1990 - 27 Year Old - Cask 252 - Mackillop's Choice", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 27, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/dalmore-1990-27-year-old-cask-252-mackillops-choice.jpg",
    description: "Dalmore 1990 - 27 Year Old - Cask 252 - Mackillop's Choice — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-1990-27-year-old-cask-252-mackillops-choice", buyLink: "contact"
  },
  {
    id: 321, name: "Dalmore 2007 - Vintage Collection", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 149.9,
    image: "images/products/dalmore-2007-vintage-collection.jpg",
    description: "Dalmore 2007 - Vintage Collection — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-2007-vintage-collection", buyLink: "contact"
  },
  {
    id: 322, name: "Dalmore 21 Year Old - 2022 Release", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: 21, price: 574.9,
    image: "images/products/dalmore-21-year-old-2022-release.jpg",
    description: "Dalmore 21 Year Old - 2022 Release — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-21-year-old-2022-release", buyLink: "contact"
  },
  {
    id: 323, name: "Dalmore Port Wood Reserve - 2 Glass Gift Pack", brand: "Dalmore", category: "dalmore",
    type: "Single Malt", age: null, price: 79.9,
    image: "images/products/dalmore-port-wood-reserve-2-glass-gift-pack.jpg",
    description: "Dalmore Port Wood Reserve - 2 Glass Gift Pack — Dalmore chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "dalmore-port-wood-reserve-2-glass-gift-pack", buyLink: "contact"
  },
  /* ---- GLENFIDDICH — bổ sung từ thewhiskyworld.com (07/2026) ---- */
  {
    id: 324, name: "Glenfiddich 12 Year Old - 5cl Miniature - Without Box", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 12, price: 4.49,
    image: "images/products/glenfiddich-12-year-old-5cl-miniature-without-box.jpg",
    description: "Glenfiddich 12 Year Old - 5cl Miniature - Without Box — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "5cl", slug: "glenfiddich-12-year-old-5cl-miniature-without-box", buyLink: "contact"
  },
  {
    id: 325, name: "Glenfiddich 14 Year Old - Rich Oak", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 14, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/glenfiddich-14-year-old-rich-oak.jpg",
    description: "Glenfiddich 14 Year Old - Rich Oak — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-14-year-old-rich-oak", buyLink: "contact"
  },
  {
    id: 326, name: "Glenfiddich 14 Year Old Rich Oak - Gift Box", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 14, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/glenfiddich-14-year-old-rich-oak-gift-box.jpg",
    description: "Glenfiddich 14 Year Old Rich Oak - Gift Box — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-14-year-old-rich-oak-gift-box", buyLink: "contact"
  },
  {
    id: 327, name: "Glenfiddich 15 Year Old - 2 Glasses Gift Pack", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 15, price: 54.9,
    image: "images/products/glenfiddich-15-year-old-2-glasses-gift-pack.jpg",
    description: "Glenfiddich 15 Year Old - 2 Glasses Gift Pack — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-15-year-old-2-glasses-gift-pack", buyLink: "contact"
  },
  {
    id: 328, name: "Glenfiddich 15 Year Old - Hip Flask Gift Pack", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 15, price: 79.9,
    image: "images/products/glenfiddich-15-year-old-hip-flask-gift-pack.jpg",
    description: "Glenfiddich 15 Year Old - Hip Flask Gift Pack — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-15-year-old-hip-flask-gift-pack", buyLink: "contact"
  },
  {
    id: 329, name: "Glenfiddich 18 Year Old - 20cl", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 29.9,
    image: "images/products/glenfiddich-18-year-old-20cl.jpg",
    description: "Glenfiddich 18 Year Old - 20cl — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "20cl", slug: "glenfiddich-18-year-old-20cl", buyLink: "contact"
  },
  {
    id: 330, name: "Glenfiddich 18 Year Old - Ancient Reserve Black - Damaged Box", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/glenfiddich-18-year-old-ancient-reserve-black-damaged-box.jpg",
    description: "Glenfiddich 18 Year Old - Ancient Reserve Black - Damaged Box — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-ancient-reserve-black-damaged-box", buyLink: "contact"
  },
  {
    id: 331, name: "Glenfiddich 18 Year Old - Ancient Reserve Blue", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/glenfiddich-18-year-old-ancient-reserve-blue.jpg",
    description: "Glenfiddich 18 Year Old - Ancient Reserve Blue — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-ancient-reserve-blue", buyLink: "contact"
  },
  {
    id: 332, name: "Glenfiddich 18 Year Old - Excellence", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/glenfiddich-18-year-old-excellence.jpg",
    description: "Glenfiddich 18 Year Old - Excellence — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-excellence", buyLink: "contact"
  },
  {
    id: 333, name: "Glenfiddich 18 Year Old - Hip Flask Gift Pack", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: 103.9,
    image: "images/products/glenfiddich-18-year-old-hip-flask-gift-pack.jpg",
    description: "Glenfiddich 18 Year Old - Hip Flask Gift Pack — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-hip-flask-gift-pack", buyLink: "contact"
  },
  {
    id: 334, name: "Glenfiddich 18 Year Old - Superior Reserve", brand: "Glenfiddich", category: "glenfiddich",
    type: "Single Malt", age: 18, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/glenfiddich-18-year-old-superior-reserve.jpg",
    description: "Glenfiddich 18 Year Old - Superior Reserve — Glenfiddich chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "glenfiddich-18-year-old-superior-reserve", buyLink: "contact"
  },
  /* ---- MACALLAN — bổ sung từ thewhiskyworld.com (07/2026) ---- */
  {
    id: 335, name: "Macallan 12 Year Old - Double Cask", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 12, price: 74.9,
    image: "images/products/macallan-12-year-old-double-cask.jpg",
    description: "Macallan 12 Year Old - Double Cask — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-12-year-old-double-cask", buyLink: "contact"
  },
  {
    id: 336, name: "Macallan 12 Year Old - Double Cask - With Personalised Engraving", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 12, price: 81.4,
    image: "images/products/macallan-12-year-old-double-cask-with-personalised-engraving.jpg",
    description: "Macallan 12 Year Old - Double Cask - With Personalised Engraving — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-12-year-old-double-cask-with-personalised-engraving", buyLink: "contact"
  },
  {
    id: 337, name: "Macallan 12 Year Old - Sherry Oak", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 12, price: 84.9,
    image: "images/products/macallan-12-year-old-sherry-oak.jpg",
    description: "Macallan 12 Year Old - Sherry Oak — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-12-year-old-sherry-oak", buyLink: "contact"
  },
  {
    id: 338, name: "Macallan 18 Year Old - Double Cask - 2023 Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: 18, price: 309.9,
    image: "images/products/macallan-18-year-old-double-cask-2023-release.jpg",
    description: "Macallan 18 Year Old - Double Cask - 2023 Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-18-year-old-double-cask-2023-release", buyLink: "contact"
  },
  {
    id: 339, name: "Macallan 1824 Decanter - MMXII Release", brand: "Macallan", category: "macallan",
    type: "Single Malt", age: null, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/macallan-1824-decanter-mmxii-release.jpg",
    description: "Macallan 1824 Decanter - MMXII Release — Macallan chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "macallan-1824-decanter-mmxii-release", buyLink: "contact"
  },
  /* ---- ROYAL SALUTE — bổ sung từ thewhiskyworld.com (07/2026) ---- */
  {
    id: 340, name: "Royal Salute 21 Year Old - Blue Decanter", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 164.9, /* cập nhật 07/2026 (giá cũ 119.9) */
    image: "images/products/royal-salute-21-year-old-blue-decanter.jpg",
    description: "Royal Salute 21 Year Old - Blue Decanter — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-blue-decanter", buyLink: "contact"
  },
  {
    id: 341, name: "Royal Salute 21 Year Old - Jodhpur Edition", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 161.9,
    image: "images/products/royal-salute-21-year-old-jodhpur-edition.jpg",
    description: "Royal Salute 21 Year Old - Jodhpur Edition — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-jodhpur-edition", buyLink: "contact"
  },
  {
    id: 342, name: "Royal Salute 21 Year Old - Peated Blend", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 21, price: 159.9,
    image: "images/products/royal-salute-21-year-old-peated-blend.jpg",
    description: "Royal Salute 21 Year Old - Peated Blend — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-21-year-old-peated-blend", buyLink: "contact"
  },
  {
    id: 343, name: "Royal Salute 23 Year Old - Taiwanese Exclusive", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 23, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/royal-salute-23-year-old-taiwanese-exclusive.jpg",
    description: "Royal Salute 23 Year Old - Taiwanese Exclusive — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-23-year-old-taiwanese-exclusive", buyLink: "contact"
  },
  {
    id: 344, name: "Royal Salute 25 Year Old", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 25, price: 199.9, /* cập nhật 07/2026 (giá cũ 269.9) */
    image: "images/products/royal-salute-25-year-old.jpg",
    description: "Royal Salute 25 Year Old — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-25-year-old", buyLink: "contact"
  },
  {
    id: 345, name: "Royal Salute 29 Year Old - PX Sherry Cask Finish", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: 29, price: 549.9,
    image: "images/products/royal-salute-29-year-old-px-sherry-cask-finish.jpg",
    description: "Royal Salute 29 Year Old - PX Sherry Cask Finish — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-29-year-old-px-sherry-cask-finish", buyLink: "contact"
  },
  {
    id: 346, name: "Royal Salute Diamond Tribute", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/royal-salute-diamond-tribute.jpg",
    description: "Royal Salute Diamond Tribute — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-diamond-tribute", buyLink: "contact"
  },
  {
    id: 347, name: "Royal Salute Platinum Jubilee Edition - The Cullinan V Brooch", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/royal-salute-platinum-jubilee-edition-the-cullinan-v-brooch.jpg",
    description: "Royal Salute Platinum Jubilee Edition - The Cullinan V Brooch — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-platinum-jubilee-edition-the-cullinan-v-brooch", buyLink: "contact"
  },
  {
    id: 348, name: "Royal Salute The Royal Wedding Edition", brand: "Royal Salute", category: "royal-salute",
    type: "Blended", age: null, price: null, /* hàng sưu tầm — liên hệ báo giá */
    image: "images/products/royal-salute-the-royal-wedding-edition.jpg",
    description: "Royal Salute The Royal Wedding Edition — Royal Salute chính hãng, nguyên seal, có hoá đơn từ Anh Quốc. Liên hệ Tuấn Whisky để được tư vấn chi tiết về hương vị, năm sản xuất và tình trạng hộp/chai trước khi đặt hàng.",
    abv: null, volume: "70cl", slug: "royal-salute-the-royal-wedding-edition", buyLink: "contact"
  },

];
