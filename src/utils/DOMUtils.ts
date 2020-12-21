import Buff from "../domain/Buff";
import {BuffUtils} from "../domain/BuffUtils";
import {BuffAnswer} from "../domain/types";

export default class DOMUtils {
     public createVideoWithOverlayFromBuff(videoElement: HTMLElement, buff: Buff): void {
        console.log('creating video');
        console.log('from video element', videoElement);
        console.log('and buff', buff);

        const videoParentNode = videoElement.parentElement;

        const outerWrapper = document.createElement('div');
        outerWrapper.classList.add('sportbuff-video-outer-wrapper');

        const innerWrapper = document.createElement('div');
        innerWrapper.classList.add('sportbuff-video-inner-wrapper');

        const videoOverlayContent = document.createElement('div');
        videoOverlayContent.classList.add('video-overlay-content');

        const buffOverlay = this.createBuffOverlayElement(buff);
        videoOverlayContent.appendChild(buffOverlay);

        innerWrapper.appendChild(videoOverlayContent);
        innerWrapper.appendChild(videoElement);

        outerWrapper.appendChild(innerWrapper);

        videoParentNode && videoParentNode.appendChild(outerWrapper);
    }

    private createBuffOverlayElement(buff: Buff): HTMLElement {
        const buffWrapper = document.createElement('div');
        buffWrapper.classList.add('buff-wrapper');

        const buffHeader = this.createHeader(buff);
        const buffQuestion = this.createBuffQuestion(buff);
        const buffAnswers = this.createBuffAnswers(buff.getAnswers);

        buffWrapper.appendChild(buffHeader);
        buffWrapper.appendChild(buffQuestion);
        buffWrapper.appendChild(buffAnswers);

        return buffWrapper;
    }

    private createHeader(buff: Buff): HTMLElement {
        const buffHeader = document.createElement('div');
        buffHeader.classList.add('buff-header');
        const headerClose = document.createElement('div');
        headerClose.classList.add('heather-close');
        headerClose.textContent = 'Close X';
        const headerUserInfo = document.createElement('div');
        headerUserInfo.classList.add('heather-user-info');

        const userIcon = document.createElement('div');
        userIcon.classList.add('user-icon');
        userIcon.textContent = BuffUtils.getAuthorIcon(buff.getAuthor);

        const userName = document.createElement('div');
        userName.classList.add('user-name');
        userName.textContent = BuffUtils.getAuthorName(buff.getAuthor);

        headerUserInfo.appendChild(userIcon);
        headerUserInfo.appendChild(userName);
        buffHeader.appendChild(headerUserInfo);
        buffHeader.appendChild(headerClose);

        return buffHeader;
    }

    private createBuffQuestion(buff: Buff): HTMLElement {
        const buffQuestionWrapper = document.createElement('div');
        buffQuestionWrapper.classList.add('buff-question');

        const questionInfo = document.createElement('div');
        questionInfo.classList.add('question-info');
        questionInfo.textContent = buff.getQuestion;

        const questionDuration = document.createElement('div');
        questionDuration.classList.add('question-duration');
        questionDuration.textContent = `${buff.getDuration}`;

        buffQuestionWrapper.appendChild(questionInfo);
        buffQuestionWrapper.appendChild(questionDuration);

        return buffQuestionWrapper;
    }

    private createBuffAnswers(answers: BuffAnswer[]): HTMLElement {
        const buffAnswersWrapper = document.createElement('div');
        buffAnswersWrapper.classList.add('buff-answers');

        answers.forEach((answer: BuffAnswer) => {
            const buffAnswerWrapper = document.createElement('div');
            buffAnswerWrapper.classList.add('buff-answer');

            const answerIcon = document.createElement('div');
            answerIcon.classList.add('answer-icon');
            answerIcon.textContent = answer.image.pop() ?? '';

            const answerText = document.createElement('p');
            answerText.classList.add('answer-text');
            answerText.textContent = answer.title;

            buffAnswerWrapper.appendChild(answerIcon);
            buffAnswerWrapper.appendChild(answerText);

            buffAnswersWrapper.appendChild(buffAnswerWrapper);
        });

        return buffAnswersWrapper;
    }
}