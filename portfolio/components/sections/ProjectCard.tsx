"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import type { PROJECTS_QUERYResult } from "@/sanity.types";

export function ProjectCard({ projects }: { projects: PROJECTS_QUERYResult }) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3 gap-8">
      {projects.map((project, _idx) => (
        <button
          type="button"
          key={project.slug?.current}
          className="relative group block p-2 h-full w-full text-left"
          onMouseEnter={() => setHoveredIndex(project.slug?.current || null)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === project.slug?.current && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/80 block rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="@container/card bg-card border border-transparent dark:border-white/20 group-hover:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 relative z-20 h-full">
            {/* Project Image */}
            {project.coverImage && (
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={urlFor(project.coverImage).width(600).height(400).url()}
                  alt={project.title || "Project image"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Glass overlay that fades on hover */}
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            )}

            {/* Project Content */}
            <div className="p-4 @md/card:p-6 space-y-3 @md/card:space-y-4 relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {project.category && (
                    <span className="text-xs px-2 py-0.5 @md/card:py-1 rounded-full bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  )}
                </div>
                <h3 className="text-lg @md/card:text-xl font-semibold mb-2 line-clamp-2">
                  {project.title || "Untitled Project"}
                </h3>
                <p className="text-muted-foreground text-xs @md/card:text-sm line-clamp-2">
                  {project.tagline}
                </p>
              </div>

              {/* Tech Stack */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 @md/card:gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIdx) => {
                    const techData =
                      tech && typeof tech === "object" && "name" in tech
                        ? tech
                        : null;
                    return techData?.name ? (
                      <span
                        key={`${project.slug?.current}-tech-${techIdx}`}
                        className="text-xs px-2 py-0.5 @md/card:py-1 rounded-md bg-muted"
                      >
                        {String(techData.name)}
                      </span>
                    ) : null;
                  })}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-0.5 @md/card:py-1 rounded-md bg-muted">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col @xs/card:flex-row gap-2 @xs/card:gap-3 pt-2">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 @md/card:px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs @md/card:text-sm"
                  >
                    Live Demo
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 @md/card:px-4 rounded-lg border hover:bg-accent transition-colors text-xs @md/card:text-sm text-center"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
