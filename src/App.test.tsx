import { describe, it, expect } from 'vitest';
import { PROJECTS } from './data/projects';
import { CATEGORIES } from './data/taxonomy';
import { SKILL_DOMAINS } from './data/skills';

describe('Christine AI Lab Data Integrity', () => {
  it('should have all 7 primary projects registered', () => {
    expect(PROJECTS.length).toBeGreaterThanOrEqual(7);
    const ids = PROJECTS.map(p => p.id);
    expect(ids).toContain('workforce-ai');
    expect(ids).toContain('lariviere-ai');
    expect(ids).toContain('datalab-enedis');
    expect(ids).toContain('ecs-signal-to-deal');
    expect(ids).toContain('gemini-usage-monitor');
    expect(ids).toContain('jarvis');
    expect(ids).toContain('zcube-enedis-pilot');
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
    expect(featured.length).toBeGreaterThanOrEqual(4);
    expect(featured.map(f => f.id)).toContain('workforce-ai');
    expect(featured.map(f => f.id)).toContain('lariviere-ai');
    expect(featured.map(f => f.id)).toContain('datalab-enedis');
    expect(featured.map(f => f.id)).toContain('ecs-signal-to-deal');
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
      expect(['REAL LIVE APP', 'INTERACTIVE PORTFOLIO DEMO', 'CASE STUDY ONLY']).toContain(project.demoType);
      // No project should be marked LIVE unless unauthenticated public live URL is verified
      expect(['PILOT', 'PROTOTYPE', 'BETA']).toContain(project.status);
    }
  });
});
