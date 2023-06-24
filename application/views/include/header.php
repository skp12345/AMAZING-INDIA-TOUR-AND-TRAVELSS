<?php 
if (isset($_SESSION)) {
    session_destroy(); 
    session_start();
    $_SESSION["email"]='';
    }
?>

<!doctype html>
<html lang="en"></html>
<head>


      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <!-- favicon -->
      <link rel="icon" type="image/png" href="<?php echo base_url();?>assets/asset/images/favicon.png">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="<?php echo base_url();?>assets/asset/vendors/bootstrap/css/bootstrap.min.css" media="all">
      <!-- jquery-ui css -->
      <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/asset/vendors/jquery-ui/jquery-ui.min.css">
      <!-- fancybox box css -->
      <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/asset/vendors/fancybox/dist/jquery.fancybox.min.css">
      <!-- Fonts Awesome CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <!-- Elmentkit Icon CSS -->
      <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/asset/vendors/elementskit-icon-pack/assets/css/ekiticons.css">
      <!-- slick slider css -->
      <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/asset/vendors/slick/slick.css">
      <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/asset/vendors/slick/slick-theme.css">
      <!-- google fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&amp;family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&amp;display=swap" rel="stylesheet">
      <!-- Custom CSS -->
      <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/asset/style.css">
      <!-- car-animation -->
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

      <link rel="stylesheet" href="<?php echo base_url();?>assets/asset/card-animation.css">

      <link href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css" rel="stylesheet"/>
      <title>Amazing India Travelxp.</title>
   </head>
   <body class="">
   <div id="box_wrapper">
      <div id="page" class="page g-0 m-0 p-0">
         <!-- ***site header html start*** -->
         <header id="masthead" class="site-header">
            <!-- header html start -->
            <div class="top-header g-0">
               <div class="container-fluid g-0">
                  <div class="top-header-inner px-3 pb-4 pt-3">
                     <div class="header-contact text-left">
                        <a href="telto:09916623133">
                           <i aria-hidden="true" class="icon icon-phone-call2"></i>
                           <div class="header-contact-details d-none  d-sm-block">
                              <span class="contact-label text-white">For Further Inquires :</span>
                              <h5 class="header-contact-no text-white">+91-9916623133/+91-8762826324</h5>
                           </div>
                        </a>
                     </div>
                     <div class="site-logo text-center">
                        <p class="site-title">
                           <a href="<?php echo base_url();?>" class="d-inline-block justify-content-start">
                              <img  src="<?php echo base_url();?>assets/asset/imagesss/medium/logo.png" alt="Logo">
                           </a>
                        </p>
                     </div>
                     <div class="social-icon g-0">
                            <ul class="text-end header-icon" >
                               <li>
                                  <a href="https://www.facebook.com/" target="_blank">
                                     <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                  </a>
                               </li>
                               <!-- <li>
                                  <a href="https://www.twitter.com/" target="_blank">
                                     <i class="fab fa-twitter" aria-hidden="true"></i>
                                  </a>
                               </li> -->
                               <li>
                                  <a href="https://www.instagram.com/" target="_blank">
                                     <i class="fab fa-instagram" aria-hidden="true"></i>
                                  </a>
                               </li>
                               <li>
                                  <a href="https://www.linkedin.com/" target="_blank">
                                     <i style="margin-top: -9px;" class="fab fa-linkedin" aria-hidden="true"></i>
                                  </a>
                               </li>
                               <li>
                                  <a href="https://www.whatsapp.com/" target="_blank">
                                     <i class="fab fa-whatsapp" aria-hidden="true"></i>
                                  </a>
                               </li>
                               <li>
                                  <a href="https://www.youtube.com/" target="_blank">
                                     <i class="fab fa-youtube" aria-hidden="true"></i>
                                  </a>
                               </li>
                            </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="bottom-header">
               <div class="container-fluid">
                  <div class="bottom-header-inner d-flex justify-content-center align-items-center">
                  
                     <div class="navigation-container d-none d-lg-block">
                        <nav id="navigation" class="navigation">
                           <ul class="">
                              <li class="menu-active">
                                 <a href="<?php echo base_url();?>">HOME</a>
                              </li>
                              <li>
                                 <a href="about">ABOUT US</a>
                              </li>
                              <li class="menu-item-has-children">
                                 <a class="iteam-menu" href="<?php echo base_url()?>package">PACKAGES</a>
                                 <ul class="item-menu-child">
                                   
                                    <li class="menu-item-has-children">
                                    <a href="<?php echo base_url()?>honeymoon-package">Honeymoon package</a>
                                       <ul class="item-menu-child">
                                              <li><a href="<?php echo base_url()?>southdelight-Honeymoon">SOUTH DELIGHT</a></li>
                                              <li><a href="<?php echo base_url()?>naturebliss-Honeymoon">Nature Bliss</a></li>
                                              <li><a href="<?php echo base_url()?>honeybreezy-Honeymoon">Breezy Coorg</a></li>
                                              <li><a href="<?php echo base_url()?>window-to-Karnataka-Honeymoon">Window to Karnataka</a></li>
                                       </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                       <a class="iteam-menu" href="<?php echo base_url()?>leisure-holidays-package">Leisure Holidays package</a>
                                       <ul class="item-menu-child">
                                              <li><a href="<?php echo base_url()?>south-delight">SOUTH DELIGHT</a></li>
                                              <li><a href="<?php echo base_url()?>mysore-dasara-wildlife">MYSORE DASARA & WILDLIFE</a></li>
                                              <li><a href="<?php echo base_url()?>costal-delight">COSTAL DELIGHT</a></li>
                                              <li><a href="<?php echo base_url()?>tibet-in-indian">TIBET IN INDIAN</a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="<?php echo base_url()?>wildlife-packages">Jungle Holidays</a>
                                    </li>
                                    <li>
                                       <a href="<?php echo base_url()?>special-interest-packages">Special Interest Packages</a>
                                    </li>
                                    <li>
                                       <a href="<?php echo base_url()?>student-packages">Student Packages</a>
                                    </li>
                                    <li>
                                       <a href="<?php echo base_url()?>ayurvedic-packages">Ayurvedic Package</a>
                                    </li>
                                    <li>
                                       <a href="<?php echo base_url()?>pilgrimage-packages">Spritual Packages</a>
                                    </li>
                                 </ul>
                              </li>
                              <li class="menu-item-has-children">
                                 <a href="<?php echo base_url()?>hotels-for-holidays-honeymoon">HOTELS FOR HOLIDAYS & HONEYMOON</a>
                              </li>
                              <li class="menu-item-has-children">
                                 <a href="<?php echo base_url()?>car-for-tours-transfers">CAR FOR TOURS & TRANSFERS</a>
                              </li>
                              <li>
                                 <a href="<?php echo base_url()?>contact">contact us</a>
                              </li>
                              <li class="enquiryandbooking">
                                 <a  class="btn btn-outline-primary enquirybtn" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">ENQUIRY NOW</a>
                              </li>
                              <!-- <li class="enquiryandbooking">
                                 <a class="btn btn-outline-primary enquirybtn1" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">BOOK NOW</a>
                              </li> -->
                           </ul>
                        </nav>
                     </div>
                     
                  </div>
               </div>
            </div>
            <div class="mobile-menu-container"></div>




