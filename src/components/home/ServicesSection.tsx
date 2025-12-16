import { motion } from "framer-motion";
import { Wifi, Car, Coffee, Dumbbell, UtensilsCrossed, Waves } from "lucide-react";

const services = [
  {
    icon: Wifi,
    name: "WiFi Tốc Độ Cao",
    description: "Kết nối internet siêu nhanh miễn phí toàn khách sạn",
  },
  {
    icon: Car,
    name: "Bãi Đỗ Xe",
    description: "Bãi đỗ xe hiện đại, rộng rãi và an toàn 24/7",
  },
  {
    icon: Coffee,
    name: "Buffet Sáng",
    description: "Thực đơn phong phú với hơn 50 món Á-Âu mỗi ngày",
  },
  {
    icon: Dumbbell,
    name: "Phòng Gym Hiện Đại",
    description: "Trang thiết bị thể thao cao cấp, hoạt động 24/7",
  },
  {
    icon: UtensilsCrossed,
    name: "Nhà Hàng Cao Cấp",
    description: "Ẩm thực đẳng cấp với đầu bếp quốc tế",
  },
  {
    icon: Waves,
    name: "Hồ Bơi Trong Nhà",
    description: "Không gian thư giãn sang trọng với view thành phố",
  },
];

const ServicesSection = () => {
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
            Tiện Nghi
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Dịch Vụ Tiện Ích
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hệ thống tiện ích hiện đại và dịch vụ đẳng cấp 5 sao phục vụ mọi nhu cầu của bạn
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-card rounded-3xl shadow-sm hover:shadow-md border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
