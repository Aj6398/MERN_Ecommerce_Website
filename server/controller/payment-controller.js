
import paytmchecksum from "../paytm/PaytmChecksum.js";    //taken small....
import { paytmParams, paytmMerchantkey} from '../index.js';

import formidable from 'formidable';  /// TO pass-on the Form...
import https from 'https';    // to hit at https with options...

// By use of payTmcheckSum we can call "api"...
//"paytmchecksum.generateSignature" as per the shown in developer option of paytm.... 


export const addPaymentGateway = async (request, response) => {
    try{
        let paytmChecksum = await paytmchecksum.generateSignature(paytmParams,paytmMerchantkey);
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        }
        response.status(200).json(params);
    }catch(error){
        response.status(500).json({ error: error.message})
    }
}


// We need to make a "Form" then passon that one forward...
///         for that, "Forbidden"- can be use which help to passOn the "Form"...
///           "npm i formidable"
///  ******we can "validate" the "Form" by use of "formidable"...

export const paytmResponse = async(request, response) => {
    const form = new formidable.IncomingForm();
    let paytmChecksum = request.body.CHECKSUMHASH;      //as before, we added "CHECHSUMHASH" in the request's body by calling "addPaymentGateway"-func && stored in variable...
    delete request.body.CHECKSUMHASH;    // after coming "chechsumhash"- we can delete that also...
    

    //As shown method for "validating"-"checkSum"  --> stated in the "Documentation"
    let isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantkey, paytmChecksum); 
    
    if(isVerifySignature){

        //if true then will passOn all the details on the FrontEnd
        let paytmParams = {};
        paytmParams['MID'] = request.body.MID;
        paytmParams['ORDERID'] = request.body.ORDERID;

        // Now want to generate "Signature" ///// "checksum"-local func...
        paytmchecksum.generateSignature(paytmParams, paytmMerchantkey).then(function(checksum){
            paytmParams['CHECKSUMHASH'] = checksum;
            
            let post_data = JSON.stringify(paytmParams);

            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',     //After process, actually redirected from status...
                headers: {
                    'Content-Type': 'application/json',     // formate need to tell...
                    'Content-Length': post_data.length
                }
            }

            let res = "";     //res<==>response
            let post_req = https.request(options, function(post_res){    //function => callback func
                
                post_res.on('data',function(chunk) {
                    res += chunk;         // chunk needs to be concate with response...
                });
                
                post_res.on('end',function(){        // when request ends...
                    let result =JSON.parse(res)
                    response.redirect('http://localhost:3000/') //When payment has been failed or sucess => where we need to go ? ==> on the local-host-3000
                })

            });

            post_req.write(post_data);
            post_req.end();
        })
    }else{
        console.log('CheckSum mismatched');
    }
}


//By taking the "Options"- we need to hit a "https"-call
//////// "npm i https"


