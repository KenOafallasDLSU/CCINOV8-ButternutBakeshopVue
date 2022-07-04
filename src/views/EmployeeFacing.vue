<template>
<div>
  <nav class="navbar navbar-expand-lg px-5" style="margin-bottom:100px;">
    <a class="navbar-brand" @click="$router.push( {name: 'Login'} )">
        <img id="logo" src="../assets/img/logo.png" style="width:80px;height:50px;">
      </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link font-weight-bold" @click="$router.push( {name: 'Login'} )" style="color: black;">Logout</a>
        </li>
        
      </ul>
    </div>
</nav>
  
  <!-- Production Amount Input -->
  <div class="section">
    <div class="form-group row no-gutters text-left d-flex flex-row-reverse p-0">
      
      <div class="col-sm-2">
        <input type="text" class="form-control amount-textbox" id="inputAmount" placeholder="0">
      </div>
      <label for="inputAmount" class="col-sm-2 col-form-label label">Production Amount</label>
    </div>
  </div>
  
  <!-- Team Leader Section -->
  <h2 class="section text-left">
    Team Leader
  </h2>
  
  <div class="input-line section">
    <div class="d-inline dropdown left">
      <select v-model="testVal01" class="btn btn-secondary dropdown-toggle dropdown-styler" type="button">
        <option v-for="item in employees" :value="item.value" :key="item.value">{{item.text}}</option>
      </select>
    </div>
  
    <div class="d-inline dropdown right">
      <select v-model="testVal02" class="btn btn-secondary dropdown-toggle dropdown-styler" type="button">
        <option v-for="item in roles" :value="item.value" :key="item.value">{{item.text}}</option>
      </select>
    </div>
  </div>
  
  <!-- Horizontal Line Separator -->
  <!-- <hr class="hr-divider section clearfix"/> -->
  
  <!-- Team Members Section -->
  <h2 class="section text-left">
    Team Members
  </h2>
  
  <div class="input-line section">
    <div class="d-inline dropdown left">
      <select v-model="testVal11" class="btn btn-secondary dropdown-toggle dropdown-styler" type="button">
        <option v-for="item in employees" :value="item.value" :key="item.value">{{item.text}}</option>
      </select>
    </div>
  
    <div class="d-inline dropdown right">
      <select v-model="testVal12" class="btn btn-secondary dropdown-toggle dropdown-styler" type="button">
        <option v-for="item in roles" :value="item.value" :key="item.value">{{item.text}}</option>
      </select>
    </div>
  </div>
  
  <div class="input-line section">
    <div class="d-inline dropdown left">
      <select v-model="testVal21" class="btn btn-secondary dropdown-toggle dropdown-styler" type="button">
        <option v-for="item in employees" :value="item.value" :key="item.value">{{item.text}}</option>
      </select>
    </div>
  
    <div class="d-inline dropdown right">
      <select v-model="testVal22" class="btn btn-secondary dropdown-toggle dropdown-styler" type="button">
        <option v-for="item in roles" :value="item.value" :key="item.value">{{item.text}}</option>
      </select>
    </div>
  </div>
  
  <div class="section d-flex justify-content-between">
    <!-- Plus Button -->
    <button type="button" class="btn btn-primary add-button font-weight-bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>
      Add Employee
    </button>
  
    <!-- Submit Button -->
    <button type="button" class="btn btn-primary submit-button font-weight-bold">
      Submit
    </button>
  </div>

  <!-- Modal -->
  <div id="myModal" class="modal">
    <!-- content -->
    <div class="modal-content text-white">
      <div class="d-flex justify-content-end">
        <span class="close ">&times;</span>
      </div>
      <div class="mb-4">
        <p>Enter Employee Password</p>
        <input class="modal-input" type="password"></input>
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="confirm-button font-weight-bold">
          Confirm
        </button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import PasswordModal from '../components/PasswordModal.vue'

export default {
  name: 'EmployeeFacing',
  components: {
    PasswordModal
  },
  methods: {
    showModal() {
      if(typeof this.$refs.passwordModal !== 'undefined')
        this.$refs.passwordModal.showModal()
    },
    hideModal() {
      if(typeof this.$refs.passwordModal !== 'undefined')
        this.$refs.passwordModal.hideModal()
    }
  },
  data() {
    return{
        employees: [
          {text:'Pumili ng Empleyado', value:null},
          {text:'Deborah Buhion', value:1},
          {text:'Michaela Dizon', value:2},
          {text:'Thea Go', value:3},
          {text:'Kenneth Oafallas', value:4}
        ],
        roles: [
          {text:'Pumili ng Trabaho', value:null},
          {text:'Shaping', value:1},
          {text:'Baking', value:2},
          {text:'Delivery', value:3}
        ],
        testVal01: null,
        testVal02: null,
        testVal11: null,
        testVal12: null,
        testVal21: null,
        testVal22: null
    }
  }
}
</script>
  
<style scoped>

body,
html {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-family: Montserrat;
    overflow-x: hidden;
    background-color: #FCFCFC;
}

#logo:hover {
    cursor:pointer;
}

nav {
    background-color: #ffbc00;
}

.header {
  margin-top: 20px;
}

.section {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 20px;
}

.logo{
  width: 80px;
}

.logout-button{
  font-size: 12px;
  color: #000;
  text-decoration: none;
}
.logout-button:hover{
  color: #BD200F;
}

.label,
h2{
  font-size: 17px;
  color: #000;
  font-weight: bold;
}

.dropdown-styler{
  background: #FFF;
  color: #666;
  width: 100%;
  text-align: left;
}

.left {
  width: calc(60% - (.5em + 6px));
  float: left;
}

.right {
  width: calc(40% - (.5em + 6px));
  float: right;
}

.left,
.right{
  margin-bottom: 20px;
}

.amount-textbox,
.add-button{
  background: #FFF;
  color: #666;
  outline-color: #666;
  border-color: #666;
}

.add-button:focus,
.add-button:hover{
  background: #666;
  color: #FFF;
  outline-color: #666;
  border-color: #666;
}

.submit-button{
  background: #BD200F;
  color: #FFF;
  border:0;
}

.submit-button:hover{
  background: #a01101;
  border: 0;
}

.submit-button:active,
.submit-button:focus,
.submit-button:visited {
    background: #a01101 !important;
    border:0;
    box-shadow: 0 0 0 3px rgba(255, 90, 90, 0.723) !important;
}
</style>