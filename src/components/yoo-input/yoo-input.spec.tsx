import { newSpecPage } from "@stencil/core/testing";
import { YooInput } from "./yoo-input";

describe("yoo-input", () => {
  it("renders correctly with default props", async () => {
    const page = await newSpecPage({
      components: [YooInput],
      html: `<yoo-input input-name="test" label="Test Label"></yoo-input>`,
    });

    expect(page.root).toMatchSnapshot();
    expect(page.root.querySelector("label")?.textContent).toContain("Test Label");
    expect(page.root.querySelector("input")?.getAttribute("name")).toBe("test");
  });

  it("applies the required attribute correctly", async () => {
    const page = await newSpecPage({
      components: [YooInput],
      html: `<yoo-input input-name="test" label="Test Label" is-required></yoo-input>`,
    });

    expect(page.rootInstance.isRequired).toBeTruthy();
    expect(page.root.querySelector("label strong")).not.toBeNull();
    expect(page.root.querySelector("input")?.hasAttribute("required")).toBeTruthy();
  });

  it("disables input when condition is true", async () => {
    const page = await newSpecPage({
      components: [YooInput],
      html: `<yoo-input input-name="test" label="Test Label" condition></yoo-input>`,
    });

    expect(page.rootInstance.condition).toBeTruthy();
    expect(page.root.querySelector("input")?.hasAttribute("disabled")).toBeTruthy();
  });

  it("renders with a placeholder", async () => {
    const page = await newSpecPage({
      components: [YooInput],
      html: `<yoo-input input-name="test" label="Test Label" placeholder="Enter value"></yoo-input>`,
    });

    expect(page.rootInstance.placeholder).toBe("Enter value");
    expect(page.root.querySelector("input")?.getAttribute("placeholder")).toBe("Enter value");
  });

  it("renders with trailing icon slot", async () => {
    const page = await newSpecPage({
      components: [YooInput],
      html: `<yoo-input input-name="test" label="Test Label" trailing-icon>
               <span slot="actions">🔍</span>
             </yoo-input>`,
    });

    const trailingIcon = page.root.querySelector("[slot='actions']");
    expect(page.rootInstance.trailingIcon).toBeTruthy();
    expect(trailingIcon).not.toBeNull();
    expect(trailingIcon?.textContent).toContain("🔍");
  });

  it("matches full coverage with all props enabled", async () => {
    const page = await newSpecPage({
      components: [YooInput],
      html: `<yoo-input input-name="test" label="Test Label" is-required condition trailing-icon placeholder="Enter value">
               <span slot="actions">🔍</span>
             </yoo-input>`,
    });

    expect(page.rootInstance.inputName).toBe("test");
    expect(page.rootInstance.label).toBe("Test Label");
    expect(page.rootInstance.isRequired).toBeTruthy();
    expect(page.rootInstance.condition).toBeTruthy();
    expect(page.rootInstance.trailingIcon).toBeTruthy();
    expect(page.rootInstance.placeholder).toBe("Enter value");

    expect(page.root).toMatchSnapshot();
  });
});
