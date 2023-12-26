<script lang="ts">
	export let page: 'home' | 'about' = 'home'

	const isInHomePage = page === 'home'

	const wrapperClass = `
			${
				isInHomePage
					? "bg-[url('/assets/bg-pattern-home-2.svg')] bg-no-repeat bg-bottom pb-52 md:pb-60"
					: 'pb-32'
			}
			wrapper
			text-center
			max-w-[400px]
			md:max-w-[550px]
			lg:max-w-none
			lg:flex
			lg:gap-8
			lg:text-left
			lg:bg-right-bottom
	`

	const headingClass = `heading mb-5 lg:mb-0 ${
		isInHomePage ? 'lg:flex-[3] heading--1' : 'lg:flex-[2] heading--1-small'
	}`
	const bodyClass = ` lg:grid lg:content-between lg:before:block lg:before:h-[4px] lg:before:w-[50px] ${
		!isInHomePage
			? 'lg:flex-[3] lg:before:bg-primary lg:gap-10'
			: 'lg:flex-[2] lg:before:bg-surface-1'
	}`
</script>

<article class={wrapperClass}>
	<h1 class={headingClass}>
		<slot name="heading" />
	</h1>
	<p class={bodyClass}>
		<slot />
	</p>
</article>
