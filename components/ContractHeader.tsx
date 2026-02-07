import type { Contract } from "@/lib/types";

type ContractHeaderProps = {
  contract: Contract;
};

export default function ContractHeader({ contract }: ContractHeaderProps) {
  return (
    <section className="card">
      <div className="card-title">Contract Summary</div>
      <dl className="definition-grid">
        <div>
          <dt>Contract ID</dt>
          <dd>{contract.contract_id}</dd>
        </div>
        <div>
          <dt>Supplier</dt>
          <dd>{contract.supplier}</dd>
        </div>
        <div>
          <dt>Material</dt>
          <dd>{contract.material}</dd>
        </div>
        <div>
          <dt>Contract Type</dt>
          <dd>{contract.contract_type}</dd>
        </div>
        <div>
          <dt>Start Date</dt>
          <dd>{contract.start_date}</dd>
        </div>
        <div>
          <dt>End Date</dt>
          <dd>{contract.end_date}</dd>
        </div>
        <div>
          <dt>Payment Terms</dt>
          <dd>{contract.payment_terms}</dd>
        </div>
        <div>
          <dt>Pricing Model</dt>
          <dd>{contract.pricing_model}</dd>
        </div>
      </dl>
    </section>
  );
}
