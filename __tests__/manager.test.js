const Manager = require('../lib/manager');

describe("Manager", () => {
    it("should create a manager object", () => {
        const test = new Manager('test', '1', 'test@test.com', '101')
        solution = {
            name: 'test',
            id: '1',
            email: 'test@test.com',
            officeNumber: '101'
        }
        expect(test).toEqual(solution)
    })
    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const test = new Intern('test', '1', 'test@test.com', '101')
            solution = test.getRole()
            expect(solution).toEqual('Manager')
        })
    })
})