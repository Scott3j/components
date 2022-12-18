<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import type { DragOptions } from '@neodrag/svelte';
	import Resize from './resize.svelte';
	import Toolbar from '$lib/components/shared/Toolbar.svelte';
	import { scale } from 'svelte/transition';

	let options: DragOptions = {
		axis: 'both',
		bounds: 'parent'
	};
	let axis;
	let handle1;
</script>

<div class="canvas" style="transform: scale({scale});">
	<Resize />
</div>

<div />

<style>
	.canvas {
		position: absolute;
		height: 100vh;
		width: 100vw;
	}
</style>
