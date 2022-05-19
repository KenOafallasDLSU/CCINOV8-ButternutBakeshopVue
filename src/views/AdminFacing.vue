<template>
	<div class="full-screen-div">
		<!--Header-->
		<div class="d-flex af-header px-5">
			<div class="h-100 pt-4">
				<img src="../assets/img/logo.png" style="width: 90px;" alt="logo" draggable="false" class="unselectable">
			</div>
			<div class="d-flex flex-grow-1 w-100">
				<div class="d-flex flex-row-reverse w-100">
					<button class="btn-logout" id="admin-facing-logout" @click="$router.push( {name: 'Login'} )">Logout</button>
				</div>
			</div>
		</div>
		
		<!--Clickable Options-->
		<div class="container mt-2 py-2 af-clickable d-flex justify-content-center">
			<div class="row w-100 py-3">
				<div class="col py-4">
					<button class="btn" id="admin-facing-generate-payroll">
						<div class="row d-flex justify-content-center">
							<img src="../assets/img/payroll.png" style="width: 200px;" draggable="false" class="unselectable">
						</div>
						<div class="row">
							<span class="text-choice pt-4">Generate Payroll Report</span>
						</div>
					</button>
				</div>
				<div class="m-0 p-0 divider"></div>
				<div class="col py-4">
					<button class="btn" id="admin-facing-add-employee">
						<div class="row d-flex justify-content-center">
							<img src="../assets/img/employee.png" style="width: 200px;" draggable="false" class="unselectable">
						</div>
						<div class="row">
							<span class="text-choice pt-4">Register New Employee</span>
						</div>
					</button>
				</div>
				<div class="m-0 p-0 divider"></div>
				<div class="col py-4">
					<button class="btn" id="admin-facing-add-role">
						<div class="row d-flex justify-content-center">
							<img src="../assets/img/role.png" style="width: 200px;" draggable="false" class="unselectable">
						</div>
						<div class="row">
							<span class="text-choice pt-4">Register New Role</span>
						</div>
					</button>
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
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: #EBEBEB;
}

.full-screen-div {
    width: 100vw;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
}

.af-header {
	height: 100px;
	width: 100%;
}

.af-clickable {
	width: 95%;
}

.unselectable {
	user-drag: none; 
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}

.btn {
	background-color:transparent;
	border-color: transparent;
	padding: 0 !important;
	margin: 0 !important;
	width: 100%;
}

.btn-logout {
	background-color:transparent;
	border-color: transparent;
	font-size: 12px;
	font-weight: 600;
}

.btn:hover,
.btn-logout:hover {
	color: #BD200F !important;
	text-decoration: underline;
}

.divider {
	width:2px !important;
	background-color:#C4C4C4;
}

.text-choice {
	font-size: 20px;
	font-weight: 700;
}
</style>