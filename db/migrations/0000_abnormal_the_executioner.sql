CREATE TABLE `tour_requests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text,
	`email` text,
	`phone` text,
	`child_age_range` text,
	`message` text,
	`created_at` integer,
	`updated_at` integer
);
