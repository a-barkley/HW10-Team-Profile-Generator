const Employee = require('../lib/employee');

describe("Employee", () => {
    it("should create an employee object", () => {
        const test = new Employee('test', '1', 'test@test.com')
        const solution = {
            name: 'test',
            id: '1',
            email: 'test@test.com'
        }
        expect(test).toEqual(solution)
    })
    describe("getName", () => {
        it("should return the employee name", () => {
            const test = new Employee('test', '1', 'test@test.com')
            const solution = test.getName()
            expect(solution).toEqual('test')
        })
    })
    describe("getId", () => {
        it("should return the employee ID", () => {
            const test = new Employee('test', '1', 'test@test.com')
            const solution = test.getId()
            expect(solution).toEqual('1')
        })
    })
    describe("getEmail", () => {
        it("should return the employee email", () => {
            const test = new Employee('test', '1', 'test@test.com')
            const solution = test.getEmail()
            expect(solution).toEqual('test@test.com')
        })
    })
    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const test = new Employee('test', '1', 'test@test.com')
            const solution = test.getRole()
            expect(solution).toEqual('Employee')
        })
    })
})