
<script>
	import { draggable } from '@neodrag/svelte';
	import { scale } from 'svelte/transition';
</script>

<div
	class="excalidraw activeShadow"
	use:draggable={{
		handle: '.mainToolbar'
	}}
	transition:scale={{ duration: 200 }}
>
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
		background: #202327;
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