<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
   <form action="<?php echo base_url('enquiry-data');?>" method="post">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-2" id="staticBackdropLabel">ENQUIRY</h1> (we are committing to reply your queries within 12 hrs.)
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div class="modal-body">
      <div class="container">
  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">
        <input name="name" class="form-control mb-3" type="text" id="fullName" placeholder="FullName *" required>
        <textarea name="address" class="form-control mb-3" id="address" cols="30" rows="3" placeholder="Address * :" required></textarea>
        <input name="state" class="form-control mb-3" type="text" id="stateName" placeholder="State Name *" required>
    </div>
    <div class="col-6">
    <input name="email" class="form-control mb-3" type="text" id="email" placeholder="Mail id *" required>
    <input name="phone" class="form-control mb-3" type="number" id="mobileno" placeholder="Contact No. *" required>
    <select name="package" class="mb-3 selectwidth" required>
            <option value="" class="" disabled selected>--Select package --</option>
            <option value="Pilgrimage Package">Pilgrimage Package</option>
            <option value="Leisure Holidays package">Leisure Holidays package</option>
            <option value="Student Package">Student Package</option>
            <option value="Teachers Package">Teachers Package</option>
            <option value="Honeymoon Package">Honeymoon Package</option>
            <option value="Special Interest Package">Special Interest Package</option>
            <option value="Wlid Package">Wlid Package</option>
            <option value="Ayurvedic package">Ayurvedic package</option>
        </select>
        <input name="city" class="form-control mb-3" type="text" id="cityName" placeholder="City Name *" required>
    </div>
    <div class="col-12">
    <textarea name="description" class="form-control" id="briefDescription" cols="30" rows="3" placeholder="Your Brief Description *" required></textarea>
    </div>
  </div>
