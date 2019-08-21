export interface Menu {
    Name: string;
    Image: string;
    Filter: string;
    Services: Service[];

}
export interface Service {
    tag: string;
    Service: string;
    Member?: string;
    Regular?: string;
    Description?: string;
}
