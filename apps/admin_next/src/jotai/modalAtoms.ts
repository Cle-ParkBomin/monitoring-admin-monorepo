import { atom } from 'jotai';
import { ReactElement } from 'react';

export const modalDefault: {
  visible: boolean;
  title: string;
  content?: ReactElement;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
} = {
  visible: false,
  title: '',
};
export const modalAtom = atom<{
  visible: boolean;
  title: string;
  content?: ReactElement;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}>(modalDefault);

export const popupDefault: {
  visible: boolean;
  title: string;
  content: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
} = {
  visible: false,
  title: '',
  content: '',
};
export const popupAtom = atom<{
  visible: boolean;
  title: string;
  content: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}>(popupDefault);

export const progressDefault: {
  visible: boolean;
  title: string;
  count: number;
  total: number;
  onClick?: () => void;
  handleSecondary?: () => void;
  buttonLabel?: string;
  secondaryLabel?: string;
} = {
  visible: false,
  title: '',
  count: 0,
  total: 100,
};
export const progressAtom = atom<{
  visible: boolean;
  title: string;
  count: number;
  total: number;
  onClick?: () => void;
  handleSecondary?: () => void;
  buttonLabel?: string;
  secondaryLabel?: string;
}>(progressDefault);

export const toastDefault: {
  visible: boolean;
  text: string;
  icon?: 'check' | 'warn' | 'info';
  style?: 'dark' | 'light';
} = {
  visible: false,
  text: '',
  icon: 'check',
  style: 'dark',
};
export const toastAtom = atom<{
  visible: boolean;
  text: string;
  icon?: 'check' | 'warn' | 'info';
  style?: 'dark' | 'light';
}>(toastDefault);
