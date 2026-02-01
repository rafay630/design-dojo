CREATE TYPE "public"."stage" AS ENUM('EMPATHIZE', 'DEFINE', 'IDEATE', 'PROTOTYPE', 'TEST');--> statement-breakpoint
CREATE TYPE "public"."visibility" AS ENUM('PRIVATE', 'MENTOR_ACCESS', 'PUBLIC');--> statement-breakpoint
CREATE TABLE "portfolio_projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" uuid NOT NULL,
	"title" text NOT NULL,
	"content" jsonb NOT NULL,
	"visibility" "visibility" DEFAULT 'PRIVATE' NOT NULL,
	"stage" "stage" DEFAULT 'EMPATHIZE' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "portfolio_projects" ADD CONSTRAINT "portfolio_projects_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;