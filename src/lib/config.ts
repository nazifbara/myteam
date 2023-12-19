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
