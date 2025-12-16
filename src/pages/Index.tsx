import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import RoomsSection from "@/components/home/RoomsSection";
import ServicesSection from "@/components/home/ServicesSection";
import GallerySection from "@/components/home/GallerySection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <ServicesSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
