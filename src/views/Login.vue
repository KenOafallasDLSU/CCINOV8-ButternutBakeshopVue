<template>
<div>
  <div class="container-fluid p-0 h-100">
        <div class="row no-gutters h-100">
            <div class="col-5 text-center pl-5 pr-0 py-4" style="margin:auto;">
                <img class="bread-img img-fluid" src="../assets/img/bread.png">
            </div>

            <div class="col-7 p-0">
                <div class="poly-bg h-100 w-100" >
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-7"  style="margin-left:120px;">
                                <div class="card shadow-2-strong p-5" style="border-radius: 1rem;">
                                <div class="card-body">
                                    
                                    <div class="text-center">
                                        <img class="w-75 mb-3" src="../assets/img/logo.png">
                                        <h3 class="mb-1 font-weight-bold">Welcome back!</h3>
                                        <p style="font-size:14px;">Sign in to your account.</p>
                                    </div>
                        
                                    <div class="form-outline mb-4">
                                        <label class="form-label font-weight-bold" for="typeUserX-2">Username</label>
                                        <input type="text" id="username" class="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="user-icon">
                                    
                                    </div>
                        
                                    <div class="form-outline mb-5">
                                        <label class="form-label font-weight-bold" for="typePasswordX-2">Password</label>
                                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
        
                                    </div>
                                    
                                    <div class="center-block text-center p-0">
                                        
                                            <button class="btn btn-lg btn-block btn-primary font-weight-bold" style="background-color: #BD200F;font-size:18px;" type="submit" @click="$router.push('admin')"> Admin-facing</button>
                                            <button class="btn btn-lg btn-block btn-primary font-weight-bold" style="background-color: #BD200F;font-size:18px;" type="submit" @click="$router.push('employee')"> Employee-facing</button>

                                    </div>
                                    
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

#app{
    height:100vh;
    width:100vw;
    font-family: 'Montserrat';
}
body,
html {
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat';
    overflow-x: hidden;
    background-color: #FCFCFC;
}

.poly-bg {
    background-image: url('../assets/img/bg.png');
}

.bread-img {
    width:1000px;
}

.flex-fill {
    flex:1;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #ffbc00 #FCFCFC;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #FCFCFC;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ffbc00;
    border-radius: 10px;
    border: none;
  }
</style>