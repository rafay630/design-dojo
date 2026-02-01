'use server'

import { auth } from "@/lib/auth";
import { assignToCohort } from "./service";

export async function submitQuiz(answers: string[]) {
    // Key for MVP - correct answers
    // Q1: Empathize (A)
    // Q2: Prototype (B)
    // Q3: Answer C (for "How many stages" = 5, but current Q3 is "Testing happens before Ideation" = B False)
    // Q4: Define (A)
    // Q5: False (B)
    const key = ['A', 'B', 'B', 'A', 'B']; // Fixed Q3 answer to B (False)

    // Simple score logic
    let score = 0;
    answers.forEach((ans, i) => {
        if (ans === key[i]) score += 20; // 5 questions * 20 = 100
    });

    const passed = score >= 80;

    // Try to get session - don't throw if not authenticated
    try {
        const session = await auth();

        if (passed && session?.user?.email) {
            // Auto-assign to default cohort if logged in
            await assignToCohort(session.user.email, 'default-cohort');
        }
    } catch (e) {
        // User not authenticated - that's OK for taking the quiz
        console.log("User not authenticated - quiz score saved locally only");
    }

    return { passed, score };
}
