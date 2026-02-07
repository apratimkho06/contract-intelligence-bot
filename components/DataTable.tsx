"use client";

import { useRouter } from "next/navigation";
import type { KeyboardEvent } from "react";
import type { DataTableColumn } from "@/lib/types";

type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  data: T[];
  rowHrefBase?: string;
  rowIdField?: keyof T;
};

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  rowHrefBase,
  rowIdField,
}: DataTableProps<T>) {
  const router = useRouter();
  const isRowClickable = Boolean(rowHrefBase && rowIdField);

  const handleRowActivate = (row: T) => {
    if (!rowHrefBase || !rowIdField) {
      return;
    }

    const rowId = row[rowIdField];
    if (rowId === undefined || rowId === null) {
      return;
    }

    router.push(`${rowHrefBase}/${encodeURIComponent(String(rowId))}`);
  };

  const handleRowKeyDown = (event: KeyboardEvent<HTMLTableRowElement>, row: T) => {
    if (!isRowClickable) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRowActivate(row);
    }
  };

  const getRowKey = (row: T, index: number) => {
    if (rowIdField) {
      const rowId = row[rowIdField];
      if (rowId !== undefined && rowId !== null) {
        return String(rowId);
      }
    }
    return String(index);
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={getRowKey(row, index)}
              className={isRowClickable ? "clickable" : undefined}
              onClick={() => handleRowActivate(row)}
              onKeyDown={(event) => handleRowKeyDown(event, row)}
              tabIndex={isRowClickable ? 0 : undefined}
              role={isRowClickable ? "button" : undefined}
            >
              {columns.map((column) => (
                <td key={String(column.key)}>
                  {String(row[column.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
