//your JS code here. If required.

const submit = document.querySelector("#submit")
const existing = document.querySelector("#existing")

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	const text = document.querySelector("#username").value
	const pass = document.querySelector("#password").value
	const checked = document.querySelector("#checkbox").checked

	if(checked){
		localStorage.setItem("isLoggedIn", "true")
	}
	else{
		alert(`Logged in as ${text}`)
	}
})

if(localStorage.getItem("isLoggedIn")){
	existing.style.display = "block"
}
existing.addEventListener("click",(e)=>{
	e.preventDefault();
	alert(`Logged in as ${localStorage.getItem("isLoggedIn")}`)

})
