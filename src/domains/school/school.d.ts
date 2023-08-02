import { User } from '../user/user.d';

export namespace School {
    export enum TransportType {
        BUS = 'BUS',
        CARPOOL= 'CARPOOL',
        VAN = 'VAN',
    }
    export interface Transport {
        id: number;
        name: string;
        description: string;
        type: TransportType;
    }
    export interface Subject {
        id: number;
        name: string;
        description: string;
        standards: number[];
    }
    export interface School {
        id: number;
        name: string;
        address: string;
        phone: string;
        email: string;
        website: string;  
        affiliation: boolean;
        transports: Transport[];
        Faculty: User.Teacher[];
    }
}