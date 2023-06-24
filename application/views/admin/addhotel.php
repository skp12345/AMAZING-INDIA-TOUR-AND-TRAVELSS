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
      <h1>Add Hotel</h1>
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
			<form enctype="multipart/form-data" action="<?php echo base_url();?>uploadimage" method="post">
				<div class="mb-3">
					<label for="" class="form-label"
						>Enter image title</label
					>
					<input
						type="text"
						name="hotel_title"
						class="form-control"
						id="hotel_title"
						required
					/>
					<!-- <textarea class="form-control" name="hotel_title" id="" cols="30" rows="3"></textarea> -->
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label"
						>Upload your image</label
					>
					<input
						type="file"
						name="gallery_img"
						class="form-control"
						id="gallery_img"
						required
					/>
				</div>

				<button type="submit" class="btn btn-primary w-25">Upload</button>
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

  <!-- text editor  -->

  <!-- <script>
                        CKEDITOR.replace( 'hotel_title' );
                </script> -->


 <!-- text editor  -->