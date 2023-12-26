<script lang="ts">
	import { Icon } from '$lib/components'
	import { contact } from '$lib/config'
</script>

<section>
	<div class="section-wrapper grid lg:gap-x-4 lg:grid-cols-2 lg:grid-rows-[repeat(2,_auto)]">
		<div class="text-center mb-10 md:mb-6 lg:mb-0 lg:text-left lg:grid lg:justify-between">
			<h1 class="heading heading--1-small mb-4 md:mb-6 lg:mb-0">Contact</h1>
			<h2 class="heading text-[32px] text-primary">Ask us about</h2>
		</div>

		<ul class="grid items-center gap-6 mb-14 md:mb-16 lg:mb-0 lg:row-start-2 lg:gap-2">
			{#each contact.askAbout as a}
				<li class="flex gap-4 items-center">
					<Icon name={a.iconName} />

					<p class="heading heading--3">
						{a.description}
					</p>
				</li>
			{/each}
		</ul>

		<form action="/contact/#" class="grid gap-6 row-span-2">
			<input name="name" type="text" placeholder="Name" />
			<input name="email" type="email" placeholder="Email Address" />
			<input name="companyName" type="text" placeholder="Company Name" />
			<input name="title" type="text" placeholder="Title" />
			<textarea name="message" rows="3" placeholder="Message"></textarea>
			<button class="btn btn--secondary justify-self-start">submit</button>
		</form>
	</div>
</section>

<style lang="postcss">
	input,
	textarea {
		@apply bg-transparent px-3 pb-4 border-b w-full border-text;
	}

	section {
		--_bgImg: var(--bgImg, url('/assets/bg-pattern-contact-2.svg'));
		--_bgPs: var(--bgPs, right -100px bottom -100px);

		@apply pb-24 bg-no-repeat;
		background-image: var(--_bgImg);
		background-position: var(--_bgPs);

		@media (min-width: theme('screens.xl')) {
			--bgImg: url('/assets/bg-pattern-contact-2.svg'),
				url('/assets/bg-pattern-about-2-contact-1.svg');
			--bgPs: right -100px bottom, left -100px top;
		}
	}
</style>
