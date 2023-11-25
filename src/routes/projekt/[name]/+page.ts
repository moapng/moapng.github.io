import type { IProject } from '$lib/Interfaces';
import projects from '$lib/projectData.json';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	let entries: any = [];
	projects.forEach((project) => {
		entries.push({ name: project.title });
	});

	return entries;
};

export const prerender = true;

export const load = ({ params }) => {
	console.log(params);
	const { name } = params;

	const project: IProject | undefined = projects.find(
		(project: IProject) => project.title === name
	);

	if (!project) {
		return { status: 404, error: new Error('Project not found') };
	}

	return {
		project
	};
};
