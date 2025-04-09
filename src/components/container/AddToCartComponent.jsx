import React from "react";
import { Trash2 } from "lucide-react";

const AddToCartComponent = ({ data, onDelete }) => {
  return (
    <div className="w-full flex items-center justify-between gap-4 bg-slate-100 p-2 shadow-sm hover:shadow-md transition">
      {/* Product Image */}
      <div className="w-16 h-16">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Name */}
      <div className="flex-1 text-left">
        <h2 className="text-sm font-medium text-gray-800">{data.name}</h2>
        <p className="text-xs text-gray-500">{data.category}</p>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete?.(data.id)}
        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition cursor-pointer"
        title="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default AddToCartComponent;
