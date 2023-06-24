<!-- Card -->
<div class="container-fluid" style=" background:rgba(225, 255, 225,0.3);">
    <div class="text-center pt-3 pb-1"><h2 style="font-size: 28px;">HOTEL RESERVATIONS</h2></div>
</div>
<div class="honeymoon-card">
    <div class="container pt-4">
        <div class="row">
        <?php
           foreach ($hotel_list->result() as $images) 
           { ?>
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4 honeyclass1">
                <div class="card">
                    <div class="image">
                         <img class="image__img" src="<?php echo base_url('assets/upload/gallery/');?><?php echo  $images->img_url?>" class="card-img-top" alt="...">
                        <div class="image__overlay">
                            <div style="width: 90%;">
                               <h3 class="image-title text-white text-center"><?php echo  $images->hotel_name?></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php } 
           ?>
            <!-- <div class="col-lg-4 col-md-6 col-sm-6 mb-5 honeyclass1">
               <div class="card">
                    <div class="image">
                          <img class="image__img" src="<?php echo base_url();?>assets/asset/imagesss/hotels/luxuryhotel.jpg" class="card-img-top" alt="...">
    
                          <div class="image__overlay">
                            <div>
                               <h3 class="image-title text-white text-center">LUXURY<br>HOTELS/RESORT</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 mb-5 honeyclass1">
                <div class="card">
                    <div class="image">
                        <img class="image__img" src="<?php echo base_url();?>assets/asset/imagesss/hotels/leisurehotel.jpg" class="card-img-top" alt="...">
                        <div class="image__overlay">
                            <div>
                                <h3 class="image-title text-white text-center">LEISURE<br>HOTELS/RESORT</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 honeyclass1">
                <div class="card">
                    <div class="image">
                        <img class="image__img" src="<?php echo base_url();?>assets/asset/imagesss/hotels/hotelimg.jpg" class="card-img-top" alt="..."></a>
                        <div class="image__overlay">
                            <div>
                                <h3 class="image-title text-white text-center">HOTELS/RESORT</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 honeyclass1">
                <div class="card">
                    <div class="image">
                        <img class="image__img" src="<?php echo base_url();?>assets/asset/imagesss/hotels/honeymoon2.jpg" class="card-img-top" alt="...">
                        <div class="image__overlay">
                            <div>
                                <h3 class="image-title text-white text-center">HONEYMOON<br>HOTELS/RESORT</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- <div class="col-lg-4 col-md-6 col-sm-6 honeyclass1">
                <div class="card">
                    <div class="image">
                        <img class="image__img" src="<?php echo base_url();?>assets/asset/imagesss/hotels/taj-hotels.jpg" class="card-img-top" alt="...">
                        <div class="image__overlay">
                            <div>
                                <h3 class="image-title text-white text-center">TAJ MAHAL<br>HOTELS/RESORT</h3>
                            </div>
                        </div>
                    </div>
               </div>
            </div> -->
        </div>
    </div>
</div>

<div class="text1" style=" background:rgba(225, 255, 225,0.3);">
    <div class="container">
        <div class="topiccar py-4 px-5 text-center">
            <h2 style="font-size: 28px;">Hotels for Holidays</h2>
            <p>We have had good deals with many hotels /resorts and hotel/resort chains leisure , wildlife, nature, Hill stations ,Honeymoon destinations beach Holidays, aurvedic locations , in South India of course India; we can always offer you the best suitable accommodation for the keenest prices, with your particular preference</p>
            <a type="button" class="btn btn-outline-primary mt-3" href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">MAKE A QUICK ENQUIRY</a>
        </div>
    </div>
</div>

