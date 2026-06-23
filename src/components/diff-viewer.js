export function diffViewer(findings) {
  const container = document.createElement('div');
  container.className = 'diff-viewer';

  if (findings.length === 0) {
    container.textContent = 'No findings for this review.';
    return container;
  }

  findings.forEach((f) => {
    const row = document.createElement('div');
    row.className = `finding-row severity-${f.severity}`;
    row.innerHTML = `
      <span class="finding-severity">${f.severity}</span>
      <span class="finding-rule">${f.rule}</span>
      <span class="finding-location">${f.location}</span>
      <p class="finding-detail">${f.detail}</p>
    `;
    container.appendChild(row);
  });

  return container;
}