import type { IconName } from '$lib/types'

export const home: {
	features: { iconName: IconName; title: string; description: string }[]
	testimonies: { name: string; position: string; text: string; image: string }[]
} = {
	testimonies: [
		{
			name: 'Kady Baker',
			position: 'Product Manager at Bookmark',
			text: `“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”`,
			image: '/assets/avatar-kady.jpg'
		},
		{
			name: 'Aiysha Reese',
			position: 'Founder of Manage',
			text: `“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”`,
			image: '/assets/avatar-aiysha.jpg'
		},
		{
			name: 'Arthur Clarke',
			position: 'Co-founder of MyPhysio',
			text: `“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”`,
			image: '/assets/avatar-arthur.jpg'
		}
	],
	features: [
		{
			iconName: 'person',
			title: 'Experienced Individuals',
			description:
				'Our network is made up of highly experienced professionals who are passionate about what they do.'
		},
		{
			iconName: 'cog',
			title: 'Easy to Implement',
			description:
				'Our processes have been refined over years of implementation meaning our teams always deliver.'
		},
		{
			iconName: 'chart',
			title: 'Enhanced Productivity',
			description:
				'Our customized platform with in-built analytics helps you manage your distributed teams.'
		}
	]
}

export const about: {
	directors: { name: string; position: string; image: string; quote: string }[]
	clientLogos: { image: string; alt: string }[]
} = {
	directors: [
		{
			name: 'Nikita Marks',
			position: 'Founder & CEO',
			image: '/assets/avatar-nikita.jpg',
			quote: 'It always amazes me how much talent there is in every corner of the globe.'
		},
		{
			name: 'Cristian Duncan',
			position: 'Co-founder & COO',
			image: '/assets/avatar-christian.jpg',
			quote: 'Distributed teams required unique processes. You need to approach work in a new way.'
		},
		{
			name: 'Cruz Hamer',
			position: 'Co-founder & CTO',
			image: '/assets/avatar-cruz.jpg',
			quote:
				"Technology is at the forefront of enabling distributed teams. That's where we come in."
		},
		{
			name: 'Drake Heaton',
			position: 'Business Development Lead',
			image: '/assets/avatar-drake.jpg',
			quote: 'Hiring similar people from similar backgrounds is a surefire way to stunt innovation.'
		},
		{
			name: 'Griffin Wise',
			position: 'Lead Marketing',
			image: '/assets/avatar-griffin.jpg',
			quote:
				'Unique perspectives shape unique products, which is what you need to survive these days.'
		},
		{
			name: 'Aden Allan',
			position: 'Head of Talent',
			image: '/assets/avatar-aden.jpg',
			quote:
				'Empowered teams create truly amazing products. Set the north star and let them follow it.'
		}
	],
	clientLogos: [
		{
			image: '/assets/logo-the-verge.png',
			alt: 'The Verge logo'
		},
		{
			image: '/assets/logo-jakarta-post.png',
			alt: 'TheJakartaPost logo'
		},
		{
			image: '/assets/logo-the-guardian.png',
			alt: 'The Guardian logo'
		},
		{
			image: '/assets/logo-tech-radar.png',
			alt: 'Techradar logo'
		},
		{
			image: '/assets/logo-gadgets-now.png',
			alt: 'Gadgets Now logo'
		}
	]
}

export const contact: {
	askAbout: { iconName: IconName; description: string }[]
} = {
	askAbout: [
		{
			iconName: 'person',
			description: 'The quality of our talent network'
		},
		{
			iconName: 'cog',
			description: 'Usage & implementation of our software'
		},
		{
			iconName: 'chart',
			description: 'How we help drive innovation'
		}
	]
}
