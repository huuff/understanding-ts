import { Project } from './project.js';

export interface Observer {
  observeNewProject?(project: Project): void;
}
