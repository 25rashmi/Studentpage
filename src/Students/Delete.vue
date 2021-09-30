<template>
        <div class="overflow-auto example">
    <Sidebar />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-right"></i>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav mr-auto">
                <li class="nav-item">

                <a  v-b-modal.modal-prevent-closing
                class="nav-link">Add Student</a>
                <b-modal id="modal-prevent-closing" ref="modal"
                 hide-footer title="Zugzwang Logo">
                  <form ref="form" @submit.stop.prevent="handleSubmit">
                      <a href="#" style="color:blue;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;Click here to Add Students
                      Data through CSV</a><br>
                      <b-form-input id="name-input" v-model="name"
                        :state="nameState" placeholder="Student Id" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="fname"
                        :state="nameState" placeholder="First Name" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="lname"
                        :state="nameState" placeholder="Last Name" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="age"
                        :state="nameState" placeholder="Age" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="unit"
                        :state="nameState" placeholder="Unit" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="program"
                        :state="nameState" placeholder="Program" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="status"
                        :state="nameState" placeholder="Status" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="email"
                        :state="nameState" placeholder="Email" required>
                      </b-form-input><br>
                      <b-form-input id="name-input" v-model="password"
                        :state="nameState" placeholder="Password" required>
                      </b-form-input><br>
                      <button type="button" class="btn btn-primary"
                      style="width:100%;">Add Student
                      </button>
                  </form>
                </b-modal>
                </li>
                             <li class="nav-item">
                                 <a class="nav-link"><router-link to="/archive">
                                     Archived Students</router-link></a>
                             </li>
                             <li class="nav-item">
                                  <a class="nav-link"><router-link to="/download">
                                       Download Data</router-link></a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link"><router-link to="/delete">
                                     Delete</router-link></a>
                             </li>
                        </ul>
                    </div>

                </div>
            </nav>

                <div class="container">
                <div class="row">
             <div class="col-md-12 text-center" style="left: 42px; top: -630px;">
            <hr>
            <h1 class="text-center display-4">Enter StudentId to Delete</h1>
            <div class="row">
                <div class="col col-3">
                </div>

            <div class="col col-6">
            <form method="POST">
           <div class="form-group">
          <label for="">Student ID</label>
          <input type="text" class="form-control" name="studentID" id="" placeholder="">
          </div>

        <div class="text-center">
        <button class="btn btn-danger btn-lg">Delete</button>
        </div>
        </form>
        </div>
</div>
</div>
</div>
</div>
</template>

<style>
  .table-style1 thead th {
   background-color: black;
   color: white;
   vertical-align: middle;
   text-align: center;
   top: -610px;
 }

.navbar {
    background: #fff;
    margin-left: 60px;
    left: 50px;
    top: -650px;
}
</style>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Download',
  components: {
    Sidebar,
  },
};
</script>
