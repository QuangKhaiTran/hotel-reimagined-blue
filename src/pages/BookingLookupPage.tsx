import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, Phone, Mail, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingResult {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: "confirmed" | "pending" | "cancelled" | "completed";
  totalAmount: string;
}

const mockBookings: Record<string, BookingResult> = {
  "YH2025001": {
    id: "YH2025001",
    guestName: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    phone: "+84 123 456 789",
    roomType: "Phòng Deluxe",
    checkIn: "20/12/2025",
    checkOut: "23/12/2025",
    status: "confirmed",
    totalAmount: "4.500.000₫",
  },
  "YH2025002": {
    id: "YH2025002",
    guestName: "Trần Thị B",
    email: "tranthib@email.com",
    phone: "+84 987 654 321",
    roomType: "Phòng Suite",
    checkIn: "25/12/2025",
    checkOut: "28/12/2025",
    status: "pending",
    totalAmount: "9.000.000₫",
  },
};

const statusConfig = {
  confirmed: {
    label: "Đã xác nhận",
    icon: CheckCircle,
    className: "bg-green-100 text-green-700",
  },
  pending: {
    label: "Đang chờ",
    icon: Clock,
    className: "bg-yellow-100 text-yellow-700",
  },
  cancelled: {
    label: "Đã hủy",
    icon: XCircle,
    className: "bg-red-100 text-red-700",
  },
  completed: {
    label: "Hoàn thành",
    icon: CheckCircle,
    className: "bg-blue-100 text-blue-700",
  },
};

const BookingLookupPage = () => {
  const [bookingCode, setBookingCode] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<BookingResult | null>(null);
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setIsSearching(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const booking = mockBookings[bookingCode.toUpperCase()];
    
    if (booking && booking.email.toLowerCase() === email.toLowerCase()) {
      setResult(booking);
    } else {
      setError("Không tìm thấy đặt phòng. Vui lòng kiểm tra lại mã đặt phòng và email.");
    }

    setIsSearching(false);
  };

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
              Tra Cứu
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Tra Cứu Đặt Phòng
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nhập mã đặt phòng và email để kiểm tra thông tin đặt phòng của bạn
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-md"
            >
              <form onSubmit={handleSearch} className="space-y-6">
                <div>
                  <Label htmlFor="bookingCode" className="text-foreground font-medium mb-2 block">
                    Mã Đặt Phòng
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="bookingCode"
                      type="text"
                      placeholder="VD: YH2025001"
                      value={bookingCode}
                      onChange={(e) => setBookingCode(e.target.value)}
                      className="pl-12 py-6 rounded-xl border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                    Email Đặt Phòng
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 py-6 rounded-xl border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-hero"
                  disabled={isSearching}
                >
                  {isSearching ? "Đang tìm kiếm..." : "Tra Cứu"}
                </Button>
              </form>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-destructive/10 text-destructive rounded-xl flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}

              {/* Demo hint */}
              <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong>Demo:</strong> Thử với mã <code className="bg-background px-2 py-1 rounded">YH2025001</code> và email <code className="bg-background px-2 py-1 rounded">nguyenvana@email.com</code>
                </p>
              </div>
            </motion.div>

            {/* Result */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 bg-card p-8 md:p-10 rounded-3xl shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Thông Tin Đặt Phòng
                  </h2>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${statusConfig[result.status].className}`}>
                    {(() => {
                      const Icon = statusConfig[result.status].icon;
                      return <Icon className="w-4 h-4" />;
                    })()}
                    {statusConfig[result.status].label}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Search className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Mã đặt phòng</div>
                        <div className="font-semibold text-foreground">{result.id}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Khách hàng</div>
                        <div className="font-semibold text-foreground">{result.guestName}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-semibold text-foreground">{result.email}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Điện thoại</div>
                        <div className="font-semibold text-foreground">{result.phone}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">Loại phòng</div>
                      <div className="font-semibold text-foreground">{result.roomType}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-secondary/50 rounded-xl">
                        <div className="text-sm text-muted-foreground mb-1">Nhận phòng</div>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          {result.checkIn}
                        </div>
                      </div>
                      <div className="p-4 bg-secondary/50 rounded-xl">
                        <div className="text-sm text-muted-foreground mb-1">Trả phòng</div>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          {result.checkOut}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">Tổng tiền</div>
                      <div className="text-2xl font-bold text-primary">{result.totalAmount}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-muted-foreground mb-4">
                    Cần hỗ trợ? Liên hệ hotline: <a href="tel:+842921234567" className="text-primary font-medium">+84 292 123 4567</a>
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingLookupPage;
