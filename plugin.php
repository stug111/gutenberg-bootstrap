<?php
/**
 * Plugin Name: Gutenberg Bootstrap
 * Plugin URI: https://github.com/stug111/gutenberg-bootstrap
 * Description: Gutenberg Bootstrap — is a Gutenberg plugin with bootstrap blocks.
 * Author: Vadim Mishkhozhev
 * Author URI: https://vk.com/vadimka_gw
 * Version: 1.0.0
 * License: GPL2+
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
