
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 100000,
  years: 15,
  rate: 5.0})).toEqual("790.79");
  expect(calculateMonthlyPayment({amount: 9000000,
    years: 45,
    rate: 11.2})).toEqual("84560.37");
});


it("should return a result with 2 decimal places", function() { //should be a more direct way?
  expect(calculateMonthlyPayment({amount: 100000,
    years: 30,
    rate: 8.5})).toBe("768.91");
    expect(calculateMonthlyPayment({amount: 30000,
      years: 15,
      rate: 14.5})).toBe("409.65");
  });

it("should work with zeros", function () {
  expect(calculateMonthlyPayment({amount: 100000,
    years: 0.5,
    rate: 0.015})).toBe("16667.40");
  });