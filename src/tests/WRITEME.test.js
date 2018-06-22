xdescribe('PURE FUNCTIONS', () => {
    it('should multiply two numbers without maniipulating global state', () => {
        expect(multiply(2, 5)).toEqual(10);
        expect(multiply(3, 4)).toEqual(12);
    });
});

xdescribe('FUNCTOR', () => {
    it('should multiply the number passed in by 2', () => {
        expect(multByTwo([1, 2, 3])).toEqual([2, 4, 6]);
    });
});

xdescribe('RECURSION', () => {
    it('should count down from the provided value - and return the passed in value', () => {
        expect(countdown(10)).toEqual(10);
    });
});

xdescribe('HIGHER ORDER FUNCTIONS', () => {
    it('should return true if value is less than 10', () => {
        expect(lessThan10(2)).toEqual(true);
    });

    it('should return false if value is greater than 20', () => {
        expect(lessThan20(50)).toEqual(false);
    });
});