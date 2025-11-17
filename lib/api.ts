const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface VolunteerApplication {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	skills: string[];
	interests: string[];
	motivation: string;
	experience: string;
}

export interface CommunityApplication {
	user_id?: string | null;
	email: string;
	name: string;
	phone: string;
	message: string;
	why_join: string;
	skills: string[];
	experience: string;
}

export interface Community {
	name: string;
	slug: string;
	description: string;
	owner_id: string;
	logo_url?: string;
	cover_image_url?: string;
	status: 'active' | 'inactive';
	settings: {
		public_visible: boolean;
		allow_join_requests: boolean;
	};
	metadata?: {
		location?: string;
		established?: string;
		[key: string]: any;
	};
}

export interface ContactForm {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
}

export interface DonationForm {
	name: string;
	email: string;
	phone?: string;
	amount: number;
	custom_amount?: number;
	message?: string;
}

// Volunteer Application
export async function submitVolunteerApplication(data: VolunteerApplication) {
	const response = await fetch(`${API_URL}/volunteers/applications`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to submit application');
	}

	return response.json();
}

// Community Application
export async function submitCommunityApplication(communityId: string, data: CommunityApplication) {
	const response = await fetch(`${API_URL}/communities/${communityId}/apply`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to submit application');
	}

	return response.json();
}

// Create Community
export async function createCommunity(data: Community) {
	const response = await fetch(`${API_URL}/communities`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to create community');
	}

	return response.json();
}

// Generic Contact Form
export async function submitContactForm(data: ContactForm) {
	// You can add this endpoint to your backend
	const response = await fetch(`${API_URL}/contact`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to submit contact form');
	}

	return response.json();
}

// Generic Donation Form
export async function submitDonation(data: DonationForm) {
	// You can add this endpoint to your backend
	const response = await fetch(`${API_URL}/donations`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to process donation');
	}

	return response.json();
}

// Get Community Applications
export async function getCommunityApplications(communityId: string) {
	const response = await fetch(`${API_URL}/communities/${communityId}/applications`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to fetch applications');
	}

	return response.json();
}

// Get All Communities
export async function getCommunities() {
	const response = await fetch(`${API_URL}/communities`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to fetch communities');
	}

	return response.json();
}
