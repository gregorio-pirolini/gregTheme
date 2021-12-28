<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage TIMO GIPFEL
 * @since Twenty Sixteen 1.0
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
     <!-- <meta charset="<?php bloginfo( 'charset' ); ?>"> -->
     <meta charset="<?php bloginfo( 'charset' ); ?>">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<!-- style -->
<link href="<?php bloginfo('stylesheet_url'); ?>" rel = "stylesheet">
<!-- style -->

    <!-- <title>Document</title> -->
    <title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | Home";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyeleven' ), max( $paged, $page ) );

	?>
    
    
    </title>
<!-- icons    -->
<link rel="shortcut icon"   href="<?php bloginfo('template_url'); ?>/pix/favicon.ico" type="image/x-icon" >
<link rel="icon"            href="<?php bloginfo('template_url'); ?>/pix/favicon_32.png" sizes="32x32" >
<link rel="icon"            href="<?php bloginfo('template_url'); ?>/pix/favicon_48.png" sizes="48x48" >
<link rel="icon"            href="<?php bloginfo('template_url'); ?>/pix/favicon_96.png" sizes="96x96" >
<link rel="icon"            href="<?php bloginfo('template_url'); ?>/pix/favicon_144.png" sizes="144x144" >
<!-- icons    -->

<!-- tweeter & facebook from yaost -->

<!-- style -->

<!-- style -->


<?php wp_head(); ?>
	
</head>

<body <?php body_class(); ?>>

<header>
  <div id="myheader">
  <span id='bannertext'>GREGORIO PIROLINI</span></div>
</header>
    <nav>
       <div id="menuSmall">
            <!-- add menu small -->
            <div id="columnButton">
                <img src="<?php echo bloginfo('template_directory'); ?>/pix/3lines24.png" alt="menu" id="btnMenu" width="30" height="24"></div>
     <div id="column2">

  <?php
wp_nav_menu( array( 
    'theme_location' => 'my-custom-menu2', 
    'container_class' => 'dl2-menuwrapper',
    'container_id' => 'dl2-menu',
    'menu_class'      => 'dl2-menu',
	  'walker' => new My_Walker_Nav_Menu()
) ); 
?>

<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.dlmenu2.js"></script>
<script>
    jQuery(function () {
      jQuery("#dl2-menu").dl2menu({
        animationClasses: { classin: "dl2-animate-in-5", classout: "dl2-animate-out-5" }
      });
    });


  </script>
  <!-- add menu small END -->
  </div>
<!-- add menu small END -->
       </div>
       <div id="menuBig">

       <!-- add menu big -->
       <?php
wp_nav_menu( array( 
    'theme_location' => 'my-custom-menu', 
    'container_class' => 'custom-menu-class' ) ); 
?>

<!-- add menu big END -->

       </div>
    </nav>
    <div id="large"></div> 
<div id='content'>