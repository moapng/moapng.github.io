import type { IProject } from '$lib/Interfaces';
import projects from '$lib/projectData.json';

export const load = ({ params }) => {
	console.log(params);
	const { name } = params;

	const project: IProject = projects.find((project: IProject) => project.title === name);

	if (!project) {
		return { status: 404, error: new Error('Project not found') };
	}

	return {
		project
	};
};
