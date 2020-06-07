const CpuDetails = require('../service/CpuDetails');
const CpuDet = new CpuDetails();

class CpuDetController{
    constructor(){}

    getCpuDet=(req ,res)=>{

        const cpuD= CpuDet.getCpuDetails();
        const battD= CpuDet.getBatteryDetails();

        Promise.all(
            [cpuD.catch(err =>{return err;}),
             battD.catch(err =>{return err;})
            ]

        )
        .then(values=>{

            const hardwareDetails={
                'cpuData' :values[0],
                'batteryData' :values[1]
            }
            res.json(hardwareDetails)
        })

        .catch(err=>{
            return res.json(err)
        })


    }  //end of getCpuDet


} // end of CpuDetController

module.exports=CpuDetController;