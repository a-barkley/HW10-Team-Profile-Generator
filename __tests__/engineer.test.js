const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it("should return an engineer object", () => {
        const test = new Engineer('test', '1', 'test@test.com', 'testgit')
        const solution = {
            name: 'test',
            id: '1',
            email: 'test@test.com',
            github: 'testgit'
        }
        expect(test).toEqual(solution)
    })
    describe("getGithub", () => {
        it("should return the engineer's github", () => {
            const test = new Engineer('test', '1', 'test@test.com', 'testgit')
            const solution = test.getGithub()
            expect(solution).toEqual('testgit')
        })
    })
    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const test = new Engineer('test', '1', 'test@test.com', 'testgit')
            const solution = test.getRole()
            expect(solution).toEqual('Engineer')
        })
    })
})