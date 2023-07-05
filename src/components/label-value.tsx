interface LabelValueProps {
    label: string;
    value: string | number;
    prefix?: string | React.ReactNode;
}

export default function LabelValue({ label, value, prefix }: LabelValueProps) {
    const labelClassName = "text-gray-600";
    const valueClassName = "ml-1 text-gray-900 text-overflow-ellipsis whitespace-nowrap overflow-hidden";

    return (
        <div className="mt-2">
            <span className={labelClassName}>{label} : </span>
            <span className={valueClassName}>
                {prefix}
                {value}
            </span>
        </div>
    );
}


