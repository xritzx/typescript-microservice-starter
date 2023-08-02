import { CriminalRecords } from './criminalRecords.interface';

export class CriminalRecordsService implements CriminalRecords.Service {
    constructor() {}
    async getCriminalRecords(userId: string): Promise<CriminalRecords.Record[]> {
        // Implementation of the func
        return [] as CriminalRecords.Record[];
    }
}