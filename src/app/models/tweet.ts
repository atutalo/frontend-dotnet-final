export class Tweet {
    tweetId: string = "";
    description: string = "";
    user: string = "";
    date: string = "";
    time: string = "";

    constructor(tweetId: string, description: string, user: string, date: string, time: string)
    {
        this.tweetId = tweetId;
        this.description = description;
        this.user = user;
        this.date = date;
        this.time = time;
    }
}
