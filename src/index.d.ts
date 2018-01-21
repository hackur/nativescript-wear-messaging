export declare class WearMessaging {
    constructor();
    send(messagePath: string, messageToSend: string, capability?: string): void;
    startListener(): void;
    stoptListener(): void;
    registerListener(receiveCallback: (messagePath: string, messageReceived: string) => void): void;
}
