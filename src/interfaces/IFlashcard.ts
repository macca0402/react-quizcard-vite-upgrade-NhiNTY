export default interface FlashcardProps {
  frontHTML: string | JSX.Element;
  frontCardStyle?: React.CSSProperties;
  frontContentStyle?: React.CSSProperties;
  backHTML: string | JSX.Element;
  backCardStyle?: React.CSSProperties;
  backContentStyle?: React.CSSProperties;
  className?: string;
  height?: string;
  borderRadius?: string;
  width?: string;
  style?: React.CSSProperties;
  onCardFlip?: (state: boolean) => void;
  manualFlipRef?: React.MutableRefObject<() => void> | { current: null };

  modalEditTitle?: string;
  modalBodyCSS?: React.CSSProperties;
  modalStyle?: React.CSSProperties;
  toolStyle?: React.CSSProperties;
  toolSize?: number;
  onMarkChange?: (state: boolean) => void;
  isMarked?:boolean|undefined;
  onSaveEdit?: (front:string|JSX.Element,back:string|JSX.Element) => void;
  onSound?: (content:string) => void;
}
