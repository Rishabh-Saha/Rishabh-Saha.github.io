import { defineQuery } from "next-sanity";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { sanityFetch } from "@/sanity/lib/live";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

const PROFILE_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
  email,
  phone,
  location,
  socialLinks
}`);

export async function ContactSection() {
  const { data: profile } = await sanityFetch({ query: PROFILE_QUERY });

  if (!profile) {
    return null;
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 pb-40 bg-muted/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <ShootingStars />
      <StarsBackground />

      {/* <WorldMapDemo /> */}

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Wherever you are in the world, let&apos;s work together on your next
            project.
          </p>
        </div>

        <div className="@container">
          <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-8">
            {/* Contact Info */}
            <ContactInfo profile={profile} />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
