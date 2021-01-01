

/**
 * A task will have two fields:
 * status: indicates whether a task is pending or completed (at this moment)
 * description: text taht represents the task
 */
export class Task {

    public id: number;
    public status: number;
    public description: string;

    constructor(description: string, status: number) {
        this.status = status;
        this.description = description;
    }

}