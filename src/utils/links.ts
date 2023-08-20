import { FilterProps } from "@/data/types";

export function generateLink(searchParams: FilterProps) {
    const params = new URLSearchParams();
    if (searchParams.page) params.set('page', String(searchParams.page))
    if (searchParams.query) params.set('query', String(searchParams.query))
    return `/?${params.toString()}`
}