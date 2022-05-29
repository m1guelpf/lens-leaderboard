import { FC, useMemo } from 'react'
import Image from 'next/image'
import { LensProfile } from '@/types/lens'

const Avatar: FC<{ profile: LensProfile }> = ({ profile }) => {
	const avatarUrl = useMemo(() => {
		if (!profile?.picture) return `https://avatar.tobi.sh/${profile.handle}.png`

		if (profile.picture?.uri) return profile.picture?.uri
		return profile.picture.original.url
	}, [profile])

	return (
		<div className="relative">
			<div className="absolute inset-0 w-10 h-10 rounded-full bg-white/60 animate-pulse" />
			<Image src={avatarUrl} alt={profile.name} width={40} height={40} className="rounded-full" />
		</div>
	)
}

export default Avatar
