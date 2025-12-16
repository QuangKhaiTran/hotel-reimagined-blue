import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Bed, Maximize, Wifi, Tv, Wind, Coffee, Bath, Check, ArrowLeft, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const roomsData: Record<string, {
  name: string;
  type: string;
  price: string;
  capacity: number;
  size: string;
  bed: string;
  description: string;
  fullDescription: string;
  image: string;
  amenities: string[];
  features: string[];
}> = {
  standard: {
    name: "Phòng Standard",
    type: "Standard",
    price: "800.000",
    capacity: 2,
    size: "28m²",
    bed: "1 giường đôi",
    description: "Phòng tiêu chuẩn với đầy đủ tiện nghi cơ bản",
    fullDescription: "Phòng Standard tại Y Hotel được thiết kế tối giản nhưng đầy đủ tiện nghi cần thiết cho một kỳ nghỉ thoải mái. Với diện tích 28m², phòng được trang bị giường đôi êm ái, bàn làm việc, minibar và phòng tắm hiện đại.",
    image: roomDeluxe,
    amenities: ["WiFi miễn phí", "TV màn hình phẳng", "Điều hòa", "Minibar", "Phòng tắm đứng"],
    features: ["Dọn phòng hàng ngày", "Đồ dùng vệ sinh cao cấp", "Két an toàn", "Máy sấy tóc"],
  },
  deluxe: {
    name: "Phòng Deluxe",
    type: "Deluxe",
    price: "1.500.000",
    capacity: 2,
    size: "35m²",
    bed: "1 giường King",
    description: "Phòng cao cấp với view thành phố tuyệt đẹp",
    fullDescription: "Phòng Deluxe mang đến trải nghiệm nghỉ dưỡng cao cấp với view thành phố tuyệt đẹp. Diện tích 35m² rộng rãi với giường King size, bồn tắm sang trọng và ban công riêng để bạn tận hưởng không khí trong lành.",
    image: roomDeluxe,
    amenities: ["WiFi tốc độ cao", "TV 55 inch", "Điều hòa 2 chiều", "Minibar cao cấp", "Bồn tắm"],
    features: ["View thành phố", "Ban công riêng", "Áo choàng tắm", "Dép đi trong phòng", "Dịch vụ phòng 24/7"],
  },
  superior: {
    name: "Phòng Superior",
    type: "Superior",
    price: "2.000.000",
    capacity: 3,
    size: "42m²",
    bed: "1 giường King + 1 giường đơn",
    description: "Phòng rộng rãi phù hợp cho gia đình nhỏ",
    fullDescription: "Phòng Superior được thiết kế đặc biệt cho gia đình nhỏ với 1 giường King và 1 giường đơn. Không gian 42m² thoáng đãng, có khu vực nghỉ ngơi và làm việc riêng biệt, đảm bảo sự tiện nghi cho cả gia đình.",
    image: roomSuite,
    amenities: ["WiFi tốc độ cao", "TV 55 inch", "Điều hòa 2 chiều", "Minibar cao cấp", "Bồn tắm"],
    features: ["Phù hợp gia đình", "Khu vực làm việc", "Ghế sofa", "Bàn ăn nhỏ", "Dịch vụ phòng 24/7"],
  },
  suite: {
    name: "Phòng Suite",
    type: "Suite",
    price: "3.000.000",
    capacity: 4,
    size: "55m²",
    bed: "2 giường đôi",
    description: "Suite sang trọng với phòng khách riêng biệt",
    fullDescription: "Suite sang trọng với phòng khách và phòng ngủ riêng biệt, mang đến không gian sống như một căn hộ thu nhỏ. Diện tích 55m² được bày trí tinh tế với nội thất cao cấp, bồn tắm Jacuzzi và view panorama.",
    image: roomSuite,
    amenities: ["WiFi siêu nhanh", "TV 65 inch", "Điều hòa thông minh", "Quầy bar mini", "Jacuzzi"],
    features: ["Phòng khách riêng", "View panorama", "Espresso machine", "Bluetooth speaker", "Butler service"],
  },
  "executive-suite": {
    name: "Executive Suite",
    type: "Executive",
    price: "5.000.000",
    capacity: 4,
    size: "70m²",
    bed: "1 giường King + 1 giường đôi",
    description: "Suite cao cấp dành cho doanh nhân",
    fullDescription: "Executive Suite được thiết kế dành riêng cho doanh nhân và khách VIP. Với diện tích 70m², phòng có không gian làm việc chuyên nghiệp, phòng họp nhỏ, và khu vực tiếp khách sang trọng.",
    image: roomPresidential,
    amenities: ["WiFi enterprise", "TV 75 inch", "Điều hòa AI", "Wine cooler", "Steam shower"],
    features: ["Phòng họp riêng", "Bàn làm việc ergonomic", "Access lounge", "Airport transfer", "Laundry express"],
  },
  presidential: {
    name: "Presidential Suite",
    type: "Presidential",
    price: "8.000.000",
    capacity: 6,
    size: "120m²",
    bed: "Master bedroom + 2 phòng ngủ",
    description: "Suite đẳng cấp nhất với tiện nghi hoàng gia",
    fullDescription: "Presidential Suite là lựa chọn đẳng cấp nhất tại Y Hotel với diện tích 120m², bao gồm master bedroom sang trọng, 2 phòng ngủ phụ, phòng khách rộng lớn, phòng ăn riêng và ban công view toàn cảnh thành phố.",
    image: roomPresidential,
    amenities: ["WiFi fiber", "Home theater", "Smart home system", "Private bar", "Infinity bathtub"],
    features: ["Butler 24/7", "Private chef available", "Limousine service", "Helicopter transfer", "Personal concierge"],
  },
};

const amenityIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  tv: Tv,
  aircon: Wind,
  coffee: Coffee,
  bath: Bath,
};

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const room = roomsData[id || "deluxe"];

  if (!room) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Không tìm thấy phòng</h1>
            <Link to="/rooms">
              <Button>Quay lại danh sách phòng</Button>
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
          <Link to="/rooms" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách phòng
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium">
                {room.type}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {room.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {room.fullDescription}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-secondary/50 rounded-2xl text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Sức chứa</div>
                  <div className="font-semibold text-foreground">{room.capacity} khách</div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-2xl text-center">
                  <Maximize className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Diện tích</div>
                  <div className="font-semibold text-foreground">{room.size}</div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-2xl text-center">
                  <Bed className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Giường</div>
                  <div className="font-semibold text-foreground text-sm">{room.bed}</div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="bg-card p-6 rounded-2xl border border-border mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-primary">{room.price}₫</span>
                    <span className="text-muted-foreground">/đêm</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Đã bao gồm thuế & phí
                  </div>
                </div>
                <Button className="w-full btn-hero">
                  <Calendar className="w-5 h-5 mr-2" />
                  Đặt Phòng Ngay
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities & Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Tiện Nghi Phòng
              </h2>
              <div className="space-y-4">
                {room.amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Dịch Vụ Đi Kèm
              </h2>
              <div className="space-y-4">
                {room.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoomDetailPage;
