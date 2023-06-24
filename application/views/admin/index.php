<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if(!$_SESSION["email"]){   
    redirect('/admin','refresh');   
}
?>  
  
  <?php include 'include/sidebar.php';?>

    
    
    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="row">
   <div class="col-md-6">
   <div class="pagetitle">
      <h1>Hotel Details</h1>
    </div>
   </div>
   <div class="col-md-6 d-flex justify-content-end">
   <div class="pagetitle">
<a href="<?php echo base_url('addHotel')?>">
<!-- <a href="<?php echo base_url('addimage')?>"> -->
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

        <!-- <?php
        print_r($hotel_list->result());
        ?> -->
          <div class="row container">
          <h3 class="text-center mt-3">Hotel  Details</h3>
<table class="table table-bordered">
            <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>HOTEL TITLE</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
          
<!-- backend coding -->


<?php
           foreach ($hotel_list->result() as $images) 
           { ?>
           <tr>       
                <td><?php echo $images->id?></td>
                <td><img style="height:5rem;width:8rem" src="<?php echo base_url('assets/upload/gallery/');?><?php echo  $images->img_url?>" alt=""></td>
                <td><?php echo  $images->hotel_name?></td>
                <td><a href="<?php echo site_url()?>Admin/edit_hotel/<?php echo $images->id;?>" class="btn btn-warning w-100 btn-xs">Edit</a></td>
                <td><a href="<?php echo site_url()?>Admin/deletehotel/<?php echo $images->id;?>" class="btn btn-danger w-100 btn-xs">Delete</a></td>
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
