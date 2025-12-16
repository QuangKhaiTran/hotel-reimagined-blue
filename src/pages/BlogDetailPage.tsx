import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Clock, Share2, Facebook, Twitter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import poolImage from "@/assets/pool.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import lobbyImage from "@/assets/lobby.jpg";
import heroImage from "@/assets/hero-hotel.jpg";

const blogData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}> = {
  "kham-pha-can-tho": {
    title: "Khám Phá Cần Thơ - Điểm Đến Không Thể Bỏ Lỡ",
    excerpt: "Cần Thơ - thành phố miền sông nước với nhiều địa điểm du lịch hấp dẫn, ẩm thực phong phú và con người thân thiện...",
    content: `
      <p>Cần Thơ là thành phố lớn nhất vùng Đồng bằng sông Cửu Long, được mệnh danh là "Tây Đô" của miền Tây Nam Bộ. Với vị trí địa lý thuận lợi, văn hóa đa dạng và ẩm thực phong phú, Cần Thơ là điểm đến lý tưởng cho những ai muốn khám phá vẻ đẹp của miền sông nước.</p>

      <h2>Chợ Nổi Cái Răng</h2>
      <p>Chợ nổi Cái Răng là biểu tượng du lịch nổi tiếng nhất của Cần Thơ. Nơi đây hoạt động từ rất sớm, khoảng 4-5 giờ sáng và kéo dài đến khoảng 9 giờ. Du khách có thể thuê ghe máy để tham quan chợ, trải nghiệm không khí mua bán nhộn nhịp trên sông và thưởng thức các món ăn địa phương.</p>

      <h2>Bến Ninh Kiều</h2>
      <p>Bến Ninh Kiều nằm bên bờ sông Hậu, là một trong những địa điểm du lịch nổi tiếng nhất Cần Thơ. Nơi đây đẹp nhất vào buổi tối khi ánh đèn lung linh phản chiếu trên mặt sông, tạo nên khung cảnh lãng mạn và thơ mộng.</p>

      <h2>Ẩm Thực Cần Thơ</h2>
      <p>Đến Cần Thơ, bạn không thể bỏ qua các món ăn đặc trưng như:</p>
      <ul>
        <li>Bánh xèo miền Tây</li>
        <li>Bún riêu cua đồng</li>
        <li>Lẩu mắm</li>
        <li>Bánh tằm bì</li>
        <li>Nem nướng</li>
      </ul>

      <h2>Lưu Trú Tại Y Hotel</h2>
      <p>Khi đến Cần Thơ, Y Hotel là lựa chọn lý tưởng cho kỳ nghỉ của bạn. Với vị trí trung tâm, tiện nghi cao cấp và dịch vụ 5 sao, chúng tôi cam kết mang đến trải nghiệm lưu trú tuyệt vời nhất.</p>
    `,
    image: poolImage,
    date: "15/12/2025",
    readTime: "5 phút",
    category: "Du Lịch",
    author: "Y Hotel",
  },
  "am-thuc-mien-tay": {
    title: "Ẩm Thực Miền Tây Tại Y Hotel",
    excerpt: "Trải nghiệm những món ăn đặc sản miền Tây ngay tại nhà hàng của chúng tôi với đầu bếp chuyên nghiệp...",
    content: `
      <p>Nhà hàng Y Hotel tự hào mang đến cho quý khách những món ăn đặc trưng nhất của vùng sông nước miền Tây Nam Bộ. Với đội ngũ đầu bếp giàu kinh nghiệm và nguyên liệu tươi ngon mỗi ngày, chúng tôi cam kết mang đến những trải nghiệm ẩm thực đáng nhớ.</p>

      <h2>Menu Đặc Sản</h2>
      <p>Thực đơn của chúng tôi bao gồm hơn 50 món ăn đa dạng từ các món Á đến Âu, trong đó có những đặc sản miền Tây không thể bỏ qua:</p>
      
      <h3>Lẩu Mắm Cá Linh</h3>
      <p>Món lẩu đặc trưng với nước mắm cá linh thơm nức, ăn kèm với các loại rau đồng quê tươi ngon.</p>

      <h3>Cá Lóc Nướng Trui</h3>
      <p>Cá lóc được nướng theo phương pháp truyền thống, giữ nguyên vị ngọt tự nhiên của cá.</p>

      <h3>Bánh Xèo Miền Tây</h3>
      <p>Bánh xèo giòn rụm với nhân tôm, thịt, giá đỗ, cuốn cùng rau sống và nước mắm chua ngọt.</p>

      <h2>Không Gian Nhà Hàng</h2>
      <p>Nhà hàng được thiết kế với không gian sang trọng nhưng ấm cúng, có thể phục vụ từ bữa ăn gia đình đến các sự kiện quan trọng.</p>
    `,
    image: restaurantImage,
    date: "12/12/2025",
    readTime: "3 phút",
    category: "Ẩm Thực",
    author: "Y Hotel",
  },
  "trai-nghiem-5-sao": {
    title: "Trải Nghiệm Dịch Vụ 5 Sao Tại Y Hotel",
    excerpt: "Y Hotel cam kết mang đến dịch vụ đẳng cấp quốc tế với đội ngũ nhân viên chuyên nghiệp và tận tâm...",
    content: `
      <p>Với tiêu chuẩn 5 sao quốc tế, Y Hotel không ngừng nâng cao chất lượng dịch vụ để mang đến cho quý khách những trải nghiệm lưu trú hoàn hảo nhất.</p>

      <h2>Đội Ngũ Chuyên Nghiệp</h2>
      <p>Đội ngũ nhân viên của Y Hotel được đào tạo bài bản theo tiêu chuẩn quốc tế, luôn sẵn sàng phục vụ quý khách 24/7 với tinh thần tận tâm và chuyên nghiệp.</p>

      <h2>Tiện Nghi Cao Cấp</h2>
      <ul>
        <li>Hồ bơi trong nhà với view thành phố</li>
        <li>Phòng gym hiện đại</li>
        <li>Spa & Wellness center</li>
        <li>Nhà hàng fine dining</li>
        <li>Business center</li>
      </ul>

      <h2>Dịch Vụ Đặc Biệt</h2>
      <p>Chúng tôi cung cấp các dịch vụ đặc biệt như:</p>
      <ul>
        <li>Đưa đón sân bay</li>
        <li>Tour du lịch địa phương</li>
        <li>Dịch vụ butler cho phòng Presidential</li>
        <li>Tổ chức sự kiện và hội nghị</li>
      </ul>
    `,
    image: lobbyImage,
    date: "10/12/2025",
    readTime: "4 phút",
    category: "Tin Tức",
    author: "Y Hotel",
  },
  "khuyen-mai-cuoi-nam": {
    title: "Chương Trình Khuyến Mãi Cuối Năm 2025",
    excerpt: "Đón năm mới cùng Y Hotel với nhiều ưu đãi hấp dẫn, giảm giá lên đến 40% cho tất cả loại phòng...",
    content: `
      <p>Nhân dịp năm mới 2026, Y Hotel trân trọng gửi đến quý khách chương trình khuyến mãi đặc biệt với nhiều ưu đãi hấp dẫn.</p>

      <h2>Chi Tiết Khuyến Mãi</h2>
      <ul>
        <li>Giảm 40% cho phòng Standard và Deluxe</li>
        <li>Giảm 35% cho phòng Suite</li>
        <li>Giảm 30% cho Presidential Suite</li>
        <li>Miễn phí nâng cấp phòng (tùy tình trạng)</li>
        <li>Miễn phí buffet sáng</li>
      </ul>

      <h2>Thời Gian Áp Dụng</h2>
      <p>Chương trình áp dụng từ ngày 20/12/2025 đến hết ngày 15/01/2026.</p>

      <h2>Điều Kiện Áp Dụng</h2>
      <ul>
        <li>Đặt phòng trực tiếp qua website hoặc hotline</li>
        <li>Thanh toán trước 100%</li>
        <li>Không áp dụng cùng các chương trình khuyến mãi khác</li>
      </ul>

      <p>Hãy liên hệ ngay với chúng tôi để đặt phòng và tận hưởng kỳ nghỉ tuyệt vời!</p>
    `,
    image: heroImage,
    date: "08/12/2025",
    readTime: "2 phút",
    category: "Khuyến Mãi",
    author: "Y Hotel",
  },
  "spa-wellness": {
    title: "Spa & Wellness - Thư Giãn Tuyệt Đối",
    excerpt: "Khám phá không gian spa yên tĩnh với các liệu pháp trị liệu từ phương Đông và phương Tây...",
    content: `
      <p>Y Hotel Spa mang đến không gian thư giãn hoàn hảo với các dịch vụ massage, chăm sóc da và trị liệu đa dạng.</p>

      <h2>Dịch Vụ Spa</h2>
      <ul>
        <li>Massage toàn thân với tinh dầu thiên nhiên</li>
        <li>Chăm sóc da mặt cao cấp</li>
        <li>Trị liệu đá nóng</li>
        <li>Tắm thảo dược</li>
        <li>Yoga và thiền định</li>
      </ul>

      <h2>Không Gian Thư Giãn</h2>
      <p>Spa được thiết kế với không gian yên tĩnh, ánh sáng dịu nhẹ và âm nhạc thư giãn, giúp quý khách tạm gác lại mọi lo toan để tận hưởng những phút giây bình yên.</p>

      <h2>Đội Ngũ Chuyên Gia</h2>
      <p>Đội ngũ chuyên gia spa được đào tạo chuyên nghiệp, am hiểu về các liệu pháp trị liệu từ phương Đông và phương Tây, sẵn sàng mang đến cho quý khách những trải nghiệm thư giãn tuyệt vời nhất.</p>
    `,
    image: poolImage,
    date: "05/12/2025",
    readTime: "4 phút",
    category: "Dịch Vụ",
    author: "Y Hotel",
  },
};

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData[id || ""];

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Không tìm thấy bài viết</h1>
            <Link to="/blog">
              <Button>Quay lại Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="pt-24 pb-4 bg-background">
        <div className="container-custom">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Quay lại Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="pb-8 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} đọc
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                    Y
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm sm:text-base">{post.author}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Khách sạn 5 sao tại Cần Thơ</div>
                  </div>
                </div>

                {/* Share */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2 hidden sm:inline">Chia sẻ:</span>
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9 sm:w-10 sm:h-10">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9 sm:w-10 sm:h-10">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9 sm:w-10 sm:h-10">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA */}
              <div className="mt-12 p-8 bg-primary/5 rounded-3xl text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Đặt Phòng Tại Y Hotel
                </h3>
                <p className="text-muted-foreground mb-6">
                  Trải nghiệm dịch vụ 5 sao và khám phá vẻ đẹp Cần Thơ cùng chúng tôi
                </p>
                <Link to="/rooms">
                  <Button className="btn-hero">
                    Đặt Phòng Ngay
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetailPage;
