CREATE TYPE "public"."role" AS ENUM('STUDENT', 'MENTOR', 'ADMIN');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"role" "role" DEFAULT 'STUDENT' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
