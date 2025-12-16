import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import poolImage from "@/assets/pool.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import lobbyImage from "@/assets/lobby.jpg";

const blogPosts = [
  {
    id: "kham-pha-can-tho",
    title: "Khám Phá Cần Thơ - Điểm Đến Không Thể Bỏ Lỡ",
    excerpt: "Cần Thơ - thành phố miền sông nước với nhiều địa điểm du lịch hấp dẫn...",
    image: poolImage,
    date: "15/12/2025",
    readTime: "5 phút",
    category: "Du Lịch",
    featured: true,
  },
  {
    id: "am-thuc-mien-tay",
    title: "Ẩm Thực Miền Tây Tại Y Hotel",
    excerpt: "Trải nghiệm những món ăn đặc sản miền Tây ngay tại nhà hàng của chúng tôi...",
    image: restaurantImage,
    date: "12/12/2025",
    readTime: "3 phút",
    category: "Ẩm Thực",
    featured: false,
  },
  {
    id: "trai-nghiem-5-sao",
    title: "Trải Nghiệm Dịch Vụ 5 Sao",
    excerpt: "Y Hotel cam kết mang đến dịch vụ đẳng cấp quốc tế với đội ngũ chuyên nghiệp...",
    image: lobbyImage,
    date: "10/12/2025",
    readTime: "4 phút",
    category: "Tin Tức",
    featured: false,
  },
];

const BlogSection = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Tin Tức
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Blog & Tin Tức
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Khám phá những câu chuyện thú vị, kinh nghiệm du lịch và cập nhật mới nhất từ Y Hotel
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to={`/blog/${featuredPost.id}`}>
                <div className="group h-full bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                      Bài Viết Nổi Bật
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
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
          )}

          {/* Other Posts */}
          <div className="space-y-6">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="group flex gap-6 bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4">
                    <div className="relative w-40 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 py-2">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/blog">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Xem Tất Cả Bài Viết
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
