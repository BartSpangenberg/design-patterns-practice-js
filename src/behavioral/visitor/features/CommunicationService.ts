import { TextComposer } from "../text/TextComposer";

export abstract class CommunicationService {
    abstract send(text: TextComposer): void;
}