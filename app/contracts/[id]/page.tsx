import Link from "next/link";
import { notFound } from "next/navigation";
import ContractHeader from "@/components/ContractHeader";
import LineItemsTable from "@/components/LineItemsTable";
import { getContractById } from "@/lib/contracts";

type ContractDetailPageProps = {
  params: {
    id: string;
  };
};

export default function ContractDetailPage({
  params,
}: ContractDetailPageProps) {
  const contractId = decodeURIComponent(params.id);
  const contract = getContractById(contractId);

  if (!contract) {
    notFound();
  }

  return (
    <main className="page">
      <div className="page-header">
        <div className="page-header-row">
          <h1>Contract {contract.contract_id}</h1>
          <Link className="link" href="/contracts">
            &lt;- Back to contracts
          </Link>
        </div>
        <p className="subtle">
          Review contract details and update line item fields as needed.
        </p>
      </div>

      <ContractHeader contract={contract} />

      <section className="card">
        <div className="card-title">Line Items</div>
        <LineItemsTable items={contract.line_items} />
        <p className="helper-text">
          Edits are local to this session and are not persisted yet.
        </p>
      </section>
    </main>
  );
}
