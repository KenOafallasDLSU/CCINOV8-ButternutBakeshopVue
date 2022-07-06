<template>
  <div>
    <b-modal content-class="modal-content" class="confirm-modal" title="Sample Modal" ref="password-modal" v-b-modal.modal-center hide-header hide-header-close no-close-on-backdrop no-close-on-esc>
      <label class="modal-label"><b-icon icon="lock-fill" class="mr-2"></b-icon>Ibigay ang Iyong Password</label>
      
      <b-form-input content-class="modal-input mt-2" v-model="password" type="password"></b-form-input>
      <b-alert v-model="showPasswordAlert" class="mb-0" variant="danger">Maling Password</b-alert>

      <div slot="modal-footer" class="d-flex justify-content-center w-100">
        <div class="btn-group w-100">
          <!--<b-button class="btn btn-primary" variant="danger" @click="cancelModal">Cancel</b-button>-->
          <b-button class="cancel-button font-weight-bold w-100 mx-2" @click="cancelModal">Kanselahin</b-button>
          <b-button class="confirm-button font-weight-bold w-100 mx-2" @click="checkPassword">Ipasa</b-button>
        </div>
      </div>
    </b-modal>

    <b-modal class="success-modal" v-model="showConfirmModal" v-b-modal.modal-center ok-only hide-header no-close-on-backdrop no-close-on-esc>
      <bold>Naipasa ng maayos ang report!</bold>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'EmployeePasswordModal',
  data() {
    return{
      password: "",
      showPasswordAlert: false,
      showConfirmModal: false
    }
  },
  methods: {
    showModal() {
      if(typeof this.$refs['password-modal'] !== 'undefined')
        this.$refs['password-modal'].show()
    },
    hideModal() {
      this.password = ""
      if(typeof this.$refs['password-modal'] !== 'undefined')
        this.$refs['password-modal'].hide()
    },
    checkPassword() {
      if(this.password != "password")
      {
        this.showPasswordAlert = true
      }
      else
      {
        this.showPasswordAlert = false
        this.hideModal()
        this.showConfirmModal = true
      }
    },
    cancelModal() {
      this.showPasswordAlert = false
      this.hideModal()
    }
  }
}
</script>

<style scoped>

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