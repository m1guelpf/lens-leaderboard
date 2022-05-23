import { FC } from 'react'
import Image from 'next/image'
import { LensProfile } from '@/lib/clients/Lens'

const Avatar: FC<{ profile: LensProfile }> = ({ profile }) => {
	return (
		<div className="relative">
			<div className="absolute inset-0 w-10 h-10 rounded-full bg-white/60 animate-pulse" />
			<Image
				src={profile.picture?.original?.url ?? `https://avatar.tobi.sh/${profile.handle}.png`}
				alt={profile.name}
				width={40}
				height={40}
				className="rounded-full"
			/>
		</div>
	)
}

export default Avatar
