let landing_types = document.querySelectorAll(".types_contaner p");
console.log("landing_types = ",landing_types);

for(let i=0;i<landing_types.length;i++)
{
    let current_type=landing_types[i];
    current_type.addEventListener("click",(event) => {
        for(let j=0;j<landing_types.length;j++)
        {
            if(landing_types[j].className === "active")
            {
                landing_types[j].className = "inactive";
            }
        }
        event.target.className = "active"
        
    })
}