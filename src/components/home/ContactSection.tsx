import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Điện Thoại",
    lines: ["+84 292 123 4567", "+84 987 654 321"],
    note: "Hotline 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@yhotel.com", "booking@yhotel.com"],
    note: "Phản hồi trong 2 giờ",
  },
  {
    icon: MapPin,
    title: "Địa Chỉ",
    lines: ["60-62-64 Lý Hồng Thanh", "Cái Khế, Cần Thơ"],
    note: "Trung tâm thành phố",
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    lines: ["Lễ tân: 24/7", "Nhà hàng: 6:00 - 23:00"],
    note: "Phục vụ không ngừng nghỉ",
  },
];

const ContactSection = () => {
  return (
    <section className="section-padding bg-primary/5">
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
            Liên Hệ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Đội ngũ chuyên viên của Y Hotel luôn sẵn sàng hỗ trợ và tư vấn 24/7
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md border border-border/50 text-center transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
              <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-4">
                {item.title}
              </h3>
              <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                {item.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                    {line}
                  </p>
                ))}
              </div>
              <span className="inline-block bg-secondary text-secondary-foreground px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                {item.note}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-3xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841536486!2d105.78026!3d10.03293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883d2192b0e5%3A0x2a7eb9541ef70dbb!2zTMO9IEjhu5NuZyBUaGFuaCwgQ8OhaSBLaOG6vywgTmluaCBLacOqdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1702713600000!5m2!1svi!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Y Hotel Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
