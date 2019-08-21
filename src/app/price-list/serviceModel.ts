export interface Menu {
    Name: string;
    Services: Service[];

}
export interface Service {
    Service: string;
    Regular: string;
    Description?: string;
}
