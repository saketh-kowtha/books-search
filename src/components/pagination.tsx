interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <nav className="flex items-center justify-center mt-4">
            <ul className="flex space-x-2">
                {currentPage !== 1 && (
                    <li>
                        <button
                            className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
                            onClick={() => onPageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                    </li>
                )}

                {getPageNumbers(totalPages).map((pageNumber) => (
                    <li key={pageNumber}>
                        <button
                            className={`px-2 py-1 rounded-md ${currentPage === pageNumber
                                ? 'bg-indigo-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                                } focus:outline-none`}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}

                {currentPage !== totalPages && (
                    <li>
                        <button
                            className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
                            onClick={() => onPageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

function getPageNumbers(totalPages: number): number[] {
    const range: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
        range.push(i);
    }
    return range;
}