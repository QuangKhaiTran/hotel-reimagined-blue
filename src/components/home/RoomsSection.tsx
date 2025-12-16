import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const rooms = [
  {
    id: "deluxe",
    name: "Phòng Deluxe",
    type: "Deluxe",
    price: "1.500.000",
    capacity: 2,
    description: "1 giường đôi • View thành phố",
    image: roomDeluxe,
  },
  {
    id: "suite",
    name: "Phòng Suite",
    type: "Suite",
    price: "3.000.000",
    capacity: 4,
    description: "2 giường đôi • Phòng khách riêng",
    image: roomSuite,
  },
  {
    id: "presidential",
    name: "Presidential Suite",
    type: "Presidential",
    price: "8.000.000",
    capacity: 6,
    description: "Master bedroom • Living room • Jacuzzi",
    image: roomPresidential,
  },
];

const RoomsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
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
            Chỗ Nghỉ Cao Cấp
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Phòng & Suites
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trải nghiệm không gian nghỉ ngơi với trang thiết bị hoàn toàn mới, 
            thiết kế hiện đại và tiện nghi cao cấp.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/rooms/${room.id}`}>
                <div className="group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                      {room.type}
                    </div>
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{room.capacity}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {room.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          {room.price}₫
                        </span>
                        <span className="text-muted-foreground text-sm">/đêm</span>
                      </div>
                      <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/10">
                        Đặt Ngay
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/rooms">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Xem Tất Cả Phòng
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
