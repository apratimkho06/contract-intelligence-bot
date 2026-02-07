import DataTable from "@/components/DataTable";
import { getContracts } from "@/lib/contracts";
import type { Contract, DataTableColumn } from "@/lib/types";

const columns: DataTableColumn<Contract>[] = [
  { key: "contract_id", label: "Contract ID" },
  { key: "supplier", label: "Supplier" },
  { key: "material", label: "Material" },
  { key: "contract_type", label: "Contract Type" },
  { key: "start_date", label: "Start Date" },
  { key: "end_date", label: "End Date" },
  { key: "status", label: "Status" },
];

export default function ContractsPage() {
  const contracts = getContracts();

  return (
    <main className="page">
      <div className="page-header">
        <div className="page-header-row">
          <h1>Contracts</h1>
        </div>
        <p className="subtle">
          Review active, pending, and expired procurement contracts.
        </p>
        <p className="subtle">Select a row to view contract details.</p>
      </div>
      <DataTable
        columns={columns}
        data={contracts}
        rowHrefBase="/contracts"
        rowIdField="contract_id"
      />
    </main>
  );
}
