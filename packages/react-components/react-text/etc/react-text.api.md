## API Report File for "@fluentui/react-text"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { FunctionComponent } from 'react';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const Body1: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const body1ClassNames: SlotClassNames<TextSlots>;

// @public
export const Caption1: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const caption1ClassNames: SlotClassNames<TextSlots>;

// @public
export const Caption2: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const caption2ClassNames: SlotClassNames<TextSlots>;

// @public
export const Display: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const displayClassNames: SlotClassNames<TextSlots>;

// @public
export const LargeTitle: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const largeTitleClassNames: SlotClassNames<TextSlots>;

// @public
export const renderText_unstable: (state: TextState) => JSX.Element;

// @public
export const Subtitle1: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const subtitle1ClassNames: SlotClassNames<TextSlots>;

// @public
export const Subtitle2: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const subtitle2ClassNames: SlotClassNames<TextSlots>;

// @public
const Text_2: ForwardRefComponent<TextProps>;
export { Text_2 as Text }

// @public (undocumented)
export const textClassNames: SlotClassNames<TextSlots>;

// @public
export type TextProps = ComponentProps<TextSlots> & {
    align?: 'start' | 'center' | 'end' | 'justify';
    block?: boolean;
    font?: 'base' | 'monospace' | 'numeric';
    italic?: boolean;
    size?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
    strikethrough?: boolean;
    truncate?: boolean;
    underline?: boolean;
    weight?: 'regular' | 'medium' | 'semibold';
    wrap?: boolean;
};

// @public
export type TextSlots = {
    root: Slot<'span', 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'pre'>;
};

// @public
export type TextState = ComponentState<TextSlots> & Required<Pick<TextProps, 'align' | 'block' | 'font' | 'italic' | 'size' | 'strikethrough' | 'truncate' | 'underline' | 'weight' | 'wrap'>>;

// @public
export const Title1: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const title1ClassNames: SlotClassNames<TextSlots>;

// @public
export const Title2: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const title2ClassNames: SlotClassNames<TextSlots>;

// @public
export const Title3: FunctionComponent<TextWrapperProps>;

// @public (undocumented)
export const title3ClassNames: SlotClassNames<TextSlots>;

// @public
export const useText_unstable: (props: TextProps, ref: React_2.Ref<HTMLElement>) => TextState;

// @public
export const useTextStyles_unstable: (state: TextState) => TextState;

// (No @packageDocumentation comment for this package)

```
