import { User } from "./domains/user/user";
import { MedicalRecords } from "./external/medicalRecords/medicalRecords.interface";

export type ServiceMap = {
    studentUsecase: User.StudentUsecase;
    teacherUsecase: User.TeacherUsecase;
    medicalRecordsService: MedicalRecords.Service;
} & { [k: string]: any };