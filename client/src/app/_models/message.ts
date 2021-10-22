export interface Message {
    id: number;
    senderid: number;
    senderUsername: string;
    senderPhotoUrl: string;
    recipientUsername: string;
    recipientPhotoUrl: string;
    content: string;
    dateRead?: Date;
    messageSent: Date;
}