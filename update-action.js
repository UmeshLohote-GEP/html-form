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
       
    var json = {
    "punchOutDetails": {
        "extrinsic": [
            {
                "key": "ThirtaTest",
                "dynamicValue": 4,
                "value": "q"
            },
            {
                "key": "obo ThirtaTest",
                "dynamicValue": null,
                "value": ""
            }
        ],
        "clientPartnerCode": "PC-2022.008748",
        "buyerCode": "197250",
        "failureUrl": "https://nexxeqc.gep.com/BOFA/v3/#/catalog-cart",
        "referenceId": "a5e4d809-c4bf-42ba-a89d-efeee40ed242",
        "redirectionURL": null,
        "selectedItem": null,
        "shipTo": null,
        "StateId": "1972500040000001",
        "JWT": "becb*e6xHpuTmjA7*cE31VTbaSD5eqvN14Vwr0A*6Ae93XsbLOsyaH1BYDKIErSs8vBZTwlTikNlywdaop7EYOM1t28yHcLDHTbeOoe8J8thM25qGhC0TrIXFCxvHd+To9xTHjVQNjLH1Zp3uNk7oN+nFZnKtylGkD5kPz+Pg+jzON9Y3sIB8tBoQoYOHa9uYeeH99UYM6OnNzHQnirckO72ofxtiJruIxxeDLlmZrIcvEmHWbP+6GqdLEUSfM0lZ*WWzp2cuLc1d4fR7B1p2c+KVV1Tae3YK*jmwVmopXE7bHF74JZsc7NZ*sVYtEaB+Tt*mwJkk*F3M+yHSpNF0OsluZ69465in0mJdqgcJ2DWKSocpmSGr5+2mJj1UAsK7PAPCFgIcDaqLn1FKjGQrnpXY7Mio555my56TipD1G8YepZpNQ+p9JTHIMTzr5ZS6ynscpo95j8PdT4fMDC1bW9CsPfJZhCfL+6pRJ7TRG7LLjhY*hkSayBxj50V4Ao7xQGJ2O1UAlXZ4fsbPmvSsFgw9LbQoYl6vnRVSXebVuwr9tPaGlMt17MyqI+*1SqiI0qN7bwUyqbpFBzMItCnGf2IJdR*SbNU9Vqm8tvyRZEYKdzthM8DzbOlU8qf4PEPv2SiP5+uMMap4dqMCgZTyqnf74XCS3otgFj+hF8OJzMzcNQ*0vJelVBXgxxuuwBcWOChnYPdP2dLIw+GeM6jc+YSfLi5Y6EwQUFKfFV77lzE1eJarbzwPiazJ79Imt37py+gbJCkLMthZpTkvi4L*Ubtw1eEu3BSOyYXCEgTsP0JcB5AEEZoo5hle3RvIwC1YL+kiaUvpYF6updHwASCTkh0TbF1sHtV8cwKR*dqVnFuxn9oVaeR756+E2SCDrwdfdvvyU8ZDiYBrFxEOb643DThqPamOAmujGTJqwMuS9tSCb9wWDBcz400iTQnEJnfJ46BhLHJoqV7ftX+4mXFbCSnfVY1ajz3aBLL6ph789kIWJB8ck5G+2U6d0tG6Fc0C2NJTaBebkN*8Q52wXabSPKVg+gCO+FSHqZSb5yVVQBKIXt4NoSmel53PX40DZDCVadcYa5IYXohfS73aLXUFbIs0DITWbMvruiNwQP0KPUog3zNjq4*p1RZkzd2YgZq48CjvEaoyuPYYcHvYI9nwe696etGhXytJr6PydwOYQGmcFu8Dc4epoYX3GfwP7cUpSIhSRJLEyXFqf+VCXP4pOow0ahanDRtv0oTCEBF5*UtVlPVvYzcTlLFTMH+nVclaJtx4sZDLcvqcA36OBHdkLIeqEr7tHGWFc+FDV5VNRnhELuS1T9l41S5H9l1lQ5J0t1yiL*soT4ZaXnv2iGb7gEvvBIdIesBty9xyvxWTE0m+1SzcOZJK9j5Tsw*wrZrhud5M5yusAB0OZve+Pw*y+k+fIg7F*iWrPCSO+FRmeCXQnV6HLc6feawwhgK7F2l34Zp*+l1JsZGfqQQtAjp20Km9E9sx5gh1PXhZn5aD22XD9A5s5Jo8lnoqNWaOT1Gr4RB4hPLQp4q467h8Rkw+ZdzCPLAtPkTTu35qPRnnIKChmvLmdJtCUmV+PAcJedO",
        "operation": "create",
        "buyerCookie": "a5e4d809-c4bf-42ba-a89d-efeee40ed242"
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
