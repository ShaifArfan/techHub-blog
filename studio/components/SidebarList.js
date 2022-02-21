import S from '@sanity/desk-tool/structure-builder';
import { MdStar } from 'react-icons/md';

function SidebarList() {
  return S.list()
    .title('TechHub-Blog')
    .items([
      S.listItem()
        .title('Featured')
        .id('featuredItems')
        .icon(MdStar)
        .child(S.editor().schemaType('featured').documentId('featuredItems')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'featured'
      ),
    ]);
}

export default SidebarList;
