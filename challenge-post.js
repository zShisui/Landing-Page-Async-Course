import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData (urlApi,data){
    const response = fetch(urlApi,{
        method:"POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response
}

const data = {
    "title": "Nes product",
    "price": 100,
    "description": "A description small",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data))

// function deleteData (urlApi,id){
//     const response = fetch(`${urlApi}/${id}`,{
//         method:"DELETE",
//         headers:{
//             "Content-Type":"application/json"
//         },
//     })
//     return response
// }

// deleteData(`${API}/products`,92)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))

function putData (urlApi,id,title){
    
    const response = fetch(`${urlApi}/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            title
        })
    })
    return response
}

putData(`${API}/products`,99,"New product")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))