const Dealer = require("../models").dealers;
const DealerAddress = require("../models").dealer_address;
const warehouses = require("../models").warehouses;
const format = require("../config/response").format;
const helper = require("../helpers/helper")

//---------------------------------------------------------------------------------
module.exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    let response = format("400","failure","Content can not be empty!");
    res.status(400).send(response);
  }

  // Create a dealer
  const dealer = req.body;
  let validation = helper.validateEmail(req.body.owner_email) 
  if(validation == false){
    let response = format("400","BAD_REQUEST","Email is not valid",null)
      res.status(400).send(response)
  }
  if(isNaN(req.body.owner_mobile) || (req.body.owner_mobile).length != 13){
    let response = format("400","BAD_REQUEST","Phone number is not valid",null)
      res.status(400).send(response)
  }

  // Save Delaer in the database
  Dealer.create(dealer)
    .then(data => {
      let response = format("201","success","Created",data)
      res.status(201).send(response)
    })
    .catch(err => {
      let response = format("400","failure",err,null)
      res.status(400).send(response)
    })
};
//---------------------------------------------------------------------------------------
module.exports.findAll = (req, res) => {
  // Fetch all dealers
  Dealer.findAll()
  .then(data => {
    let response = format("200","success","Fetched",data)
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

module.exports.findById = (req, res) => {
  
  const id = req.params.id;
  // Fetch  dealers by primary key 
  Dealer.findByPk(id)
  .then(data => {
    let response = format("200","success","Fetched",data)
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

module.exports.update = (req, res) => {
  // update  dealer
  Dealer.update(req.body, {
    where: {
      id: req.body.id
    }
  })
  .then(data => {
    let response = format("200","success","Updated",data[0])
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

module.exports.delete = (req, res) => {
  // deactivate  dealer
  const id = req.params.id;

  Dealer.update({"is_active":false,deleted_at:Date.now()},{
    where: {
      id: id
    }
  })
  .then(data => {
    let response = format("200","success","Deleted",data)
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

module.exports.createDealerAddress = (req, res) => {
  // Validate request
  if (!req.body) {
    let response = format("400","failure","Content can not be empty!");
    res.status(400).send(response);
  }
  let validation = helper.validateAddress(req.body.address)
  if(validation == false){
    let response = format("400","BAD_REQUEST","Address is not valid",null)
      res.status(400).send(response)
  }
  // Save Dealer in the database
  DealerAddress.create(req.body)
    .then(data => {
      let response = format("201","success","Created",data)
      res.status(201).send(response)
    })
    .catch(err => {
      let response = format("400","failure",err,null)
      res.status(400).send(response)
    })
};
//---------------------------------------------------------------------------------------

module.exports.getDealerAddresses = (req, res) => {
  // Fetch all dealer address
  const id = req.params.dealerId;
  DealerAddress.findOne({ where: { dealerId: id } },{ include: ["dealer"] })
  .then(data => {
    let response = format("200","success","Fetched",data)
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

module.exports.getAddressById = (req, res) => {
  
  const id = req.params.id;
  // Fetch  dealer address by primary key 
  DealerAddress.findByPk(id,{ include: ["dealer"] })
  .then(data => {
    let response = format("200","success","Fetched",data)
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

module.exports.updateDealerAddress = (req, res) => {
  if (!req.body || !req.body.id) {
    let response = format("400","failure","Content can not be empty!");
    res.status(400).send(response);
  }
  // update dealer address
  DealerAddress.update(req.body, {
    where: {
      id: req.body.id
    }
  })
  .then(data => {
    let response = format("200","success","Updated",data[0])
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

module.exports.deleteDealerAddress = (req, res) => {
  // delete dealer address
  const id = req.params.id;

  DealerAddress.update({"is_active":false},{
    where: {
      id: id
    }
  })
  .then(data => {
    let response = format("200","success","Deleted",data)
    res.status(200).send(response)
  })
  .catch(err => {
    let response = format("400","failure",err,null)
    res.status(400).send(response)
  })
};
//---------------------------------------------------------------------------------------

