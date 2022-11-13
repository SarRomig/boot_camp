
  describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      serverNameInput.value = 'Alice';
    });
  
  //submitServerinfo

  it('should add a new server to allServers on submitServerInfo()', function () { //this is failing in browser even though it was given in the exercise.
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it ("shouldn't add a server if no server name is inputted", function() {
    //if serverNameInput.value = "" then no there shouldn't be a server list. To check server list (it's an object) have to use Object.keys
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  //updateServerTable
  it("should add a td to the new tr that is created", function () { //need to run the two functions with the information needed to update the serverTBody 
    submitServerInfo();
    updateServerTable();
   //expect(newTr.setAttribute).toEqual(('id', "Alice")); // but not this - it would be something to identify the td already made aka the object list
   let tdList = document.querySelectorAll('#serverTable tbody tr td'); //identifying all rows in the server table
   expect(tdList.length).toEqual(2); //update to 3 with delete button
   expect(tdList[0].innerText).toEqual('Alice');
   expect(tdList[1].innerText).toEqual('$0.00');
   //expect(tdList[2].innerText).toEqual('X'); add once you add the delete button functionality
  });

  it("should not add server row if no server info is provided", function() {
    serverNameInput.value = '';
    submitServerInfo();
    updateServerTable();
    let tdList = document.querySelectorAll("#serverTable tbody tr td");
    expect(expect(tddList.length)).toEqual(1); //update to 2
    expect(tdList[0].innerText).toEqual("$0.00");
    //expect(tdList[1].innerText).toEqual('X'); add once you add the delete button functionality
  })

  afterEach(function() {
    //update all servers object to equal zero
    //revert back to clean slate from beginning of JS
    //update any attributes
    serverTbody.innerHTML = ''; //from updateServerTable initial set up
    let allServers = {}; 
    let serverId = 0; //from beginning of JS
  });
  })