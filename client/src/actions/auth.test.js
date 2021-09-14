const auth = require("./auth")
// @ponicode
describe("auth.logIn", () => {
    test("0", () => {
        let callFunction = () => {
            auth.logIn("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth.logIn("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth.logIn("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth.logIn("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            auth.logIn("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            auth.logIn(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("auth.logOut", () => {
    test("0", () => {
        let callFunction = () => {
            auth.logOut()
        }
    
        expect(callFunction).not.toThrow()
    })
})
