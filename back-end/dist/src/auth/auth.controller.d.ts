import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        accessToken: string;
        UserID: any;
        Admin: any;
    }>;
    getProfile(req: any): any;
}
