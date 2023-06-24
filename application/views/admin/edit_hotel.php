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
      <h1>Edit Hotel</h1>
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
           foreach ($hotel_list->result() as $hotel_list) 
           { ?>
			<form enctype="multipart/form-data" action="<?php echo base_url();?>admin/edit_hotel_process/<?php echo $hotel_list->id;?>" method="post">
				<div class="mb-3">
					<label for="" class="form-label"
						>Enter image title</label>
					<input value="<?php echo $hotel_list->hotel_name;?>" type="text" name="hotel_title" class="form-control" id="hotel_title" required />
          <!-- <textarea name="hotel_title" id="" cols="30" rows="10"><?php echo $hotel_list->hotel_name;?></textarea> -->
				</div>
                <div class="mt-2 mb-2">
	<img style="width:150px;height:100px" src="<?php echo base_url(); ?>assets/upload/gallery/<?php echo $hotel_list->img_url?>" alt="">
	</div>
				<div class="mb-3">
                <input type="hidden" class="form-control" id="file" name="selected_img" value="<?php echo $hotel_list->img_url?>">
					<label for="exampleInputEmail1" class="form-label">Upload your image</label>
					<input type="file" name="myhotel_img" class="form-control"/>
				</div>
                <?php } 
           ?>
				<button type="submit" class="btn btn-primary w-25">Submit</button>
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


<!-- <script>
CKEDITOR.replace( 'hotel_title' );
</script> -->