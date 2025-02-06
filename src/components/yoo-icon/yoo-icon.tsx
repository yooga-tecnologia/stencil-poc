import { Component, Prop, h, State, Element, Watch, } from '@stencil/core';
import { ICONS } from './yoo-icon-base';
import type { IconName, IconAnimation, Background } from './yoo-icon.types';

@Component({
  tag: 'yoo-icon',
  styleUrl: 'yoo-icon.scss',
  shadow: false,
})
export class IconComponent {
  @Element() el!: HTMLElement;

  @Prop() size: number | string = 'medium';
  @Prop() icon!: IconName;
  @Prop() color: string = 'currentColor';
  @Prop() background?: Background;
  @Prop() animation?: IconAnimation;

  @State() svgIcon!: string;
  @State() iconSize!: string;
  @State() bgSize!: string;
  @State() transform!: string;
  @State() animate!: string;

  private transformDirections: Record<string, string> = {
    '-up': 'rotate(0)',
    '-down': 'rotate(180 0 0)',
    '-right': 'rotate(90 0 0)',
    '-left': 'rotate(-90 0 0)',
  };

  componentWillLoad() {
    // this.updateIcon();
  }

  @Watch('icon')
  @Watch('size')
  @Watch('color')
  // updateIcon() {
  //   const baseIconName = this.getBaseIconName(this.icon);
  //   this.transform = this.transformDirections[this.icon] || 'rotate(0)';
  //   this.svgIcon = ICONS[baseIconName] || '';
  //   this.calculateSizes();
  //   this.animate = this.animation === 'rotation' ? 'rotation 1s linear infinite' : '';
  // }

  getBaseIconName(iconName: IconName): string {
    return Object.keys(this.transformDirections).some((key) => iconName.includes(key))
      ? iconName.split('-')[0]
      : iconName;
  }

  // calculateSizes() {
  //   const sizeMap: Record<string, number> = {
  //     small: 16,
  //     medium: 24,
  //     large: 32,
  //     doubleLarge: 64,
  //   };

  //   const baseSize = typeof this.size === 'number' ? this.size : sizeMap[this.size] || sizeMap.medium;
  //   this.bgSize = this.background && baseSize > sizeMap.medium ? `${baseSize}px` : undefined;
  //   this.iconSize = this.bgSize ? `${baseSize - sizeMap.small}px` : `${baseSize}px`;

  //   console.log(this.iconSize);
  // }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={this.iconSize}
        height={this.iconSize}
        fill={this.color}
        style={{ animation: this.animate }}
        transform={this.transform}
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.184-1.527a1 1 0 0 0-1.381-1.446l-4.81 4.59-2.06-1.965a1 1 0 0 0-1.38 1.446l2.75 2.625a1 1 0 0 0 1.38 0z" fill="inherit"/>
        
        {this.background && (
          <span class="icon-bg" style={{ width: this.bgSize, height: this.bgSize }}></span>
        )}
      </svg>
    );
  }
}
