export namespace MedicalRecords {
    export interface Hospital {
        id: number;
        name: string;
        address: string;
        phone: string;
        email: string;
        website: string;
    }
    export interface Doctor {
        id: number;
        name: string;
        phone: string;
        email: string;
    }
    export interface Record {
        id: number;
        hospital: Hospital;
        description: string;
        eventDate: Date;
        doctor: Doctor;
    }

    export interface Service {
        getMedicalRecords(userId: string): Promise<Record[]>;
        hasComorbidity(userId: string): Promise<boolean>;
        hasAllergy(userId: string): Promise<boolean>;
    }
}