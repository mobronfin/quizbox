import { answers } from './answers';

export class questions {
    id: number;
    name: string;
    questionTypeId: number;
    answers1: answers[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.answers1 = [];
        data.options.forEach(o => {
            this.answers1.push(new answers(o));
        });
    }
}
