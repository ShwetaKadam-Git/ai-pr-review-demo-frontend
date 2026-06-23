import { renderDashboard } from './pages/dashboard.js';
import { renderReviewDetail } from './pages/review-detail.js';

const app = document.getElementById('app');

function showDashboard() {
  renderDashboard(app, showDetail);
}

function showDetail(id) {
  renderReviewDetail(app, id, showDashboard);
}

showDashboard();