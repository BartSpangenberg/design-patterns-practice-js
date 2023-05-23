export class NotificationTemplate {
    id: string = "";
    token: string = "";
    body: string = "";
    header: string = "";

    constructor({ id, token, body, header }: {
        id: string,
        token: string,
        body: string,
        header: string,
    }) {
        this.id = id;
        this.token = token;
        this.body = body;
        this.header = header;
    }
}