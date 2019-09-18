import Event from './Event.js';

export default class EventManager {
    constructor(events, types) {
        this.events = (events && types)
            ? events.filter(e => types.includes(e.type))
            : []
    }
    
    run() {
        const executionTime = this.getExecutionTime();
        for (let i = 0; i < executionTime; i++) {
            setTimeout(() => {
                this.executeEvent(i);
            }, i * 1000);
        }
    }

    // I asume the events are ordered by the property second
    getExecutionTime() {
        const lastEvent = this.events[this.events.length - 1];
        if(!lastEvent) {
            return 0;
        }
        return lastEvent.second + 1;
    }

    executeEvent(second) {
        const eventsFound = this.findEventsBySecond(second);
        for (event of eventsFound) {
            console.log(`At second ${event.second}: ${JSON.stringify({type: event.type, message: event.message})}`);
        }
    }
    
    findEventsBySecond(second) {
        return this.events.filter(e => e.second === second);
    }
};