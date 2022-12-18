<script>
	import { draggable } from '@neodrag/svelte';
	import {
		activeThing,
		brightness,
		openedApps
	} from '$lib/stores/store';


	const dskApps = [
		'Recycle Bin',
		'Microsoft Edge',
		'VS Code',
    'Excalidraw'
	];

	const toggleOpenApp = (/** @type {string} */ app) => {
		if ($openedApps.includes(app)) {
			$activeThing = '';
			$openedApps = $openedApps.filter((oa) => oa !== app);
		} else {
			$activeThing = app;
			$openedApps = [...$openedApps, app];
		}
	};
</script>

<div class="desktop">
	<div class="dskAppGrid">
		{#each dskApps as app}
			<button
				use:draggable={{ grid: [75, 98] }}
				class="dskApp"
				on:dblclick={() => toggleOpenApp(app)}>
				<img
					src="../../src/img/icon/{app}.png"
					alt=""
					height="48"
					width="48" />
				{app}
			</button>
		{/each}
	</div>

	<div class="apps">
		{#each $openedApps as e}
			{#if e === 'Calculator'}
				{#await import('../lib/components/apps/Calculator.svelte') then { default: Calculator }}
					<Calculator />
				{/await}
			{/if}
			{#if e === 'Camera'}
				{#await import('../lib/components/apps/Camera.svelte') then { default: Camera }}
					<Camera />
				{/await}
			{/if}
			{#if e === 'File Explorer'}
				{#await import('../lib/components/apps/Explorer.svelte') then { default: Camera }}
					<Camera />
				{/await}
			{/if}
			{#if e === 'Microsoft Edge'}
				{#await import('../lib/components/apps/Edge.svelte') then { default: Edge }}
					<Edge />
				{/await}
			{/if}
			{#if e === 'Microsoft Store'}
				{#await import('../lib/components/apps/Store.svelte') then { default: Store }}
					<Store />
				{/await}
			{/if}
			{#if e === 'Notepad'}
				{#await import('../lib/components/apps/Notepad.svelte') then { default: Notepad }}
					<Notepad />
				{/await}
			{/if}
			{#if e === 'Settings'}
				{#await import('../lib/components/apps/Settings.svelte') then { default: Settings }}
					<Settings />
				{/await}
			{/if}
			{#if e === 'VS Code'}
				{#await import('../lib/components/apps/VSCode.svelte') then { default: VSCode }}
					<VSCode />
				{/await}
			{/if}
      			{#if e === 'Excalidraw'}
				{#await import('../lib/components/apps/Excalidraw.svelte') then { default: VSCode }}
					<VSCode />
				{/await}
			{/if}
		{/each}
	</div>

	{#if $activeThing === 'ActionCenter'}
		{#await import('../lib/components/ActionCenter.svelte') then { default: ActionCenter }}
			<ActionCenter />
		{/await}
	{:else if $activeThing === 'Calendar'}
		{#await import('../lib/components/Calendar.svelte') then { default: Calendar }}
			<Calendar />
		{/await}
	{:else if $activeThing === 'Search'}
		{#await import('../lib/components/Search.svelte') then { default: Search }}
			<Search />
		{/await}
	{:else if $activeThing === 'Start'}
		{#await import('../lib/components/Start.svelte') then { default: Start }}
			<Start />
		{/await}
	{:else if $activeThing === 'Widgets'}
		{#await import('../lib/components/Widgets.svelte') then { default: Widgets }}
			<Widgets />
		{/await}
	{:else if $activeThing === 'VSCode'}
		{#await import('../lib/components/apps/VSCode.svelte') then { default: VSCode }}
			<VSCode />
		{/await}
    		{#await import('../lib/components/apps/Excalidraw.svelte') then { default: Excalidraw }}
			<Excalidraw />
		{/await}
	{/if}
</div>

<div
	class="brightoverlay"
	style:background="rgb(0 0 0 / {100 - $brightness}%)" />

<style>
	.desktop {
		width: calc(100vw);
		height: calc(100vh); /* 48px is taskbars height */
		position: relative;
		overflow: hidden;
	}

	.dskAppGrid {
		position: absolute;
		inset: 1;
		display: grid;
		right: 0;
		grid-template-columns: repeat(auto-fill, 74px);
		grid-template-rows: repeat(auto-fill, 70px);
		grid-auto-flow: column;
		padding-top: 10px;
    padding-right: 10px;
		gap: 28px 1px;
	}
	.dskApp {
		background: unset;
		border: 1px solid transparent;
		height: min-content;
		min-height: 70px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		text-align: center;
		border-radius: 2px;
		color: white;
		text-shadow: 0 0 1px black, 0 0 2px black, 0 0 3px black,
			0 0 4px black, 0 1px 1px black, 0 1px 2px black;
		-webkit-user-drag: element;
	}
	.dskApp:focus,
	.dskApp:focus-visible {
		background: rgb(255 255 255 / 24%);
		outline: none;
	}
	.dskApp:hover {
		background: rgb(255 255 255 / 12%);
	}
	.dskApp:focus,
	.dskApp:focus-visible {
		border: 1px dotted;
	}
	.dskApp img {
		margin-bottom: 4px;
	}

	.brightoverlay {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 99999;
	}
</style>
