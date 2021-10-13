const dealerController = require('../controllers/dealer');


module.exports = app => {  
    //Dealer related api's
    app.post("/dealer", dealerController.create);

    app.get("/dealers", dealerController.findAll);

    app.get("/dealer/:id", dealerController.findById);

    app.put("/dealer", dealerController.update);

    app.delete("/dealer/:id", dealerController.delete);
  
   //dealer address API's
   app.post("/dealer-address", dealerController.createDealerAddress);

   app.get("/dealer-addresses/:dealerId", dealerController.getDealerAddresses);

   app.get("/dealer-address/:id", dealerController.getAddressById);

   app.put("/dealer-address", dealerController.updateDealerAddress);
   
   app.delete("/dealer-address/:id", dealerController.deleteDealerAddress);

  };