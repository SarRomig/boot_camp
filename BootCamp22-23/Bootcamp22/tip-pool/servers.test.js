describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add an attribute to the new tr that is created', function () { //you can pass in code for this whole function to use within the expect function 
    updateServerTable();
   expect(newTr.setAttribute).toEqual(('id', "Alice"));
  });


  afterEach(function() {
    //update all servers object to equal zero
    //update any changed inputs or htmls to ""
    //update any attributes
   
  });
});


