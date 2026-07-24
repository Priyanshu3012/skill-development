import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import AboutAndNotices from "@/components/home/AboutAndNotices";
import PopularCourses from "@/components/home/PopularCourses";
import StatsStrip from "@/components/home/StatsStrip";
import MakesDifferent from "@/components/home/MakesDifferent";
import BlogSection from "@/components/home/BlogSection";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <AboutAndNotices />
      <PopularCourses />
      <MakesDifferent />
      <StatsStrip />
      <BlogSection />
      <Testimonials />
      <CTA />
    </>
  );
}
