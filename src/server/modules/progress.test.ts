import { describe, it, expect } from 'vitest';

export function calculateStatus(totalSections: number, completedSections: number) {
    if (completedSections === 0) return 'NOT_STARTED';
    if (completedSections >= totalSections) return 'COMPLETED';
    return 'IN_PROGRESS';
}

describe('Module Progress Logic', () => {
  it('should be NOT_STARTED when 0 sections done', () => {
    expect(calculateStatus(5, 0)).toBe('NOT_STARTED');
  });

  it('should be IN_PROGRESS when some sections done', () => {
    expect(calculateStatus(5, 2)).toBe('IN_PROGRESS');
  });

  it('should be COMPLETED when all sections done', () => {
    expect(calculateStatus(5, 5)).toBe('COMPLETED');
  });
});
