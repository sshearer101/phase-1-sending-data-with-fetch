
function submitData(name,email){
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",

        },
        body: JSON.stringify(name, email)
    })

    .then(json = json())
    .then(object = document.body.innerHTML = object["id"])
    .catch (error = document.body.innerHTML = error)

    }



// function submitData(name, email){
//     return fetch('http://localhost:3000/users',  {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({name, email})

//      })

//      .then(res = res.json())
//      .then(object => document.body.innerHTML = object[ "id" ])
//      .catch (error => document.body.innerHTML = error)
// }