import { render } from '@testing-library/react';
import { createElement } from 'react';
import { LoopcheckProvider } from '../features/loopcheck-canary/loopcheck-canary.store';
import type { ReactElement } from 'react';

export function renderApp(ui: ReactElement) {
  return render(createElement(LoopcheckProvider, null, ui));
}
