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
        "key": "FullName",
        "dynamicValue": 1,
        "value": "ReqPO_UAT_Auto_P2P Requester11"
      },
      {
        "key": "UserEmail",
        "dynamicValue": 2,
        "value": "Leoautomation1@gep.com"
      },
      {
        "key": "obo FullName",
        "dynamicValue": null,
        "value": ""
      },
      {
        "key": "obo UserEmail",
        "dynamicValue": null,
        "value": ""
      }
    ],
    "clientPartnerCode": "294",
    "buyerCode": "70022010",
    "failureUrl": "https://nexxeuat.gep.com/UATBOFA3/v3/#/catalog-cart",
    "referenceId": "2dedaf93-a4ee-4d92-ae43-63664f7e2de5",
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
    "StateId": "7002201004343712",
    "JWT": "MnkZGiVSOb1mekotlSzE9GsJqoxecvLLVlzUCChfAYp5C2z6QfMNt2oCM76sNFazGtjBM5eqWSpdFMGOgH8o2FFKP+c0Xq4HQ7NFUbe1OLuREjDwUcODyml7xERUXT62sLmaYU8esSHM5ZUj2nPNSfhdkIl1F8h1aoZ9seQXga+O172Ph5N88GPKcDDlMEr69ydGEfRYP6k5ree4hYvQUf6nw6QZ1jzI3yxvDGgLw0d7KMlBGI7hlnEkjyRIGUQNIW5awnlmrtFjAENse4cgLKR4NBUPplJl99FzIAygIYFOVLsMG3GLdIlveEbtyIPs2jb9ycSXpRXm7nfLakJReFgqp14zFjcSSnyMlyYm5hRw4dUGEbmG7rnjiinamjOCU8RoIm9+EBySpvVK35lAluzLwrh77FiUubdrwjE6tBGWawRN8i1ghj5qDEzNpdErYYSTmtJDUESZvOoKKNy4fQa39t++GYorqDERhUUelPHfepy3**HIfawMlne*HJKnu*Un8onJzswWyzfGYyGobQMLnA6QUlhyckd6aPIZM4BSEk2Fze53Xzc9x*chOmxrW5Fb0rq6VyGiAy5jzYSVaK*jB+UJaS+cBjHqzvKlD6FQa5wnYnmxtL+U4YjH3MiGxOF9pdWp0U0z6IBog2yG+KmKaz9oB5kY3PDB2XWZ1bK3AmayPIOgXI9U4s0jkfmwbd3DYUznO5g+cY40Bs4EPCtHXlUzCsGwKf7DwHt5n8u+Zep3VTiVyHYsf5ZNrY6XL2*owGu5M6iMI34fvO*gwaFbInobaYJvp2njK7Jf2ybRzFOvQwzlvTinG*ZcDcCY8*4QYvroKPiBcKfmLF8S3++hZv4gXJhh+PQed0Fhh7wKe*6UluLwWxP6q15fWPSl6rvXJEd5GkkHdZtHYJVL8bsTU*VsCZ*mgxdA+Yc+wkA9MKv8lRn4H0gTt3vu0aTmDV3YORyTBYH8Hx1OZi7Jk6Qf7B+6U5R4B1SOvVc7yfGdb70glrpHj7djrdFNO66MN84ytn+dAflFDTIsQw0CtXHLVrAFyKaohb4MH7VaNc1B+dCcdygqH+f0PYwe+vnPRas*o8+8RJ8Alr93eWGKv91eh+Qv7yn0FnGiDY7oEGnY+7JO9S1Kbn*n41l+nzwgj+OwE72zbbT7f9ZKJrqObrNUQOYSVev+QDYVq06encGyUhqUPmRMP0AEvxNXREDr4e16UVcCZfqxNkxKkAP*hnF8uUa+clpwxD4HimsB7jgKTgWZjmEv5B6vhCivINiWqyZmH6+O7GEGF6bjGxNhh8BOs4Z9SecP8z1ZN*BxV*ewBK4IP5zVZOrTpzLK1OHLlt*v*BlhD83+TSYaWJGyWVTGNN1AU0CdJf*1dm*X3Sb8kvJBfI+tjCBumbpw+0AaYz1kQUQwl8x3p0ARsAsthKCRiOxgEcMTyJGMT*gQlDWK3L*bEqiCfoKYy6YLHp4R0WRjXgf*0IYw*77TcOfPXB00zIWmB33ejRw80tVwD6fKsyYHoahB4VFrj4AvVGJvIRm4TbZHuIYgYNN9D+ZYqw3RwBw9cObZob**V1AzmyohnRj0eodIUvP7xgEpABQCM5C7FgX3DWRA3rL3wkjgM7RbL1J4aT9TyVQLfdoq9TqRjUUADcZsGT+wJ6n5YArcp3Y*gBjxs8l0nFkf3sVHyRp9E3Wye1AxYQzYKwWKRvXIrxupllnVfREEMvfgmlV+fkaat4x38AzPbosS9Vl4hH3AJM0N72kk2z56yVR2LDvlgudmhUYuvmDkMVIry*tEpBCAuj*TZp5kxm0BJOTdH97yucF9Y4dww4T0z3NFxUx5SczdnVtQwW+QotmEcPm0NFLzkUVlAO9PKGXh8W2hZBXYUHCMHecB9S38Oq2RoT4ax33dLgQHVUjdFVk5BLkJC*g*M6gkmAlB02V44PDA+XvYiyj5iCsPUBOHV3+JLqUMRtwWveG*XDpIIYinmCJNv6xXfqxrzYrcFUgVfKaZoEMuYriHBdQvHwurFHdDF*bFonU12CGpWQhno6vsvjpB5sYK1Ba8Dq5IUw3oGQAN7weUcU0FaqUad*UBOjvdt9HeUi1Tet3a4SnqLp+tQQGGURVrZp4W7GuVrwaJDmSujhQbSt+*O*n0eG9qvwmNII6BAiAakXF55vdPdxidMuVAhOqQvkZS6JTQsf08a*CeYRLjMUVvcax53SqOAQxGqMazh+zJ2FkDWn1boV+ZLPIXq0w3vEw*+D08axgcASXSP+D6zzmZ9Knt+zffWYNKD9u*2scVpoaQmQv4N0kQrQkyXYX*sVh4SG6a7kjdzUAfQ6YLwlWGY*SR1Y0etW7C1ZMVvLtQkm7u9Pjcwn3VoZ5sYBx+vQL*XkrL*B4IcMmoWug9kJO8JCYJyec6Up9du510ngk4FGuE7smJqTWlhLjG*VM1CnRj0C6oecy5uIsKjgAkw0eNQaUK0GC+Phr8c3oNucPkhRItDMH11xxL6YzG91QbfFKixv0gIXLxHBev79o9u*JuiUHNU1MypYwzE220F5gQxNagZ0xJHQp3tWmDniMeN23X*Tv7OOGDvElJjxFj*oxkpFgYwBKRrcOz9oUiSQ4vqn7HrRCCKYTBDpz2J6tNXdgHLhtl0j8RsiE8+l5xaqR6moki1t8JGEUzzVsWYdCnnljPYUN*i9FITZK0Q+0toezy8PMNUkwsrWDSU2s9bTU1Fa7Zp6M0tAJNhfqzOQTWVk7Rr+XktuY+6pZqjhl4pN2aziQ6YNgNgGrQ*PyfKL0Fm3FvUUs5JkphuYoHlgA8Cf3zS*Cw7eDp8+hoQH9QXYzbI1Cy++eaUIOAKPW6JklIj*2gnqNbBpEdViW+utxTCMAFe6ArFSZb0hdppWk2BTPTsGjMDrC*Gni+oNL4PWxLkvfbbulJgUEdztrd5RLhRYIi4HQW2hI+ka+xjotjiAI9cqy3VLcoKwC7EQ*vq25jUZwxo517M03mw5+BqPPNfy*UqG26Nm2eYeFQZ+VvAWhaQIoYOfeYdpORAJJG0WolGqmsqh38vYO2CLVx2YghrlcufDbQFQ0A5r3+7YoOmZP5KVR6G17*OW6rfeLSOzlA88IqrWDtNJZVWByHC+dN5G*wnhggk9aw3STFCG*Zq3jRXSp9*UdB3znKnFQzHrvKSrkQALvUqAwHIupP5dpuZB+H1I3wtCc3w8Rl4YtS76JNQ31Q9at57IYsTA==",
    "operation": "create",
    "buyerCookie": "2dedaf93-a4ee-4d92-ae43-63664f7e2de5"
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
