//main.js is controller
//index.js is view
//object is model
const updateButton = document.querySelector('#update-button'); //webpage treated as document
const deleteButton = document.querySelector('#delete-button');

updateButton.addEventListener('click', () => { //click and callback
    console.log('update button clicked')
        //Hit the update end point
    const payload = { //payload object created (rename to updateEmployeeParams)
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Harshita'
        })
    }

    fetch('/updateEmployee', payload)
        .then(res => {//to make async hence then so that if the data is huge, the other tasks can run simultaneously

            if (res.ok) return res.json()
        })
        .then(response => {
            window.location.reload(true);
        })
        .catch(error => { console.log('Error') })

})

deleteButton.addEventListener('click', () => {
    console.log('Delete button clicked')
        //Hit the delete end point

    const payload = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Harshita',//model
        })
    }
    fetch('/deleteEmployee', payload)
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'delete operation failed') {
                console.log('Delete operation failed')
            }
        })
        .catch(error => { console.log('Error') })
})


