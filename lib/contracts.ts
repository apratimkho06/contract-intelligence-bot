import contractsData from "@/data/contracts.json";
import type { Contract } from "@/lib/types";

const contracts = contractsData as Contract[];

export const getContracts = () => contracts;

export const getContractById = (contractId: string) =>
  contracts.find((contract) => contract.contract_id === contractId);
