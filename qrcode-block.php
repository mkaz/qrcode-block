<?php
 /**
 * Plugin Name: QRCode Block
 * Plugin URI:  https://github.com/mkaz/qrcode-block
 * Description: A block to insert a QRCode
 * Version:     0.1.0
 * Author:      Marcus Kazmierczak
 * Author URI:  https://mkaz.blog
 * Text Domain: qrcode-block
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

 add_action( 'init', function() {

	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

	wp_register_script( 'mkaz-qrcode-block-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'mkaz/qrcode-block', array(
		'editor_script' => 'mkaz-qrcode-block-script',
	));

 });

 add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_script( 'mkaz-qrcode-qrcodejs',
		plugins_url( 'qrcode.min.js', __FILE__ )
	);

	wp_enqueue_script( 'mkaz-qrcode-trigger',
		plugins_url( 'qr-trigger.js', __FILE__ ),
		array( 'mkaz-qrcode-qrcodejs' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'qr-trigger.js' ),
		true // in footer
	);
 });