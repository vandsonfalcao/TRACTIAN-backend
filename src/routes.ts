import express from 'express';

import CompanyControler from '../src/app/controler/CompanyControler';
import AddressControler from '../src/app/controler/AddressControler';
import BranchControler from '../src/app/controler/BranchControler';
import UserControler from '../src/app/controler/UserControler';
import DeviceControler from '../src/app/controler/DeviceControler';

export const routes = express.Router()

//  INDEX
routes.get('/', (req, res) => {
    return res.json({ mensagem: `Server running...` })
})

//  CONTROLER Company
//  create
routes.post("/company", CompanyControler.store);
//  update
routes.put("/company/:companyId", CompanyControler.update);
//  delete
routes.delete("/company/:companyId", CompanyControler.delete);
//  show
routes.get("/company/:companyId", CompanyControler.show);
//  index
routes.get("/company", CompanyControler.index);

//  CONTROLER Branch
//  create
routes.post("/branch", BranchControler.store);
//  update
routes.put("/branch/:branchId", BranchControler.update);
//  delete
routes.delete("/branch/:branchId", BranchControler.delete);
//  show
routes.get("/branch/:branchId", BranchControler.show);
//  index
routes.get("/branch", BranchControler.index);

//  CONTROLER Address
//  create
routes.post("/address/branch", AddressControler.store);
//  update
routes.put("/address/branch/:addressId", AddressControler.update);
//  delete
routes.delete("/address/branch/:addressId", AddressControler.delete);
//  show
routes.get("/address/branch/:addressId", AddressControler.show);
//  index
routes.get("/address/branch", AddressControler.index);

//  CONTROLER User
//  create
routes.post("/user", UserControler.store);
//  update
routes.put("/user/:userId", UserControler.update);
//  delete
routes.delete("/user/:userId", UserControler.delete);
//  show
routes.get("/user/:userId", UserControler.show);
//  index
routes.get("/user", UserControler.index);

//  CONTROLER Device
//  create
routes.post("/device", DeviceControler.store);
//  update
routes.put("/device/:deviceId", DeviceControler.update);
//  delete
routes.delete("/device/:deviceId", DeviceControler.delete);
//  show
routes.get("/device/:deviceId", DeviceControler.show);
//  index
routes.get("/device", DeviceControler.index);
