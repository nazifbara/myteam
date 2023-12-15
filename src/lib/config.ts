import type { IconName } from '$lib/types'

export const home: {
	features: { iconName: IconName; title: string; description: string }[]
} = {
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
