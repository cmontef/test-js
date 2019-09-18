import EventManager from './EventManager.js';
// import Event from './Event.js';

export default class EventManagerFactory {
    static create(events, types) {
        return new EventManager(events, types);
    }
};