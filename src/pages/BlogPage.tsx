import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import poolImage from "@/assets/pool.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import lobbyImage from "@/assets/lobby.jpg";
import heroImage from "@/assets/hero-hotel.jpg";

const allPosts = [
  {
    id: "kham-pha-can-tho",
    title: "Khám Phá Cần Thơ - Điểm Đến Không Thể Bỏ Lỡ",
    excerpt: "Cần Thơ - thành phố miền sông nước với nhiều địa điểm du lịch hấp dẫn, ẩm thực phong phú và con người thân thiện...",
    content: "Cần Thơ là thành phố lớn nhất vùng Đồng bằng sông Cửu Long, được mệnh danh là 'Tây Đô' của miền Tây Nam Bộ...",
    image: poolImage,
    date: "15/12/2025",
    readTime: "5 phút",
    category: "Du Lịch",
    featured: true,
  },
  {
    id: "am-thuc-mien-tay",
    title: "Ẩm Thực Miền Tây Tại Y Hotel",
    excerpt: "Trải nghiệm những món ăn đặc sản miền Tây ngay tại nhà hàng của chúng tôi với đầu bếp chuyên nghiệp...",
    content: "Nhà hàng Y Hotel tự hào mang đến cho quý khách những món ăn đặc trưng nhất của vùng sông nước...",
    image: restaurantImage,
    date: "12/12/2025",
    readTime: "3 phút",
    category: "Ẩm Thực",
    featured: false,
  },
  {
    id: "trai-nghiem-5-sao",
    title: "Trải Nghiệm Dịch Vụ 5 Sao Tại Y Hotel",
    excerpt: "Y Hotel cam kết mang đến dịch vụ đẳng cấp quốc tế với đội ngũ nhân viên chuyên nghiệp và tận tâm...",
    content: "Với tiêu chuẩn 5 sao quốc tế, Y Hotel không ngừng nâng cao chất lượng dịch vụ...",
    image: lobbyImage,
    date: "10/12/2025",
    readTime: "4 phút",
    category: "Tin Tức",
    featured: false,
  },
  {
    id: "khuyen-mai-cuoi-nam",
    title: "Chương Trình Khuyến Mãi Cuối Năm 2025",
    excerpt: "Đón năm mới cùng Y Hotel với nhiều ưu đãi hấp dẫn, giảm giá lên đến 40% cho tất cả loại phòng...",
    content: "Nhân dịp năm mới 2026, Y Hotel trân trọng gửi đến quý khách chương trình khuyến mãi đặc biệt...",
    image: heroImage,
    date: "08/12/2025",
    readTime: "2 phút",
    category: "Khuyến Mãi",
    featured: false,
  },
  {
    id: "spa-wellness",
    title: "Spa & Wellness - Thư Giãn Tuyệt Đối",
    excerpt: "Khám phá không gian spa yên tĩnh với các liệu pháp trị liệu từ phương Đông và phương Tây...",
    content: "Y Hotel Spa mang đến không gian thư giãn hoàn hảo với các dịch vụ massage, chăm sóc da...",
    image: poolImage,
    date: "05/12/2025",
    readTime: "4 phút",
    category: "Dịch Vụ",
    featured: false,
  },
];

const categories = ["Tất cả", "Du Lịch", "Ẩm Thực", "Tin Tức", "Khuyến Mãi", "Dịch Vụ"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Tất cả" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allPosts.find((post) => post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Blog & Tin Tức
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Khám phá những câu chuyện thú vị, kinh nghiệm du lịch và cập nhật mới nhất từ Y Hotel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full md:w-80"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 rounded-full border-border"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full flex-shrink-0 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "Tất cả" && !searchQuery && (
        <section className="py-16 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to={`/blog/${featuredPost.id}`}>
                <div className="group grid md:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500">
                  <div className="relative h-72 md:h-full overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                      Bài Viết Nổi Bật
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} đọc
                      </span>
                      <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Đọc Tiếp
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Không tìm thấy bài viết nào.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter((post) => !post.featured || selectedCategory !== "Tất cả" || searchQuery)
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.id}`}>
                      <div className="group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-3 py-1 rounded-full text-sm">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            Đọc Tiếp
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
