import DrogasDulcesCreativity from './components/DrogasDulcesCreativity'
import ImageBlock from './components/Image'
import ImageTitle from './components/ImageTitle'
import KeyValueList from './components/KeyValueList'
import LinkList from './components/LinkList'
import LogoShowCase from './components/LogoShowcase'
import MultiPortraitVideo from './components/MultiPortraitVideo'
import PlainTitle from './components/PlainTitle'
import Separator from './components/Separator'
import Text from './components/Text'
import VimeoVideo from './components/VimeoVideo'

const getContentLayout = contentType => {
  switch (contentType) {
    case 'text':
      return Text
    case 'plainTitle':
      return PlainTitle
    case 'imageTitle':
      return ImageTitle
    case 'vimeoVideo':
      return VimeoVideo
    case 'keyValueList':
      return KeyValueList
    case 'logoShowcase':
      return LogoShowCase
    case 'separator':
      return Separator
    case 'image':
      return ImageBlock
    case 'drogasDulces':
      return DrogasDulcesCreativity
    case 'multiPortraitVideo':
      return MultiPortraitVideo
    case 'linkList':
      return LinkList
    default:
      return Text
  }
}

export default function ContentBlockFactory ({ block }) {
  const ContentBlock = getContentLayout(block.type)
  return (
    <ContentBlock content={block.content} />
  )
}