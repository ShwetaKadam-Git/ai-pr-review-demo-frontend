import { policyBadge } from './policy-badge.js';

export function reviewCard(review, onClick) {
  const card = document.createElement('div');
  card.className = 'review-card';

  const title = document.createElement('div');
  title.className = 'review-card-title';
  title.textContent = `Review #${review.id}`;

  const meta = document.createElement('div');
  meta.className = 'review-card-meta';
  meta.appendChild(policyBadge(review.policy));

  const stats = document.createElement('span');
  stats.className = 'review-card-stats';
  stats.textContent = `${review.finding_count} findings · ${review.error_count} errors · ${review.warning_count} warnings`;
  meta.appendChild(stats);

  const date = document.createElement('div');
  date.className = 'review-card-date';
  date.textContent = review.created_at ? new Date(review.created_at).toLocaleString() : '';

  card.append(title, meta, date);
  card.addEventListener('click', () => onClick(review.id));
  return card;
}