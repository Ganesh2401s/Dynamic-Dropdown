function updateOptions() {
    const category = document.getElementById("category").value;
    const options = document.getElementById("options");
  
    // Reset options
    options.innerHTML = '<option value="">--Select an Option--</option>';
    options.disabled = category === "";
  
  // options and category data
    const data = {
      physics : ["Mechanics", "Electrostatics", "Electromagnetism", "Optics"],
      electronics : ["Analog", "Digital"],
      biology : ["Botany", "Zoology", "Microbiology", "Biochemistry", "Bioinformatics"]
    };
     
    if (data[category]) {
      data[category].forEach((item) => {
        const option = document.createElement("option");
        option.value = item.toLowerCase();
        option.textContent = item;
        options.appendChild(option);
         
      });
    }

  }
 

 