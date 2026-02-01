import { describe, it, expect } from 'vitest';

export function scoreQuiz(answers: string[], key: string[]) {
    let score = 0;
    answers.forEach((ans, idx) => {
        if (ans === key[idx]) score++;
    });
    return score;
}

describe('Quiz Scoring', () => {
    it('calculates score correctly', () => {
        expect(scoreQuiz(['A', 'B'], ['A', 'B'])).toBe(2);
        expect(scoreQuiz(['A', 'C'], ['A', 'B'])).toBe(1);
    });
});
