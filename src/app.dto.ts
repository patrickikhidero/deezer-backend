export class PaginationDto {
    limit: number;
    page: number;
}

export class SearchDto extends PaginationDto {
    query: string;
}