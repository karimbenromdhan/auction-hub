import { Text, Button } from '../atoms';
import { PaginationProps } from '../../interfaces/molecules';

function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  variant = 'simple',
  maxVisiblePages = 5
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Simple pagination (Previous | Page X of Y | Next)
  if (variant === 'simple') {
    return (
      <div className="flex justify-center items-center gap-4 mt-16 pt-8 border-t border-gray-200">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          className="group/prev disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <span className="flex items-center gap-2 font-medium">
            <svg className="w-4 h-4 group-hover/prev:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </span>
        </Button>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-200 shadow-md">
            <Text variant="body" weight="bold" className="text-gray-800">
              Page {currentPage}
            </Text>
            <span className="text-gray-400 font-medium">of</span>
            <Text variant="body" weight="bold" className="text-gray-800">
              {totalPages}
            </Text>
          </div>
        </div>
        
        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          className="group/next disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <span className="flex items-center gap-2 font-medium">
            Next
            <svg className="w-4 h-4 group-hover/next:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Button>
      </div>
    );
  }

  // Numbered pagination (Previous | 1 2 3 4 5 | Next)
  return (
    <div className="flex justify-center items-center space-x-4 mt-12">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        Previous
      </Button>
      
      <div className="flex items-center space-x-2">
        {Array.from({ length: Math.min(maxVisiblePages, totalPages) }, (_, i) => {
          const pageNum = i + 1;
          return (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </Button>
          );
        })}
      </div>
      
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
