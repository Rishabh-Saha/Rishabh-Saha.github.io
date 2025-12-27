"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import type { PROFILE_QUERYResult } from "@/sanity.types";

interface ContactInfoProps {
  profile: PROFILE_QUERYResult;
}

export function ContactInfo({ profile }: ContactInfoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <div className="@container/info space-y-6">
      <h3 className="text-xl @md/info:text-2xl font-semibold mb-6">
        Contact Information
      </h3>

      {profile.email && (
        <div className="flex items-start gap-3 @md/info:gap-4">
          <div className="w-10 h-10 @md/info:w-12 @md/info:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xl @md/info:text-2xl">📧</span>
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold mb-1 text-sm @md/info:text-base">
              Email
            </h4>
            <Link
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-primary transition-colors text-xs @md/info:text-sm truncate block"
            >
              {profile.email}
            </Link>
          </div>
        </div>
      )}

      {profile.phone && (
        <div className="flex items-start gap-3 @md/info:gap-4">
          <div className="w-10 h-10 @md/info:w-12 @md/info:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xl @md/info:text-2xl">📱</span>
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold mb-1 text-sm @md/info:text-base">
              Phone
            </h4>
            <Link
              href={`tel:${profile.phone}`}
              className="text-muted-foreground hover:text-primary transition-colors text-xs @md/info:text-sm"
            >
              {profile.phone}
            </Link>
          </div>
        </div>
      )}

      {profile.location && (
        <div className="flex items-start gap-3 @md/info:gap-4">
          <div className="w-10 h-10 @md/info:w-12 @md/info:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xl @md/info:text-2xl">📍</span>
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold mb-1 text-sm @md/info:text-base">
              Location
            </h4>
            <p className="text-muted-foreground text-xs @md/info:text-sm">
              {profile.location}
            </p>
          </div>
        </div>
      )}

      {profile.socialLinks && (
        <div className="pt-6">
          <h4 className="font-semibold mb-4 text-sm @md/info:text-base">
            Follow Me
          </h4>
          <div className="flex flex-wrap gap-2 @md/info:gap-3">
            {profile.socialLinks.github && (
              <Link
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 @md/info:px-4 @md/info:py-2 rounded-lg border hover:bg-accent transition-colors text-xs @md/info:text-sm flex items-center gap-2"
              >
                {mounted && (
                  <Image
                    src={
                      resolvedTheme === "dark"
                        ? "/GitHub_Invertocat_Light.svg"
                        : "/GitHub_Invertocat_Dark.svg"
                    }
                    alt="GitHub"
                    width={16}
                    height={16}
                    className="@md/info:w-5 @md/info:h-5"
                  />
                )}
                <span>GitHub</span>
              </Link>
            )}
            {profile.socialLinks.linkedin && (
              <Link
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 @md/info:px-4 @md/info:py-2 rounded-lg border hover:bg-accent transition-colors text-xs @md/info:text-sm flex items-center gap-2"
              >
                {mounted && (
                  <Image
                    src={
                      resolvedTheme === "dark"
                        ? "/InBug-White.png"
                        : "/InBug-Black.png"
                    }
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="@md/info:w-5 @md/info:h-5"
                  />
                )}
                <span>LinkedIn</span>
              </Link>
            )}
            {profile.socialLinks.twitter && (
              <Link
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 @md/info:px-4 @md/info:py-2 rounded-lg border hover:bg-accent transition-colors text-xs @md/info:text-sm"
              >
                Twitter
              </Link>
            )}
            {profile.socialLinks.website && (
              <Link
                href={profile.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 @md/info:px-4 @md/info:py-2 rounded-lg border hover:bg-accent transition-colors text-xs @md/info:text-sm"
              >
                Website
              </Link>
            )}
            {profile.socialLinks.medium && (
              <Link
                href={profile.socialLinks.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 @md/info:px-4 @md/info:py-2 rounded-lg border hover:bg-accent transition-colors text-xs @md/info:text-sm"
              >
                Medium
              </Link>
            )}
            {profile.socialLinks.devto && (
              <Link
                href={profile.socialLinks.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 @md/info:px-4 @md/info:py-2 rounded-lg border hover:bg-accent transition-colors text-xs @md/info:text-sm"
              >
                Dev.to
              </Link>
            )}
            {profile.socialLinks.youtube && (
              <Link
                href={profile.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 @md/info:px-4 @md/info:py-2 rounded-lg border hover:bg-accent transition-colors text-xs @md/info:text-sm"
              >
                YouTube
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
