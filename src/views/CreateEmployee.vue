<template>
<div>
    <div class="custom-shape-divider-bottom-1652890901">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
    
    <div class="container p-1 h-100 d-flex justify-content-center align-items-center">
        <div class="card bg-white shadow">
            <div class="card-body p-md-5 mx-md-4">
                <form>
                    <p>First Name</p>
                    <div class="input-group mb-3">
                        <input type="text" id="firstname" class="form-control" placeholder="Juan">
                    </div>
                    
                    <p>Last Name</p>
                    <div class="input-group mb-3">
                        <input type="text" id="lastname" class="form-control" placeholder="Dela Cruz">
                    </div>
                    
                    <p>Contact Number</p>
                    <div class="input-group mb-3">
                        <input type="text" id="contactnumber" class="form-control" placeholder="09XXXXXXXXX">
                    </div>

                    <div class="d-flex justify-content-center mt-5">
                        <button class="btn btn-primary mx-4" type="button" id="create-employee-submit">Submit</button>
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
        height: 100%;
        width: 100%;
        background: #fcfcfc;
    }

    p {
        text-align: left;
    }

    .btn,
    .btn-primary,
    .btn-primary:active,
    .btn-primary:focus,
    .btn-primary:visited{
        background-color: #BD200F !important;
        border: 0 !important;
    }

    .btn-primary:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 90, 90, 0.723);
    }

    .btn-primary:hover {
        background-color: #a01101 !important;
        border: 0 !important;
        
    }

    section {
        position: relative;
    }

    .custom-shape-divider-bottom-1652890901 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1652890901 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 500px;
        transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1652890901 .shape-fill {
        fill: #BD200F;
    }
</style>