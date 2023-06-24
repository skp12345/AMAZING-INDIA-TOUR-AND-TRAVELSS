<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Dashboard - Amazing India</title>
  <meta content="" name="description">
  <meta content="" name="keywords">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- Favicons -->
  <!-- <link href="<?php echo base_url();?>assets/asset/images/logoo.jpg" rel="icon"> -->
  <!-- <link href="<?php echo base_url();?>assets/asset/images/logoo.jpg" rel="apple-touch-icon"> -->


  <!-- text editor  -->
  <script src="https://cdn.ckeditor.com/4.20.2/standard/ckeditor.js"></script>
  <!-- text editor  -->
  
  <!-- Google Fonts -->
  <link href="<?php echo base_url();?>https://fonts.gstatic.com" rel="preconnect">
  <link href="<?php echo base_url();?>https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="<?php echo base_url();?>assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="<?php echo base_url();?>assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="<?php echo base_url();?>assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="<?php echo base_url();?>assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="<?php echo base_url();?>assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="<?php echo base_url();?>assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="<?php echo base_url();?>assets/vendor/simple-datatables/style.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="<?php echo base_url();?>assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: NiceAdmin - v2.4.1
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="<?php echo base_url();?>" class="logo d-flex align-items-center">
        <img style="width:290px;heght:60px" src="<?php echo base_url();?>/assets/asset/images/logoo.png" alt="">
        <!-- <span class="d-none d-lg-block">Amazing India</span> -->
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

   

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="<?php echo base_url();?>#">
            <i class="bi bi-search"></i>
          </a>
        </li><!-- End Search Icon-->

       <li class="me-5"><h5>Welcome <span style="font-size:16px;"><?php echo  $_SESSION["email"]?></span></h5></li>


        <li class="nav-item dropdown pe-3">

        <a class="dropdown-item d-flex align-items-center" href="<?php echo base_url('logout');?>#">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a><!-- End Profile Iamge Icon -->

        </li><!-- End Profile Nav -->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->