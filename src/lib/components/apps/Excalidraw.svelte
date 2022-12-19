<script>
	import { draggable } from '@neodrag/svelte';
	import { scale } from 'svelte/transition';
	import Toolbar from '$lib/components/shared/Toolbar.svelte';
</script>

<div
	class="excalidraw activeShadow"
	use:draggable={{
		handle: '.mainToolbar'
	}}
	transition:scale={{ duration: 200 }}
>
	<Toolbar appName="Excalidraw" />
	<div class="mainApp">
		<iframe
			title="Excalidraw"
			src="https://app.excalidraw.com/l/7m1PKyB97Jl/9503WMYnb8q"
			frameborder="0"
		/>
	</div>
</div>

<style>
	.excalidraw {
		background: rgb(var(--bg7));
		color: rgb(var(--clr));
		position: absolute;
		inset: 10%;
		border-radius: 8px;
		overflow: hidden;
		resize: both;
	}
	.mainApp {
		display: flex;
		position: absolute;
		width: 100%;
		height: calc(100% - 36px);
	}

	iframe {
		flex-grow: 1;
	}
</style>
