import { motion } from "framer-motion";
import { Award, Users, Building, Star } from "lucide-react";
import lobbyImage from "@/assets/lobby.jpg";

const stats = [
  { icon: Building, value: "20+", label: "Phòng Hiện Đại" },
  { icon: Award, value: "50+", label: "Dịch Vụ Cao Cấp" },
  { icon: Users, value: "100%", label: "Trang Thiết Bị Mới" },
  { icon: Star, value: "5⭐", label: "Tiêu Chuẩn Quốc Tế" },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Về Chúng Tôi
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Về Y Hotel
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Y Hotel tự hào là khách sạn 5 sao với trang thiết bị hoàn toàn mới, 
              kiến trúc hiện đại và không gian sang trọng. Mỗi phòng được trang bị 
              nội thất cao cấp, công nghệ thông minh và tiện nghi đầy đủ.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Chúng tôi cam kết mang đến trải nghiệm nghỉ dưỡng đẳng cấp quốc tế 
              với dịch vụ tận tâm và chuyên nghiệp.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-secondary/50"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={lobbyImage}
                alt="Sảnh Y Hotel"
                className="w-full h-[500px] object-cover"
              />
              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-current" />
                  <span className="font-heading text-2xl font-bold">5.0</span>
                </div>
                <div className="text-sm text-primary-foreground/80">Đánh Giá Hoàn Hảo</div>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
