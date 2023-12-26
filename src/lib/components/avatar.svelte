<script lang="ts">
	export let size: 1 | 2 = 1
	export let src = ''
	export let alt = ''

	const sizeMap = {
		1: 'h-16',
		2: 'h-24'
	}

	const avatarClass = `${sizeMap[size]} block aspect-square rounded-full overflow-hidden border-2 border-secondary`
</script>

<picture class={avatarClass}>
	<img class="w-full" {src} {alt} />
</picture>
