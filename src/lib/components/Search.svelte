<script>
	import { TextBox } from 'fluent-svelte';
	import { fly } from 'svelte/transition';
	import {
		activeThing,
		openedApps
	} from '$lib/stores/store';

	const topApp = [
		'Settings',
		'Camera',
		'Calculator',
		'File Explorer',
		'Microsoft Store'
	];

	const toggleOpenApp = (app) => {
		if ($openedApps.includes(app)) {
			$activeThing = '';
			$openedApps = $openedApps.filter((oa) => oa !== app);
		} else {
			$activeThing = app;
			$openedApps = [...$openedApps, app];
		}
	};
</script>

1
<div
	class="search activeShadow"
	transition:fly={{ x: -800, duration: 100, opacity: 1 }}>
	<TextBox placeholder="Type here to search" autofocus />

	<div class="searchType">
		<span>All</span>
		<span>Apps</span>
		<span>Documents</span>
		<span>Web</span>
		<span>More</span>
	</div>

	<h4>Top apps</h4>
	<div class="topAppGrid">
		{#each topApp as app}
			<div
				class="topApp hvrBgLight"
				on:click={() => toggleOpenApp(app)}
				on:keypress={() => toggleOpenApp(app)}>
				<img
					src="../../src/img/icon/ui/{app}.svg"
					alt=""
					height="20"
					width="20" />
				{app}
			</div>
		{/each}
	</div>

	<h4>Quick searches</h4>
	<div class="searchTileCont">
		<div class="searchTile hvrBgLight">
			<img src="" alt="" height="20" width="20" />
			Today in history
		</div>
		<div class="searchTile hvrBgLight">
			<img src="" alt="" height="20" width="20" />
			Markets today
		</div>
		<div class="searchTile hvrBgLight">
			<img src="" alt="" height="20" width="20" />
			Translate
		</div>
		<div class="searchTile hvrBgLight">
			<img src="" alt="" height="20" width="20" />
			Currency converter
		</div>
	</div>
</div>

<style>
	.search {
		position: absolute;
		bottom: 12px;
		left: calc(50% - 640px);
		background: rgb(var(--bg4) / 85%);
		backdrop-filter: blur(1.5rem);
		width: 260px;
		height: min(100% - 1.5rem, 720px);
		padding: 2rem 1.5rem 0;
		border-radius: 8px;
	}
	/* .search.left {
    left: 12px;
  } */

	.searchType {
		margin: 0.5rem 0 1rem;
	}
	.searchType span {
		padding: 1 12px;
	}

	.topAppGrid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 4px;
		padding: 1rem 0 2rem;
	}
	.topApp {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 50px;
		background: rgb(255 255 255 / 80%);
		border-radius: 4px;
	}
	.topApp img {
		margin-bottom: 4px;
	}
	.topApp:hover {
		background: rgb(255 255 255 / 50%);
	}

	@media (prefers-color-scheme: dark) {
		.topApp {
			background: rgb(255 255 255 / 6%);
		}
		.topApp:hover {
			background: rgb(255 255 255 / 3%);
		}
	}

	.searchTileCont {
		padding: 1rem 0;
	}
	.searchTile {
		height: 48px;
		display: flex;
		align-items: center;
		border-radius: 4px;
	}
	.searchTile img {
		margin: 0 1rem;
	}
</style>
