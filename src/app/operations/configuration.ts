import { quizops } from './quizops';
import { questions } from './questions';

export class configuration {
    id: number;
    name: string;
    description: string;
    config: quizops;
    questions1: questions[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new quizops(data.config);
            this.questions1 = [];
            data.questions1.forEach(q => {
                this.questions1.push(new questions(q));
            });
        }
    }
}
