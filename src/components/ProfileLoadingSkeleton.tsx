import { LensProfile } from '@/types/lens'
import React from 'react'
import Profile from './Profile'

const ProfileLoadingSkeleton = () => {
	const emptyProfile: LensProfile = {
		name: '',
		handle: '',
		stats: {
			totalPosts: 0,
			totalFollowers: 0,
			totalFollowing: 0,
			totalCollects: 0,
			totalPublications: 0,
		},
	}

	return <Profile profile={emptyProfile} />
}

export default ProfileLoadingSkeleton
