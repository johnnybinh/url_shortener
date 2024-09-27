CREATE TABLE `urlTable` (
	`id` text PRIMARY KEY NOT NULL,
	`url_to` text NOT NULL,
	`timestamp` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `urlTable_id_unique` ON `urlTable` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `urlTable_timestamp_unique` ON `urlTable` (`timestamp`);