import { fetchReviewDetail } from '../api/client.js';
import { diffViewer } from '../components/diff-viewer.js';

export async function renderReviewDetail(container, id, onBack) {
  container.innerHTML = '<p>Loading review...</p>';

  try {
    const review = await fetchReviewDetail(id);
    container.innerHTML = '';

    const backBtn = document.createElement('button');
    backBtn.textContent = '← Back';
    backBtn.className = 'back-button';
    backBtn.addEventListener('click', onBack);

    const heading = document.createElement('h2');
    heading.textContent = `Review #${review.id} — ${review.policy} policy`;

    container.append(backBtn, heading, diffViewer(review.findings));
  } catch (err) {
    container.innerHTML = `<p class="error">Could not load review: ${err.message}</p>`;
  }
}