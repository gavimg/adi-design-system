import React from 'react';

export default {
  title: 'Utilities/Overview'
};

const Code = ({ children }: { children: string }) => (
  <pre
    className="g-bg-neutral g-p-3 g-rounded"
    style={{ fontSize: '12px', marginTop: '8px' }}
  >
    <code>{children}</code>
  </pre>
);

export const Spacing = () => (
  <div className="g-flex g-flex-col g-gap-4 g-w-full">
    <div>
      <div className="g-bg-primary-light g-p-4 g-rounded">g-p-4</div>
      <Code>{'<div class="g-bg-primary-light g-p-4 g-rounded">...</div>'}</Code>
    </div>
    <div className="g-bg-success-light g-p-6 g-rounded">g-p-6</div>
    <div className="g-bg-warning-light g-p-8 g-rounded">g-p-8</div>
  </div>
);

export const Typography = () => (
  <div className="g-flex g-flex-col g-gap-3">
    <div className="g-text-3xl g-font-bold">g-text-3xl + g-font-bold</div>
    <div className="g-text-xl g-font-semibold g-text-primary">Primary text</div>
    <div className="g-text-base g-text-muted">Muted body text</div>
    <Code>{'<div class="g-text-xl g-font-semibold g-text-primary">Primary text</div>'}</Code>
  </div>
);

export const Layout = () => (
  <div className="g-grid g-gap-4" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
    <div className="g-bg-info-light g-p-4 g-rounded g-text-center">g-grid</div>
    <div className="g-bg-info-light g-p-4 g-rounded g-text-center">g-gap-4</div>
    <div className="g-bg-info-light g-p-4 g-rounded g-text-center">g-text-center</div>
    <Code>{'<div class="g-grid g-gap-4">...</div>'}</Code>
  </div>
);

export const Effects = () => (
  <div className="g-flex g-gap-4">
    <button className="g-bg-primary g-text-light g-py-3 g-px-6 g-rounded g-hover-lift g-press">
      Hover + Press
    </button>
    <div className="g-bg-white g-shadow g-p-4 g-rounded">g-shadow</div>
    <Code>{'<button class="g-hover-lift g-press">...</button>'}</Code>
  </div>
);
