import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="group rounded-lg border border-slate-800 bg-[#0b1020]
      shadow-sm transition-all duration-300
      hover:shadow-lg hover:shadow-slate-900/50"
    >
      {/* Project Preview */}
      <div className="relative aspect-video overflow-hidden rounded-t-lg bg-black">
        <img
          src={project.image || '/placeholder.png'}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
        <div className="h-[55%]">
          <div className="p-3 lg:p-4 space-y-3">
            {/* Title */}
            <h3 className="text-sm lg:text-base font-semibold text-slate-100">
              {project.name}
            </h3>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="rounded bg-slate-800 px-2 py-0.5 text-[10px] lg:text-xs text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-xs lg:text-sm text-slate-400 line-clamp-2">
              {project.description}
            </p>

          </div>
          {/* Actions */}
          <div className="flex justify-end items-end pt-2 pe-5">
            <a href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              Visit →
            </a>
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
