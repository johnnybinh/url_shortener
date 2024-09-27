ALTER TABLE `urlTable` ADD `qr_base_64` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `urlTable_qr_base_64_unique` ON `urlTable` (`qr_base_64`);