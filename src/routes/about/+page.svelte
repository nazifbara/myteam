<script lang="ts">
	import { ContactBanner, PageHero, Avatar, Icon } from '$lib/components'
	import { about } from '$lib/config'

	let openedQuotes = new Set<number>()

	const openQuote = (index: number) => (openedQuotes = openedQuotes.add(index))
	const closeQuote = (index: number) => openedQuotes.delete(index) && (openedQuotes = openedQuotes)

	$: isQuoteOpen = (index: number) => openedQuotes.has(index)
</script>

<section
	class={`
    bg-[url('/assets/bg-pattern-about-1-mobile-nav-1.svg')]
    bg-no-repeat
    bg-[right_-100px_bottom_-100px]
    md:bg-[right_-100px_bottom]
  `}
>
	<PageHero page="about">
		<svelte:fragment slot="heading">About</svelte:fragment>

		We help companies build dynamic teams made up of top global talent. Using our network of
		passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse
		teams shape the best products and experiences. We'll bring those teams to you.
	</PageHero>
</section>

<section
	style:background-position="left -100px top, right bottom"
	style:background-image={"url('/assets/bg-pattern-about-2-contact-1.svg'), url('/assets/bg-pattern-home-4-about-3.svg')"}
	class="p-section bg-surface-4 bg-no-repeat"
>
	<div class="wrapper">
		<h2 class="heading heading--2 mb-12 text-center lg:mb-16">Meet the directors</h2>

		<ul class="grid gap gap-y-14 gap-x-3 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-8">
			{#each about.directors as d, index (d.name)}
				<li
					class="bg-surface-5 px-6 pt-8 pb-14 grid gap-4 justify-items-center relative text-center"
				>
					{#if !isQuoteOpen(index)}
						<Avatar size={2} src={d.image} alt={d.name} />
						<div>
							<h3 class="heading heading--3 text-secondary mb-1">
								{d.name}
							</h3>
							<p class="job-title">{d.position}</p>
						</div>
					{:else}
						<h3 class="heading heading--3 text-secondary">
							{d.name}
						</h3>
						<blockquote>“{d.quote}”</blockquote>

						<nav class="flex gap-4">
							<a href="/#" aria-label="facebook">
								<Icon name="twitter" />
							</a>
							<a href="/#" aria-label="linkedin">
								<Icon name="linkedin" />
							</a>
						</nav>
					{/if}
					<button
						on:click={() => (isQuoteOpen(index) ? closeQuote(index) : openQuote(index))}
						class:bg-secondary={isQuoteOpen(index)}
						class:rotate-45={isQuoteOpen(index)}
						class={`
                h-14
                aspect-square
                rounded-full
              bg-primary
                grid
                place-content-center
                justify-center
                absolute
                bottom-0
                translate-y-1/2
                transition-all
                hover:bg-secondary
		
            `}
					>
						<Icon name="cross" />
					</button>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section
	class={`
 		bg-[url('/assets/bg-pattern-about-4.svg')]
    bg-no-repeat
    bg-[left_-100px_top_-100px]
		p-section 
	bg-surface-5

		md:bg-[left_top_-100px]
		lg:bg-[left_top]
	`}
>
	<div class="wrapper text-center">
		<h2 class="heading heading--2 mb-16">Some of our clients</h2>

		<ul
			class={`
				grid
				gap-16
				items-center
				justify-items-center
				grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]
			`}
		>
			{#each about.clientLogos as logo}
				<li class="max-w-[160px]">
					<img src={logo.image} alt={logo.alt} />
				</li>
			{/each}
		</ul>
	</div>
</section>

<ContactBanner />
