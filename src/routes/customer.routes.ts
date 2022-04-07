import { Router } from "express";
const router = Router();

import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  averageAge
} from "../controllers/customer.controller";

import {
  getValue
} from "../controllers/fibonacci.controller";

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", createCustomer);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);
router.get('/average', averageAge)
router.get('/fibonacci', getValue)


export default router;
