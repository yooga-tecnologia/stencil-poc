import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from './my-button';

describe('my-button', () => {
  it('renders with default label', async () => {
    const page = await newSpecPage({
      components: [MyButton],
      html: `<my-button></my-button>`,
    });
    expect(page.root).toEqualHtml(`
      <my-button>
        <button class="my-button my-button--primary" part="button">
          Clique aqui
        </button>
      </my-button>
    `);
  });

  it('renders with a custom label', async () => {
    const page = await newSpecPage({
      components: [MyButton],
      html: `<my-button label="Custom label"></my-button>`,
    });
    expect(page.root).toEqualHtml(`
      <my-button label="Custom label">
        <button class="my-button my-button--primary" part="button">
          Custom label
        </button>
      </my-button>
    `);
  });

  it('renders with the secondary variant', async () => {
    const page = await newSpecPage({
      components: [MyButton],
      html: `<my-button variant="secondary"></my-button>`,
    });
    expect(page.root).toEqualHtml(`
      <my-button variant="secondary">
        <button class="my-button my-button--secondary" part="button">
          Clique aqui
        </button>
      </my-button>
    `);
  });

  it('renders as disabled', async () => {
    const page = await newSpecPage({
      components: [MyButton],
      html: `<my-button disabled></my-button>`,
    });

    const button = page.root.querySelector('button'); 
    expect(button).not.toBeNull();
    expect(button?.hasAttribute('disabled')).toBe(true);
  });
});