</div>
      </div>
      <div class="modal-footer">
      <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="submit">SEND US NOW</button>
</div>
      </div>
    </div>
   </form>
  </div>
</div>


<!-- booking -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <button type="button" class="btn-close ms-auto my-2 me-2 mb-lg-0" data-bs-dismiss="modal" aria-label="Close"></button>
      <form action="<?php echo base_url('booking-data');?>" method="post">
      <div class="modal-body px-5">
      <div class="mb-3 row">
    <label for="Name" class="col-sm-3 col-form-label">Name * :</label>
    <div class="col-sm-9">
      <input name="name" type="text" class="form-control" id="myName" placeholder="Enter Your Name" required>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="NoofAdultes" class="col-sm-3 col-form-label">No of Adultes* :</label>
    <div class="col-sm-9">
    <select name="adults" required>
          <option value="" selected disabled>--select--</option>
          <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
</select>
    </div>
    <label for="children" class="col-sm-3 col-form-label">children* :</label>
    <div class="col-sm-9">
    <select name="children" required>
          <option  selected disabled>--select--</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
</select>
    </div>
    <label for="package" class="col-sm-3 col-form-label mt-1">Package* :</label>
    <div class="col-sm-9 mt-1">
    <select name="package" class="mb-3 selectwidth" required>
            <option value="" class="" disabled selected>--Select Package--</option>
            <option value="Pilgrimage Package">Pilgrimage Package</option>
            <option value="Leisure Holidays package">Leisure Holidays package</option>
            <option value="Student Package">Student Package</option>
            <option value="Teachers Package">Teachers Package</option>
            <option value="Honeymoon Package">Honeymoon Package</option>
            <option value="Special Interest Package">Special Interest Package</option>
            <option value="Wlid Package">Wlid Package</option>
            <option value="Ayurvedic package">Ayurvedic package</option>
        </select>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="checkin" class="col-sm-3 col-form-label">Check In* :</label>
    <div class="col-sm-9">
      <input  type="date" name="checkin" placeholder="MM / DD / YY"  required>
    </div>
  </div>

  <div class="mb-3 row">
    <label for="accomendation" class="col-sm-3 col-form-label">Type Of Accomedation* :</label>
    <div class="col-sm-9">
    <select required name="accomedation">
          <option value="" selected disabled>--select--</option>
            <option value="Rooms">Rooms</option>
            <option value="cottages">cottages</option>
</select>
    </div>
  </div>

  <div class="mb-3 row">
    <label for="address" class="col-sm-3 col-form-label">Address* :</label>
    <div class="col-sm-9">
      <textarea name="address" class="form-control" id="myaddress" cols="30" rows="3" required></textarea>
    </div>
  </div>

  <div class="mb-3 row">
    <label for="number" class="col-sm-3 col-form-label">Phone Number* :</label>
    <div class="col-sm-9">
      <input name="phone" type="text" class="form-control" id="mynumber" placeholder="Enter Your Number" required>
    </div>
  </div>

  <div class="mb-3 row">
    <label for="email" class="col-sm-3 col-form-label">Email* :</label>
    <div class="col-sm-9">
    <input name="email" type="email" class="form-control" id="myemail" placeholder="Enter Your email" required>
    </div>
  </div>
  <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="submit">Book Now</button>
</div>
      </div>
      </form>
    </div>
  </div>
</div>



</header>