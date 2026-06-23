const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export async function fetchReviews(limit = 50) {
  const res = await fetch(`${BASE_URL}/reviews?limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();
}

export async function fetchReviewDetail(id) {
  const res = await fetch(`${BASE_URL}/reviews/${id}`);
  if (!res.ok) throw new Error('Failed to fetch review detail');
  return res.json();
}