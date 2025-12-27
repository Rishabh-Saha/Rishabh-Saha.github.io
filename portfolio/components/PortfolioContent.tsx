import { defineQuery } from "next-sanity";
import type { ComponentType } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import {
  AboutSection,
  AchievementsSection,
  BlogSection,
  CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  TestimonialsSection,
} from "./sections";

interface NavigationItem {
  title: string;
  href: string;
  icon: string;
  isExternal: boolean;
  enabled: boolean;
}

const NAVIGATION_QUERY =
  defineQuery(`*[_type == "navigation"] | order(order asc){
  title,
  href,
  icon,
  isExternal,
  enabled
}`);

// Map section titles to their corresponding components
const SECTION_COMPONENTS: Record<string, ComponentType> = {
  Home: HeroSection,
  About: AboutSection,
  Testimonials: TestimonialsSection,
  Skills: SkillsSection,
  Experience: ExperienceSection,
  Education: EducationSection,
  Projects: ProjectsSection,
  Certifications: CertificationsSection,
  Achievements: AchievementsSection,
  Services: ServicesSection,
  Blog: BlogSection,
  Contact: ContactSection,
} as const;

async function PortfolioContent() {
  const { data: navItems } = await sanityFetch({ query: NAVIGATION_QUERY });

  if (!navItems || navItems.length === 0) {
    return null;
  }

  // Create a set of enabled section titles for O(1) lookup
  const enabledSections = new Set(
    (navItems as NavigationItem[])
      .filter((item) => item.enabled)
      .map((item) => item.title),
  );

  return (
    <>
      {Object.entries(SECTION_COMPONENTS).map(([title, Component]) => {
        if (!enabledSections.has(title)) return null;
        return <Component key={title} />;
      })}
    </>
  );
}

export default PortfolioContent;
