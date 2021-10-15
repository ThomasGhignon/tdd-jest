import roman from '../src/roman';
test("Test roman number 0, 1, 4, 6, 10, 52, 107, 560, 1244", () => {
    expect(roman(0)).toBe("")
    expect(roman(1)).toBe("I")
    expect(roman(4)).toBe("IV")
    expect(roman(6)).toBe("VI")
    expect(roman(10)).toBe("X")
    expect(roman(52)).toBe("LII")
    expect(roman(107)).toBe("CVII")
    expect(roman(560)).toBe("DLX")
    expect(roman(1244)).toBe("MCCXXXXIV")
});