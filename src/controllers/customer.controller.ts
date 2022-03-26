import { Request, Response } from "express";
import { getRepository, createQueryBuilder } from "typeorm";
import { Customer } from "../entity/Customer";
import { ArrayAvg } from "../utils/common.util";


export const getCustomers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customers = await getRepository(Customer).find();
  return res.json(customers);
};

export const getCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Customer).findOne(req.params.id);
  return res.json(results);
};

export const createCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCustomer = await getRepository(Customer).create(req.body);
  const results = await getRepository(Customer).save(newCustomer);
  return res.json(results);
};

export const updateCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customer = await getRepository(Customer).findOne(req.params.id);
  if (customer) {
    getRepository(Customer).merge(customer, req.body);
    const results = await getRepository(Customer).save(customer);
    return res.json(results);
  }

  return res.json({msg: 'Not customer found'});
};

export const deleteCustomer = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Customer).delete(req.params.id);
  return res.json(results);
};

export const averageAge = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Customer).createQueryBuilder("cus").select("TIMESTAMPDIFF(YEAR, cus.date_birth, CURDATE())", 'age').getRawMany()
    const average = ArrayAvg(results.map(row => parseInt(row.age)))
    return res.json({average});
}
