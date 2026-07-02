import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, merging Tailwind classes.
 * @param  {...any} inputs - Class names or objects.
 * @returns {string} - Merged class string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
