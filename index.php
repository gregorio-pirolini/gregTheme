<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

 get_header(); ?>
 <section> <?php 
global $post;
// echo $post->ID;
// echo $post->Title;
$id=$post->ID;

?>
<?php $the_query = new WP_Query( "page_id=$id" ); ?>
<?php while ($the_query -> have_posts()) : $the_query -> the_post();  ?>

<h1><?php the_title(); ?></h1> 
<?php the_content(); ?> 
<?php endwhile;?>
</section>
<?php if (is_page( 'Programmierung' ) ):?>
  <article id='programmierung'>
  <ul>
  <?php 
    // TO SHOW THE POST CONTENTS
    ?>                        
        <?php $my_queryslide = new WP_Query( 'cat=17' );?>
        <?php if ( $my_queryslide->have_posts() ) : ?>
       <?php while ($my_queryslide->have_posts()) : $my_queryslide->the_post(); ?>

     <li>
     <h2><?php the_title(); ?></h2>  
 <div class="entry-content">
     
<!--             the_content:   -->
 <?php the_content(); ?> <!-- Queried Post Excerpts -->
 </div>
            <!-- #post-<?php the_ID(); ?> -->
            <?php  if ($my_queryslide->current_post +1 != $my_queryslide->post_count) {
    // this is the last post
    echo '<hr>';
}       ?>
        </li>       
        <?php endwhile; //resetting the post loop ?>

        

        <?php
        wp_reset_postdata(); //resetting the post query
        endif;
        ?>
</ul>
  </article>
  <?php endif;?>
<?php
if (is_page( 'Zeichnen' ) ):?>
  <article id='zeichnen'>
  <ul>
  <?php 
    // TO SHOW THE POST CONTENTS
    ?>                        
        <?php $my_queryslide = new WP_Query( 'cat=16' );?>
        <?php if ( $my_queryslide->have_posts() ) : ?>
       <?php while ($my_queryslide->have_posts()) : $my_queryslide->the_post(); ?>

     <li>
 <div class="entry-content">
     
<!--             the_content:   -->
 <?php the_content(); ?> <!-- Queried Post Excerpts -->
 </div>
            <!-- #post-<?php the_ID(); ?> -->
        </li>       
        <?php endwhile; //resetting the post loop ?>

        

        <?php
        wp_reset_postdata(); //resetting the post query
        endif;
        ?>
</ul>
  </article>
  <?php endif;?>
  <?php if (is_page( 'Videos' ) ):?>
