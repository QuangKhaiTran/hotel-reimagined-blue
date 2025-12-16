import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-3xl font-bold text-primary">Y</span>
              <span className="font-heading text-xl ml-1">Hotel</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Khách sạn 5 sao với trang thiết bị hoàn toàn mới, kiến trúc hiện đại và không gian sang trọng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6">Liên Kết</h4>
            <ul className="space-y-3">
              {[
                { name: "Trang Chủ", path: "/" },
                { name: "Phòng & Suites", path: "/rooms" },
                { name: "Blog", path: "/blog" },
                { name: "Tra Cứu Đặt Phòng", path: "/booking-lookup" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6">Dịch Vụ</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Hồ Bơi Trong Nhà</li>
              <li>Nhà Hàng Cao Cấp</li>
              <li>Phòng Gym Hiện Đại</li>
              <li>Spa & Wellness</li>
              <li>WiFi Tốc Độ Cao</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  60-62-64 Lý Hồng Thanh, Cái Khế, Cần Thơ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+84292123567" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  +84 292 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@yhotel.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  info@yhotel.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Y Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
