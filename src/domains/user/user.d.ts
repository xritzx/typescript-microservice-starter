import { CriminalRecords } from "../../external/criminalRecords/criminalRecords.interface";
import { MedicalRecords } from "../../external/medicalRecords/medicalRecords.interface";
import { School } from "../school/school";

export namespace User {
    export interface User {
        id: number;
        name: string;
        email: string;
        address: string;
        phone: string;
        avatar: string;
    }

    export interface Student extends User {
        standard: number;
        section: string;
        rollNumber: number;
        schoolId: string;
    }

    export interface Teacher extends User {
        schoolId: string;
        subjects: School.Subject[];
        qualification: string;
        yearOfExperience: number;
    }

    // Repository
    interface Repository {
        getById(id: number): Promise<User>;
        getByEmail(email: string): Promise<User>;
    }
    export interface StudentRepository extends Repository {
        getStudentsByClass(standard: number, section: string): Promise<Student[]>;
    }
    export interface TeacherRepository extends Repository {
        getTeachersBySubjectId(subjectId: string): Promise<Teacher[]>;
    }

    // Usecase/Service
    interface Usecase {
        getById(id: number): Promise<User>;
        getByEmail(email: string): Promise<User>;
    }
    export interface StudentUsecase extends Usecase {
        getStudentsByClass(standard: number, section: string): Promise<Student[]>;
        getMedicalRecords(id: string): Promise<MedicalRecords.Record[]>;
    }
    export interface TeacherUsecase extends Usecase {
        getTeachersBySubjectId(subjectId: string): Promise<Teacher[]>;
        getCriminalRecords(id: string): Promise<CriminalRecords.Record[]>;
    }

}