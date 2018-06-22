describe('PURE FUNCTIONS', () => {
    beforeEach(() => {
        a = 1;
    });

    /* Not functional */

    it('should not be pure', () => {
        expect(a).toEqual(1);
        expect(notPure()).toEqual(2);
        expect(a).toEqual(2);
    });

    /* Functional */

    it('should be pure', () => {
        expect(add(1, 1)).toEqual(2);
        expect(a).toEqual(1);
    });
});

describe('LOOPS', () => {
    it('should add one to every value in the collection passed in', () => {
        expect(addOneToCollection([1, 2, 3])).toEqual([2, 3, 4]);
    });

    it('should add one to every value in the collection passed in, in a functional way', () => {
        expect(addOneToCollectionFP([1, 2, 3])).toEqual([2, 3, 4]);
    });
});

describe('FUNCTOR', () => {
    it('should multiply the value passed in by two', () => {
        expect(multByTwo([1, 2, 3])).toEqual([2, 4, 6]);
    });
});

describe('RECURSION', () => {
    it('should return a number on the count of 10', () => {
        expect(count(10)).toEqual(10);
        expect(count(50)).toEqual(50);
        expect(count(500)).toEqual(500);

    });

    it('should return a number on the count of 10', () => {
        expect(recursionCount(10)).toEqual(10);
        expect(recursionCount(50)).toEqual(50);
        expect(recursionCount(500)).toEqual(500);
    });
});

describe('HIGHER ORDER FUNCTIONS', () => {

    /* Functional */

    it('should return true if number is greater than 10', () => {
        expect(greaterThan10(11)).toBe(true);
    });
});