import { db } from "@/db/drizzle";
import { cohortMemberships } from "@/db/schema";

export async function assignToCohort(userEmail: string, cohortId: string) {
    // In real app, look up user ID by email first
    console.log(`Assigning ${userEmail} to cohort ${cohortId}`);
    try {
        // await db.insert(cohortMemberships)...
        return true;
    } catch (e) {
        console.error("Assignment failed", e);
        return false;
    }
}
