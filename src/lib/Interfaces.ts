import type { Writable } from 'svelte/store';

export interface ITab {
	href: string;
	active: Writable<boolean>;
	title: string;
}
