import type { Writable } from 'svelte/store';

export interface ICircle {
	path: string;
	isActiveCircle: Writable<boolean>;
	colour: string;
}
