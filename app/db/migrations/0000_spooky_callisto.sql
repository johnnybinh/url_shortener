CREATE TABLE `urlTable` (
	`id` text PRIMARY KEY NOT NULL,
	`url_to` text NOT NULL,
	`timestamp` text DEFAULT (current_timestamp) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `urlTable_id_unique` ON `urlTable` (`id`);