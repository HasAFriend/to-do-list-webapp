import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// clsx allows for easier handling of true/false statements (variable && "output")
// twMerge allows for resolving conflicting tailwind classes (sometimes some devs leave two classes without knowing like p-6, p-8 so twMerge fixes that)

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}