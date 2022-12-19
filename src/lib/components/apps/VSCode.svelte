<script>
	import { draggable } from '@neodrag/svelte';
	import { scale } from 'svelte/transition';
</script>

<div
	class="vscode activeShadow"
	use:draggable={{
		handle: '.mainToolbar'
	}}
	transition:scale={{ duration: 200 }}
>
	<div class="mainApp">
		<iframe
			title="VS Code"
			src="https://stackblitz.com/edit/sveltejs-kit-template-default-deqhmd?embed=1&file=App.svelte"
			frameborder="0"
		/>
	</div>
</div>

<style>
	.vscode {
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
