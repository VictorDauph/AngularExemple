export class Supplier {
    public id: number;
    public name: string;
    public company: string;
    public phone: string;
    private isVerified: boolean = false;

    constructor(id: number, name: string, company: string, phone: string) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    getIsVerified() {
        return this.isVerified;
    }

    setIsVerified(value: boolean) {
        this.isVerified = value
    }
}