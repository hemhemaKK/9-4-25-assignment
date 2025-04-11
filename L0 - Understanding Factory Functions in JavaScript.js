function createEmployee(name,role,salary){
    let emp = {}
    emp.name = name
    emp.role = role
    emp.salary = salary
    emp.introduce = function(){
        console.log(`Hello, I am ${name}, working as a ${role}.`)
    }
    return emp
}
const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce();