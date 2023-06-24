
<style>
   #feedback_button {
      z-index: 1000;
    position: fixed;
    right: 0px;
    top: 80%;
    width: 130px;
    height: 74px;
    background-color: red;
    transform-origin: center top;
    transform: rotate(-90deg);
    font-family: "Open Sans", "Trebuchet MS", Verdana, Helvetica, Sans-Serif;
    color: white;
    text-align: center;
    line-height: 50px;
    transition: right 0.25s;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    outline: none;
    
}

.modal_a{
   color: white !important;
}

#feedback_button:hover,
#feedback_button:focus {
    right: 7px
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -100%);
}

.modal.fade.show .modal-dialog {
  transform: translate(0, 0);
}

@media screen and (max-width: 480px) {
    #feedback_button {
      z-index: 1000;
    position: fixed;
    right: -20px;
    top: 85%;
    width: 130px;
    height: 50px;
    background-color: red;
    transform-origin: center top;
    transform: rotate(-90deg);
    font-family: "Open Sans", "Trebuchet MS", Verdana, Helvetica, Sans-Serif;
    color: white;
    text-align: center;
    line-height: 55px;
    transition: right 0.25s;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    outline: none;  
    }
}
</style>

<!-- feed back system  -->
<a href="#" class="modal_a"  data-bs-toggle="modal" data-bs-target="#feedbackModal">
<div id="feedback_button">
 <span>Send a feedback</span>
</div>
</a>

<!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade mt-5" id="feedbackModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog mt-5">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Give your feedback</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="<?php echo base_url();?>home/feedback" method="post" class="contact-from">
      <div class="row">
         <div class="col-md-6 mt-3">
     <label class="mb-2">Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="Your Name*" required>
                             
         </div>
         <div class="col-md-6 mt-3">
         
          <label class="mb-2">Phone Number</label>
                                    <input type="text" class="form-control" name="number" placeholder="Your Phone*" required>                  
         </div>
      </div>                           

                                  <label class="mb-2 mt-3">Write Feedback</label>
                                    <textarea rows="3" name="message" placeholder="Your Feedback*" required></textarea>
                                 </p>
                                 <p>
                                    <input type="submit" name="submit" value="Submit Now">
                                 </p>
                              </form>
      </div>
     
    </div>
  </div>
</div>

<!-- feed back system  -->
<footer id="colophon" class="site-footer footer-primary">
            <div class="top-footer">
               <div class="container g-0">
                  <div class="upper-footer">
                     <div class="row g-0 myfooter">
                        <div class="col-lg-5 col-sm-6 m-0 g-0 d-inline-flex justify-content-center ">
                           <aside class="widget widget_text widgetrun g-0">
                              <div class="footer-logo text-lg-center g-0">
                                 <a href="index.php"><img class="footerimg g-0 m-0" src="<?php echo base_url();?>assets/asset/imagesss/medium/logo.png" alt="Logo"></a>
                              </div>
                              <div class="textwidget widget-text my-2 text-lg-start">
                                 <p style="text-align:justify;">At Amazing India Travelxp, we strive to provide our customers with the very best service in the industry today. With more than 32 years personal experience of the industry we started our dream project, committed to offering travel services of the highest quality, combining our energy and enthusiasm, with our years of experience.</p>
                              </div>
                              <div class="social-icon g-0">
                                    <ul class="">
                                       <li>
                                          <a href="https://www.facebook.com/" target="_blank">
                                             <i class="fab fa-facebook-f" aria-hidden="true"></i>
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
                                    </ul>
                                 </div>
                           </aside>
                        </div>


                        <div class="col-lg-3 col-sm-6 d-inline-flex justify-content-lg-center g-0">
                           <aside class="widget widget_latest_post widget-post-thumb">
                              <h3 class="widget-title">About Us</h3>
                              <ul>
                                 <li><a href="<?php echo base_url();?>about">About Us</a></li>
                                 <li><a data-bs-toggle="modal" href="#" data-bs-target="#staticBackdrop">Enquiry</a></li>
                                 <li><a  href="<?php echo base_url();?>contact">Contact Us</a></li>
                                 <li><a href="<?php echo base_url();?>hotels-for-holidays-honeymoon">Hotels for holidays</a></li>
                                 <li><a href="<?php echo base_url();?>car-for-tours-transfers">Cars for tours & transfers</a></li>
                              </ul>
                           </aside>
                        </div>


                        <div class="col-lg-4 col-sm-6 d-inline-flex justify-content-lg-center g-0">
                           <aside class="widget widget_text widgetbox">
                              <h3 class="widget-title">CONTACT US</h3>
                              <div class="textwidget widget-text">
                                 <p>Feel free to contact and<br/> reach us !!</p>
                                 <ul>
                                    <li>
                                       <a href="tel:+91 9916623133">
                                          <i aria-hidden="true" class="icon icon-phone1"></i>
                                          +91 9916623133
                                       </a>
                                       <a href="tel:+91 8762826324">
                                          <!-- <i aria-hidden="true" class="icon icon-phone1"></i> -->
                                          +91 8762826324
                                       </a>
                                    </li>
                                    <li>
                                       <a href="mailto:dinesh@amazesouth.com">
                                          <i aria-hidden="true" class="icon icon-envelope1"></i>
                                          dinesh@amazesouth.com
                                       </a>
                                    </li>
                                    <li>
                                       <a href="mailto:amazesouthsdd@gmail.com">
                                          <i aria-hidden="true" class="icon icon-envelope1"></i>
                                          amazesouthsdd@gmail.com
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#">
                                       <i class="fa fa-light fa-earth-americas"></i>
                                          www.amazesouth.com
                                       </a>
                                    </li>
                                    <li>
                                       <i aria-hidden="true" class="icon icon-map-marker1"></i>
                                       560076-Bangalore
                                    </li>
                                 </ul>
                               
                              </div>
                           </aside>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="bottom-footer g-0">
               <div class="container px-3">
                  <div class="copy-right text-center">Copyright &copy; 2023 <strong style="color: #dff9fb;">Amazing india Travelxp</strong>. <span>Powered By </span><a href="https://ficuslot.com/" target="_blank">Ficuslot Innovation Pvt. Ltd</a></div>
               </div>
            </div>
         </footer>

