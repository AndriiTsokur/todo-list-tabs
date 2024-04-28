export type EditTaskDataT = {
	type: string;
	content: Record<string, string>;
};

export type DataT = {
	editTaskState: null | EditTaskDataT;
	tasksState: TabT[];
};

export type TabT = {
	tabName: string;
	tabTitle: string;
	categories: TasksColumnT[];
};

export type TasksColumnT = {
	type: string;
	title: string;
	content: TaskContentT[];
};

export type TaskContentT = {
	id: string;
	dueDate: string;
	title: string;
	notes: string;
};
