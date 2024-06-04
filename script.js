//your JS code here. If required.
const closeBtn = document.getElementById("close-btn")
const modal = document.getElementById("modal")
const openBtn = document.getElementById("openModal")
closeBtn.addEventListener("click",()=>{
	
	modal.classList.add("display-modal")
})
openBtn.addEventListener("click",()=>{
	modal.classList.remove("display-modal")
})

modal.addEventListener('click', (e)=>{
	if(e.target === modal){
		modal.classList.add("display-modal")
	}
})