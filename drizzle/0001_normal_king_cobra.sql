CREATE TYPE "public"."progress_status" AS ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');--> statement-breakpoint
CREATE TABLE "module_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"module_id" uuid NOT NULL,
	"status" "progress_status" DEFAULT 'NOT_STARTED' NOT NULL,
	"responses" jsonb DEFAULT '{}'::jsonb,
	"completed_at" timestamp,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "modules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"content" jsonb NOT NULL,
	"published" boolean DEFAULT false,
	CONSTRAINT "modules_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "module_progress" ADD CONSTRAINT "module_progress_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "module_progress" ADD CONSTRAINT "module_progress_module_id_modules_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE no action ON UPDATE no action;