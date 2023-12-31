
interface SearchBarProps {
    onChange: (query: string) => void;
}

export default function SearchBar({ onChange }: SearchBarProps) {
    const placeholderText = 'Search...';

    return (
        <div className="relative mx-auto md:w-1/2 w-full">
            <input
                type="text"
                className="w-full bg-gray-100 rounded-md py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={placeholderText}
                onChange={e => onChange(e.target.value || '')}
            />
        </div>
    );
}
