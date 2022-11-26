export class Subject {
    constructor() {
        this.news = '';
        this.observers = [];
    }

    addNews(text) {
        this.news = text;
        this.broadcast();
    }

    broadcast() {
        return this.observers.forEach(observer => observer.news(this))
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(elem => elem !== observer);
    }
}