import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight, Filter, Bed, Bath, Wifi, Coffee, Tv, Wind } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const allRooms = [
  {
    id: "standard",
    name: "Phòng Standard",
    type: "Standard",
    price: "800.000",
    capacity: 2,
    size: "28m²",
    bed: "1 giường đôi",
    description: "Phòng tiêu chuẩn với đầy đủ tiện nghi cơ bản",
    image: roomDeluxe,
    amenities: ["wifi", "tv", "aircon", "coffee"],
  },
  {
    id: "deluxe",
    name: "Phòng Deluxe",
    type: "Deluxe",
    price: "1.500.000",
    capacity: 2,
    size: "35m²",
    bed: "1 giường King",
    description: "Phòng cao cấp với view thành phố tuyệt đẹp",
    image: roomDeluxe,
    amenities: ["wifi", "tv", "aircon", "coffee", "bath"],
  },
  {
    id: "superior",
    name: "Phòng Superior",
    type: "Superior",
    price: "2.000.000",
    capacity: 3,
    size: "42m²",
    bed: "1 giường King + 1 giường đơn",
    description: "Phòng rộng rãi phù hợp cho gia đình nhỏ",
    image: roomSuite,
    amenities: ["wifi", "tv", "aircon", "coffee", "bath"],
  },
  {
    id: "suite",
    name: "Phòng Suite",
    type: "Suite",
    price: "3.000.000",
    capacity: 4,
    size: "55m²",
    bed: "2 giường đôi",
    description: "Suite sang trọng với phòng khách riêng biệt",
    image: roomSuite,
    amenities: ["wifi", "tv", "aircon", "coffee", "bath"],
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    type: "Executive",
    price: "5.000.000",
    capacity: 4,
    size: "70m²",
    bed: "1 giường King + 1 giường đôi",
    description: "Suite cao cấp dành cho doanh nhân",
    image: roomPresidential,
    amenities: ["wifi", "tv", "aircon", "coffee", "bath"],
  },
  {
    id: "presidential",
    name: "Presidential Suite",
    type: "Presidential",
    price: "8.000.000",
    capacity: 6,
    size: "120m²",
    bed: "Master bedroom + 2 phòng ngủ",
    description: "Suite đẳng cấp nhất với tiện nghi hoàng gia",
    image: roomPresidential,
    amenities: ["wifi", "tv", "aircon", "coffee", "bath"],
  },
];

const roomTypes = ["Tất cả", "Standard", "Deluxe", "Superior", "Suite", "Executive", "Presidential"];

const amenityIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  tv: Tv,
  aircon: Wind,
  coffee: Coffee,
  bath: Bath,
};

const RoomsPage = () => {
  const [selectedType, setSelectedType] = useState("Tất cả");

  const filteredRooms = selectedType === "Tất cả"
    ? allRooms
    : allRooms.filter((room) => room.type === selectedType);

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
              Phòng Nghỉ
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Phòng & Suites
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Khám phá các loại phòng sang trọng với trang thiết bị hiện đại, 
              thiết kế tinh tế và tiện nghi cao cấp nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 overflow-x-auto pb-2"
          >
            <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
              <Filter className="w-5 h-5" />
              <span>Lọc theo:</span>
            </div>
            {roomTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={`rounded-full flex-shrink-0 ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {type}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
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
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {room.bed}
                        </span>
                        <span>{room.size}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {room.description}
                      </p>

                      {/* Amenities */}
                      <div className="flex items-center gap-2 mb-4">
                        {room.amenities.map((amenity) => {
                          const Icon = amenityIcons[amenity];
                          return Icon ? (
                            <div
                              key={amenity}
                              className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center"
                            >
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                          ) : null;
                        })}
                      </div>

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
        </div>
      </section>
    </Layout>
  );
};

export default RoomsPage;
