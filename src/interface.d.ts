export interface ITaskItem {
  id?: number | undefined;
  task: string;
  lastTask?: string;
  priority: string;
  status: string;
  deadline: string;
  detalis?: string;
}

export interface ISelectValues {
  priority: string;
  status: string;
  deadline: string;
}
