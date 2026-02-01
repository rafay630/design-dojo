CREATE TABLE "cohort_memberships" (
	"cohort_id" uuid NOT NULL,
	"student_id" uuid NOT NULL,
	"joined_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "cohorts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"mentor_id" uuid
);
--> statement-breakpoint
CREATE TABLE "quiz_results" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"score" integer NOT NULL,
	"passed" boolean NOT NULL,
	"attempt_date" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "cohort_memberships" ADD CONSTRAINT "cohort_memberships_cohort_id_cohorts_id_fk" FOREIGN KEY ("cohort_id") REFERENCES "public"."cohorts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohort_memberships" ADD CONSTRAINT "cohort_memberships_student_id_users_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohorts" ADD CONSTRAINT "cohorts_mentor_id_users_id_fk" FOREIGN KEY ("mentor_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;