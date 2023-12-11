<script lang="ts">
	import { iconsMap } from '$lib/icons'

	export let name: keyof typeof iconsMap
</script>

<svelte:component this={iconsMap[name]} />
