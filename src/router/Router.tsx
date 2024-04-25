import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBar } from '@/components';
import { All, Personal, Work } from '@/pages';

export const Router = () => {
	return (
		<BrowserRouter basename="/todo-list-tabs">
			<Routes>
				<Route path="/" element={<SideBar />}>
					<Route path="/all" element={<All />} />
					<Route path="/personal" element={<Personal />} />
					<Route path="/work" element={<Work />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
