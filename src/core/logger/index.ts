export class LoggerService {
    public static instance: LoggerService;
    private constructor() {}
    static getInstance() {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
        }
        return LoggerService.instance
    }
    log(message: string) {
        console.log(message);
    }
    error(message: string) {
        console.error(message);
    }
}