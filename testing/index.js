// const container = document.querySelector(".container");
// const user_input = document.querySelector(".tasks input");
// const add_button = document.querySelector(".adding");
// const task = document.querySelector(".desc_task");

// add_button.addEventListener('click', () => {
//     let new_task = document.createElement("div");
//     new_task.classList.add("add_new_task");
//     task.appendChild(new_task);
    

//     let check_input = document.createElement("img");
//     let description = document.createElement("p");
//     let delete_icon = document.createElement("i");

//     description.classList.add("description");
//     check_input.setAttribute("src", "To-Do-Img/images/unchecked.png");
//     delete_icon.classList.add("fa-solid");
//     delete_icon.classList.add("fa-xmark");
//     delete_icon.style.color = "orangered";

//     new_task.appendChild(check_input);
//     new_task.appendChild(description);
//     new_task.appendChild(delete_icon);
//     // calling function to save the storage 
//     saveData()
//     if (user_input.value.trim() === "") {
//         task.removeChild(new_task);
//         alert("Please enter a task; the input cannot be empty");
//         saveData()
//     } else {
//         description.textContent = user_input.value;
//         saveData()
//     }

//     check_input.addEventListener("click", () => {
//         if (check_input.getAttribute("src") === "To-Do-Img/images/unchecked.png") {
//             description.style.textDecoration = "line-through";
//             check_input.src = "To-Do-Img/images/checked.png";
//             saveData()
//         } else {
//             description.style.textDecoration = "none";
//             check_input.src = "To-Do-Img/images/unchecked.png";    
//             saveData()
//         }
//     });

//     delete_icon.addEventListener('click', (e) => {
//         e.target.parentElement.remove();
//         saveData()
//     });

//     function saveData()
//     {
//         localStorage.setItem("dataList", new_task.innerHTML)        
//     }
//     function getData()
//     {
//         localStorage.getItem("dataList")
//     }

    

// });

// window.onload("click", ()=>{
//     getData()
// }
//


// function getDomainNameFromUrl(url)
// {
//     const urlObj = new URL(url)
//     console.log('Protocol: ', urlObj.protocol)
//     console.log('Username: ', urlObj.username)
//     console.log('Password: ', urlObj.password)
//     console.log('Hostname: ', urlObj.hostname)
//     console.log('Port: ', urlObj.port)
//     console.log('Pathname: ', urlObj.pathname)
//     console.log('Search: ', urlObj.search)
//     console.log('Hash: ', urlObj.hash)
// }

// const bootdevURL = 'http://testuser:testpassword@testdomain.com:8080/testpath?testsearch=testvalue#hash'
// const urlParameter = getDomainNameFromUrl(bootdevURL)



let bool_value = false
try
{
    if(bool_value === false)
    {
        console.log("successfully fetched")
    }
}
catch(err)
{
    console.log("there is an error: ", err)
}