<template>
	<div>
		<!--Header-->
    <nav class="navbar navbar-expand-lg px-5" style="margin-bottom:100px;">
        <a class="navbar-brand" @click="$router.push( {name: 'Login'} )">
            <img src="../assets/img/logo.png" style="width:80px;height:50px;">
          </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav">
            
            <li class="nav-item">
              <a class="nav-link font-weight-bold" style="color: black;" @click="$router.push( {name: 'Login'} )">Logout</a>
            </li>
            
          </ul>
        </div>
    </nav>


    <div class="container-fluid" style="padding-left:200px;padding-right: 200px;">
        <div class="row text-center">
            <div class="col">
                <div class="option-box" @click="$router.push( {name: 'Report'} )">
                    <b-icon-file-check-fill class="mb-4" style="height:230px;width:230px;"></b-icon-file-check-fill>
                    <p class="font-weight-bold" style="font-size:20px;">Generate Payroll Report</p>
                </div>
            </div>

            <div class="col">
                <div class="option-box" @click="$router.push( {name: 'CreateEmployee'} )">
                    <b-icon-person-plus-fill class="mb-4" style="height:230px;width:230px;"></b-icon-person-plus-fill>
                    <p class="font-weight-bold" style="font-size:20px;">Register New Employee</p>
                </div>
            </div>

            <div class="col">
                <div class="option-box" @click="$router.push( {name: 'CreateRole'} )">
                    <b-icon-people-fill class="mb-4" style="height:230px;width:230px;"></b-icon-people-fill>
                    <p class="font-weight-bold" style="font-size:20px;">Register New Role</p>
                </div>
            </div>

        </div>

    </div>
	</div>
</template>

<script>
export default {
  name: "AdminFacing"
}
</script>

<style scoped>
#app{
    height:100vh;
    width:100vw;
}

body, html {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat';
    overflow-x: hidden;
    background-color: #FCFCFC;
}

nav {
    background-color: #ffbc00;
}

.option-box {
    background-color:#ffbc00;
    border-radius:20px;
    padding:40px;
    color:#fcfcfc;
}

.option-box:hover {
    background-color: #BD200F;
    color:#fcfcfc;
}
</style>