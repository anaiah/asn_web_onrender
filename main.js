<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ASN ENC INC </title>
  <!-- <link rel="shortcut icon" type="image/png" href="../assets/images/logos/favicon.png" /> -->
  <link rel="shortcut icon" href="/assets/images/logos/asiaoneico.png" type="image/x-icon" sizes="32x32">  
  <!-- <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css?h=0516002ac6166f9bc5a60df257b0e1f8">
    -->
  <link rel="stylesheet" href="/assets/css/styles.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/assets/css/osndp.css" />
</head>

<body>
  
  <!--  Body Wrapper -->
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <!-- Sidebar Start -->
    <aside class="left-sidebar">
      <!-- Sidebar scroll-->
      <div>
        <!--//LOGO//-->
        <div class="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" class="text-nowrap logo-img">
            <img src="assets/images/logos/asiaone_.png" width="180" alt="" />
          </a>
          <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i class="ti ti-x fs-8"></i>
          </div>
        </div>

        <!-- //============= Sidebar navigation ===============//-->
        <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Home</span>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="javascript:util.scrollsTo('dashboard')" aria-expanded="false">
                <span>
                  <i class="ti ti-chart-dots-3"></i>
                </span>
                <span class="hide-menu">Dashboard</span>
              </a>
            </li>

            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Claims</span>
            </li>

            <li class="sidebar-item">
              <a class="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i class="ti ti-list-search"></i>
                </span>
                <span class="hide-menu">Search</span>
              
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="javascript:util.modalShow('claimsModal')" aria-expanded="false">
                <span>
                  <i class="ti ti-file-spreadsheet"></i>
                </span>
                <span class="hide-menu">Upload Excel File</span>
              
              </a>
            </li>

            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">HRIS</span>
            </li>
            <!--//
            <li class="sidebar-item">
              <a class="sidebar-link" href="./ui-buttons.html" aria-expanded="false">
                <span>
                  <i class="ti ti-article"></i>
                </span>
              </a>
            </li>
            //-->
            <li class="sidebar-item">
              <a id='nu-project' class="sidebar-link" href="javascript:util.modalShow('newempModal')" aria-expanded="false">
                <span>
                  <!-- <i class="ti ti-home-plus"></i> -->
                  <i class="ti ti-user-plus"></i>
                </span>
                <span class="hide-menu">Add New Employee</span>
              </a>
            </li>
<!-- 
            <li class="sidebar-item">
              <a class="sidebar-link" href="javascript:util.scrollsTo('current_projects')" aria-expanded="false">
                <span>
                  <i class="ti ti-brand-unity"></i>
                </span>
                <span class="hide-menu">Current Projects</span><span id="project-badge" class="badge bg-danger badge-notification badge-pill">0</span>
                
              </a>
            </li> -->
            

            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">AUTH</span>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./" aria-expanded="false">
                <span>
                  <i class="ti ti-login"></i>
                </span>
                <span class="hide-menu">Login</span>
              </a>
            </li>
