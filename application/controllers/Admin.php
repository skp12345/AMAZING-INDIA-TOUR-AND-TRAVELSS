<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	public function __construct()
	{
	  parent::__construct();
	  $this->load->model('Admin_model');
	}

	public function index()
	{
		$this->load->view('admin/pages-login');
	}

	public function Dashboard()
	{
		// $data['title'] = "Employee update";
		$data['hotel_list'] = $this->Admin_model->get_hotel_list();
		$this->load->view('admin/include/header');
		$this->load->view('admin/index',$data);
		$this->load->view('admin/include/footer');
	}


	public function login_process()
	{
		$email=$this->input->post('email');
		$password=$this->input->post('password');
		$this->load->model('Admin_model');
		$Iscorrect =$this->Admin_model->login($email,$password);
		if($Iscorrect){
			redirect('dashboard');
		}else{
			echo '<script>alert("Wrong email or id")</script>';
			$this->load->view('admin/pages-login');	
		}
	}
 
	public function logout(){
		session_unset();
		session_destroy();
		redirect('home','refresh');	
	}

	public function events(){
		$data['events'] = $this->Admin_model->getEvents();
		$this->load->view('admin/include/header');
		$this->load->view('admin/events',$data);
		$this->load->view('admin/include/footer');
	}


	public function addHotel(){
		$this->load->view('admin/include/header');
		$this->load->view('admin/addhotel');
		$this->load->view('admin/include/footer');
	}

	public function edit_hotel($id){
		$data['hotel_list'] = $this->Admin_model->get_hotelbyid_list($id);
		$this->load->view('admin/include/header');
		$this->load->view('admin/edit_hotel',$data);
		$this->load->view('admin/include/footer');
	}

	public function uploadimage(){
		$data['hotel_title'] = $this->input->post('hotel_title', TRUE);
		$config['upload_path']          = APPPATH. '../assets/upload/gallery/';
        $config['allowed_types']        = 'png|jpg|jpeg|PNG|JPG|JPEG';
	    $config['max_size']        = '10000';

        $this->load->library('upload', $config);
          if ( ! $this->upload->do_upload('gallery_img')){
            $error = array('error' => $this->upload->display_errors());
            // redirect('dash/view_product');
			print_r($error);
        }else{

            //file is uploaded successfully
            //now get the file uploaded data 
            $upload_data = $this->upload->data();

            //get the uploaded file name
            $data['gallery_img'] = $upload_data['file_name'];

            //store pic data to the db
            $this->Admin_model->save_image($data);

            // redirect('dash/view_product');
        }
	}
	public function edit_hotel_process($id){
		$data['hotel_title'] = $this->input->post('hotel_title', TRUE);

		if($_FILES['myhotel_img']['name']!=""){
		$config['upload_path']          = APPPATH. '../assets/upload/gallery/';
        $config['allowed_types']        = 'png|jpg|jpeg|PNG|JPG|JPEG';
	    $config['max_size']        = '10000';

        $this->load->library('upload', $config);
          if ( ! $this->upload->do_upload('myhotel_img')){
            $error = array('error' => $this->upload->display_errors());
            // redirect('dash/view_product');
			print_r($error);
        }else{

            //file is uploaded successfully
            //now get the file uploaded data 
            $upload_data = $this->upload->data();

            //get the uploaded file name
            $data['myhotel_img'] = $upload_data['file_name'];

            //store pic data to the db
            $this->Admin_model->edit_hotel_process($id,$data);

            // redirect('dash/view_product');
        }
	}else{
		$data['myhotel_img'] = $this->input->post('selected_img');
        $this->Admin_model->edit_hotel_process($id,$data);
	}
}



public function vehicle_list(){
	$data['vehicles'] = $this->Admin_model->getVehicles();
	$this->load->view('admin/include/header');
	$this->load->view('admin/vehicle_list',$data);
	$this->load->view('admin/include/footer');
}

public function add_vehicle(){
	$data['vehicles'] = $this->Admin_model->getVehicles();
	$this->load->view('admin/include/header');
	$this->load->view('admin/add_vehicle',$data);
	$this->load->view('admin/include/footer');
}

public function add_vechile_process(){
	$data['vehicle_title'] = $this->input->post('vehicle_title', TRUE);
	$config['upload_path']          = APPPATH. '../assets/upload/gallery/';
	$config['allowed_types']        = 'png|jpg|jpeg|PNG|JPG|JPEG';
	$config['max_size']        = '10000';

	$this->load->library('upload', $config);
	  if ( ! $this->upload->do_upload('vehicle_img')){
		$error = array('error' => $this->upload->display_errors());
		// redirect('dash/view_product');
		print_r($error);
	}else{

		//file is uploaded successfully
		//now get the file uploaded data 
		$upload_data = $this->upload->data();

		//get the uploaded file name
		$data['vehicle_img'] = $upload_data['file_name'];

		//store pic data to the db
		$this->Admin_model->save_vehicle($data);

		// redirect('dash/view_product');
	}	
}


