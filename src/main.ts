import { StudentRepository } from "./internal/repository/user/student";
import { TeacherRepository } from "./internal/repository/user/teacher";
import { StudentUsecase } from "./internal/usecase/user/student"; 
import { TeacherUsecase } from "./internal/usecase/user/teacher";

import { MedicalRecords } from "./external/medicalRecords/medicalRecords.interface";
import { MedicalRecordsService } from "./external/medicalRecords/medicalRecords.service";

import { CriminalRecords } from "./external/criminalRecords/criminalRecords.interface";
import { CriminalRecordsService } from "./external/criminalRecords/criminalRecords.service";
import { initConfig } from "./core/config";
import { ServiceMap } from "./main.d";
import { initRESTDelivery } from "./delivery/rest/server";

async function initService() {
    // init Config
    const config = initConfig();
    // init External Service
    const medicalRecordsService: MedicalRecords.Service = new MedicalRecordsService();
    const crimalRecordsService: CriminalRecords.Service = new CriminalRecordsService();
    // init Internal Service
    const studentRepository = new StudentRepository();
    const studentUsecase = new StudentUsecase(studentRepository, medicalRecordsService);
    const teacherRepository = new TeacherRepository();
    const teacherUsecase = new TeacherUsecase(teacherRepository, crimalRecordsService);

    const serviceMap: ServiceMap = {
        studentUsecase,
        teacherUsecase,
        medicalRecordsService
    }
    
    await initRESTDelivery(config, serviceMap);
   
}
initService();