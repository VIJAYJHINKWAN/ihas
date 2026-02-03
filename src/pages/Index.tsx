import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import HeroSection from "@/components/sections/HeroSection";
import QuickStats from "@/components/sections/QuickStats";
import AboutSection from "@/components/sections/AboutSection";
import AcademicPrograms from "@/components/sections/AcademicPrograms";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import Infrastructure from "@/components/sections/Infrastructure";
import PlacementSection from "@/components/sections/PlacementSection";
import ResearchSection from "@/components/sections/ResearchSection";
import AwardsSection from "@/components/sections/AwardsSection";
import StudentLifeSection from "@/components/sections/StudentLifeSection";
import GovernanceSection from "@/components/sections/GovernanceSection";
import DownloadsSection from "@/components/sections/DownloadsSection";
import MediaSection from "@/components/sections/MediaSection";
import GallerySection from "@/components/sections/GallerySection";
import EnquirySection from "@/components/sections/EnquirySection";
import Footer from "@/components/layout/Footer";
import WhatsAppChat from "@/components/layout/WhatsAppChat";
import WhyChooseSection from "@/components/sections/WhyChooseSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <AnnouncementBar />
      <main>
        <HeroSection />
        <QuickStats />
        <AboutSection />
        <WhyChooseSection />
        <AcademicPrograms />
        <AdmissionsSection />
        <InfrastructureSection />
        <Infrastructure />
        <PlacementSection />
        <GovernanceSection />
         <DownloadsSection />
        <MediaSection />
        <GallerySection />

        <ResearchSection />
        <AwardsSection />
        <StudentLifeSection />
    
       
        <EnquirySection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
