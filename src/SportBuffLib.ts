import BuffControllerFactory from './controller/Buff/BuffControllerFactory';

export namespace SportBuffLib {
  export async function start(videoId: string): Promise<void> {
    const videoPlayerElement = document.getElementById(videoId);

    if (!videoPlayerElement) {
      // TODO: should this be an error? How should we give the info to the dev?
      console.error('Video player element not found!');
    }

    console.log('Video player found! Lets do some magic!');

    const buffController = BuffControllerFactory.create();

    const buff = await buffController.getBuff(1);

    console.log('Here is your buff!');
    console.log(buff);
  }
}