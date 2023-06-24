

<!-- Card -->
<div class="container-fluid" style="background: rgba(225, 255, 225, 0.3)">
  <div class="text-center pt-3 pb-1"><h2 style="font-size: 28px;">CARS/COACH RENTAL</h2></div>
</div>
<div class="car-card">
  <div class="container pt-4">
    <div class="row">
    <?php
           foreach ($vehicles->result() as $images) 
           { ?>
      <div class="col-lg-4 col-md-6 col-sm-6 mb-4 carclass1">
        <div class="card image__card">
          <div data-aos="zoom-in-right">
            <div class="image">
              <img
                class="image__img pb-3 pt-2"
                src="<?php echo base_url('assets/upload/gallery/');?><?php echo  $images->img_url?>"
                class="card-img-top"
                alt="..." style="background: rgb(254, 211, 48, 0.8);"/>
              <div class="image__overlay">
                <div>
                  <h3 class="image-title text-white"><?php echo  $images->vehicle_name?></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php } 
           ?>
      <!-- <div class="col-lg-4 col-md-6 col-sm-6 mb-5 carclass1">
        <div class="card">
          <div class="image">
            <img
              class="image__img p-4"
              src="<?php echo base_url();?>assets/asset/imagesss/cars/Innova.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="image__overlay">
              <div>
                <h3 class="image-title text-white">INNOVA CAR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 mb-5 carclass1">
        <div class="card">
          <div class="image">
            <img
              class="image__img py-4"
              src="<?php echo base_url();?>assets/asset/imagesss/cars/luxury2.png"
              class="card-img-top"
              alt="..."/>

            <div class="image__overlay">
              <div>
                <h3 class="image-title text-white">LUXURY CAR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 carclass1">
        <div class="card">
          <div class="image">
            <img
              class="image__img"
              src="<?php echo base_url();?>assets/asset/imagesss/cars/comforts.png"
              class="card-img-top"
              alt="..."
            />
            <div class="image__overlay">
              <div>
                <h3 class="image-title text-white">COMFORT CAR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6 carclass1">
        <div class="card">
          <div class="image">
            <img
              class="image__img py-4 px-3"
              src="<?php echo base_url();?>assets/asset/imagesss/cars/economy.png"
              class="card-img-top"
              alt="..."/>

            <div class="image__overlay">
              <div>
                <h3 class="image-title text-white">ECONOMY CAR</h3>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="card">
          <div class="image">
            <img
              class="image__img py-4 px-3"
              src="<?php echo base_url();?>assets/asset/imagesss/cars/lenovo.png"
              class="card-img-top"
              alt="..."/>

            <div class="image__overlay">
              <div>
                <h3 class="image-title text-white">LENOVO CAR</h3>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</div>

<div class="text1" style="background: rgba(225, 255, 225, 0.3)">
  <div class="container">
    <div class="topiccar py-4 px-5 text-center">
      <h2 style="font-size: 28px;">CARS FOR TOURS & TRANSFERS</h2>
      <p>
        We offer a range of passenger vehicle sizes to suit a variety of budgets
        and space requirements and specialized vehicles to suit its location
        prestige models, SUV and passenger vans, high-end vehicles. At all major
        airports of Indian n cities, offer at best prices Sedan¡Æs saloons SUV.s
        of Toyotas, Tata¡Çs Volkswagens, Mercedes, BMWs Audis etc Not the end
        With our well groomed drivers ,with best knowledge of the places & roads
        make.
      </p>
      <a
        type="button"
        class="btn btn-outline-primary mt-3"
        href=""
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        >MAKE A QUICK ENQUIRY</a
      >
    </div>
  </div>
</div>


