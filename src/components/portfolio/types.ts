export type Status = "En producción" | "En desarrollo";

export interface Project {
  title: string;
  sector: string;
  description: string;
  status: Status;
  stack: string[];
  /** YouTube video id for the demo. */
  videoId?: string;
  /** Public site of the product, when it has one. */
  href?: string;
}
