import WebWorker from 'web-worker:./Worker.ts';
interface task{
    isbusy: Boolean;
    worker: Worker;

}
export class WorkerPool 
{
    public max: number = 1;

    public taskList: Array<task>;

    public constructor(max: number) 
    {
    	this.max = max;
    	this.taskList = [] ;
    	for (let index = 0; index < max; index++) 
    	{
    		const worker = new WebWorker();
    		this.taskList.push({
    			isbusy: false,
    			worker: worker
    		});
    	}
    }
}
