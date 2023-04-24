export abstract class TextComposer {
    // How to make this scalable for a wide arrange of emails and notifications?
    abstract sendEmail(): void;

    abstract sendNotification(): void;
} 