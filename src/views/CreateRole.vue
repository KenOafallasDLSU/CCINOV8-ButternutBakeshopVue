<template>
<div>
    <!--Header-->
    <nav class="navbar navbar-expand-lg px-5" style="margin-bottom:100px;">
        <a class="navbar-brand" @click="$router.push( {name: 'Login'} )">
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
    
    <div class="container p-1 h-100 d-flex justify-content-center align-items-center">
        <div class="card bg-white shadow">
            <div class="card-body p-md-5 mx-md-4">
                <form>
                    <p class="font-weight-bold">Role Name</p>
                    <div class="input-group mb-3">
                        <input type="text" id="rolename" class="form-control" placeholder="Baker">
                    </div>
                    
                    <p class="font-weight-bold">Rate</p>
                    <div class="input-group mb-3">
                        <input type="text" id="rolerate" class="form-control" placeholder="0.00">
                    </div>

                    <div class="d-flex justify-content-center mt-5">
                        <button class="btn btn-primary mx-4 font-weight-bold" type="button" id="create-role-submit">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "CreateEmployee"
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

::placeholder { 
  color: black;
  opacity: 0.3; 
}
</style>