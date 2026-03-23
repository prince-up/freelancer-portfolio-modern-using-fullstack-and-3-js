"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import BlogSection from "@/components/BlogSection";
import GitHubStats from "@/components/GitHubStats";
import ResumeSection from "@/components/ResumeSection";
import CertificationsSection from "@/components/CertificationsSection";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(56,88,255,0.22),transparent_36%),radial-gradient(circle_at_88%_12%,rgba(191,90,255,0.18),transparent_34%),radial-gradient(circle_at_55%_80%,rgba(32,196,255,0.14),transparent_32%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <BlogSection />
        <GitHubStats />
        <CertificationsSection />
        <ResumeSection />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
