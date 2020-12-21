import {BuffAnswer, BuffAuthor} from "./types";

export class BuffUtils {
    static getBuffAnswerTitle (buffAnswer: BuffAnswer): string {
        return buffAnswer.title;
    }

    static getBuffAnswerIcon(buffAnswer: BuffAnswer): string | undefined {
        return buffAnswer.image.pop();
    }

    static getAuthorName(buffAuthor: BuffAuthor): string {
        return `${buffAuthor.first_name} ${buffAuthor.last_name}`;
    }

    static getAuthorIcon(buffAuthor: BuffAuthor): string {
        return `${buffAuthor.photo.pop()}`;
    }
}