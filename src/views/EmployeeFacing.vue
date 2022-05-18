<template>
<div>
  <!-- Header -->
<div class="section header d-flex justify-content-between">
  <img src="../assets/img/logo.png" alt="logo" class="logo">
  <h2 class="d-inline">
    <router-link id="logout-button" class="logout-button" to="/">Logout</router-link>
  </h2>
</div>

<!-- Production Amount Input -->
<div class="section">
  <div class="form-group row">
    <label for="inputAmount" class="col-sm-4 col-form-label label">Production Amount</label>
    <div class="col-sm-4">
      <input type="text" class="form-control amount-textbox" id="inputAmount" placeholder="0">
    </div>
  </div>
</div>

<!-- Team Leader Section -->
<h2 class="section">
  Team Leader
</h2>

<div class="input-line section">
  <div class="d-inline dropdown left">
    <button class="btn btn-secondary dropdown-toggle dropdown-styler" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Pumili ng Empleyado
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Test</a>
        <a class="dropdown-item" href="#"></a>
    </div>
  </div>

  <div class="d-inline dropdown right">
    <button class="btn btn-secondary dropdown-toggle dropdown-styler" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Pumili ng Trabaho
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Test</a>
        <a class="dropdown-item" href="#"></a>
    </div>
  </div>
</div>

<!-- Horizontal Line Separator -->
<hr class="hr-divider section"/>

<!-- Team Members Section -->
<h2 class="section">
  Team Members
</h2>

<div class="input-line section">
  <div class="d-inline dropdown left">
    <button class="btn btn-secondary dropdown-toggle dropdown-styler" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Pumili ng Empleyado
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <option value=""></option>
    </div>
  </div>

  <div class="d-inline dropdown right">
    <button class="btn btn-secondary dropdown-toggle dropdown-styler" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Pumili ng Trabaho
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <option value=""></option>
    </div>
  </div>
</div>

<div class="section d-flex justify-content-between">
  <!-- Plus Button -->
  <button type="button" class="btn btn-primary add-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
    Magdagdag ng Empleyado
  </button>

  <!-- Submit Button -->
  <button type="button" class="btn btn-primary submit-button">
    Submit
  </button>
</div>
</div>
</template>

<script>
export default {
  name: 'EmployeeFacing'
}
</script>
  
<style scoped>
body,
html {
    margin: 0;
    padding: 0;
    background: #EBEBEB;
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
  font-size: 20px;
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
  outline-color: #BD200F;
  border-color: #BD200F;
}

.submit-button:focus,
.submit-button:hover{
  background: #62150c;
  color: #FFF;
  outline-color: #BD200F;
  border-color: #BD200F;
}
</style>