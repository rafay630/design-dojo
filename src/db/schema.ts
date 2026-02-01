import { pgTable, uuid, text, timestamp, pgEnum, jsonb, boolean, integer } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['STUDENT', 'MENTOR', 'ADMIN']);
export const progressStatusEnum = pgEnum('progress_status', ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED']);
export const visibilityEnum = pgEnum('visibility', ['PRIVATE', 'MENTOR_ACCESS', 'PUBLIC']);
export const stageEnum = pgEnum('stage', ['EMPATHIZE', 'DEFINE', 'IDEATE', 'PROTOTYPE', 'TEST']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  role: roleEnum('role').default('STUDENT').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const modules = pgTable('modules', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').unique().notNull(),
  content: jsonb('content').notNull(),
  published: boolean('published').default(false),
});

export const moduleProgress = pgTable('module_progress', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  moduleId: uuid('module_id').references(() => modules.id).notNull(),
  status: progressStatusEnum('status').default('NOT_STARTED').notNull(),
  responses: jsonb('responses').default({}),
  completedAt: timestamp('completed_at'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const portfolioProjects = pgTable('portfolio_projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  ownerId: uuid('owner_id').references(() => users.id).notNull(),
  title: text('title').notNull(),
  content: jsonb('content').notNull(),
  visibility: visibilityEnum('visibility').default('PRIVATE').notNull(),
  stage: stageEnum('stage').default('EMPATHIZE').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const cohorts = pgTable('cohorts', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  mentorId: uuid('mentor_id').references(() => users.id),
});

export const cohortMemberships = pgTable('cohort_memberships', {
  cohortId: uuid('cohort_id').references(() => cohorts.id).notNull(),
  studentId: uuid('student_id').references(() => users.id).notNull(),
  joinedAt: timestamp('joined_at').defaultNow(),
});

export const quizResults = pgTable('quiz_results', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  score: integer('score').notNull(),
  passed: boolean('passed').notNull(),
  attemptDate: timestamp('attempt_date').defaultNow(),
});