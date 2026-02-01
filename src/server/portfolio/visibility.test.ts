import { describe, it, expect } from 'vitest';

export function canView(userRole: string, projectVisibility: string, isOwner: boolean) {
    if (projectVisibility === 'PUBLIC') return true;
    if (isOwner) return true;
    if (projectVisibility === 'MENTOR_ACCESS' && userRole === 'MENTOR') return true;
    return false;
}

describe('Portfolio Visibility', () => {
    it('PUBLIC is visible to everyone', () => {
        expect(canView('STUDENT', 'PUBLIC', false)).toBe(true);
    });
    it('PRIVATE is visible only to owner', () => {
        expect(canView('STUDENT', 'PRIVATE', false)).toBe(false);
        expect(canView('STUDENT', 'PRIVATE', true)).toBe(true);
    });
    it('MENTOR_ACCESS is visible to owner and mentors', () => {
        expect(canView('STUDENT', 'MENTOR_ACCESS', false)).toBe(false);
        expect(canView('MENTOR', 'MENTOR_ACCESS', false)).toBe(true);
    });
});
