import type { Status } from "@components/portfolio/types";

export const statusStyles: Record<Status, string> = {
  "En Producción": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "En Desarrollo": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};
