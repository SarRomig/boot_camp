describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });
  //submitServerinfo

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it ("shouldn't add a server if no server name is inputted"), function() {
    //if serverNameInput.value = 0 then no there shouldn't be a server list

  });

  //updateServerTable
  it("should add a td to the new tr that is created", function () { //need to run the two functions with the information needed to update the serverTBody 
    submitServerInfo();
    updateServerTable();
    
   expect(newTr.setAttribute).toEqual(('id', "Alice")); // but not this - it would be something to identify the td already made 
  });

  if("")

  afterEach(function() {
    //update all servers object to equal zero
    //revert back to clean slate from beginning of JS
    //update any attributes
    serverTbody.innerHTML = ''; //from updateServerTable initial set up
    let allServers = {}; 
    let serverId = 0; //from beginning of JS
  });



