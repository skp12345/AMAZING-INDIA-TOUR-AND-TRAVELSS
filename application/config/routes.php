<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

// frontend

$route['default_controller'] = 'Home';
$route['mail'] = 'Home/mail';
$route['about'] = 'Home/about';
$route['contact'] = 'Home/contact';
$route['ayurvedic-packages'] = 'Home/ayurvedic_packages';
$route['bandipur-holidays'] = 'Home/bandipur_holidays';
$route['car-for-tours-transfers'] = 'Home/car_for_tours_transfers';
$route['costal-delight'] = 'Home/costal_delight';
$route['destination'] = 'Home/destination';
$route['honeymoon-package'] = 'Home/honeymoon_package';
$route['hotels-for-holidays-honeymoon'] = 'Home/hotels_for_holidays_honeymoon';
$route['kabini-holidays'] = 'Home/kabini_holidays';
$route['leisure-holidays-package'] = 'Home/leisure_holidays_package';
$route['mysore-dasara-wildlife'] = 'Home/mysore_dasara_wildlife';
$route['pilgrimage-packages'] = 'Home/pilgrimage_packages';
$route['south-delight'] = 'Home/south_delight';
$route['special-interest-packages'] = 'Home/special_interest_packages';
$route['student-packages'] = 'Home/student_packages';
$route['tibet-in-indian'] = 'Home/tibet_in_indian';
$route['wildlife-packages'] = 'Home/wildlife_packages';
$route['package'] = 'Home/package';


$route['honeybreezy-Honeymoon'] = 'Home/honeybreezy_Honeymoon';
$route['naturebliss-Honeymoon'] = 'Home/naturebliss_Honeymoon';
$route['southdelight-Honeymoon'] = 'Home/southdelight_Honeymoon';
$route['window-to-Karnataka-Honeymoon'] = 'Home/window_to_Karnataka_Honeymoon';

$route['enquiry-data'] = 'Home/enquiry_data';
$route['booking-data'] = 'Home/booking_data';









// frontend


// admin

$route['dashboard'] = 'admin/dashboard';
$route['enquiry-list'] = 'admin/enquiry_list';
$route['vehicle-list'] = 'admin/vehicle_list';
$route['add-vehilce'] = 'admin/add_vehicle';





$route['events'] = 'admin/events';
$route['addHotel'] = 'admin/addHotel';
$route['uploadimage'] = 'admin/uploadimage';
$route['addevent'] = 'admin/addevent';
$route['editevent/(:any)'] = 'admin/editevent/$1';
$route['addevent_process'] = 'admin/addevent_process';
$route['editevent_process/(:any)'] = 'admin/editevent_process/$1';
$route['eventlist'] = 'admin/eventlist';

$route['pages-login'] = 'Admin/pageslogin';
$route['logout'] = 'Admin/logout';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

// admin