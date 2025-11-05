/**
 * Color and variant mappings for UI components
 */

import type { StatusVariant } from '@/interfaces/common';

/**
 * Maps StatusVariant to Tailwind color classes
 * Used by indicator and badge components
 */
export const variantColorMap: Record<StatusVariant, string> = {
    success: 'text-green-400',
    warning: 'text-yellow-400',
    danger: 'text-red-400',
    info: 'text-blue-400',
    default: 'text-gray-400',
};
