<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
	{
	  parent::__construct();
	  $this->load->model('Admin_model');
	}

	public function index()
	{
		$this->load->view('include/header');    
		$this->load->view('index');    
		$this->load->view('include/footer');    
	}

	public function about()
	{
		$this->load->view('include/header');    
		$this->load->view('about');    
		$this->load->view('include/footer');    
	}

	public function contact()
	{
		$this->load->view('include/header');    
		$this->load->view('contact');    
		$this->load->view('include/footer');    
	}

	public function ayurvedic_packages()
	{
		$this->load->view('include/header');    
		$this->load->view('ayurvedic_packages');    
		$this->load->view('include/footer');    
	}



	public function bandipur_holidays()
	{
		$this->load->view('include/header');    
		$this->load->view('bandipur_holidays');    
		$this->load->view('include/footer');    
	}

	public function car_for_tours_transfers()
	{
		$data['vehicles'] = $this->Admin_model->getVehicles();
		$this->load->view('include/header');    
		$this->load->view('car-for-tours-transfers',$data);    
		$this->load->view('include/footer');    
	}

	public function costal_delight()
	{
		$this->load->view('include/header');    
		$this->load->view('costal_delight');    
		$this->load->view('include/footer');    
	}

	public function destination()
	{
		$this->load->view('include/header');    
		$this->load->view('destination');    
		$this->load->view('include/footer');    
	}

	public function honeymoon_package()
	{
		$this->load->view('include/header');    
		$this->load->view('honeymoon_package');    
		$this->load->view('include/footer');    
	}

	public function hotels_for_holidays_honeymoon()
	{
		$data['hotel_list'] = $this->Admin_model->get_hotel_list();
		$this->load->view('include/header');    
		$this->load->view('hotels_for_holidays_honeymoon',$data);    
		$this->load->view('include/footer');    
	}

	public function kabini_holidays()
	{
		$this->load->view('include/header');    
		$this->load->view('kabini-holidays');    
		$this->load->view('include/footer');    
	}


	public function leisure_holidays_package()
	{
		$this->load->view('include/header');    
		$this->load->view('leisure_holidays_package');    
		$this->load->view('include/footer');    
	}

	public function mysore_dasara_wildlife()
	{
		$this->load->view('include/header');    
		$this->load->view('mysore_dasara_wildlife');    
		$this->load->view('include/footer');    
	}

	public function pilgrimage_packages()
	{
		$this->load->view('include/header');    
		$this->load->view('pilgrimage_packages');    
		$this->load->view('include/footer');    
	}

	public function south_delight()
	{
		$this->load->view('include/header');    
		$this->load->view('south-delight');    
		$this->load->view('include/footer');    
	}

	public function special_interest_packages()
	{
		$this->load->view('include/header');    
		$this->load->view('special_interest_packages');    
		$this->load->view('include/footer');    
	}

	public function student_packages()
	{
		$this->load->view('include/header');    
		$this->load->view('student_packages');    
		$this->load->view('include/footer');    
	}

	public function tibet_in_indian()
	{
		$this->load->view('include/header');    
		$this->load->view('tibet_in_indian');    
		$this->load->view('include/footer');    
	}

	public function wildlife_packages()
	{
		$this->load->view('include/header');    
		$this->load->view('wildlife_packages');    
		$this->load->view('include/footer');    
	}
	public function package()
	{
		$this->load->view('include/header');    
		$this->load->view('package');    
		$this->load->view('include/footer');    
	}

	public function enquiry_data()
	{
		$data['name'] = $this->input->post('name');
		$data['address'] = $this->input->post('address');
		$data['state'] = $this->input->post('state');
		$data['email'] = $this->input->post('email');
		$data['mobile'] = $this->input->post('phone');
		$data['package'] = $this->input->post('package');
		$data['city'] = $this->input->post('city');
		$data['descript'] = $this->input->post('description');
		// var_dump($data);
		$this->Admin_model->enquiry_data($data);
	}

	public function booking_data()
	{
		$data['name'] = $this->input->post('name');
		$data['number_of_adults'] = $this->input->post('adults');
		$data['childrens'] = $this->input->post('children');
		$data['package'] = $this->input->post('package');
		$data['check_in'] = $this->input->post('checkin');
		$data['accomodation_type'] = $this->input->post('accomedation');
		$data['address'] = $this->input->post('address');
		$data['phone'] = $this->input->post('phone');
		$data['email'] = $this->input->post('email');
		// var_dump()
		$this->Admin_model->booking_data($data);
	}




	public function mail()
	{
		$this->load->view('mail');   
	}

	public function feedback()
	{
		$this->load->view('feedback');   
	}



	public function honeybreezy_Honeymoon()
	{
		$this->load->view('include/header');    
		$this->load->view('honeybreezy_Honeymoon');   
		$this->load->view('include/footer');    
	}

	public function naturebliss_Honeymoon()
	{
		$this->load->view('include/header');    
		$this->load->view('naturebliss_Honeymoon');   
		$this->load->view('include/footer');    
	}

	public function southdelight_Honeymoon()
	{
		$this->load->view('include/header');    
		$this->load->view('southdelight_Honeymoon');  
		$this->load->view('include/footer');     
	}

	public function window_to_Karnataka_Honeymoon()
	{
		$this->load->view('include/header');    
		$this->load->view('window_to_Karnataka_Honeymoon');   
		$this->load->view('include/footer');    
	}

	






}
