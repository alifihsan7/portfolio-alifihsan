import projectsJson from "./projects.json";
import experienceJson from "./experience.json";
import projectsId from "./projects.id.json";
import experienceId from "./experience.id.json";
import type { Lang } from "../i18n/ui";

export const NA = "Not available yet";

/* Only PUBLISHED projects appear on the site. Statuses: INTERVIEW, DRAFT, READY, PUBLISHED, ARCHIVED. */
export const projects = projectsJson.filter((p) => p.status === "PUBLISHED");
export type Project = (typeof projects)[number];

export const experience = experienceJson;

/* Translations are overlays: only the translated text lives in *.id.json; ids, images, URLs and numbers come from the
   English files. Arrays (gallery, sections, stats, links) are merged by position, so keep the same order. */
type Overlay = Record<string, any>;
const mergeList = <T extends object>(base: T[] | undefined, over: Overlay[] | undefined): T[] =>
  (base ?? []).map((b, i) => ({ ...b, ...(over?.[i] ?? {}) }));

export function getProjects(lang: Lang): Project[] {
  if (lang === "en") return projects;
  return projects.map((p) => {
    const o = (projectsId as Record<string, Overlay>)[p.id];
    if (!o) return p;
    return {
      ...p,
      ...o,
      gallery: mergeList(p.gallery, o.gallery),
      links: mergeList(p.links, o.links),
      ...("stats" in p ? { stats: mergeList(p.stats, o.stats) } : {}),
      sections: o.sections ?? ("sections" in p ? p.sections : []),
    } as Project;
  });
}

export function getExperience(lang: Lang): typeof experience {
  if (lang === "en") return experience;
  const ov = experienceId as Record<string, Overlay>;
  return {
    ...experience,
    orgs: experience.orgs.map((org) => {
      const o = ov[org.short];
      if (!o) return org;
      return { ...org, note: o.note ?? org.note, roles: mergeList(org.roles, o.roles) };
    }),
  } as typeof experience;
}

export function projectTech(p: Project, limit = 4): string {
  return [...(p.technology ?? []), ...(p.tools ?? [])].slice(0, limit).join(" · ");
}
