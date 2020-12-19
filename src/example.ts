import BuffControllerFactory from "./controller/Buff/BuffControllerFactory";

const controller = BuffControllerFactory.create();

controller.getBuff(6)
    .then(result => {
        console.log('Successfully fetched buff!');
        console.log(result);
    })
    .catch(error => {
        console.log('Error: Something went wrong while fetching buff!', error);
    });