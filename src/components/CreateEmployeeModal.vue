<template>
  <div>
    <b-modal class="success-modal" ref="password-modal" v-model="showConfirmModal" v-b-modal.modal-center ok-only hide-header no-close-on-backdrop no-close-on-esc>
      <bold>Employee successfully created!</bold>
      <br />
      <bold>Here is the employee password: {{ password }}</bold>
    </b-modal>
  </div>
</template>

<script>
export default {
    name: 'CreateEmployeeModal',
    props: {
        employeePassword: String
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