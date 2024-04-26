export type DataT = {
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
	title: string;
	notes: string;
};
