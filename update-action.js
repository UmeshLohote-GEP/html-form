(() => {
    const updateForm = (event) => {
        const form = document.getElementById('form');
        form.action = event.target.value || form.action;
    }
    document.getElementById('url').addEventListener('input', updateForm);
})();


function convertFormToJSON(){
       
    var json = {"punchOutDetails":{
  "BuyerCode": "441003",
  "BuyerUrl": "https://smartqc.gep.com/Catalog/Pageload/Index?oloc=108&c=NDQxMDAz0&OrgStruct=ent=00a0&CC=0&Source=oci&HOOK_URL=sapevent:POST&PunchoutCartReqId=0&PartnerConfigId=4557#/catalog/cart",
  "PartnerConfigurationId": 4557,
  "BuyerCookie": "e68c1173-4bce-47cf-bd98-2107209f84e6",
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
   document.getElementById('text-input-value').value=JSON.stringify(json);
}
