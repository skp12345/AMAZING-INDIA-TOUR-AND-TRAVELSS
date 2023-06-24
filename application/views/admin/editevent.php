<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if(!$_SESSION["email"]){   
    redirect('/admin','refresh');   
}
?>
 <?php include 'include/sidebar.php';?>

    
      <!-- End Components Nav -->
    
    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="row">
   <div class="col-md-6">
   <div class="pagetitle">
      <h1>Edit Event</h1>
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
      <?php
           foreach ($event->result() as $event) 
           { ?>
      <form enctype="multipart/form-data" action="<?php echo base_url();?>editevent_process/<?php echo $event->id;?>" method="post">
        <!-- Left side columns -->
        <div class="col-lg-10 ">
        <h3 class="text-center mt-3"></h3>
        <div class="card p-5">
        <form>


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Select Event</label>
    <select class="form-select" aria-label="Default select example" name="event_cotegory">
  <option selected disabled>Select packages</option>
  <option <?php if($event->event_cotegory=="past-event"){echo "selected";}?> value="past-event">Honeymoon packages</option>
  <option <?php if($event->event_cotegory=="social-works"){echo "selected";}?> value="social-works">Wild life packages</option>
  <option <?php if($event->event_cotegory=="tournament"){echo "selected";}?> value="tournament">Ayurvedic packages</option>
  <option <?php if($event->event_cotegory=="upcoming-events"){echo "selected";}?> value="upcoming-events">Sepacial interest packages</option>
</select>
  </div>
  <div class="mb-3">
    <label for="file" class="form-label">Select image</label>
    <div class="mt-2 mb-2">
	<img style="width:150px;height:100px" src="<?php echo base_url(); ?>assets/upload/gallery/<?php echo $event->img_url?>" alt="">
	</div>
    <input type="hidden" class="form-control" id="file" name="selected_img" value="<?php echo $event->img_url?>">
    <input type="file" class="form-control" id="file" name="event_img">
  </div>
  <div class="mb-3">
      <label class="form-label" for="Desciption">Desciption</label>
    <textarea type="Desciption" class="form-control" id="Desciption" name="Desciption" rows="3"><?php echo $event->desciption?></textarea>
  </div>

  <?php } 
           ?>

  <button type="submit" class="btn btn-primary w-25">Submit</button>
</form>
  
  </div>
</div>
</form>
			
		</div>
		
	</div>
          </div>
        </div><!-- End Left side columns -->

        <!-- Right side columns -->
    

      </div>
    </section>

  </main><!-- End #main -->
