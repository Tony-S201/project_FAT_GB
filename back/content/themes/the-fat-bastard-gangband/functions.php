<?php

require get_theme_file_path('inc/setup.php');

require get_theme_file_path('inc/menus.php');

require get_theme_file_path('inc/customizer.php');

global $wpdb;

$charset_collate = $wpdb->get_charset_collate();

$newsletter_table_name = $wpdb->prefix . 'newsletter';

$newsletter_sql = "CREATE TABLE IF NOT EXISTS $newsletter_table_name (
	id int NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
	lastname varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	PRIMARY KEY  (id)
) $charset_collate;";

$alert_email_table_name = $wpdb->prefix . 'alert_email';

$alert_sql = "CREATE TABLE IF NOT EXISTS $alert_email_table_name (
	id int NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
	lastname varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	department int NOT NULL,
	PRIMARY KEY  (id)
) $charset_collate;";

require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

dbDelta($newsletter_sql);
dbDelta($alert_sql);

function get_custom_table_newsletter($user_id) 
{
	global $wpdb;

	$newsletter_table_name = $wpdb->prefix . 'newsletter';

	$newsletter_data = $wpdb->get_results(
		$wpdb->prepare("
		SELECT *
		FROM $newsletter_table_name
		",
		$user_id
		)
	);
	return array('données' => $newsletter_data);
}