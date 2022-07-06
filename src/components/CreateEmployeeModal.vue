<template>
  <div>
    <b-modal content-class="modal-content" class="confirm-modal" title="Sample Modal" ref="password-modal" v-b-modal.modal-center hide-header hide-header-close no-close-on-backdrop no-close-on-esc>
      <label class="modal-label text-white">Employee is successfully added!</label>
      <br />
      <label class="modal-label text-white">Here is their employee password: <b>{{ employeePassword }}</b></label>

      <div slot="modal-footer" class="d-flex justify-content-center">
        <b-button class="confirm-button font-weight-bold" @click="hideModal">Close</b-button>
      </div>
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
  background-color: #BD200F;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 100%; /* Could be more or less, depending on screen size */
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
  background-color:white !important;
  border:none !important;
  border-radius:5px !important;
  height:35px !important;
  color:black !important;
}

/deep/ .confirm-button:hover, .confirm-button:focus{
  background-color:gray !important;
  color:white !important;
  transition-duration: 0.1s !important;
  cursor: pointer !important;
  text-decoration: none !important;
}

/deep/ .exit-button:hover {
  cursor: pointer;
  color:#888 !important;
  transition-duration: 0.3s !important;
}
</style>