'use server'

import { db } from "@/db/drizzle";
import { portfolioProjects } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq, desc } from "drizzle-orm";

export async function createProject(title: string, stage: 'EMPATHIZE' | 'DEFINE' | 'IDEATE' | 'PROTOTYPE' | 'TEST') {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  try {
      // await db.insert(portfolioProjects).values(...)
      console.log(`Created project: ${title} in ${stage}`);
      return { success: true, id: 'mock-project-id' };
  } catch (e) {
      console.error("Failed to create project", e);
      return { success: false };
  }
}

export async function getProjects() {
  const session = await auth();
  if (!session?.user) return [];

  try {
      // return await db.select().from(portfolioProjects).where(eq(portfolioProjects.ownerId, session.user.id));
      return [];
  } catch (e) {
      console.error("Failed to fetch projects", e);
      return [];
  }
}

export async function updateProject(id: string, data: Partial<typeof portfolioProjects.$inferInsert>) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  try {
      // await db.update(portfolioProjects).set(data).where(eq(portfolioProjects.id, id));
      console.log(`Updated project ${id}`);
      return { success: true };
  } catch (e) {
      console.error("Failed to update project", e);
      return { success: false };
  }
}
