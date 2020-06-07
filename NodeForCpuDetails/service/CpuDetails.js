const si = require('systeminformation');

class CpuDetails{

    constructor(){}

    getCpuDetails(){

        return new Promise((resolve, reject) =>{
            si.cpu().then(data=>resolve(data)) .catch(err=>reject(err))
        })
    } // end of getCpuDetails

    getBatteryDetails(){

        return new Promise((resolve,reject)=>{
            si.battery().then(data=>resolve(data)).catch(err=>reject(err))
        })

    }  //end of getBatteryDetails

} //end of CpuDetails

module.exports=CpuDetails;