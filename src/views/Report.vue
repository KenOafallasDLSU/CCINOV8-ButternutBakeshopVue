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

    <div class="main-content">
        <div class="container px-0 mx-0">
            <div class="row marginRow">
                <div class="col-3 ">
                    <p class="font-weight-bold" style="margin-bottom: 2px;">Start Date</p>
                </div>
                <div class="col-3">
                    <p class="font-weight-bold" style="margin-bottom: 2px;">End Date</p>
                </div>
                
            </div>

            <div class="row">
                <div class="col-3">
                    <!--Dropdown Element-->
                    <select class="dd-upper" name="Select Date" size="">
                        <option value="Option One"> Option One </option> 
                    </select>
                </div>
                <div class="col-3">
                    <!--Dropdown Element-->
                    <select class="dd-upper" name="Select Date" size="">
                        <option value="Option One"> Option One </option> 
                    </select>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-warning font-weight-bold">Generate</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-warning font-weight-bold">Export to PDF</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-warning font-weight-bold">Send to Email</button>
                </div>
                
            </div>

        </div>

        <!--Table-->
        <div class="scroll-bar-wrap">
            <div class="mt-4 scroll-box" style="overflow-y:auto;margin: 0px;padding: 0px;">
                <table class="styled-table">
                    <thead>
                        <col>
                        <colgroup span="2"></colgroup>
                        <tr>
                            <th >Name</th>
                            <th colspan="2" scope="colgroup">Baking</th>
                            <th>Total</th>                 
                        </tr>
                        <tr>
                            <th rowspan="2"></th>
                            <th scope="col">Units</th>
                            <th scope="col">Subtotal</th>
                            <th rowspan="2"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Debbie</td>
                            <td>3</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                        <tr>
                            <td>Kenneth</td>
                            <td>3</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                        <tr>
                            <td>Lorraine</td>
                            <td>3</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                        <tr>
                            <td>Abi</td>
                            <td>3</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                        <tr>
                            <td>Abi</td>
                            <td>3</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                        <tr>
                            <td>Abi</td>
                            <td>3</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                        <tr>
                            <td>Abi</td>
                            <td>3</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cover-bar"></div>
        </div>


    </div>


  </div>
</template>

<script>
    export default {
        name: "Report"
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


.dd-upper {
    font-family: 'montserrat';
    font-style: normal;
    font-weight: 500;
    color:gray;
    font-size:14px;
    padding:5px ; /*top right bottom left*/
    padding-right:15px;
    border-radius: 5px;
    width:260px;
    height:35px;
}

button {
    width:150px;
    height:35px;
    padding-top:5px !important;
}
.main-content {
    width:1100px;
    margin-left: auto;
    margin-right: auto;
}

.styled-table {
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    width: 100%;
    font-family: 'Montserrat';
    border-radius: 12px;
    overflow: hidden;
}

.styled-table thead tr {
    background-color: #BD200F;
    color: #ffffff;
    text-align: left;
    border-bottom: 1px solid #dddddd;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
    border: 1px solid #dddddd;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

/*.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
*/

.input-name {
    width:100%;
}

.input-short {
    width:100%;
}

.input-total {
    width: 100%;
}

.scroll-bar-wrap {
  width: 100%;
  position: relative;
  margin: 2em auto;
}
.scroll-box {
  width: 100%;
  height: 372px;
  overflow-y: scroll;
}
.scroll-box::-webkit-scrollbar {
  width: .4em; 
}
.scroll-box::-webkit-scrollbar,
.scroll-box::-webkit-scrollbar-thumb {
  overflow:visible;
  border-radius: 4px;
}
.scroll-box::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,.2); 
}
.cover-bar {
  position: absolute;
  background: #fff;;
  height: 100%;  
  top: 0;
  right: 0;
  width: .4em;
  -webkit-transition: all .4s;
  opacity: 1;
}

.scroll-bar-wrap:hover .cover-bar {
   opacity: 0;
  -webkit-transition: all .4s;
}

</style>