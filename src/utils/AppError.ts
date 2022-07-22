interface AppErrorArgs {
    name: string;
    message: string;
    httpCode?: number;
}

export default class AppError extends Error {
    name: string;
    httpCode: number;

    constructor(name: string, message: string, httpCode: number) {
        super(message);

        this.name = name;
        this.httpCode = httpCode;
    }

    getHttpCode() {
        return this.httpCode;
    }

    getError(): AppErrorArgs {
        return {
            name: this.name,
            message: this.message
        }
    }

    toString(): string {
        return `${this.name}: ${this.message}`;
    }

}