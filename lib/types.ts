export type LineItem = {
  item_name: string;
  quantity: number;
  unit: string;
  price: number;
  delivery_location: string;
};

export type Contract = {
  contract_id: string;
  supplier: string;
  material: string;
  contract_type: string;
  start_date: string;
  end_date: string;
  status: string;
  payment_terms: string;
  pricing_model: string;
  line_items: LineItem[];
};

export type DataTableColumn<T> = {
  key: keyof T;
  label: string;
};
