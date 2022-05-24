<template>
  <div>
      <!--Topbar-->
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
        </a>
        <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
        <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
        <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
        <h1>This is an ultra snazzy topbar</h1>
        <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
        
        <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
        <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
        <img src="https://c.tenor.com/heQIzJAQvcIAAAAd/vibe-cat.gif" style="width: 80px; height: 80px;">
    </nav>

    <div class="main-content">
        <div class="container px-0 mx-0">
            <div class="row marginRow">
                <div class="col-3 ">
                    <p style="font-weight:500;margin-bottom: 2px;">Start Date</p>
                </div>
                <div class="col-3">
                    <p style="font-weight:500;margin-bottom: 2px;">End Date</p>
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
                    <button type="button" class="btn btn-warning">Generate</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-warning">Export to PDF</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-warning">Send to Email</button>
                </div>
                
            </div>

        </div>

        <div class="main-table p-3 my-4"> 
            <div class="container" style="max-height:380px;">
                <div class="row ">
                    <div class="col-3">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Name</p>
                    </div>

                    <div class="col-1">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Baking</p>
                    </div>

                    <div class="col-1">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Comp.</p>
                    </div>

                    <div class="col-1">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Shaping</p>
                    </div>

                    <div class="col-1">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Comp.</p>
                    </div>

                    <div class="col-1">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Packing</p>
                    </div>

                    <div class="col-1">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Comp.</p>
                    </div>

                    <div class="col-3">
                        <p style="font-weight:500;margin-bottom: 2px;color:white;">Total</p>
                    </div>

                </div>

                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>


                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>

                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>


                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>


                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>


                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>


                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>


                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>


                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>

                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>

                <div class="row mb-2">
                    
                    <div class="col-3">
                        <input type="text" class="input-name">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-1">
                        <input type="text" class="input-short">
                    </div>

                    <div class="col-3">
                        <input type="text" class="input-total">
                    </div>

                </div>
            </div>
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
        height: 100%;
        width: 100%;
        background: #fcfcfc;
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
        font-weight:500 !important;
        padding-top:5px !important;
    }
    .main-content {
        width:1100px;
        margin-left: auto;
        margin-right: auto;
    }


    .main-table {
        background-color: #BD200F;
        width:100%;
        border-radius:10px;
        overflow: auto;
        border-color: #BD200F !important;
        border-style: solid !important;
    }

    .input-name {
        width:100%;
    }

    .input-short {
        width:100%;
    }

    .input-total {
        width: 100%;
    }

    * {
    scrollbar-width: auto;
    scrollbar-color: #BD200F;
    }
    *::-webkit-scrollbar {
    width: 16px;
    }

    *::-webkit-scrollbar-track {
    background: none;
    }

    *::-webkit-scrollbar-thumb {
    background-color: #BD200F;
    border-radius: 10px;
    border: 3px none #ffffff;
    }
</style>