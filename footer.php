<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage ___
 * @since ___
 */
?>
<p id="description">id="description" ABOUT THIS SITE...</p>
	
<footer>
   
    <!-- footer -->
    <div id="menufooter">
            <!-- add menu small -->
       <?php
wp_nav_menu( array( 
    'theme_location' => 'my-custom-menu3', 
    'container_class' => 'custom-menu-class3' ) ); 
?>
<!-- add menu small END -->
</div>    
</footer>
<?php wp_footer(); ?>
</div>
    <!-- content -->
	
</body>
</html>