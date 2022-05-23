import { FC } from 'react'
import Image from 'next/image'
import { Profile } from '@/types/ui'

const Avatar: FC<{ profile: Profile }> = ({ profile }) => {
	return (
		<div className="relative">
			<div className="absolute inset-0 w-10 h-10 rounded-full bg-white/60 animate-pulse" />
			<Image
				src={profile.avatar ?? `https://avatar.tobi.sh/${profile.handle}.png`}
				alt={profile.name}
				width={40}
				height={40}
				className="rounded-full"
			/>
		</div>
	)
}

export default Avatar
