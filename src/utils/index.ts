import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
