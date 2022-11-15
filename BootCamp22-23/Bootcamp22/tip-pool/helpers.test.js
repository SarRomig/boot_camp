describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      tipAmtInput.value = 10;
      billAmtInput.value = 50;
      //need to run submitPaymentInfo?
      submitPaymentInfo();
    });


  //sumPaymentTotal(type)
  it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(10);

    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(20);
  });


  //calculateTipPercent(billAmt, tipAmt)
    it("should calculate tip percentage correctly", function () {
      //have tip amt input and bill amt input set in beforeEach
    expect(calculateTipPercent(50,10)).toEqual(20);
    });


  //appendTd(tr, value) 
  it("should add td to parent tr", function() {
    let newTr = document.createElement("tr");
    appendTd(newTr, "testing");
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("testing");
  });
  
  //appendDeleteBtn -- this function needs to add a delete btn onto a tr and allow for the tr to be removed when x is clicked (value of td)
  it("add delete btn element to tr", function() {
    let newTr = document.createElement("tr");
    appendDeleteBtn(newTr, "X");
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
});

    afterEach(function() {
      //update all objects to equal zero
      //update any changed inputs or htmls to ""
      //update any attributes
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {};
      serverTbody.innerHTML = "";
      paymentId = 0;
    });
  });
  
  
  