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
  "BuyerUrl": "https://smartdev.gep.com/Catalog/PageLoad/Indexdev?oloc=108&c=NDQyMjQ10&OE=2258&PunchoutCartReqId=0&PartnerConfigId=3779#/catalog/cart",
  "PartnerConfigurationId": 3779,
  "BuyerCookie": "6c997e02-7851-4fea-ab86-1f677a7c09ce",
  "Extrinsic": [
    {
      "Key": "UniqueName",
      "Value": "Exxon 3 mobil 3"
    },
    {
      "Key": "UserEmail",
      "Value": "123@gep.com"
    },
    {
      "Key": "Department",
      "Value": "00A1"
    }
  ],
  "Operation": "create",
  "Item": null,
  "SelectedItem": {
    "SupplierPartId": ""
  },
  "ShipTo": {
    "addressID": "00A1",
    "Name": "00A1 BATON ROUGE REFINERY:MPP:0944",
    "DeliverTo": "Exxon 3 mobil 3",
    "AddressLine1": "3545 SCENIC HIGHWAY",
    "AddressLine2": null,
    "AddressLine3": null,
    "City": "Baton Rouge",
    "State": "LA",
    "PostalCode": "70805",
    "Country": "USA",
    "CountryCode": "US",
    "CompanyCode": "0944"
  }
}
};
     document.getElementById('text-input-value').value=json;

    return json;
}
