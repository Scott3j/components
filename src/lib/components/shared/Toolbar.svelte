<script>
	import {
		activeThing,
		openedApps
	} from '$lib/stores/store';
	export let appName = 'App Name';
	export let darkBg = false;
</script>

<div class="toolbar" class:text-white={darkBg}>
	<div class="mainToolbar pl-4">
		<img
			src="src/img/icon/ui/{appName}.svg"
			height="16"
			width="16"
			alt=""
		/>
		<span class="appName pl-2">{appName}</span>
	</div>
	<div class="actBtns">
		<!--<div class="line px-5 py-2 hvrBgDark">-</div>
		<div class="circle px-5 py-2 hvrBgDark">o</div> -->
		<div
			class="buttons px-5 py-2 hover:bg-red-600"
			on:click={() => {
				$activeThing = '';
				$openedApps = $openedApps.filter(
					(oa) => oa !== appName
				);
			}}
			on:keypress={() => {
				$activeThing = '';
				$openedApps = $openedApps.filter(
					(oa) => oa !== appName
				);
			}}
		>
			x
		</div>
	</div>
</div>

<style>
	.toolbar {
		display: flex;
		flex-direction: row;
		height: 36px;
		margin-right: 10px;
	}
	.mainToolbar,
	.actBtns {
		margin-left: 6px;
		display: flex;
		align-items: center;
		height: 100%;
	}
	.mainToolbar {
		flex-grow: 1;
	}

	.buttons {
		padding-bottom: 4px;
		margin-left: 10px;
	}
	.line {
		padding-bottom: 4px;
		margin-left: 10px;
	}
	.circle {
		padding-bottom: 4px;
		margin-left: 10px;
	}
</style>
