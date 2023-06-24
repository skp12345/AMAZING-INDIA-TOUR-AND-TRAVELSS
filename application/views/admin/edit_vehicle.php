<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if(!$_SESSION["email"]){   
    redirect('/admin','refresh');   
}
?>
  
  <?php include 'include/sidebar.php';?>

  <main id="main" class="main">

    <div class="row">
   <div class="col-md-6">
   <div class="pagetitle">
      <h1>Edit Vehicle</h1>
    </div>
   </div>
   <div class="col-md-6 d-flex justify-content-end">
   <div class="pagetitle">

    </div>
   </div>
    </div>
    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">
        <!-- Left side columns -->
        <div class="col-lg-10">
        <div class="card p-5">
        <h3 class="text-center mt-3"></h3>
            <?php
           foreach ($vehicle_list->result() as $vehicle_list) 
           { ?>
			<form enctype="multipart/form-data" action="<?php echo base_url();?>admin/edit_vehicle_process/<?php echo $vehicle_list->id;?>" method="post">
				<div class="mb-3">
					<label for="" class="form-label"
						>Enter image title</label>
					<input value="<?php echo $vehicle_list->vehicle_name;?>" type="text" name="vehicle_title" class="form-control" id="vehicle_name"/>
				</div>
                <div class="mt-2 mb-2">
	<img style="width:150px;height:100px" src="<?php echo base_url(); ?>assets/upload/gallery/<?php echo $vehicle_list->img_url?>" alt="">
	</div>
				<div class="mb-3">
                <input type="hidden" class="form-control" id="file" name="selected_img" value="<?php echo $vehicle_list->img_url?>">
					<label for="exampleInputEmail1" class="form-label">Upload your image</label>
					<input type="file" name="myvehicle_img" class="form-control"/>
				</div>
                <?php } 
           ?>
				<button type="submit" class="btn btn-primary w-25">Update</button>
			</form>
			
		</div>
		</div>
		
	</div>
          </div>
        </div><!-- End Left side columns -->

        <!-- Right side columns -->
    

      </div>
    </section>

  </main><!-- End #main -->
