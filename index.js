// const customers=document.getElementById("customers")
// const idinput= document.getElementById("idInput")
// const nameinput=document.getElementById("companyNameInput")
// const contactinput=document.getElementById("contactNameInput")
// const contactitle=document.getElementById("contactTitleInput")
// const button = document.getElementById("btn")
// const deleteinput = document.getElementById("deleteInput")


// POST WITH FETCH
// button.addEventListener('click', function () {
//         fetch('https://northwind.vercel.app/api/customers', {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 id: idinput.value,
//                 companyname: nameinput.value,
//                 contactname:contactinput.value,
//                 title:contactitle.value,
//                }),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 console.log("data is send" + data);
//               });
//     })
    


// DELETE WITH FETCH
// function FetchDel() {
//             let url = `https://northwind.vercel.app/api/customers/${deleteinput.value}`;
    
//             fetch(url, {
//               method: "DELETE",
//             }).then((res) => console.log(res));
//           }
    
//     button.addEventListener('click', FetchDel)



// POST WITH AXIOS
//     function axiosPost () {
//             axios.post("https://northwind.vercel.app/api/customers", {
//                 id: idinput.value,
//                                 companyname: nameinput.value,
//                                 contactname:contactinput.value,
//                                 title:contactitle.value,
//             }).then(res => {
//                     console.log(res);
//                 })
//                 }
                
//                 button.addEventListener('click', axiosPost)
            
            
           
//     DELETE WITH EXIOS
// function axiosDelete () {
//     axios.delete(`https://northwind.vercel.app/api/customers/${deleteinput.value}`)
// }
// button.addEventListener('click', axiosDelete)