<!--             
            <li class="sidebar-item">
              <a class="sidebar-link" href="./authentication-register.html" aria-expanded="false">
                <span>
                  <i class="ti ti-user-plus"></i>
                </span>
                <span class="hide-menu">Register</span>
              </a>
            </li>
 -->

            <!-- <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">EXTRA</span>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./icon-tabler.html" aria-expanded="false">
                <span>
                  <i class="ti ti-mood-happy"></i>
                </span>
                <span class="hide-menu">Icons</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./sample-page.html" aria-expanded="false">
                <span>
                  <i class="ti ti-aperture"></i>
                </span>
                <span class="hide-menu">Sample Page</span>
              </a>
            </li> -->
          </ul>
   
        </nav>
        <!-- End Sidebar navigation -->
      
      </div>
      <!-- End Sidebar scroll-->
    </aside>
    <!--  Sidebar End -->
    <!--  Main wrapper -->
    <div class="body-wrapper">
      <!--  Header Start -->
      <header class="app-header boxshadoe">
        <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item d-block d-xl-none">
              <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i class="ti ti-menu-2"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                <i class="ti ti-bell-ringing"></i>
                <div class="notification bg-primary rounded-circle"></div>
              </a>
            </li>
          </ul>
          <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              
              <!-- <a href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/" target="_blank" class="btn btn-primary">Download Free</a>
               -->
              <li class="nav-item dropdown">
                <a class="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">

                  <!--//=== AVATAR ==== //-->
                  <img id='img-profile' src="" alt="" width="35" height="35" class="rounded-circle">
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div class="message-body">
                    <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-user fs-6"></i>
                      <p class="mb-0 fs-3">My Profile</p>
                    </a>
                    <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-mail fs-6"></i>
                      <p class="mb-0 fs-3">My Account</p>
                    </a>
                    <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-list-check fs-6"></i>
                      <p class="mb-0 fs-3">My Task</p>
                    </a>
                    <a href="./" class="btn btn-danger mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!--  Header End -->

    
      
      <!--//CURRENT PROJECTS//-->
      <div class="container-fluid" id="current_projects">


        <div class="container-xl">
          <div class="row row-deck row-cards">
            <div class="col-4">
              <div class="card">
                <div class="card-body" style="height: 10rem"></div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="card-body" style="height: 10rem"></div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="card-body" style="height: 10rem"></div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body" >
                  <div class="container  mt-0">
                    <div class="  mb-sm-0">
                      <h5 class="card-title fw-semibold">Sales Overview</h5>
                    </div>
                    <div class="d-flex gx-5">
                      <div class="col-sm-3">
                        <label for="filter_number" class="text-nowrap form-label">Filter Employee Number</label>
                        <input type="text" onchange="javascript:asn.filterBy(this.value)" class="form-control" id="filter_number" name="filter_number">
                        
                      </div>
                      <div class="col-sm-3">
                      
                      <label for="filter_name" lass="text-nowrap form-label">Filter by Employee Name</label>
                      <input type="text" onchange="javascript:asn.filterBy(this.value)" class="form-control" id="filter_name" name="filter_name">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-semibold mb-4">Claims</h5>
            <p id='p-notif' class="mb-0"> </p>
            <div class="col-md-3 text-nowrap">
                <label for="filter_number">Filter by Employee Number</label>
                <select onchange="javascript:asn.filterBy(this.value)" class="form-control" id="filter_number" name="filter_number">
                </select>
            
              <label for="filter_name">Filter by Employee Name</label>
              <select onchange="javascript:asn.filterBy(this.value)" class="form-control" id="filter_name" name="filter_name">
              </select>
          </div>
            <div id="site_info" class="table-responsive">
               
            </div>
          </div>
        </div> -->
      </div>
      <!--//CHARTS-->
      <div class="container-fluid" id="dashboard">

        <!--  Row 1 -->
        <div class="row">
          <div class="col-lg-8 d-flex align-items-strech">
            <div class="card w-100">
              <div class="card-body">
                <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div class="  mb-sm-0">
                    <h5 class="card-title fw-semibold">Sales Overview</h5>
                  </div>
                  <div>
                    <select class="form-select">
                      <option value="1">March 2023</option>
                      <option value="2">April 2023</option>
                      <option value="3">May 2023</option>
                      <option value="4">June 2023</option>
                    </select>
                  </div>
                </div>
                <div id="chart"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                <!-- Yearly Breakup -->
                <div class="card overflow-hidden">
                  <div class="card-body p-4">
                    <h5 class="card-title mb-9 fw-semibold">Yearly Breakup</h5>
                    <div class="row align-items-center">
                      <div class="col-8">
                        <h4 class="fw-semibold  ">$36,358</h4>
                        <div class="d-flex align-items-center  ">
                          <span
                            class="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                            <i class="ti ti-arrow-up-left text-success"></i>
                          </span>
                          <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                          <p class="fs-3 mb-0">last year</p>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="me-4">
                            <span class="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                            <span class="fs-2">2023</span>
                          </div>
                          <div>
                            <span class="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                            <span class="fs-2">2023</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex justify-content-center">
                          <div id="breakup"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <!-- Monthly Earnings -->
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-8">
                        <h5 class="card-title mb-9 fw-semibold"> Monthly Earnings </h5>
                        <h4 class="fw-semibold  ">$6,820</h4>
                        <div class="d-flex align-items-center pb-1">
                          <span
                            class="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                            <i class="ti ti-arrow-down-right text-danger"></i>
                          </span>
                          <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                          <p class="fs-3 mb-0">last year</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex justify-content-end">
                          <div
                            class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                            <i class="ti ti-currency-dollar fs-6"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="earning"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body p-4">
                <div class="mb-4">
                  <h5 class="card-title fw-semibold">Recent Transactions</h5>
                </div>
                <ul class="timeline-widget mb-0 position-relative mb-n5">
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">09:30</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-primary flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1">Payment received from John Doe of $385.90</div>
                  </li>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">10:00 am</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-info flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New sale recorded <a
                        href="javascript:void(0)" class="text-primary d-block fw-normal">#ML-3467</a>
                    </div>
                  </li>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1">Payment was made of $64.95 to Michael</div>
                  </li>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-warning flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New sale recorded <a
                        href="javascript:void(0)" class="text-primary d-block fw-normal">#ML-3467</a>
                    </div>
                  </li>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-danger flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New arrival recorded 
                    </div>
                  </li>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1">Payment Done</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        
        <!-- <div class="row">
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="../assets/images/products/s4.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">Boat Headphone</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$50 <span class="ms-2 fw-normal text-muted fs-3"><del>$65</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="../assets/images/products/s5.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">MacBook Air Pro</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$650 <span class="ms-2 fw-normal text-muted fs-3"><del>$900</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="../assets/images/products/s7.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">Red Valvet Dress</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$150 <span class="ms-2 fw-normal text-muted fs-3"><del>$200</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="../assets/images/products/s11.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">Cute Soft Teddybear</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$285 <span class="ms-2 fw-normal text-muted fs-3"><del>$345</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-6 px-6 text-center">
          <p class="mb-0 fs-4">Design and Developed by <a href="https://adminmart.com/" target="_blank" class="pe-1 text-primary text-decoration-underline">AdminMart.com</a></p>
        </div> -->
      </div>
      <!--//END CHARTS-->
    </div>

    <!--//image Modal//-->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
          <div class="modal-content">
              
              <div class="modal-header bg-primary">
                  <h4 class="modal-title"><i class="fa fa-image-o" style="color:beige;font-size:17px"></i>View Attachment</h4>
                  <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
              </div>

              <!--//modal body-->
              <div id="pdf-modal-body" class="modal-body">
                  <iframe src="" title="" id="pdf_iframe" width='100%' height='97%' allowfullscreen></iframe>
                  
              </div>
              <!--//footer-->
              <div class="modal-footer">
                  <button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
  </div>
  <!--//end image modal-->
  
  <!--//Modal for adding New Site //-->
  <div class="modal fade" id="newsiteModal" tabindex="-1" aria-labelledby="newsiteModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
        <div class="modal-content">
            
            <div class="modal-header bg-primary">
                <h4 class="modal-title"><i class="bi-pencil-square" style="font-size:17px"></i> Add New Site</h4>
                <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
            </div>

            <!--//modal body-->
            <div class="modal-body">
                
                <!--//=== ALERT CONTAINER!!!-->
                <div id="newsitePlaceHolder"></div>
                <!--//END ALERT-->

                <div class="container-fluid" >	
                    <!--//form goes here -->
                    <!--//FORM SIGNUP-->
                    <form id="newempForm" class="needs-validation row gy-2 gx-2 align-items-center" method="GET" novalidate>
                    
                    <!-- <div class="row mb-4"> -->
                    <div class="row">   
                      <!-- serial no. -->
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="serial">Project Site No.</label>
                                <input readonly type="text" id="serial" name="serial" class="form-control" />
                            </div>
                        </div>
                        
                        <div class="col-lg-4 mb-3">
                          <div class="form-outline">
                              <label class="form-label mb-0" for="proj_engr">Project Eng'r.</label>
                              <select class="form-control equipmentx" id="proj_engr" name="proj_engr" required>
                              </select>
                              <div class="invalid-feedback">
                                *Error
                              </div>
                              <div class="valid-feedback">
                                  Looking Good!
                              </div>
                          </div>
                        </div>

                        <div class="col-lg-4 mb-3">
                          <div class="form-outline">
                              <label class="form-label mb-0" for="proj_design">Project Design</label>
                              <select class="form-control equipmentx" id="proj_design" name="proj_design" required>

                              </select>
                              <div class="invalid-feedback">
                                *Error
                              </div>
                              <div class="valid-feedback">
                                  Looking Good!
                              </div>
                          </div>
                        </div>
                    </div>
                    
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row">
                        <!-- equipment number    -->
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="equipment_type">Mall</label>
                                
                                <!--// onchange ="javascript:osndp.showCategory(this.value)"//-->
                                <!--//onclick="javascript:osndp.showCategory(document.getElementById('equipment_type').value)"-->
                                <select class="form-control equipmentx" onchange ="javascript:osndp.showMallCategory(this.value,this.options[this.selectedIndex].text)" id="mall_type" name="mall_type" required>
                                    
                                </select>
                                <div class="invalid-feedback">
                                    *Error
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            </div>
                        </div>

                        <!--//mall DESCRIPTION-->
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="mall_description">Mall Description</label>
                                <input type="text" class="form-control equipmentx" onkeydown="event.preventDefault();" 
                                style="caret-color: transparent !important;" id="mall_description" name="mall_description" required />
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            </div>
                        
                        </div>

                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label  class="form-label mb-0" for="business_name">Business Name</label>
                                <input type="text" style="text-transform: uppercase" class="form-control equipmentx"  id="business_name" name="business_name" required />
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="trade_name">Trade Name</label>
                                <input type="text" style="text-transform: uppercase" class="form-control g-10 equipmentx"  id="trade_name" name="trade_name" required />
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="area_size">Area Size (sq/m)</label>
                                <input value="100" type="number" step="0.01" onblur="" id="area_size" name="area_size" placeholder="0.00" class="form-control equipmentx" min="20" required />
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="area_rate">Rate</label>
                                <input value="1000" type="number" step="0.01" onblur="" id="area_rate" name="area_rate" placeholder="0.00" class="form-control equipmentx" min="20"  required />
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="lease_term_start">Lease Term Start</label>
                                <input value="2024-01-01" id="lease_term_start" name="lease_term_start" class="form-control equipmentx" type="date" required/>
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="lease_term_end">Lease Term End</label>
                                <input value="2026-01-01" id="lease_term_end" name="lease_term_end" class="form-control equipmentx" type="date" required/>
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3">
                            <div class="form-outline">
                                <label class="form-label mb-0" for="contract_sign">Contract Signed</label>
                                <input value="2024-01-03" id="contract_sign" name="contract_sign" class="form-control equipmentx" type="date" required/>
                                <div class="invalid-feedback">
                                    Required Field
                                </div>
                                <div class="valid-feedback">
                                    Looking Good!
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="row">
                        <div class="col-lg-4 mb-0">
                            <div class="form-outline">
                                <label class="form-label mb-0" style="text-transform: uppercase" for="remarks">Remarks</label>
                                <textarea class="form-control equipmentx" id="remarks" name="remarks" rows="4"></textarea>
                                <input class="mt-0 lets-hide" name="serial_pdf" id="serial_pdf" >
                            </div>
                        </div>  
                    </div>
                    
                    </form>
                    <!--//end form -->
                    
                    <div class="row">
                      <div class="col-lg-4 mb-0">
                        <!--//form file upload-->
                        <form id="uploadForm" name="uploadForm" action="http://localhost:10000/uploadpdf" enctype="multipart/form-data" method="post">
                          <div class="form-outline">
                            <label class="form-label mb-0" for="uploaded_file">Upload Contract</label>
                            <input onchange="osndp.checkFileSize()" class="form-control equipmentxx" type="file" name="uploaded_file" id="uploaded_file" accept='application/pdf' required />
                            <input id="upload-btn" class="btn btn-warning lets-hide" type="submit" value="Upload">
                            <p><span id="size"></span></p>
                            <div id="blindspot"></div>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                </div><!--//end container-fluid//-->
                
            </div><!--//end modalbody//-->
            <!--//footer-->
            <div class="modal-footer">
                <button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                <button class="btn btn-primary" id="mall-save-btn" onclick="javascript:util.validateMe('newsiteModal','#newsiteForm','equipmentx')" type="button">
                <i id="i-save" class="fa fa-floppy-o"></i> Save
                </button>
            </div>
        </div>
    </div>
  </div>					
  <!--//end newsiteModal//-->

  <!--//modal for adding comments -->
  <div class="modal fade" id="commentsModal" tabindex="-1" aria-labelledby="commentsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
      <div class="modal-content">
          
          <div class="modal-header modalcolor">
              <h4 class="modal-title"><i class="fa fa-pencil-square-o fa-3x" style="font-size:17px"></i>  Issue Update</h4>
              <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>

          <!--//modal body-->
          <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-8 mb-0">
                   
                      
                        <div class="card w-100">
                          <div class="card-body p-4">
                            <h5 class="card-title fw-semibold mb-4">Recent Post</h5>
                            <div class="table-responsive">
                              <table class="table text-nowrap mb-0 align-middle">
                                <thead class="text-dark fs-4">
                                  <tr>
                                    <th class="border-bottom-0">
                                      <h6 class="fw-semibold mb-0">&nbsp;</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                      <h6 class="fw-semibold mb-0">Assigned</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                      <h6 class="fw-semibold mb-0">Issue</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                      <h6 class="fw-semibold mb-0">Priority</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                      <h6 class="fw-semibold mb-0">Resolved</h6>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="border-bottom-0"><h6 class="fw-semibold mb-0">
                                      <img id='avatar-profile' src="assets/images/profile/aperez.jpg" alt="" width="35" height="35" class="avatar">
                                    </h6></td>
                                    <td class="border-bottom-0">
                                        <h6 class="fw-semibold mb-1">April Perez</h6>
                                        <span class="fw-normal">Proj Design</span>                          
                                    </td>
                                    <td class="border-bottom-0">
                                      <p class="mb-0 fw-normal">Wrong Color Scheme applied on the Wall.</p>
                                    </td>
                                    <td class="border-bottom-0">
                                      <div class="d-flex align-items-center gap-2">
                                        <span class="badge bg-primary rounded-3 fw-semibold">Low</span>
                                      </div>
                                    </td>
                                    <td class="border-bottom-0">
                                      <div class="d-flex align-items-center gap-2">
                                        <span class="badge bg-primary rounded-3 fw-semibold">Low</span>
                                      </div>
                                    </td>
                                  </tr> 
                                  <tr>
                                    <td class="border-bottom-0"><h6 class="fw-semibold mb-0">
                                      <img id='avatar-profile' src="assets/images/profile/user-1.jpg" alt="" width="35" height="35" class="avatar">
                                    </h6></td>
                                    <td class="border-bottom-0">
                                        <h6 class="fw-semibold mb-1">Norvin Magpayo</h6>
                                        <span class="fw-normal">Proj Eng'r</span>                          
                                    </td>
                                    <td class="border-bottom-0">
                                      <p class="mb-0 fw-normal">Lighting for Pantry not working</p>
                                    </td>
                                    <td class="border-bottom-0">
                                      <div class="d-flex align-items-center gap-2">
                                        <span class="badge bg-secondary rounded-3 fw-semibold">Medium</span>
                                      </div>
                                    </td>
                                    <td class="border-bottom-0">
                                      <div class="d-flex align-items-center gap-2">
                                        <span class="badge bg-primary rounded-3 fw-semibold">Low</span>
                                      </div>
                                    </td>
                                  </tr> 
                                                         
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                       
                  </div>
                  <div class="col-lg-4 mb-0">
                    <form id="commentsForm" class="row gy-2 gx-2 " method="GET" novalidate>
                      <div class="row">
                      <div class="form-outline">
                          <label class="form-label mb-0" for="issue-remarks">Issue Remarks</label>
                          <textarea class="form-control equipmentx" id="issue-remarks" name="issue-remarks" rows="4" required></textarea>
                      </div>
                      </div>

                      <div class="row mt-2">
                        <div class="btn-group" role="group" aria-label="Basic example">
                          <button class="btn btn-light custom" type="button" data-bs-dismiss="modal">Close</button>
                          <button class="btn btn-primary custom" id="comment-save-btn" onclick="javascript:util.validateMe('commentsModal','#commentsForm','equipmentx')" type="button">
                          <i id="i-save" class="fa fa-floppy-o"></i> Save
                          </button>
                        </div>
                      </div>
                    </form>   
                    <!--END FORM -->
                </div>

                
                
                </div>

                
              </div>
          </div>
          <!--//footer-->
          <div class="modal-footer">
              
          </div>
      </div>
  </div>
  </div>        


  <!--//MALL description modal-->
  <div class="modal fade" id="equipmentTypeModal" tabindex="-1" aria-labelledby="equipmentTypeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
              
              <div class="modal-header modalcolor">
                  <h4 class="modal-title"><i class="bi-pencil-square" style="font-size:10px"></i>Select Mall</h4>
                  <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
              </div>

              <!--//modal body-->
              <div class="modal-body">
                  
                  <!--//=== ALERT CONTAINER!!!-->
                  <div id="equipmentTypePlaceHolder"></div>
                  <!--//END ALERT-->

                  <div class="container-fluid" >	
                      <div class="row mb-4">
                          <div class="col">
                              <label for="categoryType"><span id='mall-label'></span></label>
                              
                              <!--///javascript:osndp.updateEquipment(this.value)-->
                              <select onclick="javascript:osndp.updateMallDesc(this.value)" class="form-control equipmentx" required name="categoryType" id="categoryType">
                              </select>
                          </div>
                      </div>
                  </div>
                  <!--//end container//-->
          </div>
              <!--//footer-->
              <div class="modal-footer">
                  <button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                  <!--//<button class="btn btn-primary" id="category-btn" onclick="" type="button">Submit</button>//-->
              </div>
          </div>
      </div>
  </div>					

  <!--//Modal for adding New Site //-->
