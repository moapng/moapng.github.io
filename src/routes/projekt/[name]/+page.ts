import type { IProject } from '$lib/Interfaces';
import projects from '$lib/projectData.json';
import type { EntryGenerator } from './$types';
import RightInfo from './RightInfoProjekt.svelte';

export const entries: EntryGenerator = () => {
	let entries: any = [];
	projects.forEach((project) => {
		entries.push({ name: project.title });
	});

	return entries;
};

export const prerender = true;

export const load = async ({ params }) => {
	const { name } = params;

	const project: IProject = projects.find((project: IProject) => project.title === name);

	return {
		title: project.title,
		text: project.text,
		skills: project.skills,
		component: RightInfo
	};
};
