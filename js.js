class time {
    constructor(date = new Date()) {
        this.date = date;
    }

    getHours = () => this.date.getHours();

    getMinutes = () => this.date.getMinutes();

    getSeconds = () => this.date.getSeconds();

    getFullTime = () => `${this.getHours()} : ${this.getMinutes()} : ${this.getSeconds()}`;

    template = (elementId) => document.querySelector(`#${elementId}`).textContent = this.getFullTime();
}


setInterval(() => {
    new time().template('watch');
}, 1000);