import fizzBuzz from '../src/fizzBuzz';
test("Test fizzBuzz", () => {
    expect(fizzBuzz()[0]).toBe(1)
    expect(fizzBuzz()[2]).toBe("Fizz")
    expect(fizzBuzz()[4]).toBe("Buzz")
    expect(fizzBuzz()[14]).toBe("FizzBuzz")
});