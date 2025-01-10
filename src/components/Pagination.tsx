import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      {/* Primer Página */}
      <button
        className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <ChevronsLeft className="h-5 w-5 text-gray-600" />
      </button>

      {/* Página Anterior */}
      <button
        aria-label="Página anterior"
        className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>

      {/* Números de Páginas */}
      {pageNumbers.slice(Math.max(0, currentPage - 3), currentPage + 2).map((page) => (
        <button
          key={page}
          className={`p-2 w-10 h-10 border rounded-full shadow text-black font-medium ${
            page === currentPage
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white hover:bg-gray-100 border-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Página Siguiente */}
      <button
        aria-label="Página siguiente"
        className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>

      {/* Última Página */}
      <button
        className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronsRight className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default Pagination;
