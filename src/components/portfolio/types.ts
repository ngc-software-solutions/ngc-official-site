export type Status = "En Producción" | "En Desarrollo";

export interface SystemProject {
  title: string;
  description: string;
  status: Status;
  stack: string[];
  videoUrl?: string;
}

export interface WebPage {
  title: string;
  description: string;
  status: Status;
  videoUrl?: string;
}

export interface PortfolioBlock {
  badge: string;
  title: string;
  description: string;
  systems: SystemProject[];
  pages: WebPage[];
}
