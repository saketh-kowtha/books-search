import Image from "next/image";
import Link from "next/link";

//Types
import { BookDetails } from "@/types";

//Components
import LabelValue from "./label-value";


const IMAGE_BASE_URL = `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/`
interface BookLabels {
    label: string;
    value: string | number;
}

const generateLabels = ({ author, pages, country, language }: Omit<BookDetails, 'img' | 'title' | 'link' | 'imageLink'>): BookLabels[] => [
    { label: 'Author', value: author },
    { label: 'Pages', value: pages },
    { label: 'Country', value: country },
    { label: 'Language', value: language },
];

export default function Book(props: BookDetails) {
    const { imageLink, title, link, ...attributes } = props;
    const coverImageAlt = `${title} - Cover Image`;
    const coverImageUrl = `${IMAGE_BASE_URL}${imageLink}`;

    return (
        <Link href={link} target="_blank">
            <div className="max-w-2xl bg-white rounded-xl shadow-md overflow-hidden w-full h-full hover:shadow-xl transition duration-300">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <Image alt={coverImageAlt} width={200} height={300} className="object-fit h-full w-48" src={coverImageUrl} />
                    </div>
                    <div className="p-8">
                        <label className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</label>
                        {generateLabels(attributes).map((label, index) => (
                            <LabelValue key={index} {...label} />
                        ))}
                    </div>
                </div>
            </div>
        </Link >
    );
}
