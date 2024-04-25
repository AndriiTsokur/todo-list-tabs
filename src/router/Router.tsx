import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBar } from '@/components';
import { AboutPage, TasksPage } from '@/pages';

export const Router = () => {
	return (
		<BrowserRouter basename="/todo-list-tabs">
			<Routes>
				<Route path="/" element={<SideBar />}>
					<Route index element={<AboutPage />} />
					<Route path="/tasks/:tabName" element={<TasksPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
