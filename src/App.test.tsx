import { describe, it, expect } from 'vitest';
import { PROJECTS } from './data/projects';
import { CATEGORIES } from './data/taxonomy';
import { SKILL_DOMAINS } from './data/skills';

describe('Christine AI Lab Data Integrity', () => {
  it('should have exactly 5 primary projects registered', () => {
    expect(PROJECTS.length).toBe(5);
    const ids = PROJECTS.map(p => p.id);
    expect(ids).toEqual([
      'workforce-ai',
      'lariviere-ai',
      'datalab-enedis',
      'ecs-signal-to-deal',
      'gemini-usage-monitor'
    ]);
  });

  it('each project should have problem, solution, impact and real stack defined', () => {
    for (const project of PROJECTS) {
      expect(project.problem.length).toBeGreaterThan(20);
      expect(project.solution.length).toBeGreaterThan(20);
      expect(project.impact.length).toBeGreaterThan(10);
      expect(project.stack.length).toBeGreaterThanOrEqual(3);
      expect(project.whatIBuilt.length).toBeGreaterThanOrEqual(2);
      expect(project.security.highlights.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('featured projects should be well prioritized', () => {
    const featured = PROJECTS.filter(p => p.featured);
    expect(featured.length).toBe(5);
    expect(featured.map(f => f.id)).toContain('workforce-ai');
    expect(featured.map(f => f.id)).toContain('lariviere-ai');
    expect(featured.map(f => f.id)).toContain('datalab-enedis');
    expect(featured.map(f => f.id)).toContain('ecs-signal-to-deal');
    expect(featured.map(f => f.id)).toContain('gemini-usage-monitor');
  });

  it('taxonomy categories should be coherent', () => {
    expect(CATEGORIES.length).toBeGreaterThanOrEqual(5);
  });

  it('skill domains should cover Python, AI/LLM, Data, Security and Product', () => {
    const domainIds = SKILL_DOMAINS.map(d => d.id);
    expect(domainIds).toContain('python');
    expect(domainIds).toContain('ai-agents');
    expect(domainIds).toContain('data-analytics');
    expect(domainIds).toContain('security-qa');
    expect(domainIds).toContain('product-ux');
  });

  it('should have honest demoType and audited status on all projects', () => {
    for (const project of PROJECTS) {
      expect(['REAL LIVE APP', 'INTERACTIVE PORTFOLIO DEMO']).toContain(project.demoType);
      expect(['PILOT', 'PROTOTYPE', 'BETA']).toContain(project.status);
      expect(['LIVE APP', 'PROTECTED LIVE', 'INTERACTIVE DEMO']).toContain(project.access);
    }
  });

  it('should distinguish real live apps from interactive demos', () => {
    const liveApps = PROJECTS.filter(p => p.liveDemoUrl);
    expect(liveApps.length).toBe(3);
    expect(liveApps.map(p => p.id)).toEqual(['workforce-ai', 'lariviere-ai', 'datalab-enedis']);

    const interactiveOnly = PROJECTS.filter(p => !p.liveDemoUrl);
    expect(interactiveOnly.length).toBe(2);
    expect(interactiveOnly.map(p => p.id)).toEqual(['ecs-signal-to-deal', 'gemini-usage-monitor']);
    for (const p of interactiveOnly) {
      expect(p.access).toBe('INTERACTIVE DEMO');
    }
  });
});