public function edit_vehicle_process($id){
	$data['vehicle_title'] = $this->input->post('vehicle_title', TRUE);

	if($_FILES['myvehicle_img']['name']!=""){
	$config['upload_path']          = APPPATH. '../assets/upload/gallery/';
	$config['allowed_types']        = 'png|jpg|jpeg|PNG|JPG|JPEG';
	$config['max_size']        = '10000';

	$this->load->library('upload', $config);
	  if ( ! $this->upload->do_upload('myvehicle_img')){
		$error = array('error' => $this->upload->display_errors());
		// redirect('dash/view_product');
		print_r($error);
	}else{

		//file is uploaded successfully
		//now get the file uploaded data 
		$upload_data = $this->upload->data();

		//get the uploaded file name
		$data['myvehicle_img'] = $upload_data['file_name'];

		//store pic data to the db
		$this->Admin_model->edit_vehicle_process($id,$data);

		// redirect('dash/view_product');
	}
}else{
	$data['myvehicle_img'] = $this->input->post('selected_img');
	$this->Admin_model->edit_vehicle_process($id,$data);
}
}


public function delete_vehicle($id){
	$this->Admin_model->delete_vehicle($id);
}


public function edit_vehicle($id){
	$data['vehicle_list'] = $this->Admin_model->get_vehiclebyid_list($id);
	$this->load->view('admin/include/header');
	$this->load->view('admin/edit_vehicle',$data);
	$this->load->view('admin/include/footer');
}



	public function addevent(){
		$this->load->view('admin/include/header');
		$this->load->view('admin/addevent');
		$this->load->view('admin/include/footer');
	}


	public function addevent_process(){
		     //get the form values
			 $data['event_cotegory'] = $this->input->post('event_cotegory', TRUE);
			 $data['Desciption'] = $this->input->post('Desciption', TRUE);
	 
			 //file upload code 
			 //set file upload settings 
			 $config['upload_path']          = APPPATH. '../assets/upload/gallery/';
			 $config['allowed_types']        = 'png|jpg|jpeg|PNG|JPG|JPEG';
			 $config['max_size']        = '10000';
			 $this->load->library('upload', $config);
			   if ( ! $this->upload->do_upload('event_img')){
				 $error = array('error' => $this->upload->display_errors());
				//  redirect('dash/view_product');
				print_r($error);
			 }else{
	 
				 //file is uploaded successfully
				 //now get the file uploaded data 
				 $upload_data = $this->upload->data();
	 
				 //get the uploaded file name
				 $data['event_img'] = $upload_data['file_name'];
	 
				 //store pic data to the db
				 $this->Admin_model->save_event($data);
	 
				 // redirect('dash/view_product');
			 }
	}



	public function editevent($id){
	$data['event']=$this->Admin_model->get_event($id);
		$this->load->view('admin/include/header');
		$this->load->view('admin/editevent',$data);
		$this->load->view('admin/include/footer');
	}
	
	public function editevent_process($id){
	 //get the form values
	 $data['event_cotegory'] = $this->input->post('event_cotegory', TRUE);
	 $data['Desciption'] = $this->input->post('Desciption', TRUE);

	 //file upload code 
	 //set file upload settings 
	 if($_FILES['event_img']['name']!=""){
	 $config['upload_path']          = APPPATH. '../assets/upload/gallery/';
	 $config['allowed_types']        = 'png|jpg|jpeg|PNG|JPG|JPEG';
	 $config['max_size']        = '10000';

	 $this->load->library('upload', $config);
	   if ( ! $this->upload->do_upload('event_img')){
		 $error = array('error' => $this->upload->display_errors());
		//  redirect('dash/view_product');
		print_r($error);
	 }else{

		 //file is uploaded successfully
		 //now get the file uploaded data 
		 $upload_data = $this->upload->data();

		 //get the uploaded file name
		 $data['event_img'] = $upload_data['file_name'];

		 //store pic data to the db
		 $this->Admin_model->edit_event($id,$data);

		 // redirect('dash/view_product');
	 }
	}else{
        $data['event_img'] = $this->input->post('selected_img');
        $this->Admin_model->edit_event($id,$data);
      }

	}

	public function deletehotel($id){
		$this->Admin_model->delete_hotel($id);
	}

	public function deleteevent($id){
		$this->Admin_model->delete_event($id);
	}

	public function enquiry_list(){

$data['enquiry_list'] = $this->Admin_model->get_enquiry_list();
$this->load->view('admin/include/header');
$this->load->view('admin/enquiry_list',$data);
$this->load->view('admin/include/footer');
	}
	
	public function booking_list(){

$data['booking_list'] = $this->Admin_model->get_booking_list();
$this->load->view('admin/include/header');
$this->load->view('admin/booking',$data);
$this->load->view('admin/include/footer');
	}
	
	}

