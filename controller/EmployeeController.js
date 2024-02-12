const Employee = require('../models/EmployeeModel')

//Show the list of employees
const index = (req, res, next) =>{
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has Occured!'
        })
    })

}


//Show single employee
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
       
    })
}

//Add new employee to database
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        emial: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    })
    if(req.file){
        employee.avatar = req.file.path
    }
    employee.save()
    .than(response => {
        res.json({
            message: 'Employee Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
    })
}

//Update an employee 
const update = (res, req, next) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        emial : req.body.emial,
        phone: req.body.phone,
        age: req.body.age
    } 

    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Employee updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error is occured!'
        })
    })
}

//delete an employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID

    Employee.findOneAndRemove(employeeID)
    .then(() => {
        res.json({
            message: 'Employee deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
    })
}


module.exports ={
    index, show, store, update, destroy
}