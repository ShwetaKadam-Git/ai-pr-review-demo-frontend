import { fetchReviews } from '../api/client.js';
import { reviewCard } from '../components/review-card.js';

export async function renderDashboard(container, onSelect) {
  container.innerHTML = '<p>Loading reviews...</p>';

  try {
    const reviews = await fetchReviews();
    container.innerHTML = '';

    if (reviews.length === 0) {
      container.innerHTML = '<p>No reviews yet. Open a PR on a connected repo to see results here.</p>';
      return;
    }

    const list = document.createElement('div');
    list.className = 'review-list';
    reviews.forEach((r) => list.appendChild(reviewCard(r, onSelect)));
    container.appendChild(list);
  } catch (err) {
    container.innerHTML = `<p class="error">Could not load reviews: ${err.message}</p>`;
  }
}