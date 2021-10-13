

module.exports.validateEmail = ((email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  })

module.exports.validateAddress = ((address) => {
const re = /^[a-zA-Z0-9\s,'-]*$/
return re.test(String(address).toLowerCase());
})

module.exports.sendSMS = function(phoneNumber, message) {
  return new Promise((resolve,reject)=>{
    console.log('Inside sendSMS');

    var msg91 = require("msg91")("338038AdpwYwmg5f2b92e3P1", "GFARMS", "4" );
   
    // Mobile No can be a single number, list or csv string
    var mobileNo = phoneNumber;
     
    msg91.send(mobileNo, message, function(err, response){
        console.log(err);
        console.log(response);
        if(err){
          reject(err)
        }else{
          resolve(response)
        }
    });
  })
};