export namespace CriminalRecords {
    export interface Record {
        id: number;
        name: string;
        entryDate: Date;
        chargesApplied: boolean
    }

    export interface Service {
        getCriminalRecords(userId: string): Promise<any>;
    }
}