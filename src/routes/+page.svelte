<script lang="ts">
	import { Icon } from '$lib/components'
	import { home } from '$lib/config'
</script>

<section class="lg:bg-[url('/assets/bg-pattern-home-1.svg')] bg-no-repeat bg-[left_-100px_top_0px]">
	<article
		class={`
			bg-[url('/assets/bg-pattern-home-2.svg')] bg-no-repeat bg-bottom
			wrapper
			pb-52
			text-center
			max-w-[400px]
			md:pb-60
			md:max-w-[550px]
			lg:max-w-none
			lg:flex
			lg:gap-8
			lg:text-left
			lg:bg-right-bottom
		`}
	>
		<h1 class="heading heading--1 mb-5 lg:mb-0 lg:flex-[3]">
			Find the best <span class="text-primary">talent</span>
		</h1>
		<p
			class="lg:flex-[2] lg:grid lg:content-between lg:before:block lg:before:h-[4px] lg:before:w-[50px] lg:before:bg-surface-1"
		>
			Finding the right people and building high performing teams can be hard. Most companies aren't
			tapping into the abundance of global talent. We're about to change that.
		</p>
	</article>
</section>

<section
	class="bg-surface-5 py-16 bg-[url('/assets/bg-pattern-home-3.svg')] bg-no-repeat bg-[right_-100px_top_0px] lg:py-32 lg:bg-[right_-100px_bottom_0px]"
>
	<div class="wrapper max-w-xl grid gap-14 md:mb-16 lg:grid-cols-2 lg:max-w-none">
		<h2
			class="heading heading--2 before:block before:mb-8 before:h-[4px] before:w-[50px] before:bg-primary lg:before:md:mb-14"
		>
			Build & manage distributed teams like no one else.
		</h2>

		<ul class="grid gap-12">
			{#each home.features as feature}
				<li
					class="text-center grid gap-4 justify-items-center md:grid-cols-[auto_1fr] md:gap-6 md:text-left"
				>
					<Icon name={feature.iconName} />
					<article>
						<h3 class="heading heading--3 text-primary mb-2 md:mb-4">{feature.title}</h3>
						<p>
							{feature.description}
						</p>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>
