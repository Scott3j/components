<script>
	import {
		activeThing,
		date,
		openedApps
	} from '$lib/stores/store';

	const toggleActiveThing = (e) =>
		($activeThing = $activeThing === e ? '' : e);

	const toggleOpenApp = (app) => {
		if ($openedApps.includes(app)) {
			$activeThing = '';
			$openedApps = $openedApps.filter((oa) => oa !== app);
		} else {
			$activeThing = app;
			$openedApps = [...$openedApps, app];
		}
	};

	const taskApps = [
		'File Explorer',
		'Microsoft Edge',
		'Settings',
		'VS Code',
    'Excalidraw',
		'Notepad'
	];
</script>

<div class="taskbar">
	<div class="center">
		<div
			class="taskIcon hvrBgLight"
			class:bgLight={$activeThing === 'Start'}
			on:click={() => toggleActiveThing('Start')}
			on:keypress={() => toggleActiveThing('Start')}
		>
			<img
				src="src/img/icon/ui/Start.svg"
				alt="Start"
				height="24"
				width="24"
			/>
		</div>
		<div
			class="taskIcon hvrBgLight"
			class:bgLight={$activeThing === 'Search'}
			on:click={() => toggleActiveThing('Search')}
			on:keypress={() => toggleActiveThing('Search')}
		>
			<img
				src="src/img/icon/ui/search.svg"
				alt="Start"
				height="16"
				width="16"
			/>
		</div>
		<div
			class="taskIcon hvrBgLight"
			class:bgLight={$activeThing === 'Task View'}
			on:click={() => toggleActiveThing('Task View')}
			on:keypress={() => toggleActiveThing('Task View')}
		>
			<img
				src="src/img/icon/ui/btEmpty.svg"
				alt="Task View"
				height="24"
				width="24"
			/>
		</div>
		<div
			class="taskIcon widgetBtn hvrBgLight"
			on:click={() => toggleActiveThing('Widgets')}
			on:keypress={() => toggleActiveThing('Widgets')}
		>
			<!--<img src="../../src/img/icon/Widgets.png" alt="Widgets" height="24" width="24" /> -->
		</div>

		{#each taskApps as app}
			<div
				class="taskIcon hvrBgLight"
				class:openedApp={$openedApps.includes(app)}
				class:bgLight={app === $activeThing}
				class:activeApp={app === $activeThing}
				on:click={() => toggleOpenApp(app)}
				on:keypress={() => toggleOpenApp(app)}
			>
				<img
					src="src/img/icon/ui/{app}.svg"
					alt={app}
					height="18"
					width="18"
				/>
			</div>
		{/each}

		{#each $openedApps as app}
			{#if !taskApps.includes(app)}
				<div
					class="taskIcon hvrBgLight"
					class:openedApp={$openedApps.includes(app)}
					class:bgLight={app === $activeThing}
					class:activeApp={app === $activeThing}
					on:click={() => toggleOpenApp(app)}
					on:keypress={() => toggleOpenApp(app)}
				>
					<img
						src="src/img/icon/{app}.png"
						alt={app}
						height="24"
						width="24"
					/>
				</div>
			{/if}
		{/each}
	</div>
<!---
	<div class="right">
		<div
			class="actionCenterBtn hvrBgLight"
			class:bgLight={$activeThing === 'ActionCenter'}
			on:click={() => toggleActiveThing('ActionCenter')}
			on:keypress={() => toggleActiveThing('ActionCenter')}
		/>
		<div
			class="date hvrBgLight"
			class:bgLight={$activeThing === 'Calendar'}
			on:click={() => toggleActiveThing('Calendar')}
			on:keypress={() => toggleActiveThing('Calendar')}
		/>
	</div>
-->
</div>

<style>
	.taskbar {
		background: rgb(var(--bg6) / 85%);
		backdrop-filter: saturate(3) blur(1.5rem);
		position: absolute;
		left: 0;
		bottom: 0;
		height: 100%;
		width: 40px;
		padding: 0 12px;
		display: flex;
		justify-content: center;
		box-shadow: inset 0 10px rgb(0 0 0 / 4%);
	}
	@media (prefers-color-scheme: dark) {
		.taskbar {
			background: rgb(var(--bg6) / 75%);
		}
	}

	.center {
		width: auto;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
	}

	.taskIcon {
		display: flex;
		flex-direction: column;
		top: 0;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		border-radius: 4px;
		position: relative;
	}
	.taskIcon img,
	.taskIcon svg {
		transition: all 150ms;
	}
	.taskIcon:active img,
	.taskIcon:active svg {
		transform: scale(75%);
	}

	.taskIcon::before {
		content: '';
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0;
		height: 3px;
		width: 1px;
		border-radius: 3px;
		transition: all 200ms;
	}
	.taskIcon.openedApp::before {
		width: 4px;
		background: gray;
	}
	.taskIcon.activeApp::before {
		width: 0.1rem;
		background: rgb(var(--clrPrm));
	}

	.widgetBtn {
		position: absolute;
		left: 4px;
	}

	.right {
		right: 42px;
		position: absolute;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.actionCenterBtn,
	.date {
		display: flex;
		padding: 0 6px;
		border-radius: 4px;
		height: 40px;
	}
	.actionCenterBtn {
		align-items: center;
		gap: 4px;
	}
	.date {
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		font-size: 12px;
	}
</style>
