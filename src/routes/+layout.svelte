<script lang="ts">
	import '../app.css'

	import { Icon } from '$lib/components'

	let open = false

	const closeMenu = () => (open = false)
</script>

<header class="mt-11 mb-20 md:mt-16 md:mb-28">
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
				bg-[url('/assets/bg-pattern-about-1-mobile-nav-1.svg')] 
				bg-no-repeat bg-[bottom_right_-100px]
				
				md:bg-none
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
			<a href="/" on:click={closeMenu}>home</a>
			<a href="/about" on:click={closeMenu}>about</a>
			<a href="/contact" class="btn md:ml-auto" on:click={closeMenu}>contact us</a>
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

<main>
	<slot />
</main>

<footer class="bg-surface-6 py-16">
	<div
		class={`
		wrapper 
		text-center 
		grid 
		gap-6 
		justify-items-center
		md:grid-rows-[repeat(2,_auto)]
		md:grid-cols-[repeat(2,_auto)]
		md:text-right
		md:justify-between
		lg:grid-cols-[repeat(3,_auto)]
	`}
	>
		<div class="grid gap-6 justify-items-center lg:row-span-2">
			<img class="w-[96px] lg:w-[160px]" alt="myteam logo" src="/assets/logo.svg" />
			<nav class="flex gap-6">
				<a href="/">home</a>
				<a href="/about">about</a>
			</nav>
		</div>

		<ul class="text-text/60 lg:row-span-2">
			<li>987 Hillcrest Lane</li>
			<li>Irvine, CA</li>
			<li>California 92714</li>
			<li>Call Us: 949-833-7432</li>
		</ul>

		<nav class="flex gap-4 lg:justify-self-end">
			<a href="/#" aria-label="facebook">
				<Icon name="facebook" />
			</a>
			<a href="/#" aria-label="pinterest">
				<Icon name="pinterest" />
			</a>
			<a href="/#" aria-label="linkedin">
				<Icon name="linkedin" />
			</a>
		</nav>

		<p class="text-text/60">Copyright 2020. All Rights Reserved</p>
	</div>
</footer>
