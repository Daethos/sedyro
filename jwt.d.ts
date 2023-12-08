declare module 'jsonwebtoken' {
    const jwt: {
        Secret: string;
        sign: (payload: any, secret: string, options: any) => string;
        verify: (token: string, secret: string) => any;
    };
}