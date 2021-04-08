
import {
  arrowUp,
  arrowDown,
  arrowDownSmall,
  arrowLeft,
  arrowLeftSmall,
  arrowRight,
  arrowRightSmall,
  arrowUpSmall
} from '../../../style/components/atoms/Arrow'

type direction = 'up' | 'down' | 'left' | 'right'
interface ButtonProps {
  direction: direction
}

export const Arrow: React.FC<ButtonProps> = ({ direction }) => {
  switch (direction) {
    case 'up':
      return <label css={arrowUp} />
    case 'down':
      return <label css={arrowDown} />
    case 'left':
      return <label css={arrowLeft} />
    case 'right':
      return <label css={arrowRight} />
    default:
      return <label css={arrowUp} />
  }
}

export const ArrowSmall: React.FC<ButtonProps> = ({ direction }) => {
  switch (direction) {
    case 'up':
      return <label css={arrowUpSmall} />
    case 'down':
      return <label css={arrowDownSmall} />
    case 'left':
      return <label css={arrowLeftSmall} />
    case 'right':
      return <label css={arrowRightSmall} />
    default:
      return <label css={arrowUpSmall} />
  }
}
