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
                    </router-link>Delete </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav><br>

    <div class="container">
                <div class="row">
        <div class="col-md-12 text-center" style="left: 42px; top: -630px;">
        <h1 style="text-align:center;">Download Students Data</h1>
        <router-link to="#" style="color:blue;">Click here to Export List to CSV</router-link>
        <hr>
        <form method="post" data-select2-id="select2-data-10-r9d6">
        <div class="row justify-content-around" style="padding:10px;">
           <div class="col col-3 text-center align-self-center" style="padding:10px;">
               <label for="">Download Recent Entries</label>
               <select name="recent" class="form-control" id="">
                   <option>10</option>
                   <option>25</option>
                   <option>50</option>
                   <option>100</option>
               </select>
           </div>
           </div>
        <br><br>
        <div class="text-center">
            <button class="btn btn-lg btn-primary">Download</button>
        </div>
    </form>
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
