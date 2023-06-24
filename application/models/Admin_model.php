<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_model extends CI_Model {

  public function __construct() 
  {
    
    parent::__construct(); 
  }

  public function login($email,$password){
 
    $this->db->where('email', $email);
    $this->db->where('password', $password);
    $query = $this->db->get('admin');
    if ($query->num_rows() == 1) {
      $row = $query->row();
      $_SESSION["email"] = $email;
    //   echo "Logged in successfully";
      return true;
    } else {
        // echo "Wrong credential";
    //   return false;
    }
  }


  public function save_image($data){
   
		$insert_data['img_url'] = $data['gallery_img'];
		$insert_data['hotel_name'] = $data['hotel_title'];
		$query = $this->db->insert('hotel', $insert_data);
    redirect('dashboard');
  }



  public function save_event($data){
    $insert_data['event_cotegory'] = $data['event_cotegory'];
    $insert_data['desciption'] = $data['Desciption'];
		$insert_data['img_url'] = $data['event_img'];
		$query = $this->db->insert('events', $insert_data);
    redirect('events');
  }

  public function get_hotel_list(){
    $this->db->select('*');
    $this->db->from('hotel');
    return $this->db->get();
  }

  public function get_hotelbyid_list($id){
    $this->db->where('id', $id);
    $this->db->from('hotel');
    return $this->db->get();
  }

  public function edit_hotel_process($id,$data){
    $update_data['hotel_name'] = $data['hotel_title'];
		$update_data['img_url'] = $data['myhotel_img'];
    $this->db->where('id',$id);
		$query = $this->db->update('hotel', $update_data);
    redirect('dashboard');
  }


  public function getVehicles(){
    $this->db->select('*');
    $this->db->from('vehicle');
    return $this->db->get();
  }


  public function save_vehicle($data){
   
		$insert_data['img_url'] = $data['vehicle_img'];
		$insert_data['vehicle_name'] = $data['vehicle_title'];
		$query = $this->db->insert('vehicle', $insert_data);
    redirect('vehicle-list');
  }


  public function get_vehiclebyid_list($id){
    $this->db->where('id', $id);
    $this->db->from('vehicle');
    return $this->db->get();
  }

  public function delete_vehicle($id){
    $this->db->where('id', $id);
    $this->db->delete('vehicle');
    redirect('vehicle-list');
  }

  
  public function edit_vehicle_process($id,$data){
// print_r($data);
    $update_data['vehicle_name'] = $data['vehicle_title'];
		$update_data['img_url'] = $data['myvehicle_img'];
    $this->db->where('id',$id);
		$query = $this->db->update('vehicle', $update_data);
    redirect('vehicle-list');
  }


  public function getEvents(){
    $this->db->select('*');
    $this->db->from('events');
    return $this->db->get();
  }

  public function delete_event($id){
    $this->db->where('id', $id);
    $this->db->delete('events');
    redirect('events','refresh');
  }

  public function delete_hotel($id){
    $this->db->where('id', $id);
    $this->db->delete('hotel');
    redirect('dashboard','refresh');
  }


  public function get_event($id){
    $this->db->where('id', $id);
    $this->db->from('events');
    return $this->db->get();
  }


    public function past_event(){
      $this->db->where('event_cotegory', 'past-event');
      $this->db->from('events');
      return $this->db->get();
    }
    public function social_event(){
      $this->db->where('event_cotegory', 'social-works');
      $this->db->from('events');
      return $this->db->get();
    }
    public function tournament_event(){
      $this->db->where('event_cotegory', 'tournament');
      $this->db->from('events');
      return $this->db->get();
    }
    public function upcomimg_event(){
      $this->db->where('event_cotegory', 'upcoming-events');
      $this->db->from('events');
      return $this->db->get();
    }


  public function edit_event($id,$data){
    $update_data['event_cotegory'] = $data['event_cotegory'];
    $update_data['desciption'] = $data['Desciption'];
		$update_data['img_url'] = $data['event_img'];
    $this->db->where('id',$id);
		$query = $this->db->update('events', $update_data);
    redirect('events');
  }

  public function get_enquiry_list(){
      $this->db->select('*');
      $this->db->from('enquiry');
      return $this->db->get();
  }

  public function get_booking_list(){
      $this->db->select('*');
      $this->db->from('booking');
      return $this->db->get();
  }

  public function enquiry_data($insert_data){
    $query = $this->db->insert('enquiry', $insert_data);
    echo '<script>
    alert("Message sent successfully ! Thank you");
    window.location.href = "home";
    </script>';
  }

  public function booking_data($insert_data){
    $query = $this->db->insert('booking', $insert_data);
    echo '<script>
    alert("Message sent successfully ! Thank you");
    window.location.href = "home";
    </script>';
  }

  

}