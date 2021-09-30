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
                      <a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                                 <a class="nav-link" href="#"> Archived Students </a>
                             </li>
                             <li class="nav-item">
                                  <a class="nav-link" href="#"> Download Data  </a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link" href="#"> Delete </a>
                             </li>
                        </ul>
                    </div>

                </div>
            </nav>
        <div class="container">
                <div class="row">
        <div class="col-md-12 text-center" style="left: 42px; top: -630px;">
            <h1 class="display-4">Student Listing</h1>
        <hr>
            <div>
                <!--<table class="table table-striped table-bordered
                " id="example" cellspacing="0" width="100%" data-page-length='50'>-->
                    <table id="example" class="stripe row-border order-column"
                    style="width:100%" data-page-length='50'>
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Parent Name</th>
                        <th scope="col">Program</th>
                        <th scope="col">Status</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Coach</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Pin</th>
                        <th scope="col">ChessKid</th>
                        <th scope="col">DOR</th>
                        <th scope="col">MOR</th>
                        <th scope="col">DOJ</th>
                        <th scope="col">MOJ</th>
                        <th scope="col">TotalPaidClass</th>
                        <th scope="col">TotalClassTillApril30</th>
                    </tr>
                    </thead>
                </table>
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
   top: -630px;
 }

.navbar {
    background: #fff;
    margin-left: 60px;
    left: 50px;
    top: -657px;
}
</style>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Students',
  components: {
    Sidebar,
  },
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = '';
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.submittedNames.push(this.name);
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing');
      });
    },
  },
};
</script>
