export function policyBadge(policy) {
  const span = document.createElement('span');
  span.className = 'policy-badge';
  span.textContent = policy;
  return span;
}