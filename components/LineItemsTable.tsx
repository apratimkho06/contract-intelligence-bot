"use client";

import { useState } from "react";
import type { LineItem } from "@/lib/types";

type LineItemsTableProps = {
  items: LineItem[];
};

export default function LineItemsTable({ items }: LineItemsTableProps) {
  const [lineItems, setLineItems] = useState<LineItem[]>(() => items);

  const updateItem = (
    index: number,
    field: keyof LineItem,
    value: string
  ) => {
    setLineItems((current) => {
      const next = [...current];
      const updated = { ...next[index] };

      if (field === "quantity" || field === "price") {
        const parsedValue = value === "" ? 0 : Number(value);
        updated[field] = Number.isNaN(parsedValue) ? 0 : parsedValue;
      } else {
        updated[field] = value;
      }

      next[index] = updated;
      return next;
    });
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Delivery Location</th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="input-cell"
                  type="text"
                  value={item.item_name}
                  onChange={(event) =>
                    updateItem(index, "item_name", event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className="input-cell"
                  type="number"
                  value={item.quantity}
                  onChange={(event) =>
                    updateItem(index, "quantity", event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className="input-cell"
                  type="text"
                  value={item.unit}
                  onChange={(event) =>
                    updateItem(index, "unit", event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className="input-cell"
                  type="number"
                  step="any"
                  value={item.price}
                  onChange={(event) =>
                    updateItem(index, "price", event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className="input-cell"
                  type="text"
                  value={item.delivery_location}
                  onChange={(event) =>
                    updateItem(index, "delivery_location", event.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
