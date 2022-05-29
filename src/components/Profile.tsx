import { FC } from 'react'
import { LensProfile } from '@/types/lens'
import { Filter } from '@/types/ui'

import Avatar from './Avatar'

type Props = {
	profile: LensProfile
	ranking?: number
	filter?: Filter
}

const Profile: FC<Props> = ({ ranking, profile, filter }) => {
	return (
		<div className="flex items-center justify-between shadow rounded-xl py-2 px-4 relative bg-white/70 backdrop-filter backdrop-blur-sm backdrop-saturate-150">
			<div
				className={`absolute -top-2 -right-2 bg-white text-xl rounded-full w-8 h-8 flex items-center justify-center shadow ${
					ranking >= 1000 ? 'text-xs' : ranking >= 100 ? 'text-base' : ''
				}`}
			>
				{ranking}
			</div>
			<div className="flex items-center">
				<Avatar profile={profile} />
				<div className="ml-4">
					<p className="text-lg">{profile.name ?? profile.handle}</p>
					<div className="flex items-center">
						<a
							href={`https://lenster.xyz/u/${profile.handle}`}
							className="text-sm text-gray-600 -mt-1 block"
						>
							{profile.handle && `@${profile.handle}`}
						</a>
					</div>
				</div>
			</div>
			<div className="mr-4">
				<p className="text-lg text-right">{filter && filter.item(profile)}</p>
				<p className="lowercase text-black/40 text-sm -mt-1">{filter && filter.label}</p>
			</div>
		</div>
	)
}

export default Profile
