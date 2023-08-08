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
                "key": "RequestID",
                "dynamicValue": 0,
                "value": "5826623"
            },
            {
                "key": "FirstName",
                "dynamicValue": 0,
                "value": "Lex"
            },
            {
                "key": "LastName",
                "dynamicValue": 0,
                "value": "Luthor"
            },
            {
                "key": "Email",
                "dynamicValue": 0,
                "value": "amazon.business@gep.com"
            },
            {
                "key": "UserEmail",
                "dynamicValue": 0,
                "value": "ayushi.nigam@gep.com"
            },
            {
                "key": "DeploymentMode",
                "dynamicValue": 0,
                "value": "test"
            },
            {
                "key": "DebugOption",
                "dynamicValue": 0,
                "value": "64"
            },
            {
                "key": "UniqueName",
                "dynamicValue": 0,
                "value": "Penelope Admin"
            }
        ],
        "clientPartnerCode": "PC-2023.000281",
        "buyerCode": "70022033",
        "failureUrl": "https://nexxeqc.gep.com/Antero/v3/#/catalog-cart",
        "referenceId": "e3ea95c8-0e1f-4fac-a4cc-095ba6448edb",
        "redirectionURL": null,
        "selectedItem": {
            "supplierPartId": "B0CC13CZ8H"
        },
        "shipTo": {
            "addressId": "572358724",
            "name": "SyncTest2",
            "deliverTo": "",
            "addressLine1": "Line1",
            "addressLine2": "",
            "addressLine3": "",
            "city": "Kansas",
            "state": "Alberta",
            "postalCode": "1234",
            "country": "Canada",
            "countryCode": "CA",
            "companyCode": "ALL",
            "street": null
        },
        "StateId": "7002203304000001",
        "JWT": "becb*e6xHpuTmjA7*cE31VTbaSD5eqvN14Vwr0A*6Ae93XsbLOsyaH1BYDKIErSsem27lmk5WN8MhcMjPwUQSs0y587PrIvO4fqwmY5flB0ea4WneLfRX0qpor7J9eEcQlDtyeED*2Ht9iBUVUPxwGip2Xpb8a*93TPtqg6+plnTb0AmfFs5re4EEYMxW2hFUF2RCxMc1ycqbFPSaTRyzQtkoVh4uTNZbLghQxoB7bkZxtj37+Wu0rVhtvykcnr5IoqEOK*Hsj13cwAbH53JchFmjXqeV4i+vNfMTKePMM0*ApShD2i6kvZNPwyptPeAXMVQ7UaEJC3rb3XxhyCnd3cHJ*SVpvU+SYfuqRcWZBSqQUl4Ui96MFL398czTFVHrBIePsPKLJc8KW9XsPoQxUVyjVOx9JYoP28mz8echDDFQfny8*ZLRvaNB4NpAh3OYiYRAlmz3weA4PyXBIVT2BbJgRL+Mym+fkocRhNWuDmLLsQt5jhCvh7V1bgZEIAYJb9dQviWO8iRafac*Pw524aNGAfwV2R+dseL0DzLn7kYr3ZhcupVDm9KEu+8QduhSB0Xp6AyF6Sr+C2zZfNUI7uPp0fMGspGOMdUZqAd2it8*mrJjfWpjk+y7dleXXRlSmMF+FLmL+BDHqxOW98RMuVMCHQxxH*BzDo3+likHcc7EpkqfF5eAxIpWgYrlMbbBdHFt3vx5apaQA1LAiL53Hb886dIZ7cNG5rOsbFW*ici1p3aMMFqUpmJpLffHjmUcatG4V0kB4NJaxniH2CvQkBu8LPCxVSPpYjaGgHx6m*d9*tK+cjZXbNl5t53vG3lM8Pr0JW2pChsjA7ce6wYrFrZCXPWwJsaLUJV+MQO*Cv1eUWKMQ7sFNcQ57ClYs4CswNeXH6OoLlhFGtjGCWlWzWGymhhFNttdJyLCfm10e*dM7O7WRTSKDGHv72FsaPC4Pepin9t1Ys4N9kjnZCHFgi46PonDo*jLbZhkrEqWGYdRcOoasf0wzooLoxeQGhG1RHzjLXT+zUB6GyCzARqh9Mdf9LI68EO3kJedgAmbzKwB39rPEPWCQjDPslpOKb2yqZ*tkGYtGn2IBf7r3egSElGMUcpDAUVNoTt5Xhfc3aUTMapDSFW2HCfFSh0RId*4jDTw*kK5CSFawfiD9hX78oIZKq5w7CgnNYwJ*jopu0o2w*c3UOXDDj1Ybpd1ZpXlH4EBOP*OBm4571yy80*+*Pb42QvvTEqU2CH7lCGbR02HQM1vq6RXMPFEDDedW+cyLslzT5LAEAHJuPF2UoAu2rPth49oXKzMK6TVKT4BK0YKbFR7fyH0tgfG+zBlzbye9UMeY9orqGhvgTEKMiHmBMb6f590M0TwWoVRkGlfq1lGy8rLfLqIir*chzm6Uzv26Jx4kXCq0eYodyXpvqVNHD7Vap+3VpBB3RybvUjqyNBoolpC82Jgz7sCmRbXII77E18+1MRWuo1qQYjHXNnMRurpZGxLQKoEqsSC3zgjDHzZiHSuQI3DoErHoic0RMpu3uj0sK*mJCVbUou+CMAG+P1oFmZu5vU5L3PvqB9PzM=",
        "operation": "create",
        "buyerCookie": "e3ea95c8-0e1f-4fac-a4cc-095ba6448edb"
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
