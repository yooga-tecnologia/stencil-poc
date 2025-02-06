import { newSpecPage } from '@stencil/core/testing';
import { YooButton } from '../yoo-button';

describe('yoo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YooButton],
      html: `<yoo-button></yoo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <yoo-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoo-button>
    `);
  });
});
