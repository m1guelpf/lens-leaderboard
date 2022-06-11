import { FC, useMemo } from 'react'
import Image from 'next/image'
import { LensProfile } from '@/types/lens'
import Skeleton from 'react-loading-skeleton'

const Avatar: FC<{ profile: LensProfile; className?: string }> = ({ profile, className = '' }) => {
	const avatarUrl = useMemo(() => {
		if (!profile) return
		if (!profile?.picture) return `https://avatar.tobi.sh/${profile.handle}.png`

		if (profile.picture?.uri) return profile.picture?.uri
		return profile.picture.original.url
	}, [profile])

	return (
		<div className={`relative ${className}`}>
			{avatarUrl ? (
				<>
					<div className="absolute inset-0 w-10 h-10 rounded-full bg-white/60 animate-pulse" />
					<Image
						src={avatarUrl}
						alt={profile?.name ?? profile?.handle}
						width={40}
						height={40}
						className="rounded-full"
					/>
				</>
			) : (
				<div className="-mt-1">
					<Skeleton circle width={40} height={40} />
				</div>
			)}
		</div>
	)
}

export default Avatar
