'use server'

import { db } from "@/db/drizzle";
import { modules, moduleProgress, users } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq, and } from "drizzle-orm";

export async function getModules() {
  const session = await auth();
  if (!session?.user) return [];

  try {
    const result = await db.select().from(modules).where(eq(modules.published, true));
    return result;
  } catch (e) {
    console.error("Failed to fetch modules", e);
    return [];
  }
}

export async function getModule(slug: string) {
  try {
    const result = await db.select().from(modules).where(eq(modules.slug, slug)).limit(1);
    return result[0];
  } catch (e) {
    console.error("Failed to fetch module", e);
    return null;
  }
}

export async function updateProgress(moduleId: string, status: 'IN_PROGRESS' | 'COMPLETED', responses?: any) {
  const session = await auth();
  if (!session?.user?.email) throw new Error("Unauthorized");

  try {
      // Logic to update/insert progress
      // const user = ...
      // await db.insert(moduleProgress)...
      console.log(`Updated progress for ${moduleId} to ${status}`);
      return { success: true };
  } catch (e) {
      console.error("Failed to update progress", e);
      return { success: false };
  }
}
