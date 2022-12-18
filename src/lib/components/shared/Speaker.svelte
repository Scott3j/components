<script>
	import { speaker } from '$lib/stores/store';
</script>

{#if $speaker > 50}
	<img
		class="icon"
		src="src/img/icon/ui/Speaker2.svg"
		height="20"
		width="20"
		alt=""
	/>
{:else if $speaker > 0}
	<img
		class="icon"
		src="src/img/icon/ui/Speaker1.svg"
		height="20"
		width="20"
		alt=""
	/>
{:else}
	<img
		class="icon"
		src="src/img/icon/ui/Speaker0.svg"
		height="20"
		width="20"
		alt=""
	/>
{/if}
