import { createClient } from '@supabase/supabase-js';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Initialize Supabase client for direct access
const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL || '',
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

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
	payment_method?: string;
	campaign_id?: string;
	campaign_name?: string;
	status?: string;
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
	try {
		// Try backend API first
		try {
			const response = await fetch(`${API_URL}/contact`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				return response.json();
			}
		} catch (apiError) {
			console.warn('Backend API not available, using direct Supabase insert');
		}

		// Fallback to direct Supabase insert
		const { data: insertedData, error } = await supabase
			.from('cms_contact')
			.insert([
				{
					name: data.name,
					email: data.email,
					phone: data.phone || null,
					subject: data.subject,
					message: data.message,
					status: 'new',
				},
			])
			.select()
			.single();

		if (error) {
			console.error('Supabase insert error:', error);
			throw new Error(error.message || 'Failed to submit contact form');
		}

		return {
			success: true,
			message: 'Contact form submitted successfully',
			data: insertedData,
		};
	} catch (error: any) {
		console.error('Contact form submission error:', error);
		throw error;
	}
}

// Generic Donation Form
export async function submitDonation(data: DonationForm) {
	try {
		const response = await fetch(`${API_URL}/donations`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			let errorMessage = 'Failed to process donation';
			try {
				const error = await response.json();
				errorMessage = error.message || error.error || errorMessage;
				console.error('Donation API Error:', error);
			} catch (e) {
				const text = await response.text();
				console.error('Donation API Error (text):', text);
				errorMessage = text || errorMessage;
			}
			throw new Error(errorMessage);
		}

		return response.json();
	} catch (error: any) {
		console.error('Donation submission error:', error);
		throw error;
	}
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

// Get Videos from CMS
export async function getVideos(featured?: boolean) {
	try {
		// Try API endpoint first
		const url = featured 
			? `${API_URL}/cms/videos?featured=true`
			: `${API_URL}/cms/videos`;
			
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			return response.json();
		}

		// Fallback to direct Supabase access
		console.warn('Videos endpoint not available, using direct Supabase access');
		
		let query = supabase
			.from('cms_videos')
			.select('*')
			.eq('is_active', true)
			.order('display_order', { ascending: true });
		
		if (featured) {
			query = query.eq('is_featured', true);
		}
		
		const { data, error } = await query;

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Failed to fetch videos:', error);
		return null;
	}
}

// Get Video by Name (deprecated - use getVideoBySlug)
export async function getVideoByName(name: string) {
	try {
		// Try API endpoint first
		const response = await fetch(`${API_URL}/cms/videos?name=${encodeURIComponent(name)}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const data = await response.json();
			return Array.isArray(data) ? data[0] : data;
		}

		// Fallback to direct Supabase access
		console.warn('Video endpoint not available, using direct Supabase access');
		
		const { data, error } = await supabase
			.from('cms_videos')
			.select('*')
			.eq('name', name)
			.eq('is_active', true)
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Failed to fetch video by name:', error);
		return null;
	}
}

// Get Video by Slug (recommended)
export async function getVideoBySlug(slug: string) {
	try {
		// Try API endpoint first
		const response = await fetch(`${API_URL}/cms/videos?slug=${encodeURIComponent(slug)}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const data = await response.json();
			return Array.isArray(data) ? data[0] : data;
		}

		// Fallback to direct Supabase access
		console.warn('Video endpoint not available, using direct Supabase access');
		
		const { data, error } = await supabase
			.from('cms_videos')
			.select('*')
			.eq('slug', slug)
			.eq('is_active', true)
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Failed to fetch video by slug:', error);
		return null;
	}
}

// Get Home Banner from CMS
export async function getHomeBanner() {
	try {
		// Try API endpoint first
		const response = await fetch(`${API_URL}/cms/banner`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			return response.json();
		}

		// If API endpoint doesn't exist, fallback to direct Supabase access
		console.warn('Banner endpoint not available, using direct Supabase access');
		
		const { data, error } = await supabase
			.from('cms_banner')
			.select('*')
			.eq('is_active', true)
			.order('created_at', { ascending: false });

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		// Transform data to match expected format
		return data.map((banner: any) => ({
			id: banner.id,
			title: banner.title,
			subtitle: banner.subtitle || null,
			description: banner.description || null,
			image_url: banner.link_url, // Map link_url to image_url
			button_text: banner.button_text || null,
			button_link: banner.button_link || null,
			status: banner.is_active ? 'active' : 'inactive',
			created_at: banner.created_at,
			updated_at: banner.updated_at,
		}));
	} catch (error) {
		console.error('Failed to fetch banner:', error);
		return null;
	}
}
