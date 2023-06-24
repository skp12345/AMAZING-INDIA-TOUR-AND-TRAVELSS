<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if(!$_SESSION["email"]){   
    redirect('/admin','refresh');   
}
?>  
  
  <?php include 'include/sidebar.php';?>

      <!-- <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="<?php echo base_url();?>#">
          <i class="bi bi-menu-button-wide"></i><span>Events</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="<?php echo base_url();?>past-events">
              <i class="bi bi-circle"></i><span>Past Events</span>
            </a>
          </li>
          <li>
            <a href="<?php echo base_url();?>tournament">
              <i class="bi bi-circle"></i><span>Tournament</span>
            </a>
          </li>
          <li>
            <a href="<?php echo base_url();?>social-works">
              <i class="bi bi-circle"></i><span>Social Work</span>
            </a>
          </li>
          <li>
            <a href="<?php echo base_url();?>components-upcoming-events">
              <i class="bi bi-circle"></i><span>Upcoming Event</span>
            </a>
          </li>
          
        </ul>
      </li> -->
      <!-- End Components Nav -->
    
    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="row">
   <div class="col-md-6">
   <div class="pagetitle">
      <h1>Events</h1>
    </div>
   </div>
   <div class="col-md-6 d-flex justify-content-end">
   <div class="pagetitle">
<a href="<?php echo base_url('addevent')?>">
<span><i class="fa-solid fa-plus addmore"></i></span>
   <button type="button" class="btn btn-info">Add More</button>
</a>
    </div>
   </div>
    </div>
    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-12">

       
          <div class="row container">
          <h3 class="text-center mt-3">Package Details</h3>
<table class="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Package type</th>
                <th>Descrption</th>
                <th>Delete</th>
            </tr>
          
<!-- backend coding -->


<?php
           foreach ($events->result() as $events) 
           { ?>
           <tr>       
                <td><?php echo $events->id?></td>
                <td><img style="height:5rem;width:8rem" src="<?php echo base_url('assets/upload/gallery/');?><?php echo  $events->img_url?>" alt=""></td>
                <td><?php echo $events->event_cotegory?></td>
                <td><?php echo $events->desciption?></td>
                <td><a href="<?php echo base_url('editevent/')?><?php echo $events->id;?>" class="btn btn-warning w-100 btn-xs">Edit</a></td>
                <td><a href="<?php echo site_url()?>Admin/deleteevent/<?php echo $events->id;?>" class="btn btn-danger w-100 btn-xs">Delete</a></td>
           </tr> 
           <?php } 
           ?>
         

<!-- backend coding -->


           </table>
          </div>
        </div><!-- End Left side columns -->

        <!-- Right side columns -->
    

      </div>
    </section>

  </main><!-- End #main -->
