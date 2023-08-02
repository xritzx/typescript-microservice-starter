import { User } from "../../../domains/user/user";
import { MedicalRecords } from "../../../external/medicalRecords/medicalRecords.interface";

export class StudentUsecase implements User.StudentUsecase {
    constructor(
        private studentRepository: User.StudentRepository,
        private medicalRecordsService: MedicalRecords.Service
    ) {}
    async getStudentsByClass(standard: number, section: string): Promise<User.Student[]> {
        return this.studentRepository.getStudentsByClass(standard, section);
    }
    async getById(id: number): Promise<User.User> {
        return this.studentRepository.getById(id);
    }
    async getByEmail(email: string): Promise<User.User> {
        return this.studentRepository.getByEmail(email);
    }
    async getMedicalRecords(id: string): Promise<MedicalRecords.Record[]> {
        return this.medicalRecordsService.getMedicalRecords(id);
    }
}