<article id='videos'>
<a  id="interviews" class="anchor">.............</a>

  <h2 >Interviews</h2>
  
  
  <?php  $n=0; ?>
               
        <?php $my_queryslide = new WP_Query( 'cat=12' ); ?>
        <?php if ( $my_queryslide->have_posts() ) : ?>
       <?php while ($my_queryslide->have_posts()) : $my_queryslide->the_post(); ?>

       <h3><?php the_title(); ?></h3> 
  <ul>
              <li>
 <?php $videoLink= get_post_meta($post->ID, 'videoLink', true)?>
 <?php $imgLink=substr($videoLink, strrpos($videoLink, '/', 0)+1);$videoLink  ?>

 <?php $jahr                = get_post_meta($post->ID, 'jahr', true)?>
 <?php $video_Aufnahmegeraet= get_post_meta($post->ID, 'video_Aufnahmegeraet', true)?>
 <?php $audio_Aufnahmegeraet= get_post_meta($post->ID, 'audio_Aufnahmegeraet', true)?>
 <?php $schnittprogramme    = get_post_meta($post->ID, 'schnittprogramme', true)?>
 




                    <div class="viewMe" ><div class="videoFigure"> 
                    <div id="pix<?php echo $n ?>" 
                    style="background-image:url(https://img.youtube.com/vi/<?php echo $imgLink ?>/mqdefault.jpg)"
                    class="clickMe" 
                    title='click to play'
                    data-number="<?php echo $n ?>" 
                    data-src="<?php echo $imgLink; ?>">
                    <img src="<?php echo bloginfo('template_directory'); ?>/pix/youtube.png">
                    <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/mqdefault.jpg"  -->
                     </div>
                    <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/sddefault.jpg">  -->
                    <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/maxresdefault.jpg">  -->
                    <div id="player<?php echo $n ?>"></div>
                    <?php $n++ ?>
                    </div>  
                  
                    
                    </div>
        
                </li>
  
       
        <li>
        <?php if ($jahr!='') :?>
          <p><span class="videoTitles">Jahr: </span><span><?php echo $jahr;?></span></p>
          <?php endif;?>

        <?php if ($video_Aufnahmegeraet!='') :?>
          <p><span class="videoTitles">Video Aufnahmegerät: </span><span><?php echo $video_Aufnahmegeraet;?></span></p>
          <?php endif;?>

          <?php if ($audio_Aufnahmegeraet!='') :?>
            <p><span class="videoTitles">Audio Aufnahmegerät: </span><span><?php echo $audio_Aufnahmegeraet;?></span></p>
          <?php endif;?>

          <?php if ($schnittprogramme!='') :?>
            <p><span class="videoTitles">Schnittprogramme: </span><span><?php echo $schnittprogramme;?></span></p>
          <?php endif;?>
          
          <p class="infoText"><?php the_content(); ?> </p>
      </li> </ul>
        
        <?php endwhile; //resetting the post loop ?>

        

        <?php wp_reset_postdata(); //resetting the post query
        endif;
        ?>
        <a id="kunst" class="anchor">.................</a>
        <h2>Kunst</h2>
       
  
               
               <?php $my_queryslide = new WP_Query( 'cat=13' ); ?>
               <?php if ( $my_queryslide->have_posts() ) : ?>
              <?php while ($my_queryslide->have_posts()) : $my_queryslide->the_post(); ?>
       
              <h3><?php the_title(); ?></h3> 
         <ul>
                     <li>
        <?php $videoLink= get_post_meta($post->ID, 'videoLink', true)?>
        <?php $imgLink=substr($videoLink, strrpos($videoLink, '/', 0)+1);$videoLink  ?>
       
        <?php $jahr                = get_post_meta($post->ID, 'jahr', true)?>
        <?php $video_Aufnahmegeraet= get_post_meta($post->ID, 'video_Aufnahmegeraet', true)?>
        <?php $audio_Aufnahmegeraet= get_post_meta($post->ID, 'audio_Aufnahmegeraet', true)?>
        <?php $schnittprogramme    = get_post_meta($post->ID, 'schnittprogramme', true)?>
        
       
       
       
       
                           <div class="viewMe" ><div class="videoFigure"> 
                           <div id="pix<?php echo $n ?>" 
                           style="background-image:url(https://img.youtube.com/vi/<?php echo $imgLink ?>/mqdefault.jpg)"
                           class="clickMe" 
                           title='click to play'
                           data-number="<?php echo $n ?>" 
                           data-src="<?php echo $imgLink; ?>">
                           <img src="<?php echo bloginfo('template_directory'); ?>/pix/youtube.png">
                           <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/mqdefault.jpg"  -->
                            </div>
                           <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/sddefault.jpg">  -->
                           <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/maxresdefault.jpg">  -->
                           <div id="player<?php echo $n ?>"></div>
                           <?php $n++ ?>
                           </div>  
                         
                           
                           </div>
               
                       </li>
         
              
               <li>
               <?php if ($jahr!='') :?>
                <p><span class="videoTitles">Jahr: </span><span><?php echo $jahr;?></span></p>
                 <?php endif;?>
       
               <?php if ($video_Aufnahmegeraet!='') :?>
                <p><span class="videoTitles">Video Aufnahmegerät: </span><span><?php echo $video_Aufnahmegeraet;?></span></p>
                 <?php endif;?>
       
                 <?php if ($audio_Aufnahmegeraet!='') :?>
                  <p><span class="videoTitles">Audio Aufnahmegerät: </span><span><?php echo $audio_Aufnahmegeraet;?></span></p>
                 <?php endif;?>
       
                 <?php if ($schnittprogramme!='') :?>
                  <p><span class="videoTitles">Schnittprogramme: </span><span><?php echo $schnittprogramme;?></span></p>
                 <?php endif;?>
                 
                 <p class="infoText"><?php the_content(); ?> </p>
             </li> </ul>
               
               <?php endwhile; //resetting the post loop ?>
       
               
       
               <?php wp_reset_postdata(); //resetting the post query
               endif;
               ?>
  <a id="musik" class="anchor">....................</a>
        <h2 >Musik</h2>
  
        
               
               <?php $my_queryslide = new WP_Query( 'cat=14' ); ?>
               <?php if ( $my_queryslide->have_posts() ) : ?>
              <?php while ($my_queryslide->have_posts()) : $my_queryslide->the_post(); ?>
       
              <h3><?php the_title(); ?></h3> 
         <ul>
                     <li>
        <?php $videoLink= get_post_meta($post->ID, 'videoLink', true)?>
        <?php $imgLink=substr($videoLink, strrpos($videoLink, '/', 0)+1);$videoLink  ?>
       
        <?php $jahr                = get_post_meta($post->ID, 'jahr', true)?>
        <?php $video_Aufnahmegeraet= get_post_meta($post->ID, 'video_Aufnahmegeraet', true)?>
        <?php $audio_Aufnahmegeraet= get_post_meta($post->ID, 'audio_Aufnahmegeraet', true)?>
        <?php $schnittprogramme    = get_post_meta($post->ID, 'schnittprogramme', true)?>
        
       
       
       
       
                           <div class="viewMe" ><div class="videoFigure"> 
                           <div id="pix<?php echo $n ?>" 
                           style="background-image:url(https://img.youtube.com/vi/<?php echo $imgLink ?>/mqdefault.jpg)"
                           class="clickMe" 
                           title='click to play'
                           data-number="<?php echo $n ?>" 
                           data-src="<?php echo $imgLink; ?>">
                           <img src="<?php echo bloginfo('template_directory'); ?>/pix/youtube.png">
                           <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/mqdefault.jpg"  -->
                            </div>
                           <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/sddefault.jpg">  -->
                           <!-- <img src="https://img.youtube.com/vi/<?php echo $imgLink ?>/maxresdefault.jpg">  -->
                           <div id="player<?php echo $n ?>"></div>
                           <?php $n++ ?>
                           </div>  
                         
                           
                           </div>
               
                       </li>
         
              
               <li>
               <?php if ($jahr!='') :?>
                <p><span class="videoTitles">Jahr: </span><span><?php echo $jahr;?></span></p>
                 <?php endif;?>
       
               <?php if ($video_Aufnahmegeraet!='') :?>
                <p><span class="videoTitles">Video Aufnahmegerät: </span><span><?php echo $video_Aufnahmegeraet;?></span></p>
                 <?php endif;?>
       
                 <?php if ($audio_Aufnahmegeraet!='') :?>
                  <p><span class="videoTitles">Audio Aufnahmegerät: </span><span><?php echo $audio_Aufnahmegeraet;?></span></p>
                 <?php endif;?>
       
                 <?php if ($schnittprogramme!='') :?>
                  <p><span class="videoTitles">Schnittprogramme: </span><span><?php echo $schnittprogramme;?></span></p>
                 <?php endif;?>
                 
               <p class="infoText"><?php the_content(); ?> </p>
             </li> </ul>
               
               <?php endwhile; //resetting the post loop ?>
       
               
       
               <?php wp_reset_postdata(); //resetting the post query
               endif;
               ?>
  
  
 </article>
  <?php endif;?>
 
  <?php if (is_page( 'Websites' ) ):?>
  <article id='websites'>
  <ul>
  <?php 
    // TO SHOW THE POST CONTENTS
    ?>                        
        <?php $my_queryslide = new WP_Query( 'cat=15' );?>
        <?php if ( $my_queryslide->have_posts() ) : ?>
       <?php while ($my_queryslide->have_posts()) : $my_queryslide->the_post(); ?>

     <li>
 <div class="entry-content">
 <h2><?php the_title(); ?></h2>
 <?php $url= get_post_meta($post->ID, 'url', true)?>
 <?php if ( $url!='#' ) : ?>
  <p><a href="<?php echo $url?>" target="_blank" title="<?php echo $url?> ansehen"><?php echo $url?></a></p>
  <?php endif;?>
<!--             the_content:   -->
 <?php the_content(); ?> <!-- Queried Post Excerpts -->
 </div>
            <!-- #post-<?php the_ID(); ?> -->
           
        <?php  if ($my_queryslide->current_post +1 != $my_queryslide->post_count) {
    // this is the last post
    echo '<hr>';
}       ?>
 </li> 
<?php endwhile; //resetting the post loop ?>

        

        <?php
        wp_reset_postdata(); //resetting the post query
        endif;
        ?>
</ul>
  </article>
  <?php endif;?>
 <aside>
   
 </aside>
  <?php get_footer(); ?>