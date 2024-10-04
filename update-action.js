(() => {
    const updateForm = (event) => {
        const form = document.getElementById('form');
        form.action = event.target.value || form.action;
    }
    document.getElementById('url').addEventListener('input', updateForm);
})();

(() => {
    const updateForm = (event) => {
        const form = document.getElementById('form2');
        form.action = event.target.value || form.action;
    }
    document.getElementById('url2').addEventListener('input', updateForm);
})();

(() => {
    const updateForm = (event) => {
        const form = document.getElementById('form3');
        form.action = event.target.value || form.action;
    }
    document.getElementById('url3').addEventListener('input', updateForm);
})();


function convertFormToJSON(){
       
    var json ={
  "punchOutDetails": {
    "extrinsic": [],
    "clientPartnerCode": "PC-2023.000843",
    "buyerCode": "70022201",
    "failureUrl": "https://quantumuat.gep.com/leosmb/v3/#/catalog-cart",
    "referenceId": "1b6e971f-2fa3-4ebc-a7b8-4c2529029b8b",
    "redirectionURL": null,
    "selectedItem": null,
    "shipTo": {
      "addressId": "0",
      "name": "",
      "deliverTo": "",
      "addressLine1": null,
      "addressLine2": null,
      "addressLine3": null,
      "city": null,
      "state": null,
      "postalCode": null,
      "country": null,
      "countryCode": null,
      "companyCode": null,
      "street": null
    },
    "StateId": "7002220104000501",
    "JWT": "MnkZGiVSOb1mekotlSzE9GsJqoxecvLLVlzUCChfAYp5C2z6QfMNt2oCM76sNFazRo84WlIVFuuAMI1B3wBUvyklXLSN0Y660IaNCXx9ymum2PRCv7TfRVVOoQEUV+ow2DyMUtXq3qu2Xyy+nV3mtyg*vNLwMb7y3bmqJD2XB2DPPPC92INjDBKTqlHf8Pb7tPTHeq5NWiwvt+yOk5WlEnERJWeinw4UL7tkgB7bdMG7Fv1vDHV0Ac6wZyhGo+eaB3NX5JLb0p1uXecMatppnqd3k*htBJ6bmJNYh4hVZOv92EKicje0yxNY4FQTHg1pQv0paLSVmabHo+TrTIgsxymv8qNZ75VsAqVs97YIjJ10hrId90u3oNNUolABat6gyCW7XegCNvkJ9OwPP5E62DzGokELdzTFgjrbhbaadGZScl97xCI6oVQ7ZMgEXR+qg61zsiKBjq0z07nHVs9bMdfHZkdPls*6RSL3kVTDTKzkH9AQzqJrdR301fCm0iNuXFYrHZpOzKh2exX8+XrDneh68snkGr5W1yD9fyJsF27MGe+2*2vsEVjh2eqKJmduL53XRgjzTHDqZj4npA+*DmXURdE7NjCWPwg5oC3zKayz6g7fCcHhKah1Rlj4wcCxor7LglTDPqszjbGA8rrA12aGMUQ4IlA95MdyUXMYaf8FrgMR+ijFRxJXNPtt+46iBgNSfYxEy4ef2ihVeqpVCfUwiT6loHmCd3K2pLUWSbg7dMhFS7+R7QVrBnhbHD2c5ioyA*9w7VChjPWpBdfNeqAnwK8ZyP0398K*dm7LVRQ6tKnbjGKcJ3ZdpOAaCUPbJWzC0CGeRn8gXxToYVWqy7qemBetrbg+PrtGZgxtsBcvE24kZtusS*lbTR8pKpFVZq4bGSxIKRdD9Skh7PBVAjcChdnFUdkuxbkc9SuI8ZpbGTjiVJ06ig*kEob7aXrDEGKKoMwpWI8QmoWcBgSKoBROXO*mWpifrPDEEcfRUH*hGqrCivu4tZPI*kil*sTqsY*3LU3b0V56U8QCl+*jML9d+qO*TOTS2weIjiEfxE38e+m5khjU2JHMaog8P*RIh*MAuh5DeTyX85EndeajBw4Vf3cbs08+SmiN7PyMZr4DI9ItpijEIUxwq5ZUEK2H4c+EwyE6xjVjbF7PK60H4VZiy6CCF0BE5Gyt+xjpJWONJrhcs7ssoSDdTTz65erqx+mFDkIHJt2Irb4UD3SLyvyM8+d5Bb86Dw*eueqV3mfnXKy11UA0z3NjI9B826tiNNW7lVT6iwM6Ur0*DU7dJRGBW6*b2WhySfwI3rlVDLc2*uU*nKTdLZhnisTUs6anBgIikvWS8WVN98xImRmuqq*sNQlSnaUIM3G01grSkFWP+VtKDFPB2ZFkX6O1lqesytFbGlurhI72Pnz3TV3hain5sMuUVMdg*ndTSBntzvN+KfLJhC0C2Am+c9RDaXxr*RrRVQDJJuKLR4GLHwBZT4Hx7wiW7*Yt7PTX3TR7W2K1S4f1WjYWEjRS6zw+I5mcxssrrI8fzBkutJDZj2cjXesDWw1q7Tik97b3bE7OffrAPC4fc4mFQICpmsAXMVZ7vhz6U9MQBOA1JTC*LK1xu1SNxPV5wb99equ5IYLwobRcgqrcyFJrWACztBLzvFSVK1NmiqQdi4IBBuGRyP1yVbYalYar1rhktGohVIc8xPb9hbBwndnNDe3ViX*cIegA6xlpxAysc3tCnS3lzG3KyjdIOSUbDO13R4wXkKdC7BAD32lDxxBT+SPjsKVWeNxZyvLBuxiAUIGt4JMMi0nRmQ==",
    "isURLReturn": true,
    "operation": "create",
    "buyerCookie": "1b6e971f-2fa3-4ebc-a7b8-4c2529029b8b"
  }
};
   document.getElementById('text-input-value').value=JSON.stringify(json);
}
function convertFormToJSON2(){
       
    var json = {"punchOutDetails":{
  "BuyerCode": "70021790",
  "BuyerUrl": "https://smartqc.gep.com/Catalog/Pageload/Index?oloc=108&c=NDQxMDAz0&OrgStruct=ent=00a0&CC=0&Source=oci&HOOK_URL=sapevent:POST&PunchoutCartReqId=0&PartnerConfigId=4557#/catalog/cart",
  "PartnerConfigurationId": 4557,
  "BuyerCookie": "e68c1173-4bce-47cf-bd98-2107209f84e6",
  "ClientPartnerCode":"punchouttest23",
  "FailureURL":"http://scmdev.gep.com/PETRONAS/#/catalog-cart",
  "ClientName ":"PETRONAS",        
  "Extrinsic": [],
  "Operation": "create",
  "Item": null,
  "SelectedItem": {
    "SupplierPartId": ""
  },
  "ShipTo": {
    "addressID": "00A0",
    "Name": "00A0 BEAUMONT REFINERY:MPP:3862",
    "DeliverTo": "danish pandhare",
    "AddressLine1": "1795 Burt Street",
    "AddressLine2": null,
    "AddressLine3": null,
    "City": "Beaumont",
    "State": "TX",
    "PostalCode": "77701",
    "Country": "USA",
    "CountryCode": "US",
    "CompanyCode": "3862"
  }
}
};
   document.getElementById('text-input-value2').value=JSON.stringify(json);
}
function convertFormToJSON3(){
       
    var json = {"punchOutDetails":{
  "BuyerCode": "70021790",
  "BuyerUrl": "https://smartqc.gep.com/Catalog/Pageload/Index?oloc=108&c=NDQxMDAz0&OrgStruct=ent=00a0&CC=0&Source=oci&HOOK_URL=sapevent:POST&PunchoutCartReqId=0&PartnerConfigId=4557#/catalog/cart",
  "PartnerConfigurationId": 4557,
  "BuyerCookie": "e68c1173-4bce-47cf-bd98-2107209f84e6",
  "ClientPartnerCode":"punchouttest2",
  "FailureURL":"http://scmdev.gep.com/PETRONAS/#/catalog-cart",
  "ClientName ":"PETRONAS",        
  "Extrinsic": [],
  "Operation": "create",
  "Item": null,
  "SelectedItem": {
    "SupplierPartId": ""
  },
  "ShipTo": {
    "addressID": "00A0",
    "Name": "00A0 BEAUMONT REFINERY:MPP:3862",
    "DeliverTo": "danish pandhare",
    "AddressLine1": "1795 Burt Street",
    "AddressLine2": null,
    "AddressLine3": null,
    "City": "Beaumont",
    "State": "TX",
    "PostalCode": "77701",
    "Country": "USA",
    "CountryCode": "US",
    "CompanyCode": "3862"
  }
}
};
   document.getElementById('text-input-value3').value=JSON.stringify(json);
}