<!-- **********footer start******** -->

<!-- <footer class="footersection" id="footerdiv">
     <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12 footer-div">
                <h3><img class="imgimg" style="width: 13rem; height: 2rem;" src="<?php echo base_url();?>assets/asset/imagesss/medium/logo.png" alt=""></h3>
                <p>Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia at perferendis, pretium, aenean aut ultrices.</p>
                <div class="social-links d-flex mt-4">
                <a href="https://www.twitter.com/" target="_blank">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <i class="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i style="margin-top: -9px;" class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                </div>
            </div>
            <div class="col-lg-2 col-md-6 col-12 footer-div">
              <h3>Useful Links</h3>
        <ul class="menumenu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Enquiry</a></li>
        </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-12 footer-div">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#"></a></li>
              <li><a href="#">Ayurvedic</a></li>
              <li><a href="#">HOTELS/RESORT</a></li>
              <li><a href="#">CARS/COACH</a></li>
              <li><a href="#"></a></li>
            </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-12 footer-div">
            <aside class="widget widget_text widgetbox">
               <h3 class="widget-title">CONTACT US</h3>
               <div class="textwidget widget-text">
                  <ul class="text-white">
                     <li>
                        <a href="tel:+01988256203" class="text-white">
                           <i aria-hidden="true" class="icon icon-phone1"></i>
                           +91 9916623133/+91 8762826324
                        </a>
                     </li>
                     <li>
                        <a href="mailtop:info@domain.com" class="text-white">
                           <i aria-hidden="true" class="icon icon-envelope1"></i>
                           dinesh@amazesouth.com
                        </a>
                     </li>
                     <li>
                        <a href="mailtop:info@domain.com" class="text-white">
                           <i aria-hidden="true" class="icon icon-envelope1"></i>
                           Amazesouthsdd@gmail.com
                        </a>
                     </li>
                     <li>
                        <a href="mailtop:info@domain.com" class="text-white">
                           <i aria-hidden="true" class="icon icon-envelope1"></i>
                           www.amazesouth.com
                        </a>
                     </li>
                     <li>
                        <i aria-hidden="true" class="icon icon-map-marker1"></i>
                        560076-Bangalore
                     </li>
                  </ul>
                               
               </div>
            </aside>
       </div>
      </div>
    </div>
   </footer>
   <div class="bottom-footer g-0">
              <div class="container px-3">
                 <div class="copy-right text-center">Copyright &copy; 2023 <strong style="color: #dff9fb;">Amazing india Travelxp</strong>. <span>Powered By </span><a href="https://ficuslot.com/" target="_blank">Ficuslot Innovation Pvt. Ltd</a></div>
              </div>
   </div> -->


         <!-- ***site footer html end*** -->
         <!-- <a id="backTotop" href="#" class="to-top-icon">
            <i class="fas fa-chevron-up"></i>
         </a> -->
         <!-- ***custom search field html*** -->
         <!-- <div class="header-search-form">
            <div class="container">
               <div class="header-search-container">
                  <form class="search-form" role="search" method="get" >
                     <input type="text" name="s" placeholder="Enter your text...">
                  </form>
                  <a href="#" class="search-close">
                     <i class="fas fa-times"></i>
                  </a>
               </div>
            </div>
         </div> -->
         <!-- ***custom search field html*** -->
         <!-- ***custom top bar offcanvas html*** -->
         <!-- <div id="offCanvas" class="offcanvas-container">
            <div class="offcanvas-inner">
               <div class="offcanvas-sidebar">
                  <aside class="widget author_widget">
                     <h3 class="widget-title">OUR PROPRIETOR</h3>
                     <div class="widget-content text-center"> 
                        <div class="profile"> 
                           <figure class="avatar"> 
                              <img style="width: 110px; height: 110px;" src="<?php echo base_url();?>assets/asset/images/img32.jpg" alt=""> 
                           </figure> 
                           <div class="text-content"> 
                              <div class="name-title"> 
                                 <h4> Lorem, ipsum.</h4> 
                              </div> 
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur sed eos soluta aperiam. Assumenda autem soluta vero? Ipsum, nobis.</p> 
                           </div> 
                           <div class="socialgroup"> 
                              <ul> 
                                 <li> <a target="_blank" href="#"> <i class="fab fa-facebook"></i> </a> </li> 
                                 <li> <a target="_blank" href="#"> <i class="fab fa-google"></i> </a> </li> 
                                 <li> <a target="_blank" href="#"> <i class="fab fa-twitter"></i> </a> </li> 
                                 <li> <a target="_blank" href="#"> <i class="fab fa-instagram"></i> </a> </li> 
                              </ul> 
                           </div> 
                        </div> 
                     </div>
                  </aside>
                  <aside class="widget widget_text text-center">
                     <h3 class="widget-title">CONTACT US</h3>
                     <div class="textwidget widget-text">
                        <p>Feel free to contact and<br/> reach us !!</p>
                        <ul>
                           <li>
                              <a href="tel:+01988256203">
                                 <i aria-hidden="true" class="icon icon-phone1"></i>
                                 +91-9916623133/+91-8762826324
                              </a>
                           </li>
                           <li>
                              <a href="mailtop:info@domain.com">
                                 <i aria-hidden="true" class="icon icon-envelope1"></i>
                                 dinesh@amazesouth.com
                              </a>
                           </li>
                           <li>
                              <a href="mailtop:info@domain.com">
                                 <i aria-hidden="true" class="icon icon-envelope1"></i>
                                 Amazesouthsdd@gmail.com
                              </a>
                           </li>
                           <li>
                              <a href="mailtop:info@domain.com">
                                 <i aria-hidden="true" class="icon icon-envelope1"></i>
                                 www.amazesouth.com
                              </a>
                           </li>
                           <li>
                              <i aria-hidden="true" class="icon icon-map-marker1"></i>
                              560076-Bangalore
                           </li>
                        </ul>
                     </div>
                  </aside>
               </div>
               <a href="#" class="offcanvas-close">
                  <i class="fas fa-times"></i>
               </a>
            </div>
            <div class="overlay"></div>
         </div>
         </div>
      </div> -->

      <!-- JavaScript -->
      <script src="<?php echo base_url();?>assets/asset/js/js/js/vendor/modernizr-2.6.2.min.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/jquery/jquery.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/waypoint/waypoints.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/bootstrap/js/bootstrap.min.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/jquery-ui/jquery-ui.min.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/countdown-date-loop-counter/loopcounter.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/counterup/jquery.counterup.min.js"></script>
      <script src="../../../unpkg.com/imagesloaded%404.1.4/imagesloaded.pkgd.min.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/masonry/masonry.pkgd.min.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/slick/slick.min.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/fancybox/dist/jquery.fancybox.min.js"></script>
      <script src="<?php echo base_url();?>assets/asset/vendors/slick-nav/jquery.slicknav.js"></script>
      <script src="<?php echo base_url();?>assets/asset/js/custom.min.js"></script>
<!-- car-animation -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
  AOS.init();
</script>



<script>
$(document).ready(function() {
  $("#card").click(function() {
    $(this).toggleClass("flipped");
  });
});





$(document).ready(function(){
    $('.carousel slider').carousel({
        interval: 3000, // Change the interval time in milliseconds
        pause: "hover",
        wrap: true,
        direction: "left" // Set the direction to right
    });
});


 </script> 


<script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.js"></script>

<script>
   $(document).ready(function() {
 
 $(".owl-carousel").owlCarousel({

     autoPlay: 1500,
   //   items : 4,
     itemsDesktop : [1199,3],
     itemsDesktopSmall : [979,3],
     center: true,
     nav:true,
     loop:true,
   
     responsive: {
       600: {
         // items: 4
       }
     }
    
 });

});

</script>



   </body>
</html>