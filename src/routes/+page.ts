import RightInfo from './RightInfoMoa.svelte';
export const prerender = true;

export const load = async ({ params }) => {
	return {
		component: RightInfo
	};
};
