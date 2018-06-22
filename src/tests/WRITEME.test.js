xdescribe('PURE FUNCTIONS', () => {
    it('should multiply two numbers without maniipulating global state', () => {
        expect(multiply(2, 5)).toEqual(10);
        expect(multiply(3, 4)).toEqual(12);
    });
});

xdescribe('FUNCTOR', () => {
    it('should add one to every value in the collection', () => {
        expect(multByTwo([1, 2, 3])).toEqual([2, 4, 6]);
    });
});

xdescribe('RECURSION', () => {
    it('should add one to every value in the collection', () => {
        expect(countdown(10)).toEqual(10);
    });
});

xdescribe('HIGHER ORDER FUNCTIONS', () => {
    it('should multiply every value within the array by two', () => {
        expect(lessThan10(2)).toEqual(true);
        expect(lessThan20(50)).toEqual(false);
    });
});