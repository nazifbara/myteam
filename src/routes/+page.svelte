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
	<div class="section-wrapper grid gap-14 md:mb-16 lg:grid-cols-2">
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
						<h3 class="heading heading--3 text-primary mb-2 md:mb-4">
							{feature.title}
						</h3>
						<p class="text-body-2">
							{feature.description}
						</p>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section
	style:background-position="left top, right bottom -100px"
	style:background-image={"url('/assets/bg-pattern-home-4-about-3.svg'), url('/assets/bg-pattern-about-2-contact-1.svg')"}
	class="bg-surface-4 py-36 bg-no-repeat md:py-24 lg:py-36"
>
	<div class="section-wrapper text-center">
		<h2 class="heading heading--2 mb-12">
			Delivering real results for top companies. Some of our <span class="text-secondary"
				>success stories.</span
			>
		</h2>

		<ul class="grid gap-12 lg:grid-cols-3">
			{#each home.testimonies as t}
				<li>
					<article class="grid gap-4 pt-10 relative z-10">
						<div>
							<h3 class="heading heading--3 text-secondary mb-1">
								{t.name}
							</h3>
							<p class="job-title">{t.position}</p>
						</div>

						<p class="row-start-1 text-body-2">{t.text}</p>

						<picture
							class="h-16 aspect-square rounded-full overflow-hidden border-2 border-secondary mx-auto"
						>
							<img src={t.image} alt={t.name} />
						</picture>
						<span class="absolute top-0 -z-10 right-1/2 translate-x-1/2"
							><Icon name="quotes" /></span
						>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>
