<template>
  <div>
    <b-modal class="confirm-modal" title="Sample Modal" ref="password-modal" v-b-modal.modal-center hide-header-close no-close-on-backdrop no-close-on-esc>
      <label class="modal-label">Enter your Password</label>
      <b-form-input v-model="password" type="password"></b-form-input>
      <b-alert v-model="showPasswordAlert" variant="danger">Mali ang Binigay Password</b-alert>

      <div slot="modal-footer">
        <b-button class="btn btn-primary" variant="danger" @click="cancelModal">Cancel</b-button>
        <b-button class="btn btn-primary" variant="success" @click="checkPassword">Submit</b-button>
      </div>
    </b-modal>

    <b-modal class="success-modal" v-model="showConfirmModal" v-b-modal.modal-center ok-only hide-header no-close-on-backdrop no-close-on-esc>
      <bold>Submitted Successfully</bold>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'PasswordModal',
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

</style>