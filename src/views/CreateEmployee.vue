<template>
<div>
    <!-- Modals -->
    <!-- <CreateEmployeeModal ref="createEmployeeModal"/> -->
    <b-modal class="success-modal" ref="password-modal" v-model="showConfirmModal" v-b-modal.modal-center ok-only hide-header no-close-on-backdrop no-close-on-esc>
      <bold>Employee successfully created!</bold>
      <br />
      <bold>Here is the employee password: {{ password }}</bold>
    </b-modal>

    <!--Header-->
    <nav class="navbar navbar-expand-lg px-5" style="margin-bottom:100px;">
        <a class="navbar-brand" @click="$router.push( {name: 'AdminFacing'} )">
            <img id="logo" src="../assets/img/logo.png" style="width:80px;height:50px;">
          </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="nav-item">
            <a class="nav-link font-weight-bold" style="color: black;" @click="$router.push( {name: 'AdminFacing'} )">Home</a>
        </div>

        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav">
            
            <li class="nav-item">
              <a class="nav-link font-weight-bold" @click="$router.push( {name: 'Login'} )" style="color: black;">Logout</a>
            </li>
            
          </ul>
        </div>
    </nav>

    <div class="container p-1 h-100 d-flex justify-content-center align-items-center box">
        <div class="card bg-white shadow">
            <div class="card-body p-md-5 mx-md-4">
                <b-form @submit="checkValidation">
                    <p class="font-weight-bold">First Name</p>
                    <div class="input-group mb-3">
                        <!-- <input type="text" id="firstname" class="form-control" placeholder="Juan"> -->
                        <b-form-input v-model="firstname" placeholder="Juan" trim required></b-form-input>
                    </div>
                    
                    <p class="font-weight-bold">Last Name</p>
                    <div class="input-group mb-3">
                        <!-- <input type="text" id="lastname" class="form-control" placeholder="Dela Cruz"> -->
                        <b-form-input v-model="surname" placeholder="Dela Cruz" trim required></b-form-input>
                    </div>
                    
                    <p class="font-weight-bold">Contact Number</p>
                    <div class="input-group mb-3">
                        <!-- <input type="text" id="contactnumber" class="form-control" placeholder="09XXXXXXXXX"> -->
                        <b-form-input v-model="number" @keypress="isNumber($event)" :state="isNumberValid" placeholder="09xxxxxxxx" trim required></b-form-input>
                        <b-form-invalid-feedback id="invalid-num-feedback">Please input a valid number.</b-form-invalid-feedback>
                    </div>

                    <CreateEmployeeModal :employeePassword="password"> </CreateEmployeeModal>

                    <div class="d-flex justify-content-center mt-5">
                        <b-button class="btn btn-primary mx-4 font-weight-bold" type="submit" id="create-employee-submit">Submit</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CreateEmployeeModal from '../components/CreateEmployeeModal.vue'

export default {
  name: "CreateEmployee",
  components: {
    CreateEmployeeModal
  },
  data() {
    return{
        firstname: "",
        surname: "",
        number: "",
        password: null,
        isNumberValid: null
    }
  },
  methods: {
    isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            evt.preventDefault();;
        } else {
            return true;
        }
    },
    generatePassword() {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    },
    clearForm() {
        this.todos.push({
            firstname: "",
            surname: "",
            number: "",
            password: this.generatePassword(),
            isNumberValid: null
        });
        this.firstname = "";
        this.surname = "";
        this.number = "";
    },
    showModal() {
        if(typeof this.$refs['password-modal'] !== 'undefined')
            this.$refs['password-modal'].show()
    },
    hideModal() {
        if(typeof this.$refs['password-modal'] !== 'undefined')
            this.$refs['password-modal'].hide()
    },
    checkValidation(e) {
        if (this.number.length == 11) {
            this.isNumberValid = true;
            this.password = this.generatePassword();
            this.showModal();
            // this.addData();
            //this.clearForm();
            return true;
        } else {
            this.isNumberValid = false;
        }
        
        e.preventDefault();
        return false;
    },

    // Data passing to server
    async addData() {
        try {
            await axios.post("http://localhost:5000/employees", {
                firstname: this.firstname,
                surname: this.surname,
                contact: this.number,
                password: this.password
            });
        } catch (err) {
            console.log(err)
        }
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
    font-family: 'Montserrat';
    overflow-x: hidden;
    background-color: #FCFCFC;
}

#logo:hover {
    cursor:pointer;
}

nav {
    background-color: #ffbc00;
}

p {
    text-align: left;
}
.btn-primary {
    background-color: #BD200F;
    border:0;
}
.btn-primary:hover {
    background-color: #a01101 !important;
    border:0;
}
.btn-primary:active,
.btn-primary:focus,
.btn-primary:visited {
    color: #fff;
    background-color: #a01101 !important;
    border:0;
    box-shadow: 0 0 0 3px rgba(255, 90, 90, 0.723) !important;
}

.form-control::placeholder { 
    color: black;
    opacity: 0.3; 
}

.box {
    width: 390px;
}

/deep/ .modal-content {
  background-color: #fefefe;
  margin: 40% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 100%; /* Could be more or less, depending on screen size */
  position:relative;
  font-family: 'Montserrat' !important;
}

/deep/ .modal-input {
  width:100%;
  height:45px;
  border:none;
  border-radius:5px;
}

/deep/ .modal-footer {
  border:none !important;
}

/deep/ .confirm-button {
  background:#BD200F !important;
  border:none !important;
  border-radius:5px !important;
  height:35px !important;
  color:white !important;
}

/deep/ .confirm-button:hover {
  background: #a01101 !important;
  color:white !important;
  transition-duration: 0.1s !important;
  cursor: pointer !important;
  text-decoration: none !important;
  border:none !important;
}

/deep/ .confirm-button:active,
.confirm-button:focus,
.confirm-button:visited {
    background: #a01101 !important;
    border:0 !important;
    box-shadow: 0 0 0 3px rgba(255, 90, 90, 0.723) !important;
}

/deep/ .cancel-button {
  border:none !important;
  background: #e8e8e8;
  color:black;
  border-radius:5px !important;
  height:35px !important;
}

/deep/ .cancel-button:hover{
  border:none !important;
  color:black;
  background: #cccccc !important;
  transition-duration: 0.1s !important;
  cursor: pointer !important;
  text-decoration: none !important;
}

/deep/ .cancel-button:active,
.cancel-button:focus,
.cancel-button:visited {
    background: #cccccc !important;
    border:0 !important;
    box-shadow: 0 0 0 3px rgba(169, 169, 169, 0.723) !important;
}
</style>