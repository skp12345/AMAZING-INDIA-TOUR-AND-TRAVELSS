<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if(!$_SESSION["email"]){   
    redirect('/admin','refresh');   
}
?>  
  

  <style>
    .myfont{
      font-size:12px;
    }
  </style>

<!-- CSS -->
 <link rel="stylesheet" href="https://cdn.datatables.net/1.11.4/css/dataTables.bootstrap5.min.css">
    <!-- JavaScript -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.4/js/dataTables.bootstrap5.min.js"></script>

  <?php include 'include/sidebar.php';?>

    
    
    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="row">
   <div class="col-md-6">
   <div class="pagetitle">
      <h1>Booking List</h1>
    </div>
   </div>
   
    </div>
    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-12">


          <div class="row container">
          <h3 class="text-center mt-3">Booking  Details</h3>
<table id="myTable" class="table  table-bordered">

<thead>
            <tr>
            <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>NUMBER OF ADULTS</th>
                <th>MOBILE</th>
                <th>NUMBER OF CHILDRENS</th>
                <th>CHECK IN DATE</th>
                <th>PACKAGE NAME</th>
                <th>TYPE OF ACCOMODATION</th>
                <th>ADDRESS</th>
            </tr>
</thead>
<!-- backend coding -->


<?php
           foreach ($booking_list->result() as $booking_list) 
           { ?>
           <!-- <tbody> -->
           <tr>          
                <td><?php echo $booking_list->id?></td>
                <td><?php echo $booking_list->name?></td>
                <td><?php echo $booking_list->email?></td>
                <td><?php echo $booking_list->number_of_adults?></td>
                <td><?php echo $booking_list->phone?></td>
                <td><?php echo $booking_list->childrens?></td>
                <td><?php echo $booking_list->check_in?></td>
                <td><?php echo $booking_list->package?></td>
                <td><?php echo $booking_list->accomodation_type?></td>
                <td class="myfont"><?php echo $booking_list->address?></td>   
           </tr> 
           <!-- </tbody> -->
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

  
<script>
$(document).ready(function() {
    $('#myTable').DataTable();
});
</script>