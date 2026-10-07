export type ProjectCategory = 
  | 'All'
  | 'Enterprise AI & Organization'
  | 'Multimodal AI & Creative Automation'
  | 'Data & Decision Systems'
  | 'Agentic Intelligence & Public Tenders'
  | 'Developer Tools & FinOps'
  | 'Agentic AI & Edge Systems'
  | 'Experimental Lab';

export type ProjectStatus = 'LIVE' | 'PILOT' | 'BETA' | 'PROTOTYPE' | 'EXPERIMENTAL';

export interface TechDecision {
  decision: string;
  rationale: string;
  alternativeConsidered: string;
}

export interface ProjectAsset {
  type: 'image' | 'video' | 'diagram';
  url: string;
  caption: string;
  isCover?: boolean;
}

export interface ProjectData {
  id: string;
  name: string;
  baseline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  
  // High-level summary
  problem: string;
  solution: string;
  impact: string;
  
  // Real technical details
  stack: string[];
  models?: string[];
  architecture: {
    overview: string;
    diagramType?: string;
    flow: { step: string; detail: string }[];
  };
  
  // Engineering depth
  whatIBuilt: string[];
  whatILearned: string[];
  decisions: TechDecision[];
  
  // Testing & QA
  testing: {
    frameworks: string[];
    description: string;
    sampleCommand?: string;
  };
  
  // Security & Data governance
  security: {
    highlights: string[];
    dataPrivacy: string;
  };
  
  // Links & Demo
  hasLiveDemo: boolean;
  liveDemoUrl?: string;
  liveDemoLabel?: string;
  interactiveDemoId?: string;
  repoUrl?: string;
  repoVisibility: 'Public Gateway' | 'Private Enterprise' | 'Proprietary Pilot';
  
  // Visuals
  assets: ProjectAsset[];
}

export type ViewMode = 'product' | 'engineering';
