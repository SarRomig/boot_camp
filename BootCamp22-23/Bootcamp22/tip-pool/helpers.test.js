describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      tipAmtInput.value = 10;
      billAmtInput.value = 50;
      //need to run submitPaymentInfo?
    });


  //sumPaymentTotal(type)
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });


  //calculateTipPercent(billAmt, tipAmt)
    it("should calculate tip percentage correctly", function () {
      
    });


  //appendTd(tr, value) 
  it("should add td to parent tr", function() {

  });
  
  //appendDeleteBtn -- this function needs to add a delete btn onto a tr and allow for the tr to be removed when x is clicked (value of td)
    afterEach(function() {
      //update all objects to equal zero
      //update any changed inputs or htmls to ""
      //update any attributes
     let total = 0;
    });
  });
  
  
  