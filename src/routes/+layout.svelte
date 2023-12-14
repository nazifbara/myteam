<script lang="ts">
	import '../app.css'

	import { Icon } from '$lib/components'

	let open = false

	const closeMenu = () => (open = false)
</script>

<header class="mt-11 mb-20 md:mt-16 md:mb-28 lg:mb-32">
	<div class="wrapper flex gap-20">
		<img alt="myteam logo" src="/assets/logo.svg" />
		{#if open}
			<button on:click={closeMenu} class="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" />
		{/if}
		<nav
			class:flex={open}
			class:z-20={open}
			class:hidden={!open}
			class={`
				bg-surface-2
				px-8 pt-14
				flex-col flex-1 items-start gap-6 
				fixed top-0 right-0 bottom-0
				w-[80vw] max-w-[255px]

				md:bg-transparent
				md:flex md:flex-row md:items-center
				md:relative md:gap-10
				md:px-0 md:pt-0
				md:w-min md:max-w-none
			`}
		>
			<button on:click={closeMenu} aria-label="close nav menu" class="ml-auto md:hidden">
				<Icon name="close" />
			</button>
			<a href="/">home</a>
			<a href="/about">about</a>
			<button class="btn md:ml-auto">contact us</button>
		</nav>

		<button
			on:click={() => (open = true)}
			class="ml-auto md:hidden"
			aria-label="navigation menu button"
		>
			<Icon name="hamburger" />
		</button>
	</div>
</header>

<slot />
