<script lang="ts">
	import type { IconName } from '$lib/types'
	import { iconsMap } from '$lib/icons'

	export let name: IconName
</script>

<svelte:component this={iconsMap[name]} />
