<template>
<nav id="sidebar" class="active overflow-auto example"
style="height:100vh;">
            <ul class="list-unstyled components">
                <li>
                    <a href="/" >
                        <i class="fas fa-home"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i class="fas fa-user-cog"></i>
                      <span class="menu-icon">Admin
                      </span>
                      </a>
                </li>
                <li>
                    <router-link to="/students">
                    <i class="fas fa-users"></i>
                    </router-link>

                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-briefcase"></i>
                        <span>Batches</span>
                    </a>
                </li>
            <li>
                    <a href="#">
                        <i class="fas fa-chess"></i>
                        <span>Game Arena</span>
                    </a>
                </li>
                <li>

                    <a href="#">
                        <i class="fas fa-chart-line"></i>
                        <span>Leads</span>
                    </a>
                </li>
                <li>

                    <a href="#">
                        <i class="fas fa-wallet"></i>
                        <span>Payments</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i class="fas fa-paper-plane"></i>
                        <span>Announcement</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i class="fas fa-school"></i>
                        <span>Courses</span>
                    </a>
                </li>

                <li>
                    <a  href="#">
                        <i class="fas fa-book-open"></i>
                        <span>Lessons</span>
                    </a>
                </li>

                  <li>
                    <a href="#">
                        <i class="fas fa-chess-knight"></i>
                        <span>Challenges</span>
                    </a>
                </li>

                  <li>
                    <a href="#">
                     <i class="fas fa-question-circle"></i>
                        <span>Quizzes</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i class="fas fa-paste"></i>
                        <span>Scripts</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i class="fas fa-newspaper"></i>
                        <span>Reports</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i class="fas fa-comments"></i>
                        <span>Messages</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i class="fas fa-clipboard-list"></i>
                        <span>Logs</span>
                    </a>
                </li>

                <li>
                      <a class="nav-link" name="register" data-target="#register-modal"
                      data-toggle="modal" role="button" href="#">
                          <i class="fas fa-registered"></i>
                     <span>Register</span>
                      </a>
                </li>

                  <li>
                     <a class="nav-link" data-target="#login-modal"
                     data-toggle="modal" role="button" href="#">
                     <i class="fas fa-sign-in-alt"></i>
                     <span>Login</span>
                    </a>
                   </li>

                  <li>
                       <a class="nav-link" href="#" >
                       <i class="fas fa-sign-out-alt"></i>
                     <span>Logout</span>
                      </a>

                </li>

            </ul>
        </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

.field-icon {
  float: right;
  margin-top: -30px;
  position: relative;
}

.svg-inline--fa.fa-fw {
    width: 2em;
}
a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

i,
span {
    display: inline-block;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: black;
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    min-width: 100px;
    max-width: 100px;
    text-align: center;
}

#sidebar.active .sidebar-header h3,
#sidebar.active .CTAs {
    display: none;
}

#sidebar.active .sidebar-header img {
    display: none;
}
#sidebar ul li a {
    text-align: left;
}

#sidebar.active ul li a {
    padding: 20px 10px;
    text-align: center;
    font-size: 1.5em;
}

#sidebar.active ul li a i {
    margin-right: 0;
    display: block;
    font-size: 1.8em;
    margin-bottom: 5px;
}

#sidebar.active ul ul a {
    padding: 10px !important;
}

#sidebar.active .dropdown-toggle::after {
    top: auto;
    bottom: 10px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
}
.card-title{
    color: black;
}
.display-5{
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
}
.display-4{
    font-size: 3.0rem;

}
.display-3{
    color: black;
}

#sidebar.active ul li a span {
    display: none;
}
#sidebar .sidebar-header {
    padding: 20px;
    background: black;
}

#sidebar ul {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar svg ul li a:hover {
    color: blue;
    background: blue;
}

#sidebar ul li a i {
    margin-right: 10px;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: black;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: black;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}
a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: blue !important;
}

#studentCard{
    /*font-family: 'Lilita One', cursive;*/
    background: #eacda3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #d6ae7b, #eacda3);
    background: linear-gradient(to right, #d6ae7b, #eacda3);
}

#batchCard{
    /*font-family: 'Lilita One', cursive;*/
    background: #C02425;
    background: -webkit-linear-gradient(to right, #F0CB35, #C02425);
    background: linear-gradient(to right, #F0CB35, #C02425);
}

#coachCard{
    /*font-family: 'Lilita One', cursive;*/
    background: #c2e59c;
    background: -webkit-linear-gradient(to right, #64b3f4, #c2e59c);
    background: linear-gradient(to right, #64b3f4, #c2e59c);
}
#adminCard{
    background: #77A1D3;
background: -webkit-linear-gradient(to right, #E684AE, #79CBCA, #77A1D3);
background: linear-gradient(to right, #E684AE, #79CBCA, #77A1D3);
}

/* Important part */
.modal-dialog{
    overflow-y: initial !important
}
/*.modal-body{*/
/*  height: 325px;*/
/*  overflow-y: auto;*/
/*}*/
.justify-content-between {
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
    align:center;
}
/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
    width: 100%;
    min-height: 100vh;
    transition: all 0.3s;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        min-width: 100px;
        max-width: 100px;
        text-align: center;
        margin-left: -100px !important;
    }
    .dropdown-toggle::after {
        top: auto;
        bottom: 10px;
        right: 50%;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
    }
    #sidebar.active {
        margin-left: 0 !important;
    }
    #sidebar .sidebar-header h3,
    #sidebar .CTAs {
        display: none;
    }
    #sidebar .sidebar-header #mainLogo{
        display: none;
    }
    #sidebar ul li a {
        padding: 20px 10px;
    }
    #sidebar ul li a span {
        font-size: 0.85em;
        display: none;
    }
    #sidebar ul li a i {
        margin-right: 0;
        display: block;
    }
    #sidebar ul ul a {
        padding: 10px !important;
    }
    #sidebar ul li a i {
        font-size: 1.3em;
    }
    #sidebar {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
    #sidebar ul li a span{
        display: none;
    }
}
imgSize {
    width: 100px;
    height: 60px;
}
#login-modal .modal-dialog{
    width: 350px;
}
.forgotForm{
    max-width: 300px;
    text-align: center;
}
span.selection {
    width: 100%;
}
.dropdown:hover>.dropdown-menu {
  display: block;
}

.dropdown>.dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
    pointer-events: none;
}
.dropdown-toggle::after {
    display: none;
    position: inherit;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
.btn{
    /*display: flex;*/
    white-space: normal;
}

span{
    color:white;
}
svg{
    color: white;
}

.label {
    position: relative;
    left: -83px;
    top: 27px;
    padding: 18px 38px 8px 8px;
    margin: 20px;
}

.right {
    float: right;
    top: -504px;
    position: relative;
    left: -161px;
}

.model
{
  width:700px;
  margin: auto;
}
</style>
