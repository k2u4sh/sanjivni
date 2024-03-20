<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jsw_nursing' );

/** Database username */
define( 'DB_USER', 'jsw' );

/** Database password */
define( 'DB_PASSWORD', 'iYoginet$123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~(K-JSPRU!k%,S@esRQ~`ESCzSp`xm5hhVP|+Mtx+I}4msT|9}o>hU_=*A3Q:&-!' );
define( 'SECURE_AUTH_KEY',  '(EvRnqBM0O? *1wm2d%K-jCE,(@tS)j-6X^yTvx-c-<FP}</:n$y>5LH R:*Xehz' );
define( 'LOGGED_IN_KEY',    '!4WDQ[i,g6;,24B/v^IE_0Ay6E9_@mgV8z<d6?tASgE8r^cb :Y[0Kf~aj^.:<d+' );
define( 'NONCE_KEY',        'yTM:XN8kPC.%Dtn34}JKTohh(xkJ6VN_nj|TbYw1tU%-kOh4b9 IT`KdJYgooPZk' );
define( 'AUTH_SALT',        'Nn2B1}8#Hx$i*2Qy{3}UR@JVydA7ix13):}SpD&?SV&67{#3^HTHv(DQu[_!aO2e' );
define( 'SECURE_AUTH_SALT', 'LI-X9B_ =&fQqt&.[Rep=Y;bWDs j4!=rEx;anTAb%B?c0T-U_>.z+cWyrd$=M}o' );
define( 'LOGGED_IN_SALT',   'ywf/.zz[/gQ7:Dip?,X<0`ogEm#5%0Zh1V7u$K]w+xgyP EM5:#m6`o5gX@1D9;:' );
define( 'NONCE_SALT',       'mDxk(#:QpRGo)Yh0[e6U{c3u _j:HQ#_t2ZR[}v&hvl9U03h|G,U[g2j{L2(HcUf' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'jswp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

define( 'WP_MEMORY_LIMIT', '128M' );
/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