<div class="modal fade" id="claimsModal" tabindex="-1" aria-labelledby="claimsModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-scrollable">
      <div class="modal-content">
          
          <div class="modal-header bg-primary">
              <h4 class="modal-title"><i class="bi-pencil-square" style="font-size:17px"></i> Claims Upload</h4>
              <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>

          <!--//modal body-->
          <div class="modal-body">
              
              <!--//=== ALERT CONTAINER!!!-->
              <div id="newsitePlaceHolder"></div>
              <!--//END ALERT-->

              <div class="container-fluid" >	
                  
                  <div class="row">
                    <div class="col-lg-4 mb-0">
                      <!-- //form file upload onrender.com -->
                      <form id="claimsuploadForm" name="claimsuploadForm" action="http://:192.168.128.221:10000/claims" enctype="multipart/form-data" method="post">
                        <div class="form-outline">
                          <label class="form-label mb-0" for="claims_uploaded_file">Upload Picture</label>
                          <input type="file" class="form-control uploadz" name="claims_upload_file" id="claims_upload_file" accept=".xlsx, .xls" required />

                          <input id="claims-upload-btn" class="btn btn-warning " type="submit" value="Upload">
                          <p><span id="size"></span></p>
                          <div id="blindspot"></div>
                        </div>
                      </form>
                       
                      <!--//end form -->
                  
                    </div>
                  </div>
                  
              </div><!--//end container-fluid//-->
              
          </div><!--//end modalbody//-->
          <!--//footer-->
          <div class="modal-footer">
              <button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
              <!-- <button class="btn btn-primary" id="mall-save-btn" onclick="" type="button">
              <i id="i-save" class="fa fa-floppy-o"></i> Save
              </button> -->
          </div>
      </div>
  </div>
