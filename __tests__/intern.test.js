const Intern = require('../lib/intern');

describe("Intern", () => {
    it("should create an intern object", () => {
        const test = new Intern('test', '1', 'test@test.com', 'testHigh')
        solution = {
            name: 'test',
            id: '1',
            email: 'test@test.com',
            school: 'testHigh'
        }
    })
    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const test = new Intern('test', '1', 'test@test.com', 'testHigh')
            solution = test.getSchool()
            expect(solution).toEqual('testHigh')
        })
    })
    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const test = new Intern('test', '1', 'test@test.com', 'testHigh')
            solution = test.getRole()
            expect(solution).toEqual('Intern')
        })
    })
})