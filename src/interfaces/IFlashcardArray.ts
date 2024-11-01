
export default interface FlashcardArrayProps {
  cards: Array<{
    id: number;
    frontHTML: string | JSX.Element;
    backHTML: string | JSX.Element;
    frontCardStyle?: React.CSSProperties;
    frontContentStyle?: React.CSSProperties;
    backCardStyle?: React.CSSProperties;
    backContentStyle?: React.CSSProperties;
    className?: string;
    height?: string;
    width?: string;
    borderRadius?: string;
    style?: React.CSSProperties;
    isRemembered?: boolean;
    mark?: boolean;
    initialContent?:string
  }>;
  controls?: boolean;
  forwardRef?: React.MutableRefObject<{
    nextCard: () => void;
    prevCard: () => void;
    resetArray: () => void;
  } | null>;
  showCount?: boolean;
  frontCardStyle?: React.CSSProperties;
  frontContentStyle?: React.CSSProperties;
  backCardStyle?: React.CSSProperties;
  backContentStyle?: React.CSSProperties;
  FlashcardArrayStyle?: React.CSSProperties;
  onCardChange?: (id: number, index: number) => void;
  onCardFlip?: (id: number, index: number, state: boolean) => void;
  currentCardFlipRef?: React.MutableRefObject<() => void> | { current: null };
  cycle?: boolean;
  onStudy?: boolean;
  minimize?: () => void;
  maximize?: () => void;
  onProgressStudy?: (newRemember: number, newRecall: number) => void;
  onUpdateCards?: (newCards: object[]) => void;
  onSound?: (content:string) => void;
  styleProgress?: React.CSSProperties;
}
