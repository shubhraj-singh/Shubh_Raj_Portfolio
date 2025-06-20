"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Image from "@/components/image";
import Logo from "@/components/CompanyLogos";
import TechSkills from "@/components/TechDashboard";
import Certification from "@/components/Certification";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Image />
        <Grid />
        <TechSkills />
        <RecentProjects />
        <Clients />
        <Logo />
        {/* <Experience /> */}
        <Certification />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