</div>					
<!--//end claimsModal//-->

  <!--//end container description modal-->
<!--//Modal for adding New Site //-->
<div class="modal fade" id="newempModal" tabindex="-1" aria-labelledby="newsiteModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
      <div class="modal-content">
          
          <div class="modal-header bg-primary">
              <h4 class="modal-title"><i class="bi-pencil-square" style="font-size:17px"></i> Create Account</h4>
              <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>

          <!--//modal body-->
          <div class="modal-body">
              
              <!--//=== ALERT CONTAINER!!!-->
              <div id="newsitePlaceHolder"></div>
              <!--//END ALERT-->

              <div class="container-fluid" >	
                  <!--//form goes here -->
                  <!--//FORM SIGNUP-->
                  <form id="newempForm" class="needs-validation row gy-2 gx-2 align-items-center" method="GET" novalidate>
                    <div class="container mt-5">
                      <h2>HRIS 201 Form</h2>
                      <form>
                          <div class="mb-3">
                              <label for="employeeId" class="form-label">Employee ID</label>
                              <input type="text" class="form-control 201" id="employeeId" name="employeeId" required>
                          </div>
                          <div class="mb-3">
                              <label for="fullName" class="form-label">Full Name</label>
                              <input type="text" class="form-control 201" id="fullName" name="fullName" required>
                          </div>
                          <div class="mb-3">
                              <label for="email" class="form-label">Email Address</label>
                              <input type="email" class="form-control 201"  value="a@b.com" id="email" name="email" required>
                          </div>
                          <div class="mb-3">
                              <label for="phone" class="form-label">Phone Number</label>
                              <input type="tel" class="form-control 201" value="0917 283 1929" id="phone" name="phone" required>
                          </div>
                          <div class="mb-3">
                              <label for="birthDate" class="form-label">Date of Birth</label>
                              <input type="date" class="form-control" value="01/01/1970" id="birthDate" name="birthDate" required>
                          </div>
                          <div class="mb-3">
                              <label for="hireDate" class="form-label">Hire Date</label>
                              <input type="date" class="form-control 201" value="01/01/2025" id="hireDate" name="hireDate" required>
                          </div>
                          <div class="mb-3">
                              <label for="jobTitle" class="form-label">Job Title</label>
                              <input type="text" class="form-control 201" value="quality cntrol" id="jobTitle" name="jobTitle" required>
                          </div>
                          <div class="mb-3">
                              <label for="department" class="form-label">Department</label>
                              <input type="text" class="form-control 201" value="IT" id="department" name="department" required>
                          </div>
                          <div class="mb-3">
                              <label for="employmentStatus" class="form-label">Employment Status</label>
                              <select class="form-control 201" id="employmentStatus" name="employmentStatus" required>
                                  <option value="" disabled>Select status</option>
                                  <option value="Full-Time" selected>Full-Time</option>
                                  <option value="Part-Time">Part-Time</option>
                                  <option value="Contract">Contract</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="address" class="form-label">Address</label>
                              <textarea class="form-control 201" id="address" rows="3" name="address" required>Manila</textarea>
                          </div>
                          <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                      </form>
                  </div>
                         
                  </form>
                  <!--//end form -->
                  
                  <div class="row">
                    <div class="col-lg-4 mb-0">
                      <!-- //form file upload onrender.com -->
                      <form id="uploadForm" name="uploadForm" action="http://:192.168.128.221:10000/postimage" enctype="multipart/form-data" method="post">
                        <div class="form-outline">
                          <label class="form-label mb-0" for="uploaded_file">Upload Picture</label>
                          <input onchange="javascript:main.checkFileSize()" class="form-control equipmentxx" type="file" name="uploaded_file" id="uploaded_file" accept='image/*' required />
                          <input id="upload-btn" class="btn btn-warning lets-hide" type="submit" value="Upload">
                          <p><span id="size"></span></p>
                          <div id="blindspot"></div>
                        </div>
                      </form>
                    </div>
                  </div>
                  
              </div><!--//end container-fluid//-->
              
          </div><!--//end modalbody//-->
          <!--//footer-->
          <div class="modal-footer">
              <button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-primary" id="mall-save-btn" onclick="javascript:util.validateMe('newempModal','#newempForm','201')" type="button">
              <i id="i-save" class="fa fa-floppy-o"></i> Save
              </button>
          </div>
      </div>
  </div>
</div>					
<!--//end newsiteModal//-->


  </div>
  <script src="assets/libs/jquery/dist/jquery.min.js"></script> <!--//sidebarmenu dependent-->
  <script src="assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/sidebarmenu.js"></script>
  <script src="assets/js/app.min.js"></script>
  <script src="assets/libs/apexcharts/dist/apexcharts.min.js"></script>
  <script src="assets/libs/simplebar/dist/simplebar.js"></script>
  <script src="assets/js/dashboard.js"></script>
  
  <script src="http://192.168.79.221:10000/socket.io/socket.io.js"></script>
  <!--//online version 
  <script src="http://osndp.onrender.com/socket.io/socket.io.js"></script>
  -->
  
  <script src="assets/js/util.js"></script>
  <script src="assets/js/main.js"></script>
  
</body>

</html>