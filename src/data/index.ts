import projectsJson from "./projects.json";
import experienceJson from "./experience.json";

export const NA = "Not available yet";

/* Only PUBLISHED projects appear on the site. Statuses: INTERVIEW, DRAFT, READY, PUBLISHED, ARCHIVED. */
export const projects = projectsJson.filter((p) => p.status === "PUBLISHED");
export type Project = (typeof projects)[number];

export const experience = experienceJson;

export function projectTech(p: Project, limit = 4): string {
  return [...(p.technology ?? []), ...(p.tools ?? [])].slice(0, limit).join(" · ");
}
