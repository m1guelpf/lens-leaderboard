import { LensProfile } from '@/types/lens'
import { Filter } from '@/types/ui'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import Avatar from './Avatar'

const ProfileCard: FC<{ profile: LensProfile; i: number; filter: Filter }> = ({ profile, i, filter }) => {
	return (
		<div
			key={i}
			className="flex items-center justify-between shadow rounded-xl py-2 px-4 relative bg-white/70 backdrop-filter backdrop-blur-sm backdrop-saturate-150"
		>
			<div
				className={`absolute -top-2 -right-2 bg-white text-xl rounded-full w-8 h-8 flex items-center justify-center shadow ${
					i >= 1000 ? 'text-xs' : i >= 100 ? 'text-base' : ''
				}`}
			>
				{i}
			</div>
			<div className="flex items-center">
				<Avatar profile={profile} />
				<div className="ml-4">
					<p className="text-lg">{profile?.name ?? profile?.handle ?? <Skeleton width={150} />}</p>
					<div className="flex items-center">
						<a
							href={profile ? `https://open.withlens.app/profile/${profile?.handle}` : null}
							className="text-sm text-gray-600 -mt-1 block"
						>
							{profile?.handle ? `@${profile.handle}` : <Skeleton width={50} />}
						</a>
					</div>
				</div>
			</div>
			<div className="mr-4">
				<p className="text-lg text-right">{profile ? filter.item(profile) : <Skeleton width={40} />}</p>
				<p className="lowercase text-black/40 text-sm -mt-1">{filter.label}</p>
			</div>
		</div>
	)
}

export default ProfileCard
