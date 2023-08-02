import { User } from "../../../domains/user/user";
import { CriminalRecords } from "../../../external/criminalRecords/criminalRecords.interface";

export class TeacherUsecase implements User.TeacherUsecase {
    constructor(
        private teacherRepository: User.TeacherRepository,
        private criminalRecordsService: CriminalRecords.Service
    ) {}
    async getTeachersBySubjectId(subjectId: string): Promise<User.Teacher[]> {
        return this.teacherRepository.getTeachersBySubjectId(subjectId);
    }
    async getById(id: number): Promise<User.User> {
        return this.teacherRepository.getById(id);
    }
    async getByEmail(email: string): Promise<User.User> {
        return this.teacherRepository.getByEmail(email);
    }
    async getCriminalRecords(id: string): Promise<CriminalRecords.Record[]> {
        return this.criminalRecordsService.getCriminalRecords(id);
    }
}